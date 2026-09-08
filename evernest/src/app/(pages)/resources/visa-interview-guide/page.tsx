import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, CheckCircle2, AlertCircle, Globe, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "Student Visa Interview Tips for Pakistani Students",
  heroSubtitle: "How to Avoid Common Rejections",
  
  intro: {
    desc: "A student visa interview is often the final and most decisive step in the study abroad journey. Many Pakistani students with confirmed admissions, strong academics, and sufficient funds still face rejection because they fail to communicate their case effectively during the interview. Visa officers usually make decisions within minutes, and even small mistakes can raise doubts about an applicant’s intent.",
    desc2: "This detailed guide explains how Pakistani students can prepare for their student visa interview, understand officer expectations, and avoid the most common reasons for refusal. With the right preparation, confidence, and clarity, visa approval chances can improve significantly."
  },

  sections: [
    {
      title: "Why Student Visa Interviews Matter:",
      desc: "The purpose of a student visa interview is not to test English fluency or general knowledge. Visa officers focus on three main factors:",
      points: [
        "Genuineness of study intent",
        "Financial capability",
        "Likelihood of compliance with visa conditions"
      ],
      footer: "During a study visa interview, Pakistan applicants are assessed on whether their academic background, chosen course, and future plans logically connect. If an officer feels that the applicant’s answers are inconsistent or unclear, it can result in student visa rejection, even if documents are complete."
    },
    {
      title: "Most Common Reasons for Student Visa Rejection:",
      desc: "Understanding rejection reasons is the first step toward prevention. Pakistani students are often refused due to the following issues:",
      points: [
        "Unclear academic goals or poor explanation of course relevance",
        "Contradiction between interview answers and Statement of Purpose (SOP)",
        "Weak or confusing financial explanation",
        "Inability to justify country or university selection",
        "Over-rehearsed or memorized responses",
        "Nervousness leading to incomplete answers",
        "Failure to demonstrate ties to Pakistan"
      ],
      footer: "These are considered common visa interview mistakes and can be avoided with structured preparation.",
      isAlert: true
    },
    {
      title: "How to Prepare for a Student Visa Interview:",
      desc: "Preparation should begin at least two to three weeks before the interview date. Students should focus on understanding their profile rather than memorizing answers. Key preparation steps:",
      points: [
        "Clearly understand your course curriculum and duration",
        "Know why you selected this university over others",
        "Be able to explain how this degree fits your career plan",
        "Review your SOP carefully",
        "Prepare a simple explanation of your academic background",
        "Understand your financial documents"
      ],
      footer: "Visa interview tips for Pakistani students always emphasize clarity over complexity. Short, honest answers are more effective than long explanations."
    },
    {
      title: "Answering Academic Questions Confidently:",
      desc: "Academic questions usually include:\n• Why did you choose this course?\n• Why not study the same program in Pakistan?\n• How is this degree relevant to your future career?\n\nWhen answering, focus on:",
      points: [
        "Skills and exposure not available locally",
        "Program structure or specialization",
        "Research, lab facilities, or industry linkage",
        "Career progression after graduation"
      ],
      footer: "Avoid criticizing Pakistani education. Instead, highlight the global exposure and specialization offered abroad."
    },
    {
      title: "Handling Financial Questions Safely",
      desc: "Financial questions are one of the biggest reasons for student visa rejection. Officers want to ensure you can afford tuition and living expenses without working illegally. Common financial questions include:\n• Who is sponsoring your education?\n• What is their income source?\n• How much is your tuition fee?\n• How will you manage living expenses?\n\nBest practices:",
      points: [
        "Know exact figures (rounded but accurate)",
        "Clearly state sponsor relationship",
        "Explain bank statements logically",
        "Avoid guessing amounts"
      ],
      footer: "If funds are a mix of savings and sponsorship, explain the structure calmly and clearly. Never provide unnecessary details unless asked."
    },
    {
      title: "SOP and Interview Consistency",
      desc: "One of the most common visa interview mistakes is inconsistency between the SOP and interview answers. Visa officers often review the SOP before or after the interview. Ensure consistency in:",
      points: [
        "Course selection",
        "University choice",
        "Career goals",
        "Return plans"
      ],
      footer: "If your SOP mentions returning to Pakistan for a specific role, your interview answers must align with that narrative. Any contradiction can raise red flags."
    }
  ],

  bodyLanguage: {
    title: "Body Language and Communication",
    desc: "Non-verbal communication plays a significant role during the student visa interview.",
    dos: [
      "Maintain eye contact",
      "Sit upright",
      "Speak calmly",
      "Listen carefully before answering"
    ],
    donts: [
      "Overconfidence",
      "Arguing with the officer",
      "Interrupting questions",
      "Memorized speeches"
    ],
    footer: "Confidence combined with honesty creates credibility."
  },

  countrySpecific: {
    title: "Country-Specific Interview Expectations",
    desc: "Different countries emphasize different aspects during interviews:",
    countries: [
      { name: "USA", desc: "Focus on intent, finances, and ties to Pakistan. Clear explanation of career plans is crucial." },
      { name: "UK", desc: "Short interviews, but consistency and clarity matter. Financial explanation is key." },
      { name: "Canada", desc: "Strong focus on study plan and long-term compliance. SOP consistency is critical." },
      { name: "Europe", desc: "Often document-focused, but interviews still test seriousness and financial stability." }
    ],
    footer: "Understanding country expectations helps tailor responses."
  },

  conclusion: "A student visa interview is not about perfection; it is about preparation, honesty, and clarity. Pakistani students who understand their profile, finances, and study plan can significantly reduce the risk of rejection. Avoiding common mistakes and aligning interview answers with documentation plays a crucial role in approval. Professional guidance can help students structure their responses, understand officer expectations, and gain confidence before the interview.",

  faq: [
    {
      q: "How long does a student visa interview usually last?",
      a: "Most interviews last between 2 and 5 minutes, but decisions are often made quickly."
    },
    {
      q: "Is nervousness a reason for rejection?",
      a: "Mild nervousness is normal. Rejection usually occurs when answers are unclear or inconsistent."
    },
    {
      q: "Can preparation really improve approval chances?",
      a: "Yes. Structured preparation helps avoid common visa interview mistakes and improves confidence."
    },
    {
      q: "Do visa officers check SOP during interviews?",
      a: "Yes. Officers often cross-check interview answers with the SOP and submitted documents."
    }
  ],

  ctaBlock: {
    title: "Contact EverNest Consultants:",
    desc: "EverNest Consultants provides professional visa interview preparation and study visa guidance for Pakistani students.",
    contactDetails: [
      `WhatsApp: ${siteConfig.contact.whatsappDisplay}`,
      `Email: ${siteConfig.contact.email}`,
      "Website: www.evernestconsultants.com",
      `${siteConfig.pakistanOffice.label}: ${siteConfig.pakistanOffice.address}`,
      `${siteConfig.offices[0].label}: ${siteConfig.offices[0].address}`
    ]
  }
}

export const metadata: Metadata = buildMetadata({
  title: "Student Visa Interview Guide",
  description:
    "Prepare for a student visa interview with practical guidance on common refusal reasons, financial questions, and interview consistency.",
  path: "/resources/visa-interview-guide",
  keywords: ["student visa interview", "visa interview tips", "Pakistan student visa guide", "EverNest Consultants"],
  type: "article",
})

export default function VisaInterviewGuidePage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Visa Interview Guide", path: "/resources/visa-interview-guide" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="article"
        eyebrow="Interview readiness"
        icon={<MessageSquareText className="h-7 w-7" />}
        backLink={{ href: "/resources", label: "Back to Resources" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        chips={["Financial clarity", "Study intent", "SOP consistency", "Confidence"]}
        galleryImages={[
          { src: "/images/trust/training/team-training-session.jpg", alt: "EverNest training and preparation session" },
          { src: "/images/offices/karachi/karachi-pic-2.png", alt: "EverNest counselling office" },
          { src: "/images/trust/ielts/ielts-partner-network.jpg", alt: "IELTS partner network event" },
        ]}
        visualLabel="Interview preparation"
        center
      />

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Intro */}
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm">
                <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                  <p>{pageData.intro.desc}</p>
                  <p className="font-medium text-brand-blue">{pageData.intro.desc2}</p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {pageData.sections.map((section, i) => (
                  <div key={i} className={section.isAlert ? "bg-brand-red/5 p-8 rounded-2xl border border-brand-red/20" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      {section.isAlert && <AlertCircle className="h-6 w-6 text-brand-red" />}
                      <h2 className={`text-2xl font-display font-bold ${section.isAlert ? 'text-brand-red' : 'text-brand-blue'}`}>
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-foreground/80 mb-6 whitespace-pre-line leading-relaxed">{section.desc}</p>
                    <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm mb-6">
                      <ul className="space-y-3">
                        {section.points.map((point, j) => (
                          <li key={j} className="flex items-start">
                            <CheckCircle2 className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${section.isAlert ? 'text-brand-red' : 'text-brand-blue'}`} />
                            <span className="text-foreground/80">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {section.footer && (
                      <p className="text-foreground/70 font-medium italic">{section.footer}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Body Language */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.bodyLanguage.title}</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.bodyLanguage.desc}</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl border border-brand-blue/20 shadow-sm">
                    <h3 className="font-bold text-brand-blue mb-4">DOs</h3>
                    <ul className="space-y-3">
                      {pageData.bodyLanguage.dos.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-brand-red/20 shadow-sm">
                    <h3 className="font-bold text-brand-red mb-4">Don&apos;ts</h3>
                    <ul className="space-y-3">
                      {pageData.bodyLanguage.donts.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <AlertCircle className="h-4 w-4 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-brand-blue font-bold italic">{pageData.bodyLanguage.footer}</p>
              </div>

              {/* Country Specific */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-brand-red" />
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.countrySpecific.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.countrySpecific.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {pageData.countrySpecific.countries.map((country, i) => (
                    <div key={i} className="bg-brand-ice/30 p-6 rounded-xl border border-brand-blue/10">
                      <h3 className="font-bold text-brand-blue mb-2 text-lg">{country.name}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{country.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/70 font-medium italic">{pageData.countrySpecific.footer}</p>
              </div>

              {/* Conclusion */}
              <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-brand-ice mb-4">Conclusion</h2>
                <p className="text-brand-ice/90 leading-relaxed text-lg">{pageData.conclusion}</p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">FAQs</h2>
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">{pageData.ctaBlock.title}</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  {pageData.ctaBlock.desc}
                </p>
                <div className="space-y-4 mb-8">
                  {pageData.ctaBlock.contactDetails.map((detail, i) => (
                    <div key={i} className="text-sm text-foreground/80 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                      {detail}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 text-white" size="lg">
                  <Link href="/contact">Book Interview Prep</Link>
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
