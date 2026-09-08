import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Briefcase, FileText, Globe, ArrowRight, ChevronDown, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { buildMetadata, absoluteUrl } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "USA Work Permit for Pakistani Professionals",
  heroDesc: "If you're planning to work in America, securing a work permit is the first step. This detailed guide explains visa types, requirements, eligibility, processing time, and how EverNest Consultants helps Pakistani professionals successfully apply for a Work Visa USA from Pakistan.",
  
  overview: {
    title: "Popular US Work Visas for Pakistani Applicants",
    desc: "The United States offers several US employment visa categories. The most common options for Pakistanis include:",
    points: [
      "H‑1B Visa (Skilled Worker Visa USA) – For professionals in IT, engineering, healthcare, finance, and research.",
      "H‑2B Visa – For non-agricultural seasonal work (hospitality, construction, labour roles).",
      "J‑1 Exchange Visitor Visa – Internships, training programs, teaching, and research roles.",
      "L‑1 Visa – For corporate transfers from a foreign branch to a US office.",
      "O‑1 Visa – For individuals with extraordinary ability in arts, sports, science, or academia."
    ]
  },

  jobOpportunities: {
    title: "Job Opportunities in the USA for Pakistani Professionals",
    desc: "There is high demand for skilled international workers in:",
    points: [
      "Information Technology",
      "Healthcare & Nursing",
      "Engineering (Civil, Mechanical, Electrical)",
      "Hospitality & Tourism",
      "Logistics & Transportation",
      "Research & Academia"
    ],
    footer: "Many employers sponsor visas for Pakistani applicants with strong profiles."
  },

  eligibility: {
    title: "Eligibility Criteria for US Work Visas",
    points: [
      "Relevant education or experience for the job role.",
      "A confirmed job offer from a US‑based employer.",
      "Clean immigration and criminal background.",
      "Strong proof of ties to Pakistan when required.",
      "Employer must meet US labour certification requirements (for certain visas)."
    ]
  },

  documents: {
    title: "Required Documents for US Work Permit Application",
    desc: "You’ll need the following documents when applying from Pakistan:",
    points: [
      "Passport (valid for 6+ months)",
      "DS‑160 confirmation page",
      "USCIS petition approval (I‑797)",
      "Employment offer letter",
      "Academic certificates + experience letters",
      "Bank statements (if required)",
      "Police clearance certificate",
      "SEVIS/Service fee receipts (for J‑1 applicants)"
    ]
  },

  process: {
    title: "How to Apply for a US Work Visa from Pakistan",
    desc: "Below is the complete process to apply for a Work Visa USA from Pakistan:",
    steps: [
      "Receive a valid job offer from a US employer.",
      "Employer files a petition (Form I‑129) with USCIS.",
      "After approval (I‑797 notice), schedule a US visa appointment time.",
      "Prepare mandatory documents and complete the DS‑160 form.",
      "Attend the interview at the relevant US visa processing post in Pakistan.",
      "Receive your visa decision."
    ]
  },

  processingTime: {
    title: "US Work Visa Processing Time",
    points: [
      "H‑1B Visa: 3–6 months (premium processing: 15 days)",
      "H‑2B Visa: 2–4 months",
      "L‑1 Visa: 2–4 months",
      "J‑1 Visa: Depends on sponsor timeline"
    ],
    footer: "The US visa appointment time in Pakistan varies but is usually between 2–8 weeks."
  },

  whyEvernest: {
    title: "Why Choose EverNest Consultants?",
    desc: "EverNest Consultants is a trusted USA Work Permit Consultant assisting applicants across Pakistan and worldwide. We offer:",
    points: [
      "Complete profile evaluation",
      "Employer‑based visa guidance",
      "Documentation & petition support",
      "DS‑160 preparation & interview coaching",
      "End‑to‑end processing for Skilled Worker Visa USA applicants"
    ],
    footer: "We also help you prepare strategically through experienced work visa guidance, interview preparation, and document review support."
  },

  faq: [
    {
      q: "How long does it take to apply for a US work visa from Pakistan?",
      a: "Processing time averages 2–6 months depending on visa type."
    },
    {
      q: "Do I need a job offer to apply?",
      a: "Yes, all US employment visas require a job offer."
    },
    {
      q: "Can I take my family with me?",
      a: "Most visas (H‑1B, L‑1, O‑1) allow spouse and children under dependent categories."
    },
    {
      q: "Do consultants guarantee a job?",
      a: "No consultant can guarantee employment; we only guide the visa and documentation process."
    }
  ],

  ctaTitle: "Apply for a US Work Visa Today",
  ctaDesc: "Start your US employment journey with expert support. Contact EverNest Consultants to Apply for US Work Visa and receive complete visa assistance."
}

export const metadata: Metadata = buildMetadata({
  title: "USA Work Permit",
  description:
    "Review USA work permit and employment visa guidance for Pakistani professionals, including eligibility, documents, and process steps.",
  path: "/immigration/usa-work-permit",
  keywords: ["USA work permit", "U.S. employment visa", "Pakistani professionals", "EverNest Consultants"],
})

export default function USAWorkPermitPage() {
  const pageUrl = absoluteUrl("/immigration/usa-work-permit")
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: "USA Work Permit", path: "/immigration/usa-work-permit" },
    ]),
    buildFaqSchema(pageData.faq, pageUrl),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      {/* Hero */}
      <CinematicPageHero
        variant="immigration"
        eyebrow="USA Work Permit"
        icon={<Briefcase className="h-7 w-7" />}
        backLink={{ href: "/immigration", label: "Back to all immigration pathways" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroDesc}
        chips={["H-1B", "H-2B", "J-1", "L-1", "O-1"]}
        image={{ src: "/images/destinations/homepage/usa-landmark.jpg", alt: "USA work permit pathway" }}
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop", alt: "Professional work visa guidance" },
          { src: "/images/offices/lahore/lahore-pic-2.jpg", alt: "EverNest work visa consultation" },
        ]}
        visualLabel="US employment route"
      />

      {/* Content */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.overview.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.overview.desc}</p>
                <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-sm">
                  <ul className="space-y-4">
                    {pageData.overview.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job Opportunities */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.jobOpportunities.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.jobOpportunities.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {pageData.jobOpportunities.points.map((point, i) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/70 text-sm font-medium italic">{pageData.jobOpportunities.footer}</p>
              </div>

              {/* Eligibility */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.eligibility.title}</h2>
                </div>
                <div className="bg-brand-ice/50 rounded-2xl p-6 border border-border-subtle">
                  <ul className="space-y-4">
                    {pageData.eligibility.points.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Documents & Processing Time */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-brand-blue">{pageData.documents.title}</h2>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4">{pageData.documents.desc}</p>
                  <ul className="space-y-3">
                    {pageData.documents.points.map((doc, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-brand-blue">{pageData.processingTime.title}</h2>
                  </div>
                  <div className="bg-brand-blue text-white p-6 rounded-xl shadow-sm mb-4">
                    <ul className="space-y-3">
                      {pageData.processingTime.points.map((time, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <ArrowRight className="h-4 w-4 text-brand-ice mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-brand-ice/90">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-foreground/70 text-sm font-medium">{pageData.processingTime.footer}</p>
                </div>
              </div>

              {/* The Process */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.process.title}</h2>
                </div>
                <p className="text-foreground/80 mb-8 leading-relaxed">{pageData.process.desc}</p>
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

              {/* Why EverNest */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                <div className="bg-brand-ice/50 rounded-2xl p-6 md:p-8 border border-border-subtle">
                  <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.whyEvernest.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                    {pageData.whyEvernest.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-blue font-bold text-sm italic">{pageData.whyEvernest.footer}</p>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pageData.faq.map((faq, i) => (
                    <details key={i} className="group bg-white rounded-xl border border-border-subtle overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                        {faq.q}
                        <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">{pageData.ctaTitle}</h3>
                <p className="text-foreground/70 mb-8">
                  {pageData.ctaDesc}
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
