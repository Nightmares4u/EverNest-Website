import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "Study Abroad Consultants in Karachi",
  heroSubtitle: "Step-by-Step Guide for Students (2025)",
  
  intro: {
    title: "INTRODUCTION",
    desc: "Karachi has become one of Pakistan’s biggest hubs for international education, with thousands of students preparing each year for countries like the UK, USA, Canada, Australia, Germany, and Europe. Choosing the right study destination, planning your budget, and filing your student visa correctly can be overwhelming without expert guidance. This is where study abroad consultants play a vital role—especially those based in Karachi who understand local documentation, financial requirements, and embassy expectations.",
    desc2: "This step-by-step guide explains exactly how students from Karachi can plan their complete study abroad journey, from selecting a country to securing their student visa."
  },

  steps: [
    {
      title: "STEP 1 – IDENTIFY YOUR STUDY GOALS",
      desc: "Before selecting a country, students must determine:",
      points: [
        "Which field they want to study.",
        "Whether they prefer undergraduate, postgraduate, diploma, or pathway programs.",
        "Their long‑term goals—job opportunities, settlement, or skill development."
      ]
    },
    {
      title: "STEP 2 – SHORTLIST THE RIGHT COUNTRY",
      desc: "Popular study destinations for Karachi students include:",
      points: [
        "United Kingdom (UK)",
        "Canada",
        "USA",
        "Germany",
        "Australia",
        "Italy",
        "France",
        "Malaysia",
        "Malta"
      ],
      footer: "Each country has different tuition ranges, visa rules, and post‑study work rights."
    },
    {
      title: "STEP 3 – RESEARCH UNIVERSITIES & INTAKES",
      desc: "After selecting the country, explore:",
      points: [
        "Top universities",
        "Application deadlines",
        "Available scholarships",
        "Required GPA or academic profile"
      ],
      footer: "Most global admissions take place in:\n• Fall Intake (August–September)\n• Spring Intake (January–February)"
    },
    {
      title: "STEP 4 – UNDERSTAND TUITION FEES & LIVING COSTS",
      desc: "Karachi students must calculate the full cost of studying abroad, including:",
      points: [
        "Tuition fees",
        "Living expenses",
        "Health insurance",
        "Visa fee",
        "Travel cost",
        "Proof of funds/bank statement requirement"
      ]
    },
    {
      title: "STEP 5 – PREPARE REQUIRED EXAMS & DOCUMENTS",
      desc: "Most countries require:",
      points: [
        "IELTS / TOEFL / PTE",
        "Academic transcripts",
        "Passport",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (LORs)",
        "Updated CV",
        "Bank statement or sponsor documents"
      ]
    },
    {
      title: "STEP 6 – APPLY TO UNIVERSITIES",
      desc: "Submit:",
      points: [
        "Application forms",
        "Required documents",
        "SOP",
        "Application fees (if applicable)"
      ],
      footer: "Receive conditional or unconditional offer letters."
    },
    {
      title: "STEP 7 – STUDENT VISA APPLICATION PROCESS",
      desc: "General steps include:",
      points: [
        "Pay initial tuition fee",
        "Prepare visa file",
        "Book embassy/visa center appointment",
        "Submit biometrics",
        "Provide financial proof",
        "Meet medical/insurance requirements"
      ],
      footer: "Visa decisions usually take 3–8 weeks depending on country."
    },
    {
      title: "STEP 8 – PRE‑DEPARTURE PLANNING",
      desc: "Before travelling:",
      points: [
        "Book accommodation",
        "Arrange travel insurance",
        "Prepare academic and financial documents",
        "Understand airport immigration procedures",
        "Arrange airport pickup if needed",
        "Learn basic city navigation and student support services"
      ]
    }
  ],

  whyEvernest: {
    title: "WHY KARACHI STUDENTS CHOOSE EVERNEST CONSULTANTS",
    points: [
      "Accurate country and university selection",
      "SOP/LOR preparation",
      "Guidance for scholarships and financial planning",
      "Complete visa file preparation",
      "Assistance with accommodation and pre‑departure",
      "Support from our Karachi and Lahore offices"
    ]
  },

  ctaBlock: {
    title: "CTA & CONTACT",
    desc: "EverNest Consultants provides expert guidance for students in Karachi planning their study abroad journey. For admissions, scholarships, and visa filing support, contact our team today.",
    contactDetails: [
      `${siteConfig.pakistanOffice.label}: ${siteConfig.pakistanOffice.address}`,
      `${siteConfig.offices[0].label}: ${siteConfig.offices[0].address}`,
      "Website: www.evernestconsultants.com",
      `WhatsApp: ${siteConfig.contact.whatsappDisplay}`,
      `Email: ${siteConfig.contact.email}`
    ]
  }
}

export const metadata: Metadata = buildMetadata({
  title: "Study Abroad Guide for Karachi Students",
  description:
    "Follow a step-by-step study abroad guide for Karachi students covering destination selection, admissions, budgeting, and student visa planning.",
  path: "/resources/study-abroad-guide",
  keywords: ["study abroad guide", "Karachi students", "student visa planning", "EverNest Consultants"],
  type: "article",
})

export default function StudyAbroadGuidePage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Study Abroad Guide", path: "/resources/study-abroad-guide" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="article"
        eyebrow="Student planning guide"
        icon={<GraduationCap className="h-7 w-7" />}
        backLink={{ href: "/resources", label: "Back to Resources" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        chips={["Destination selection", "Admissions", "Budgeting", "Student visa"]}
        galleryImages={[
          { src: "/images/destinations/homepage/united-kingdom-landmark.jpg", alt: "United Kingdom study destination" },
          { src: "/images/destinations/homepage/canada-landmark.jpg", alt: "Canada study destination" },
          { src: "/images/destinations/homepage/australia-landmark.jpg", alt: "Australia study destination" },
        ]}
        visualLabel="Step-by-step journey"
        center
      />

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Intro */}
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-6">{pageData.intro.title}</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                  <p>{pageData.intro.desc}</p>
                  <p className="font-medium text-brand-blue">{pageData.intro.desc2}</p>
                </div>
              </div>

              {/* Steps (Timeline) */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">Step-by-Step Journey</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                  {pageData.steps.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-red text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-brand-blue mb-4">{step.title.replace(`STEP ${i+1} – `, '')}</h3>
                        {step.desc && <p className="text-foreground/70 mb-4">{step.desc}</p>}
                        <ul className="space-y-2 mb-4">
                          {step.points.map((point, j) => (
                            <li key={j} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                        {step.footer && (
                          <div className="pt-4 mt-4 border-t border-border-subtle/50 text-sm text-foreground/70 font-medium whitespace-pre-line">
                            {step.footer}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why EverNest */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                <div className="bg-brand-ice/50 rounded-2xl p-8 border border-border-subtle">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {pageData.whyEvernest.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-brand-blue text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-white mb-4">{pageData.ctaBlock.title}</h3>
                <p className="text-brand-ice/80 mb-8 leading-relaxed">
                  {pageData.ctaBlock.desc}
                </p>
                <div className="space-y-4 mb-8">
                  {pageData.ctaBlock.contactDetails.map((detail, i) => (
                    <div key={i} className="text-sm text-white/90 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      {detail}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 text-white" size="lg">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
