import { Metadata } from "next"
import { LeadershipProfile } from "@/components/sections/LeadershipProfile"
import { PartnerGallery } from "@/components/sections/PartnerGallery"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

export const metadata: Metadata = buildMetadata({
  title: "Mr. Raza — CEO & Senior Consultant",
  description: "Learn about Mr. Raza's 25+ years of experience in immigration consulting, international education guidance, and global mobility strategy.",
  path: "/about/sir-raza",
})

export default function SirRazaPage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Syed Raza", path: "/about/sir-raza" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <LeadershipProfile />
      <PartnerGallery />
    </>
  )
}
