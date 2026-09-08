#!/usr/bin/env node
/**
 * Crawls every URL in the built site's sitemap and asserts the SEO invariants
 * we care about. Run against a running server:
 *
 *   cd evernest && npm run build && npx next start -p 3900 &
 *   node scripts/seo-audit.mjs --base http://localhost:3900
 *
 * Exits non-zero if any ERROR-level check fails, so CI blocks the merge.
 * WARN-level findings are printed but do not fail the build — they are the
 * queue of things worth improving next.
 */

const args = process.argv.slice(2);
const baseFlag = args.indexOf("--base");
const BASE = (baseFlag !== -1 && args[baseFlag + 1]) || "http://localhost:3900";
const PROD_ORIGIN = "https://www.evernestconsultants.com";

const errors = [];
const warnings = [];

const err = (url, check, detail) => errors.push({ url, check, detail });
const warn = (url, check, detail) => warnings.push({ url, check, detail });

/** Strip scripts/styles and tags so we can test what a user actually sees. */
function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalise for comparison: quotes and dashes vary between data and render. */
function normalize(text) {
  return visibleText(text)
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐-―−]/g, "-")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function jsonLdBlocks(html, url) {
  const blocks = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      blocks.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (e) {
      err(url, "json-ld-parse", `JSON-LD block is not valid JSON: ${e.message}`);
    }
  }
  return blocks;
}

function attr(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

async function getSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) throw new Error("sitemap.xml contained no <loc> entries");
  return urls;
}

function auditPage(url, path, html) {
  // --- Title (entities decoded, since "&amp;" renders as one character) ---
  const rawTitle = attr(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = rawTitle && visibleText(rawTitle);
  if (!title) err(url, "title-missing", "no <title>");
  else if (title.length < 15 || title.length > 65)
    warn(url, "title-length", `${title.length} chars (aim 15-65): "${title}"`);

  // --- Meta description ---
  const rawDesc = attr(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  const desc = rawDesc && visibleText(rawDesc);
  if (!desc) err(url, "description-missing", "no meta description");
  else if (desc.length < 50 || desc.length > 165)
    warn(url, "description-length", `${desc.length} chars (aim 50-165): "${desc}"`);

  // --- Canonical ---
  const canonical = attr(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  if (!canonical) err(url, "canonical-missing", "no canonical link");
  else {
    const expected = `${PROD_ORIGIN}${path === "/" ? "/" : path}`;
    const got = canonical.replace(/\/$/, "") || canonical;
    if (got.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
      err(url, "canonical-mismatch", `expected ${expected}, got ${canonical}`);
  }

  // --- Single H1 ---
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length === 0) err(url, "h1-missing", "no <h1>");
  else if (h1s.length > 1) err(url, "h1-multiple", `${h1s.length} <h1> elements`);

  // --- Open Graph ---
  for (const prop of ["og:title", "og:description", "og:image", "og:url"]) {
    const re = new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']*)["']`, "i");
    if (!attr(html, re)) warn(url, "og-missing", `missing ${prop}`);
  }

  // --- Indexability ---
  const robots = attr(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i);
  if (robots && /noindex/i.test(robots))
    err(url, "noindex", `page is in the sitemap but marked noindex: "${robots}"`);

  // --- Structured data ---
  const blocks = jsonLdBlocks(html, url);
  const text = normalize(html);

  const faqBlocks = blocks.filter((b) => b?.["@type"] === "FAQPage");
  for (const faq of faqBlocks) {
    const entities = Array.isArray(faq.mainEntity) ? faq.mainEntity : [];
    if (entities.length === 0) {
      err(url, "faq-empty", "FAQPage schema with no mainEntity");
      continue;
    }
    // Google requires FAQ content to be visible on the page.
    for (const q of entities) {
      const question = q?.name;
      const answer = q?.acceptedAnswer?.text;
      if (question && !text.includes(normalize(question)))
        err(url, "faq-question-not-visible", `question only in schema: "${question}"`);
      if (answer && !text.includes(normalize(answer)))
        err(url, "faq-answer-not-visible", `answer only in schema for: "${question}"`);
    }
  }

  // Nested pages should carry a breadcrumb trail.
  const depth = path.split("/").filter(Boolean).length;
  const hasBreadcrumb = blocks.some((b) => b?.["@type"] === "BreadcrumbList");
  if (depth >= 2 && !hasBreadcrumb)
    warn(url, "breadcrumb-missing", "nested page has no BreadcrumbList schema");

  // --- Images ---
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const noAlt = imgs.filter((tag) => !/\balt=/.test(tag));
  if (noAlt.length > 0) warn(url, "img-alt-missing", `${noAlt.length} <img> without alt`);
}

async function main() {
  console.log(`SEO audit against ${BASE}\n`);

  const sitemapUrls = await getSitemapUrls();
  console.log(`Found ${sitemapUrls.length} URLs in sitemap.xml\n`);

  for (const prodUrl of sitemapUrls) {
    const path = new URL(prodUrl).pathname;
    const url = `${BASE}${path}`;
    let res;
    try {
      res = await fetch(url, { redirect: "manual" });
    } catch (e) {
      err(prodUrl, "fetch-failed", e.message);
      continue;
    }
    if (res.status !== 200) {
      err(prodUrl, "bad-status", `sitemap URL returned ${res.status}`);
      continue;
    }
    auditPage(prodUrl, path, await res.text());
  }

  // --- robots.txt ---
  const robotsRes = await fetch(`${BASE}/robots.txt`);
  if (!robotsRes.ok) err(`${BASE}/robots.txt`, "robots-missing", `returned ${robotsRes.status}`);
  else {
    const body = await robotsRes.text();
    if (!/sitemap:/i.test(body))
      warn(`${BASE}/robots.txt`, "robots-no-sitemap", "robots.txt does not reference the sitemap");
  }

  const group = (list) => {
    const by = new Map();
    for (const f of list) {
      if (!by.has(f.check)) by.set(f.check, []);
      by.get(f.check).push(f);
    }
    return by;
  };

  if (warnings.length) {
    console.log(`\n── ${warnings.length} warning(s) ──`);
    for (const [check, items] of group(warnings)) {
      console.log(`\n  ${check} (${items.length})`);
      for (const i of items.slice(0, 8)) console.log(`    ${i.url}\n      ${i.detail}`);
      if (items.length > 8) console.log(`    ... and ${items.length - 8} more`);
    }
  }

  if (errors.length) {
    console.log(`\n── ${errors.length} ERROR(s) ──`);
    for (const [check, items] of group(errors)) {
      console.log(`\n  ${check} (${items.length})`);
      for (const i of items) console.log(`    ${i.url}\n      ${i.detail}`);
    }
    console.log(`\nFAILED: ${errors.length} error(s), ${warnings.length} warning(s)`);
    process.exit(1);
  }

  console.log(`\nPASSED: 0 errors, ${warnings.length} warning(s)`);
}

main().catch((e) => {
  console.error(`SEO audit could not run: ${e.message}`);
  process.exit(1);
});
