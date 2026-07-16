import type { MetadataRoute } from "next"

import { immigrationData } from "@/data/immigration-countries"
import { getImmigrationProgramEntries } from "@/data/immigration-programs"
import { studyVisasData } from "@/data/study-visas"

const baseUrl = "https://www.evernestconsultants.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "/",
    "/about",
    "/about/credentials",
    "/about/sir-raza",
    "/contact",
    "/privacy-policy",
    "/study-visas",
    "/immigration",
    "/b2b-partnerships",
    "/success-stories",
    "/resources",
    "/immigration/express-entry",
    "/immigration/h1b",
    "/immigration/j1",
    "/immigration/usa-work-permit",
    "/resources/study-abroad-guide",
    "/resources/visa-interview-guide",
    "/resources/country-comparison",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }))

  const studyRoutes = Object.keys(studyVisasData).map((slug) => ({
    url: `${baseUrl}/study-visas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const immigrationRoutes = Object.keys(immigrationData).map((slug) => ({
    url: `${baseUrl}/immigration/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const immigrationProgramRoutes = getImmigrationProgramEntries().map(
    ({ country, program }) => ({
      url: `${baseUrl}/immigration/${country}/${program}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }),
  )

  return [
    ...staticRoutes,
    ...studyRoutes,
    ...immigrationRoutes,
    ...immigrationProgramRoutes,
  ]
}
