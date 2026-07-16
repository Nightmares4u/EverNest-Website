import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export const SITE_URL = "https://www.evernestconsultants.com";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function getFirstSentence(text: string, maxLength = 180) {
  const normalized = text.replace(/\s+/g, " ").trim();
  const sentenceMatch = normalized.match(/^.*?[.!?](?:\s|$)/);
  const base = sentenceMatch?.[0]?.trim() || normalized;

  if (base.length <= maxLength) {
    return base;
  }

  const truncated = base.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}.`;
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
