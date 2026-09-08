import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "H-1B Visa",
  heroDesc: "The H-1B Visa is a non-immigrant visa that allows U.S. companies to employ foreign workers in specialty occupations that require theoretical or technical expertise.",
  
  benefits: {
    title: "Why It’s a Good Option?",
    points: [
      "Enables you to work full-time in the U.S. for a sponsoring employer.",
      "Many H-1B holders later apply for U.S. permanent residency.",
      "Initial stay is 3 years, extendable to a maximum of 6 years.",
      "Spouses (H-4 visa holders) can apply for work authorization under certain conditions."
    ]
  },

  process: {
    title: "Here’s How You Apply:",
    steps: [
      "Find a U.S. employer to file a labor condition application.",
      "USCIS processes the petition.",
      "Complete the DS-160 visa application.",
      "Schedule and attend the visa interview.",
      "Issuance of a visa (if you’re successful)."
    ]
  },

  whyEvernest: {
    title: "Having trouble choosing?",
    desc: "Get in touch with EverNest. You start packing your bags, and we’ll initiate your visa process."
  }
}

export const metadata: Metadata = buildMetadata({
  title: "H-1B Visa",
  description:
    "Understand the H-1B visa process, benefits, and employer-sponsored work pathway details with EverNest Consultants.",
  path: "/immigration/h1b",
  keywords: ["H-1B visa", "U.S. work visa", "EverNest Consultants", "employer-sponsored visa"],
})

export default function H1BVisaPage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: "H-1B Visa", path: "/immigration/h1b" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="immigration"
        eyebrow="U.S. Immigration"
        icon={<Globe className="h-7 w-7" />}
        backLink={{ href: "/immigration", label: "Back to all immigration pathways" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroDesc}
        chips={["Employer sponsorship", "Specialty occupation", "3-year initial stay", "PR pathway"]}
        galleryImages={[
          { src: "/images/destinations/homepage/usa-landmark.jpg", alt: "USA immigration pathway" },
          { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop", alt: "Professional work visa planning" },
          { src: "/images/offices/karachi/karachi-pic-1.png", alt: "EverNest advisory office" },
        ]}
        visualLabel="H-1B pathway"
      />

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.benefits.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {pageData.benefits.points.map((point, i) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.process.title}</h2>
                </div>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                  {pageData.process.steps.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                        <p className="text-foreground/80 text-sm font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-sm">
                  <p className="text-brand-ice/90 leading-relaxed text-lg">{pageData.whyEvernest.desc}</p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">Start Your Journey</h3>
                <p className="text-foreground/70 mb-8">
                  Get in touch with EverNest. You start packing your bags, and we’ll initiate your visa process.
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
