import { Metadata } from "next"
import { LeadershipProfile } from "@/components/sections/LeadershipProfile"
import { PartnerGallery } from "@/components/sections/PartnerGallery"
import { buildMetadata, absoluteUrl } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildVideoSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"
import { mediaFeatures } from "@/data/media"

export const metadata: Metadata = buildMetadata({
  title: "Mr. Raza — CEO & Senior Consultant",
  description: "Learn about Mr. Raza's 25+ years of experience in immigration consulting, international education guidance, and global mobility strategy.",
  path: "/about/sir-raza",
})

export default function SirRazaPage() {
  const pageUrl = absoluteUrl("/about/sir-raza")

  // This is the canonical page for the media library, so the VideoObject
  // markup lives here rather than on /about, which renders the same
  // LeadershipProfile section.
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Syed Raza", path: "/about/sir-raza" },
    ]),
    ...mediaFeatures
      .map((video) => buildVideoSchema(video, pageUrl))
      .filter((schema) => schema !== null),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <LeadershipProfile />
      <PartnerGallery />
    </>
  )
}
