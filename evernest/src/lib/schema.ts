import { siteConfig } from "@/data/site"
import type { FaqItem } from "@/data/types"

import { SITE_URL, absoluteUrl } from "./metadata"

/**
 * Sitewide Organization schema — rendered once in the root layout.
 * Includes all Pakistan offices as departments and global desk phone lines.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: "EN Consultants",
    url: SITE_URL,
    logo: absoluteUrl("/brand/evernest-logo.png"),
    image: absoluteUrl("/brand/evernest-logo.png"),
    description: siteConfig.description,
    foundingDate: siteConfig.registeredYear,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office #912 Portway Trade Center (PTC), SMCHS, Shahrah-e-Faisal",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Italy" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.northAmericaPhone,
        contactType: "customer service",
        areaServed: ["CA", "US"],
        availableLanguage: ["en", "ur"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.europePhone,
        contactType: "customer service",
        areaServed: ["IT", "EU"],
        availableLanguage: ["en", "ur", "it"],
      },
    ],
    department: [
      {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} — Lahore Office`,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Venture Hub, Plot No. 744, Office No. G02, Johar Town, Block G4 Phase 2",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        telephone: siteConfig.contact.phone,
      },
    ],
    sameAs: [
      "https://www.facebook.com/EverNestconsultants/",
      "https://www.instagram.com/evernestconsultants/",
      "https://www.youtube.com/channel/UC1QSbHzVD5lytpFPTwMJY2Q",
      "https://pk.linkedin.com/company/evernestconsultants",
    ] as string[],
    knowsAbout: [
      "Study visas",
      "Student visa consulting",
      "Immigration consulting",
      "Work permits",
      "Canada Express Entry",
      "EB-2 NIW",
      "IELTS registration",
      "University admissions",
    ],
  }
}

/** WebSite schema — rendered once in the root layout. */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-PK",
  }
}

/** FAQPage schema — for pages that render FAQ data. */
export function buildFaqSchema(faq: FaqItem[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }
}

/** BreadcrumbList schema for nested pages. */
export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
