import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Globe, BookOpen, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "J-1 Visa",
  heroDesc: "The J-1 Visa is a non-immigrant visa designed for individuals approved to participate in work and study-based exchange visitor programs.",
  
  benefits: {
    title: "Here’s Why People Go for the J-1 Visa",
    points: [
      "Allows you to gain international experience while participating in cultural exchange programs.",
      "Ideal for students or young professionals seeking short-term practical experience.",
      "Programs are available across hospitality, business, healthcare, education, and more.",
      "Dependents (J-2 visa holders) can accompany you and may be eligible to work in the U.S."
    ]
  },

  process: {
    title: "Here’s How You Apply:",
    steps: [
      "Find a Sponsor to receive a DS-2019 form.",
      "Pay the SEVIS fee.",
      "Complete the DS-160 visa application.",
      "Attend the visa interview after scheduling it."
    ]
  },

  comparison: {
    title: "Which One is Better? (J-1 vs H-1B)",
    points: [
      "Purpose: J-1 is for Cultural exchange and training. H-1B is for Employment in specialty occupations.",
      "Eligibility: J-1 for Students, trainees, and scholars. H-1B for Professionals with a bachelor's degree or higher.",
      "Sponsorship: J-1 by a U.S. government-approved program sponsor. H-1B by a U.S. employer.",
      "Duration: J-1 is 6 months to 5 years (varies by program). H-1B is up to 6 years (initial 3 years + extension).",
      "Work Authorization: J-1 is Limited, depending on the program. H-1B is Full-time work with a sponsoring employer.",
      "Dependents: J-2 dependents may apply for work. H-4 dependents may apply (with restrictions).",
      "Green Card Path: J-1 is Limited, generally not a direct pathway. H-1B Yes, can transition to permanent residency."
    ]
  },

  whyEvernest: {
    title: "Having trouble choosing?",
    desc: "Get in touch with EverNest. You start packing your bags, and we’ll initiate your visa process."
  }
}

export const metadata: Metadata = buildMetadata({
  title: "J-1 Visa",
  description:
    "Review J-1 visa program basics, application steps, and comparison points for exchange visitor pathways with EverNest Consultants.",
  path: "/immigration/j1",
  keywords: ["J-1 visa", "exchange visitor visa", "EverNest Consultants", "U.S. visa guidance"],
})

export default function J1VisaPage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: "J-1 Visa", path: "/immigration/j1" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="immigration"
        eyebrow="U.S. Immigration"
        icon={<Layers className="h-7 w-7" />}
        backLink={{ href: "/immigration", label: "Back to all immigration pathways" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroDesc}
        chips={["Exchange visitor", "Training", "Cultural exchange", "Short-term experience"]}
        galleryImages={[
          { src: "/images/destinations/homepage/usa-landmark.jpg", alt: "USA exchange visitor pathway" },
          { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop", alt: "Professional exchange program planning" },
          { src: "/images/trust/training/team-training-session.jpg", alt: "EverNest advisory training" },
        ]}
        visualLabel="J-1 exchange route"
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.comparison.title}</h2>
                </div>
                <div className="bg-brand-ice/50 rounded-2xl p-6 border border-border-subtle">
                  <ul className="space-y-4">
                    {pageData.comparison.points.map((point, i) => {
                      const [label, desc] = point.split(": ")
                      return (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-relaxed text-sm">
                            <strong className="text-brand-blue">{label}:</strong> {desc}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
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
