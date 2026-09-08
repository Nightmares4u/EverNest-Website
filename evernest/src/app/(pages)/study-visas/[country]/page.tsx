import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, GraduationCap, Calendar, BookOpen, Globe, FileText, ArrowRight, DollarSign, Briefcase, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { studyVisasData } from "@/data/study-visas"
import type { StudyVisaCountryData, FaqItem } from "@/data/types"
import { buildMetadata, getMetaDescription, absoluteUrl } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"
import { use } from "react"
import Image from "next/image"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const pageData = studyVisasData[resolvedParams.country.toLowerCase()]

  if (!pageData) {
    return buildMetadata({
      title: "Study Visa Destination",
      description: "Explore study visa destinations and country-specific guidance from EverNest Consultants.",
      path: `/study-visas/${resolvedParams.country}`,
      keywords: ["Study visa destination", "EverNest Consultants"],
    })
  }

  return buildMetadata({
    // Kept short: the layout appends " | EverNest Consultants", and Google
    // truncates around 60 characters.
    title: `Study in ${pageData.name} from Pakistan`,
    description: getMetaDescription(pageData.heroDesc),
    path: `/study-visas/${resolvedParams.country.toLowerCase()}`,
    keywords: [
      `Study in ${pageData.name} from Pakistan`,
      `${pageData.name} student visa for Pakistani students`,
      `${pageData.name} study visa consultants`,
      "EverNest Consultants",
    ],
  })
}

export default function StudyVisaCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = use(params)
  const countryKey = resolvedParams.country.toLowerCase()
  const pageData: StudyVisaCountryData | undefined = studyVisasData[countryKey]

  if (!pageData) {
    notFound()
  }

  const sectionBackgroundImage = pageData.sectionBackgroundImage

  const pageUrl = absoluteUrl(`/study-visas/${countryKey}`)
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Study Visas", path: "/study-visas" },
      { name: `Study in ${pageData.name}`, path: `/study-visas/${countryKey}` },
    ]),
    ...(pageData.faq && pageData.faq.length > 0
      ? [buildFaqSchema(pageData.faq, pageUrl)]
      : []),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 text-white overflow-hidden relative bg-brand-blue">
        {sectionBackgroundImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={sectionBackgroundImage}
              alt={pageData.backgroundImageAlt || `Study in ${pageData.name}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,42,0.58)_0%,rgba(7,18,42,0.4)_34%,rgba(7,18,42,0.22)_68%,rgba(7,18,42,0.14)_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.14)_34%,rgba(7,18,42,0.28)_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.12),transparent_28%)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.16),transparent_30%),linear-gradient(180deg,#07122a_0%,#0b1b3a_48%,#102447_100%)]"></div>
        )}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <Link href="/study-visas" className="text-brand-ice/60 hover:text-white text-sm font-medium flex items-center mb-6 transition-colors">
              &larr; Back to all destinations
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Why Study in <span className="text-brand-red">{pageData.name}?</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed max-w-3xl">
              {pageData.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Benefits */}
              {pageData.benefits && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Benefits of Studying in {pageData.name}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {pageData.benefits.map((benefit, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-brand-blue mb-3 text-lg">{benefit.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Admission Requirements */}
              {pageData.admissionRequirements && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Admission Requirements</h2>
                  </div>
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm space-y-8">
                    {pageData.admissionRequirements.undergraduate && (
                      <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-4">Undergraduate Courses</h3>
                        <ul className="space-y-3">
                          {pageData.admissionRequirements.undergraduate.map((req: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pageData.admissionRequirements.master && (
                      <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-4">Master&apos;s Programs</h3>
                        <ul className="space-y-3">
                          {pageData.admissionRequirements.master.map((req: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pageData.admissionRequirements.phd && (
                      <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-4">PhD Programs</h3>
                        <ul className="space-y-3">
                          {pageData.admissionRequirements.phd.map((req: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Language Requirements */}
              {pageData.languageRequirements && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Language Requirements</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {pageData.languageRequirements.english && (
                      <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
                        <h3 className="font-bold text-brand-blue mb-4 text-lg">Programs in English</h3>
                        <ul className="space-y-3">
                          {pageData.languageRequirements.english.map((req: string, i: number) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pageData.languageRequirements.italian && (
                      <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
                        <h3 className="font-bold text-brand-blue mb-4 text-lg">Programs in Italian</h3>
                        <ul className="space-y-3">
                          {pageData.languageRequirements.italian.map((req: string, i: number) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Documents */}
              {pageData.documents && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">University Application Process & Documents</h2>
                  </div>
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm">
                    <ul className="space-y-4">
                      {pageData.documents.map((doc: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-brand-ice text-brand-blue flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <span className="text-foreground/80 leading-relaxed">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tuition & Living Costs */}
              {pageData.costs && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Tuition & Living Costs</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {pageData.costs.map((cost, i: number) => (
                      <div key={i} className="bg-brand-ice/30 p-6 rounded-xl border border-brand-blue/10">
                        <h3 className="font-bold text-brand-blue mb-3 text-lg">{cost.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{cost.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scholarships */}
              {pageData.scholarships && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Scholarships</h2>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-sm">
                    <ul className="space-y-4">
                      {pageData.scholarships.map((schol: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{schol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Visa Process */}
              {(pageData.visaRequirements || pageData.visaProcessSteps) && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.visaProcessTitle || "Visa Process"}</h2>
                  </div>
                  {pageData.visaProcessDesc && <p className="text-foreground/80 mb-6">{pageData.visaProcessDesc}</p>}
                  
                  {pageData.visaRequirements && (
                    <div className="bg-brand-blue text-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
                      <h3 className="font-bold text-xl mb-6">Student Visa Requirements</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {pageData.visaRequirements.map((req: string, i: number) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-brand-ice/90 text-sm leading-relaxed">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {pageData.visaProcessSteps && (
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                      {pageData.visaProcessSteps.map((step: string, i: number) => (
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
                  )}
                </div>
              )}

              {/* Work During Studies & Post Study */}
              {(pageData.workDuringStudies || pageData.postStudy) && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Work & Career Opportunities</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {pageData.workDuringStudies && (
                      <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm">
                        <h3 className="font-bold text-brand-blue mb-4 text-lg">Work During Studies</h3>
                        <p className="text-foreground/70 leading-relaxed text-sm">{pageData.workDuringStudies}</p>
                      </div>
                    )}
                    {pageData.postStudy && (
                      <div className="bg-brand-blue text-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-brand-ice mb-4 text-lg">Post-Study & PR Pathways</h3>
                        <p className="text-brand-ice/80 leading-relaxed text-sm">{pageData.postStudy}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Intakes */}
              {pageData.intakes && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">Intakes and Planning</h2>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm space-y-4">
                    {pageData.intakes.map((intake: string, i: number) => (
                      <div key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{intake}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why EverNest */}
              {pageData.whyEvernest && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                  <div className="bg-brand-ice/50 rounded-2xl p-6 md:p-8 border border-border-subtle">
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {pageData.whyEvernest.desc}
                    </p>
                    {pageData.whyEvernest.points && (
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {pageData.whyEvernest.points.map((point: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {pageData.faq && pageData.faq.length > 0 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {pageData.faq.map((faq: FaqItem, i: number) => (
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
              )}

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">Start Your Journey</h3>
                <p className="text-foreground/70 mb-8">
                  Get a free profile evaluation from our {pageData.name} study visa experts today.
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
