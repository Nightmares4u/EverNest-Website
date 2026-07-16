import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://www.evernestconsultants.com",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.evernestconsultants.com/sitemap.xml",
  }
}
