import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export const SITE_URL = "https://www.evernestconsultants.com";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

/**
 * Terminators that end an abbreviation rather than a sentence — without this,
 * "A direct pathway to a U.S. Green Card..." yields the 26-character fragment
 * "A direct pathway to a U.S." as a meta description.
 */
const ABBREVIATION_END =
  /(?:^|\s)(?:[A-Za-z]\.(?:[A-Za-z]\.)+|Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|vs|etc|approx|No)\.$/;

/** Shortest fragment we will accept as a real first sentence. */
const MIN_SENTENCE_LENGTH = 40;

export function getFirstSentence(text: string, maxLength = 180) {
  const normalized = text.replace(/\s+/g, " ").trim();

  let base = normalized;
  const terminator = /[.!?](?=\s|$)/g;
  let match: RegExpExecArray | null;

  while ((match = terminator.exec(normalized)) !== null) {
    const candidate = normalized.slice(0, match.index + 1);
    if (ABBREVIATION_END.test(candidate)) continue;
    if (candidate.length < MIN_SENTENCE_LENGTH) continue;
    base = candidate;
    break;
  }

  if (base.length <= maxLength) {
    return base;
  }

  const truncated = base.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}.`;
}

/**
 * First sentence, capped at the length Google will actually render in a
 * search result snippet. Use for meta descriptions; `getFirstSentence` keeps
 * its longer default for on-page card copy.
 */
export function getMetaDescription(text: string) {
  return getFirstSentence(text, 160);
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/brand/evernest-logo.png");

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_PK",
      images: [
        {
          url: image,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}
