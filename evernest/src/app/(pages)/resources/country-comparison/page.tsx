import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, CheckCircle2, Globe, PiggyBank, Briefcase, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

const pageData = {
  heroTitle: "Top Countries for Pakistani Students to Study Abroad in 2025",
  heroSubtitle: "Cost, Tuition, and Job Opportunities",
  
  intro: {
    desc: "Pakistani students planning to study abroad in 2025 usually focus on three key factors: overall cost, work rights during study, and job opportunities after graduation. Choosing the best countries to study abroad from Pakistan requires comparing tuition fees, living expenses, and post-study work opportunities across popular destinations.",
    desc2: "This guide helps students who want to study abroad from Pakistan compare the most suitable countries based on study abroad cost for Pakistani students, legal work permissions, and long-term career prospects, so you can select a destination that fits your budget, degree, and future goals."
  },

  quickShortlist: [
    {
      title: "Least overall expenses",
      desc: "Turkey, Germany, Malaysia, Italy."
    },
    {
      title: "Most employment + Immigration opportunities",
      desc: "Australia, Ireland, Canada."
    },
    {
      title: "United Kingdom",
      desc: "Best for fastest course completion + global recognition."
    }
  ],

  countries: [
    {
      name: "Canada",
      stats: [
        { label: "Tuition", value: "1.8M - 3.5M PKR/year" },
        { label: "Living", value: "220K - 350K PKR/month" }
      ],
      workRights: "Canada allows international students to work part-time and, during scheduled school breaks (depending on the policy) can work full-time.",
      postStudy: "Students can apply for a post-grad work visa, which has great prospects for getting a permanent residence.",
      bestFor: "Students looking for immigrating options after education, strong economies, and good job availability."
    },
    {
      name: "United Kingdom",
      stats: [
        { label: "Tuition", value: "2.5M - 5M PKR/year" },
        { label: "Living", value: "250K - 400K PKR/month" }
      ],
      workRights: "Depending on the visa policy, students can work full-time during the breaks and part-time during the terms.",
      postStudy: "After studies, international students can stay in the UK for two years and work due to the Graduate Route program.",
      bestFor: "Students wanting a fast-track option, high employability, and internationally recognized qualifications, especially in business, technology, and finance."
    },
    {
      name: "Germany",
      stats: [
        { label: "Tuition", value: "Little to nothing (public)" },
        { label: "Living", value: "200K - 300K PKR/month" }
      ],
      workRights: "Working part-time is allowed, but is subject to regulations.",
      postStudy: "Students in engineering, IT, and manufacturing are in great demand, and international students are allowed to extend their stay after the degree to find work.",
      bestFor: "Students looking for strong markets in technology and engineering, and low tuition."
    },
    {
      name: "France",
      stats: [
        { label: "Tuition", value: "Subsidized (public)" },
        { label: "Living", value: "220K - 360K PKR/month" }
      ],
      workRights: "Students can do part-time jobs (with restrictions).",
      postStudy: "Depending on your degree, you can get work rights after your studies through residence permit extensions.",
      bestFor: "Students looking for reasonably priced education, exposure to Europe, and a flexible time frame."
    },
    {
      name: "Italy",
      stats: [
        { label: "Tuition", value: "800K - 1.8M PKR/year" },
        { label: "Living", value: "180K - 280K PKR/month" }
      ],
      workRights: "As a student, you will get the right to work part-time based on the student residence regulations.",
      postStudy: "Students may extend their stay in Italy after graduation to search for employment, helping them transition into the European job market.",
      bestFor: "Students looking for a balance between cost and career opportunities across Europe."
    },
    {
      name: "Finland",
      stats: [
        { label: "Tuition", value: "1.2M - 3.3M PKR/year" },
        { label: "Living", value: "210K - 360K PKR/month" }
      ],
      workRights: "Students have the right to work to a capped number of hours per week during the term (based on policy).",
      postStudy: "You may extend your residence permit for up to one year to continue to seek employment related to your studies or to start your own business. If you remain continuously, this may result in long-term residency.",
      bestFor: "Students with a strong research inclination, students interested in technology and innovation, and students seeking a high cost of living."
    },
    {
      name: "Ireland",
      stats: [
        { label: "Tuition", value: "2.5M - 4.0M PKR/year" },
        { label: "Living", value: "250K - 400K PKR/month" }
      ],
      workRights: "With the right visa, Students can work part-time. In tech programs, there is often a co-op.",
      postStudy: "Strong demand for work after study, especially in IT, data, and finance.",
      bestFor: "Tech jobs, exposure to international companies, and English-speaking Europe."
    },
    {
      name: "Australia",
      stats: [
        { label: "Tuition", value: "3.5M - 6.0M PKR/year" },
        { label: "Living", value: "300K - 450K PKR/month" }
      ],
      workRights: "Students usually work part-time during the terms and full-time during the breaks (subject to the rules).",
      postStudy: "There are post-study work visas for eligible graduates. Many sectors have a strong employment market.",
      bestFor: "Budgeting students with higher spending for a significant career return."
    },
    {
      name: "Turkey",
      stats: [
        { label: "Tuition", value: "560K - 2.5M PKR/year" },
        { label: "Living", value: "110K - 220K PKR/month" }
      ],
      workRights: "Rule-based work permits for part-time access.",
      postStudy: "Jobs in the region, where the cultural affinity helps a lot of the Pakistani students acclimate quickly.",
      bestFor: "Inexpensive admissions, cultural ease, and a long-standing expeditious process for a multitude of universities."
    },
    {
      name: "Malaysia",
      stats: [
        { label: "Tuition", value: "700K - 1.8M PKR/year" },
        { label: "Living", value: "120K - 200K PKR/month" }
      ],
      workRights: "Students have restricted part-time work in accordance.",
      postStudy: "Reasonably priced programs in English are available. Some graduates tend to move to the GCC/Others.",
      bestFor: "Students with a budget where English is a medium, and the cost of living is reasonable."
    }
  ],

  howToChoose: {
    title: "How to Choose the Right Country",
    points: [
      "Start with your budget: calculate tuition fees + living costs for at least 12 months.",
      "Match the destination to your degree: some countries are stronger for tech, others for business or engineering.",
      "Check post‑study work rules early because job opportunities are often tied to stay extensions.",
      "Prefer cities with internships and part‑time work, but don’t underestimate rent in major hubs.",
      "Apply early (6–9 months before intake) to keep scholarships, admissions, and visa timing realistic."
    ]
  },

  conclusion: "The best countries to study abroad depend on your budget, program choice, and how important job opportunities are after graduation. If you want a structured shortlist and clean documentation support, EverNest Consultants can guide you through university selection, scholarship strategy, and visa preparation based on your profile.",

  faq: [
    {
      q: "In 2025, what is the most affordable country for students from Pakistan?",
      a: "Turkey and Malaysia can be affordable, depending on the city and the university you're attending. Germany is also very affordable, especially because of the public universities, and the tuition is low."
    },
    {
      q: "What country has the best opportunities for work after studying?",
      a: "Canada, Australia, the UK, and Ireland are the most common countries for structured post study work opportunities."
    },
    {
      q: "Is an IELTS needed to study abroad from Pakistan?",
      a: "Most programs are going to need an IELTS/TOEFL/Duolingo. A few universities may allow you to prove something else, like the medium of instruction, depending on the region and the school."
    },
    {
      q: "When is the best time to start planning?",
      a: "You should start planning ideally 6 to 9 months before the intake to ensure you have enough time to work on the admission, documents, and the visa procedures."
    }
  ],

  ctaBlock: {
    title: "Contact EverNest Consultants",
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
  title: "Country Comparison for Pakistani Students",
  description:
    "Compare top study abroad countries for Pakistani students by tuition, living costs, work rights, and post-study opportunities.",
  path: "/resources/country-comparison",
  keywords: ["country comparison", "study abroad costs", "Pakistani students", "EverNest Consultants"],
  type: "article",
})

export default function CountryComparisonPage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Country Comparison", path: "/resources/country-comparison" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="article"
        eyebrow="Compare destinations"
        icon={<TrendingUp className="h-7 w-7" />}
        backLink={{ href: "/resources", label: "Back to Resources" }}
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        chips={["Cost", "Tuition", "Work rights", "Post-study options"]}
        galleryImages={[
          { src: "/images/destinations/homepage/canada-landmark.jpg", alt: "Canada study destination" },
          { src: "/images/destinations/homepage/france-landmark.webp", alt: "France study destination" },
          { src: "/images/destinations/homepage/usa-landmark.jpg", alt: "USA study destination" },
        ]}
        visualLabel="Country comparison"
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

              {/* Quick Shortlist */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">Quick Shortlist</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {pageData.quickShortlist.map((item, i) => (
                    <div key={i} className="bg-brand-ice/50 p-6 rounded-xl border border-brand-blue/10">
                      <h3 className="font-bold text-brand-blue mb-3 text-lg">{item.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Country Comparison */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Globe className="h-8 w-8 text-brand-red" />
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Country-by-Country Comparison</h2>
                </div>
                
                <div className="space-y-8">
                  {pageData.countries.map((country, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border-subtle overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-brand-blue p-6 text-white flex justify-between items-center">
                        <h3 className="text-2xl font-display font-bold text-brand-ice">{country.name}</h3>
                      </div>
                      <div className="p-6 md:p-8 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {country.stats.map((stat, j) => (
                            <div key={j} className="flex items-center bg-brand-ice/30 p-4 rounded-xl">
                              <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4">
                                {stat.label === 'Tuition' ? <BookOpen className="h-5 w-5 text-brand-blue" /> : <PiggyBank className="h-5 w-5 text-brand-blue" />}
                              </div>
                              <div>
                                <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider">{stat.label}</p>
                                <p className="font-bold text-brand-blue">{stat.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 border-t border-border-subtle/50 pt-6">
                          <div>
                            <h4 className="font-bold text-brand-blue mb-2 flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-brand-red" /> Work Rights
                            </h4>
                            <p className="text-foreground/70 text-sm leading-relaxed">{country.workRights}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-blue mb-2 flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-brand-red" /> Post-Study Work
                            </h4>
                            <p className="text-foreground/70 text-sm leading-relaxed">{country.postStudy}</p>
                          </div>
                        </div>

                        <div className="bg-brand-red/5 p-4 rounded-xl border border-brand-red/10 flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-brand-red text-sm mb-1">Best suited for:</p>
                            <p className="text-foreground/80 text-sm">{country.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Choose */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.howToChoose.title}</h2>
                <div className="bg-brand-ice/50 rounded-2xl p-6 md:p-8 border border-border-subtle">
                  <ul className="space-y-4">
                    {pageData.howToChoose.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-6">{pageData.ctaBlock.title}</h3>
                <div className="space-y-4 mb-8">
                  {pageData.ctaBlock.contactDetails.map((detail, i) => (
                    <div key={i} className="text-sm text-foreground/80 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                      {detail}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 text-white" size="lg">
                  <Link href="/contact">Get Free Assessment</Link>
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
