import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, BookOpen, Briefcase } from "lucide-react"
import { use } from "react"

import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { immigrationProgramsData } from "@/data/immigration-programs"
import { buildMetadata, getMetaDescription } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; program: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const programData =
    immigrationProgramsData[resolvedParams.country]?.[resolvedParams.program]

  if (!programData) {
    return buildMetadata({
      title: "Immigration Program",
      description: "Explore structured immigration program guidance from EverNest Consultants.",
      path: `/immigration/${resolvedParams.country}/${resolvedParams.program}`,
      keywords: ["Immigration program", "EverNest Consultants"],
    })
  }

  return buildMetadata({
    title: `${programData.name} Program`,
    description: getMetaDescription(programData.heroDesc),
    path: `/immigration/${resolvedParams.country}/${resolvedParams.program}`,
    keywords: [programData.name, `${programData.country} immigration`, "EverNest Consultants"],
  })
}

export default function ImmigrationProgramPage({ params }: { params: Promise<{ country: string, program: string }> }) {
  const resolvedParams = use(params)
  const programData =
    immigrationProgramsData[resolvedParams.country]?.[resolvedParams.program]

  if (!programData) {
    notFound()
  }

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: programData.country, path: `/immigration/${resolvedParams.country}` },
      {
        name: programData.name,
        path: `/immigration/${resolvedParams.country}/${resolvedParams.program}`,
      },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      {/* Hero */}
      <CinematicPageHero
        variant="immigration"
        eyebrow={`${programData.country} Immigration`}
        icon={<Briefcase className="h-7 w-7" />}
        backLink={{ href: "/immigration", label: "Back to all immigration pathways" }}
        title={<>{programData.name} <span className="text-brand-red">Program</span></>}
        subtitle={programData.heroDesc}
        chips={programData.benefits.slice(0, 4)}
        stats={programData.stats}
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", alt: "Immigration consultation and planning" },
          { src: "/images/offices/karachi/karachi-pic-1.png", alt: "EverNest advisory office" },
          { src: "/images/trust/certificates/aeo-ielts-certificate.png", alt: "EverNest advisory credentials" },
        ]}
        visualLabel={`${programData.name} pathway`}
      />

      {/* Content */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Key Benefits</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {programData.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Eligibility Requirements</h2>
                </div>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm">
                  <ul className="space-y-4">
                    {programData.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-ice text-brand-blue flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Process */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Application Process</h2>
                </div>
                <div className="space-y-6">
                  {programData.process.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm z-10">
                          {i + 1}
                        </div>
                        {i !== programData.process.length - 1 && (
                          <div className="w-px h-full bg-border-subtle my-2"></div>
                        )}
                      </div>
                      <div className="pb-6 pt-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{step}</h3>
                        <p className="text-foreground/60 text-sm">We provide complete legal and documentation support.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">Check Your Eligibility</h3>
                <p className="text-foreground/70 mb-8">
                  Speak with our immigration specialists to find out if you qualify for the {programData.name} program.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
