import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "Read study abroad, visa interview, and country comparison resources from EverNest Consultants.",
  path: "/resources",
  keywords: ["study abroad guides", "visa interview guide", "country comparison", "EverNest Consultants resources"],
})

const resources = [
  {
    title: "UK January 2027 Intake",
    slug: "uk-january-2027-intake",
    desc: "Confirmed January 2027 courses, university deadlines and application steps for Pakistani students — plus what to do if your course is closed."
  },
  {
    title: "Study Abroad Guide",
    slug: "study-abroad-guide",
    desc: "A comprehensive step-by-step guide for students in Karachi planning their international education journey in 2025."
  },
  {
    title: "Visa Interview Guide",
    slug: "visa-interview-guide",
    desc: "Learn how to avoid common rejections, handle financial questions, and communicate effectively during your student visa interview."
  },
  {
    title: "Country Comparison",
    slug: "country-comparison",
    desc: "Compare costs, tuition, and post-study work opportunities across top destinations like UK, Canada, Australia, and Europe."
  }
]

export default function ResourcesIndexPage() {
  return (
    <>
      <CinematicPageHero
        variant="resources"
        eyebrow="Guides & Expert Advice"
        icon={<BookOpen className="h-7 w-7" />}
        title={<>Expert <span className="text-brand-red">Resources</span></>}
        subtitle="Explore our comprehensive guides, step-by-step instructions, and expert advice to simplify your immigration and study abroad journey."
        chips={resources.map((resource) => resource.title)}
        galleryImages={[
          { src: "/images/trust/british-council/british-council-certified-agent.png", alt: "EverNest guidance credentials" },
          { src: "/images/trust/ielts/ielts-office-recognition.jpg", alt: "IELTS office recognition" },
          { src: "/images/offices/lahore/lahore-pic-1.jpg", alt: "EverNest Lahore office" },
        ]}
        visualLabel="Resource library"
        center
      />

      <section className="py-20 bg-brand-ice/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.slug} className="flex flex-col bg-white rounded-3xl p-8 border border-border-subtle shadow-sm hover:shadow-card transition-shadow group">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-4 group-hover:text-brand-red transition-colors">{resource.title}</h2>
                <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">{resource.desc}</p>
                <Button asChild variant="outline" className="w-full mt-auto group/btn">
                  <Link href={`/resources/${resource.slug}`}>
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
