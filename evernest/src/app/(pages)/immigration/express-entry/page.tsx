import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Briefcase, Globe, ChevronDown, FileText } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { studyVisasData } from "@/data/study-visas"
import { buildMetadata, absoluteUrl } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "Express Entry Program for Canada",
  heroDesc: "Canada is a popular destination for individuals and families seeking job opportunities, quality of life, and a clear Canada PR pathway from Pakistan. Express Entry is one of the fastest ways to immigrate to Canada, using a points-based application system for skilled workers applying for permanent residency.",
  
  whyCanada: {
    title: "Why Immigrate to Canada?",
    desc: "Canada offers a strong economy, a multicultural society, and a welcoming approach to skilled immigration. Many professionals choose Canadian permanent residency to build long-term stability for themselves and their families.",
    points: [
      "Exceptional job market and business prospects",
      "Outstanding living and safety standards",
      "Access to quality education and healthcare services",
      "A clear pathway toward Canadian citizenship",
      "Freedom to live and work in any Canadian province"
    ]
  },
  
  benefits: {
    title: "Benefits of Express Entry",
    points: [
      "Fast Processing Time",
      "No Job Offer Required",
      "Path to Canadian Citizenship",
      "Live and Work Anywhere in Canada",
      "Spouse and Children Can Be Included",
      "Access to Healthcare & Education"
    ]
  },

  programs: {
    title: "Canada Immigration Programs We Assist With",
    desc: "Beyond Express Entry, Canada offers multiple immigration programs for skilled workers, professionals, caregivers, and families. Our consultants help applicants understand which pathway best matches their profile.",
    items: [
      {
        badge: "Express Entry",
        slug: "express-entry",
        title: "Express Entry Program",
        bestFor: "Skilled workers seeking a direct Canada PR pathway",
        desc: "Express Entry is one of Canada’s main immigration systems for skilled workers. Applicants are scored through the CRS system using factors such as age, education, skilled work experience, language ability, and adaptability.",
        overview: "You may qualify through the Federal Skilled Worker Program, Federal Skilled Trades Program, Canadian Experience Class, or an Express Entry-linked Provincial Nominee Program.",
        requirements: [
          "At least 1 year of continuous full-time skilled work experience within the last 10 years",
          "Language proficiency through IELTS, CELPIP, or an accepted French test",
          "Educational Credential Assessment for foreign education",
          "Proof of sufficient settlement funds where required",
          "Competitive CRS score for the relevant draw"
        ],
        benefits: [
          "Fast PR processing after Invitation to Apply",
          "No job offer required for many applicants",
          "Spouse and dependent children can be included",
          "Freedom to live and work anywhere in Canada outside Quebec"
        ]
      },
      {
        badge: "PNP",
        slug: "pnp",
        title: "Provincial Nominee Program (PNP)",
        bestFor: "Applicants targeting a specific province",
        desc: "For applicants who want to settle in a specific Canadian province or territory. Many PNP streams are connected to Express Entry and can strengthen a candidate’s PR pathway.",
        requirements: [
          "Job offer from a Canadian employer where required",
          "Skills or professional background in occupations needed by the province",
          "Language proficiency",
          "Intention to settle in the selected province"
        ],
        benefits: [
          "CRS score boost through provincial nomination",
          "Provincial support for applicants with lower CRS scores",
          "Opportunity to settle in growing regional economies"
        ]
      },
      {
        badge: "Family",
        slug: "family-sponsorship",
        title: "Family Sponsorship Program",
        bestFor: "Families reuniting with Canadian citizens or PR holders",
        desc: "Allows Canadian citizens or permanent residents to sponsor eligible family members for Canadian permanent residence.",
        requirements: [
          "Sponsor must be over 18 and living in Canada",
          "Sponsor must be financially able to support the application",
          "Proof of a genuine relationship is required",
          "Financial criteria apply for parents and grandparents sponsorship"
        ],
        benefits: [
          "PR route for eligible family members",
          "No CRS score or job offer required",
          "Right to live, work, and study in Canada after approval"
        ]
      },
      {
        badge: "Caregiver",
        slug: "caregiver",
        title: "Caregiver Program",
        bestFor: "Home childcare and home support workers",
        desc: "A pathway for individuals working as home childcare providers or home support workers who want to build a future in Canada.",
        requirements: [
          "Valid job offer as a caregiver in Canada",
          "English or French language ability",
          "Intent to live outside Quebec"
        ],
        benefits: [
          "Work permit route connected to PR planning",
          "Family members may be able to accompany the applicant",
          "PR pathway after eligible work experience"
        ]
      },
      {
        badge: "RNIP",
        slug: "rnip",
        title: "Rural & Northern Immigration Pilot",
        bestFor: "Skilled workers open to smaller Canadian communities",
        desc: "Designed for skilled workers who want to settle in smaller Canadian communities with local employer and community support.",
        requirements: [
          "Full-time permanent job offer from a participating community",
          "Minimum language, education, and experience requirements",
          "Settlement funds and community endorsement"
        ],
        benefits: [
          "More accessible PR route for suitable profiles",
          "Opportunities in less competitive regions",
          "Community support for settlement and integration"
        ]
      }
    ]
  },

  process: {
    title: "Canada Immigration Process Step by Step",
    desc: "Understanding the Canada immigration process helps applicants prepare properly and avoid unnecessary delays.",
    steps: [
      "Eligibility assessment and profile review",
      "Select the most suitable immigration program",
      "Complete language testing and Educational Credential Assessment",
      "Create the profile and prepare supporting documents",
      "Receive an Invitation to Apply or provincial/community nomination where applicable",
      "Submit the permanent residency application",
      "Complete medical and background checks",
      "Receive final approval and plan relocation to Canada"
    ]
  },

  whyEvernest: {
    title: "Why Choose EverNest Consultants?",
    desc: "EverNest Consultants offers structured Canada immigration consultation for individuals and families from Pakistan, from eligibility assessment to application planning and final documentation.",
    points: [
      "Profound expertise in Canada immigration schemes",
      "Customized immigration plan according to your profile",
      "Clear and professional processing of your immigration application",
      "Comprehensive assistance from eligibility assessment to visa issuance"
    ]
  },

  faq: [
    {
      q: "Can I include my spouse and children?",
      a: "Yes. You can include your spouse and dependent children in your PR application."
    },
    {
      q: "Can I apply without a job offer?",
      a: "Yes, a job offer is not required, but it can increase your Comprehensive Ranking System (CRS) score."
    },
    {
      q: "How long does Express Entry take?",
      a: "Most applications are processed within 6–8 months. This can significantly vary based on various processes."
    },
    {
      q: "What are easy PR options for Canada?",
      a: "Express Entry, Provincial Nominee Programs, and the Rural and Northern Immigration Pilot are common pathways, depending on your qualifications, work experience, language score, and settlement goals."
    },
    {
      q: "What is Canada’s minimum CRS score?",
      a: "The CRS score requirement changes with each Express Entry draw and depends on the number of applicants in the pool, program category, and draw type."
    }
  ],

  ctaTitle: "Start Your Canada PR Journey",
  ctaDesc: "If you are planning to immigrate to Canada, professional guidance can simplify the process and help you understand the strongest route for your profile."
}

export const metadata: Metadata = buildMetadata({
  title: "Canada Immigration Consultants in Pakistan",
  description:
    "Explore Canada PR pathways, Express Entry eligibility, PNP options, and profile preparation support with EverNest Consultants.",
  path: "/immigration/express-entry",
  keywords: ["Canada immigration consultants in Pakistan", "Express Entry", "Canada PR", "EverNest Consultants", "Canadian immigration"],
})

export default function ExpressEntryPage() {
  const canadaStudyData = studyVisasData.canada

  const pageUrl = absoluteUrl("/immigration/express-entry")
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: "Express Entry", path: "/immigration/express-entry" },
    ]),
    buildFaqSchema(pageData.faq, pageUrl),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="relative overflow-hidden bg-brand-blue pt-24 pb-16 text-white md:pt-32 md:pb-24">
        {canadaStudyData.sectionBackgroundImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={canadaStudyData.sectionBackgroundImage}
              alt={canadaStudyData.backgroundImageAlt || "Canada immigration background"}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,42,0.62)_0%,rgba(7,18,42,0.46)_38%,rgba(7,18,42,0.22)_72%,rgba(7,18,42,0.16)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.1)_0%,rgba(7,18,42,0.18)_42%,rgba(7,18,42,0.34)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.12),transparent_28%)]" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay" />
        )}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <Link href="/immigration" className="mb-6 flex items-center text-sm font-medium text-brand-ice/70 transition-colors hover:text-white">
              &larr; Back to all immigration pathways
            </Link>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              Canada Immigration
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              {pageData.heroTitle}
            </h1>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-brand-ice/85 md:text-xl">
              {pageData.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.whyCanada.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.whyCanada.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pageData.whyCanada.points.map((point, i) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.programs.title}</h2>
                </div>
                <p className="text-foreground/80 mb-8 leading-relaxed">{pageData.programs.desc}</p>
                <div className="space-y-6">
                  {pageData.programs.items.map((program, i) => (
                    <details
                      id={`canada-${program.slug}`}
                      key={program.title}
                      className="group bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden open:shadow-md transition-all"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer bg-white group-hover:bg-brand-ice/30 transition-colors list-none">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="rounded-full bg-brand-blush px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                              {program.badge}
                            </span>
                            <span className="rounded-full border border-border-subtle bg-brand-ice px-3 py-1 text-xs font-semibold text-brand-blue/75">
                              Program {i + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-brand-blue mb-1">{program.title}</h3>
                          <p className="text-foreground/70 text-sm line-clamp-1 group-open:hidden">{program.desc}</p>
                          <p className="mt-2 text-sm font-semibold text-brand-blue/65 group-open:hidden">
                            Best for: {program.bestFor}
                          </p>
                        </div>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-ice text-brand-blue flex-shrink-0 ml-4 group-open:rotate-180 transition-transform">
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </summary>
                      <div className="p-6 pt-0 border-t border-border-subtle/50 mt-4">
                        <p className="text-foreground/80 mb-4 leading-relaxed">{program.desc}</p>
                        <div className="mb-6 rounded-xl border border-brand-blue/10 bg-brand-ice/50 p-4">
                          <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Best for</div>
                          <p className="mt-1 text-sm font-semibold leading-relaxed text-brand-blue">{program.bestFor}</p>
                        </div>
                        {program.overview ? (
                          <div className="mb-6">
                            <h4 className="font-bold text-brand-blue mb-2">Overview</h4>
                            <p className="text-foreground/70 text-sm leading-relaxed">{program.overview}</p>
                          </div>
                        ) : null}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-brand-blue mb-4">Requirements</h4>
                            <ul className="space-y-2">
                              {program.requirements.map((requirement) => (
                                <li key={requirement} className="flex items-start text-sm">
                                  <div className="h-4 w-4 rounded-full bg-brand-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-blue"></div>
                                  </div>
                                  <span className="text-foreground/70 leading-relaxed">{requirement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-blue mb-4">Benefits</h4>
                            <ul className="space-y-2">
                              {program.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-foreground/70 leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

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
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.process.title}</h2>
                </div>
                <p className="text-foreground/80 mb-8 leading-relaxed">{pageData.process.desc}</p>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                  {pageData.process.steps.map((step, i) => (
                    <div key={step} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
                  <p className="text-brand-ice/90 mb-6 leading-relaxed text-lg">{pageData.whyEvernest.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {pageData.whyEvernest.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-brand-ice/90 text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

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
