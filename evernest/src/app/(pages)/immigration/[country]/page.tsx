import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Briefcase, Globe, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { immigrationData } from "@/data/immigration-countries"
import { studyVisasData } from "@/data/study-visas"
import type { FaqItem, ImmigrationCountryData, ImmigrationProgramData } from "@/data/types"
import { buildMetadata, getMetaDescription, absoluteUrl } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"
import { use } from "react"
import Image from "next/image"

const studyBackgroundMap: Record<string, keyof typeof studyVisasData> = {
  australia: "australia",
  "united-kingdom": "united-kingdom",
  "united-states": "usa",
}

const fallbackCountryImages: Record<string, string> = {
  "european-union": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2000&auto=format&fit=crop",
  "new-zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2000&auto=format&fit=crop",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const pageData = immigrationData[resolvedParams.country.toLowerCase()]

  if (!pageData) {
    return buildMetadata({
      title: "Immigration Pathway",
      description: "Explore country-specific immigration guidance from EverNest Consultants.",
      path: `/immigration/${resolvedParams.country}`,
      keywords: ["Immigration pathway", "EverNest Consultants"],
    })
  }

  return buildMetadata({
    // Built from `name`, not `heroTitle`: several heroTitles already end in
    // "Immigration Consultants in Pakistan", which made the tag redundant and
    // pushed it past the ~60 characters Google renders.
    title: `${pageData.name} Immigration from Pakistan`,
    description: getMetaDescription(pageData.heroDesc),
    path: `/immigration/${resolvedParams.country.toLowerCase()}`,
    keywords: [
      `${pageData.name} immigration from Pakistan`,
      `${pageData.name} immigration consultants Pakistan`,
      `${pageData.name} immigration`,
      "EverNest Consultants",
    ],
  })
}

export default function ImmigrationCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = use(params)
  const countryKey = resolvedParams.country.toLowerCase()
  const pageData: ImmigrationCountryData | undefined = immigrationData[countryKey]

  if (!pageData) {
    notFound()
  }

  const studyPageData = studyVisasData[studyBackgroundMap[countryKey]]
  const bgImage =
    studyPageData?.sectionBackgroundImage ||
    fallbackCountryImages[countryKey] ||
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
  const bgAlt = studyPageData?.backgroundImageAlt || `${pageData.name} Immigration`

  const pageUrl = absoluteUrl(`/immigration/${countryKey}`)
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Immigration", path: "/immigration" },
      { name: pageData.name, path: `/immigration/${countryKey}` },
    ]),
    ...(pageData.faq && pageData.faq.length > 0
      ? [buildFaqSchema(pageData.faq, pageUrl)]
      : []),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={bgAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,42,0.58)_0%,rgba(7,18,42,0.4)_34%,rgba(7,18,42,0.22)_68%,rgba(7,18,42,0.14)_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.14)_34%,rgba(7,18,42,0.28)_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.12),transparent_28%)]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <Link href="/immigration" className="text-brand-ice/60 hover:text-white text-sm font-medium flex items-center mb-6 transition-colors">
              &larr; Back to all immigration pathways
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {pageData.heroTitle}
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
              
              {/* Why Immigrate */}
              {pageData.whyImmigrate && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.whyImmigrate.title}</h2>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.whyImmigrate.desc}</p>
                  <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-sm">
                    <ul className="space-y-4">
                      {pageData.whyImmigrate.benefits.map((benefit: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Programs/Pathways */}
              {pageData.programs && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.programsTitle}</h2>
                  </div>
                  {pageData.programsDesc && (
                    <p className="text-foreground/80 mb-8 leading-relaxed">{pageData.programsDesc}</p>
                  )}
                  
                  <div className="space-y-6">
                    {pageData.programs.map((program: ImmigrationProgramData, i: number) => (
                      <details key={i} className="group bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden open:shadow-md transition-all">
                        <summary className="flex items-center justify-between p-6 cursor-pointer bg-white group-hover:bg-brand-ice/30 transition-colors list-none">
                          <div>
                            <h3 className="text-xl font-bold text-brand-blue mb-1">{program.title}</h3>
                            <p className="text-foreground/70 text-sm line-clamp-1 group-open:hidden">{program.desc}</p>
                          </div>
                          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-ice text-brand-blue flex-shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </summary>
                        <div className="p-6 pt-0 border-t border-border-subtle/50 mt-4">
                          <p className="text-foreground/80 mb-6 leading-relaxed">{program.desc}</p>
                          {program.overview && (
                            <div className="mb-6">
                              <h4 className="font-bold text-brand-blue mb-2">Overview</h4>
                              <p className="text-foreground/70 text-sm leading-relaxed">{program.overview}</p>
                            </div>
                          )}
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-bold text-brand-blue mb-4">Requirements</h4>
                              <ul className="space-y-2">
                                {(program.requirements ?? []).map((req: string, j: number) => (
                                  <li key={j} className="flex items-start text-sm">
                                    <div className="h-4 w-4 rounded-full bg-brand-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue"></div>
                                    </div>
                                    <span className="text-foreground/70 leading-relaxed">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-brand-blue mb-4">Benefits</h4>
                              <ul className="space-y-2">
                                {(program.benefits ?? []).map((benefit: string, j: number) => (
                                  <li key={j} className="flex items-start text-sm">
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
              )}

              {/* Why EverNest */}
              {pageData.whyEvernest && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                  <div className="bg-brand-ice/50 rounded-2xl p-6 md:p-8 border border-border-subtle">
                    <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.whyEvernest.desc}</p>
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

              {/* Process Timeline */}
              {pageData.processTimeline && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.processTimeline.title}</h2>
                  </div>
                  <p className="text-foreground/80 mb-8 leading-relaxed">{pageData.processTimeline.desc}</p>
                  
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                    {pageData.processTimeline.steps.map((step: string, i: number) => (
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
            {pageData.ctaTitle && (
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
            )}

          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
