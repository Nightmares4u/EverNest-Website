# EverNest Consultants website — SEO automation

This repo (Nightmares4u/EverNest-Website) is the live site for
evernestconsultants.com. The Next.js app is in `evernest/` — run npm
commands from there, not from the repo root.

## How SEO stays healthy

Three things run on their own:

1. **SEO audit** (`scripts/seo-audit.mjs`) — crawls every URL in the
   sitemap against a running build and checks titles, descriptions,
   canonicals, a single h1, Open Graph tags, indexability, JSON-LD
   validity, breadcrumbs on nested pages, and image alt text. It also
   enforces that FAQPage schema is backed by *visible* on-page content,
   which Google requires. Errors fail the build; warnings are advisory.

   Runs via `.github/workflows/seo-audit.yml` on every PR, every push to
   main, and weekly. Locally:
   ```
   cd evernest && npm run build && npx next start -p 3900 &
   node scripts/seo-audit.mjs --base http://localhost:3900
   ```
   Add `--json <path>` to archive findings.

2. **Search Console pull** (`.github/workflows/seo-search-console.yml`) —
   Mondays 15:00 UTC. Writes `seo-data/search-console/latest.json`, which
   is the source of truth for real search numbers.

3. **Weekly SEO agent** — a scheduled cloud agent, Mondays 16:00 UTC (an
   hour after the data pull, so it works from fresh numbers). It runs the
   audit, fixes up to 5 issues, and **commits and pushes to main**, which
   deploys live. Its rules are in `scripts/SEO-AGENT.md`.

   Routine: https://claude.ai/code/routines/trig_015KjaTnEQfTUrPUEgzCrQxJ

### Reviewing or undoing an agent run

Every run is one commit prefixed `SEO auto:`, plus a report and a
before/after audit pair.

```bash
git log --grep "^SEO auto:" --oneline   # every run
git show <sha>                          # what one run changed
git revert <sha>                        # undo one run
```
Reports: `seo-data/reports/<date>.md`. Audits: `seo-data/audits/`.

## Outstanding

- **`GSC_SERVICE_ACCOUNT_JSON` secret is not set**, so the Search Console
  workflow has no credential and the agent is running without real search
  data. To fix: Google Cloud → enable "Search Console API" → create a
  service account → download its JSON key. Then Search Console (property
  `https://www.evernestconsultants.com/`) → Settings → Users and
  permissions → add the service account email. Then GitHub repo →
  Settings → Secrets and variables → Actions → new secret named
  `GSC_SERVICE_ACCOUNT_JSON` with the full key JSON. Never commit the key.

- **Factual error on the Cyprus page.** `cyprus.heroDesc` in
  `evernest/src/data/study-visas.ts` says Cyprus is "part of the Schengen
  zone". Cyprus is an EU member but is **not** in Schengen. Needs a human
  to confirm replacement wording.

- The public Search Console API exposes Search Analytics and URL
  Inspection only. There is no API for the aggregate "Page indexing"
  report, so indexing-status review is still manual in the UI.

## Conventions

- Legal company name is EN Consultants (Pvt) Ltd; EverNest Consultants is
  the trading/public brand.
- Maintain the red/blue premium institutional brand style.
- Do not touch DNS, domain, email, or Vercel settings unless explicitly
  instructed.
- Structured data helpers live in `evernest/src/lib/schema.ts`; metadata
  helpers in `evernest/src/lib/metadata.ts`. Use `getMetaDescription` for
  meta descriptions (160-char cap) and `getFirstSentence` for on-page card
  copy.
- FAQ content lives in the page data (`faq: [{ q, a }]`) and renders
  automatically; `buildFaqSchema` then fires on its own. Never add FAQ
  schema without also rendering the FAQ.
