import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, CheckCircle2, GraduationCap, Briefcase, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { JsonLd } from "@/components/shared/JsonLd"
import { siteConfig } from "@/data/site"
import { studyVisasData } from "@/data/study-visas"
import type { FaqItem } from "@/data/types"
import { buildMetadata, absoluteUrl, SITE_URL } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"

const PATH = "/study-visa-consultants-karachi"

export const metadata: Metadata = buildMetadata({
  title: "Study Visa Consultants in Karachi",
  description:
    "Visit EverNest Consultants at Portway Trade Center, Shahrah-e-Faisal for free study visa and immigration guidance. 13+ years, British Council certified.",
  path: PATH,
  keywords: [
    "study visa consultants in Karachi",
    "immigration consultants in Karachi",
    "best consultants in Karachi",
    "study abroad consultants Karachi",
    "student visa consultants Karachi",
    "EverNest Consultants Karachi",
  ],
})

const services = [
  {
    title: "University & Course Selection",
    desc: "Shortlisting that matches your academic record, budget, and target country rather than whichever university pays the highest commission.",
  },
  {
    title: "Admission & Documentation",
    desc: "Statement of Purpose, transcripts, recommendation letters, and application filing prepared and checked before submission.",
  },
  {
    title: "Student Visa Filing",
    desc: "Complete visa file preparation, financial documentation, and interview preparation for your chosen destination.",
  },
  {
    title: "Immigration & Work Permits",
    desc: "Skilled migration and work permit pathways including Canada Express Entry and US employment routes, filed through licensed partners.",
  },
  {
    title: "Scholarship Guidance",
    desc: "Identifying the funding you are actually eligible for and preparing a competitive application for it.",
  },
  {
    title: "Pre-Departure Support",
    desc: "Accommodation guidance, travel planning, and briefings so you land prepared rather than improvising.",
  },
]

const faq: FaqItem[] = [
  {
    q: "Where is the EverNest Consultants office in Karachi?",
    a: `Our Karachi office is at ${siteConfig.pakistanOffice.address} It sits on Shahrah-e-Faisal in SMCHS, which is reachable from most parts of the city. Call or WhatsApp ${siteConfig.contact.phone} before visiting so an advisor is free when you arrive.`,
  },
  {
    q: "Do you charge for the first consultation?",
    a: "No. The initial profile evaluation is free. We review your academic record, budget, and target country, and tell you honestly which destinations you are a realistic candidate for before you commit to anything.",
  },
  {
    q: "Which countries can you help me apply to from Karachi?",
    a: `We handle study visa applications for ${Object.keys(studyVisasData).length} destinations, including the UK, Canada, Australia, Italy, Germany, France, Ireland, and the USA, plus immigration and work permit pathways for Canada, the US, the UK, Australia, and the EU.`,
  },
  {
    q: "How long has EverNest been operating in Pakistan?",
    a: `EverNest Consultants has been operating since ${siteConfig.registeredYear}, which is over 13 years of case experience. The legal entity is ${siteConfig.legalName}, and we hold ${siteConfig.affiliations.join(", ")} affiliations.`,
  },
  {
    q: "Do I need IELTS before I come to see you?",
    a: "Not necessarily. Several destinations we work with — including Georgia, Uzbekistan, and some programs in Malaysia and Cyprus — do not require IELTS for most courses, and some universities elsewhere accept proof of English-medium education instead. Come in first and we will tell you whether you need the test at all.",
  },
]

/**
 * LocalBusiness markup for the Karachi office specifically. The sitewide
 * Organization schema in the root layout covers the company; this page needs
 * a place-specific entity to be a candidate for local results.
 */
function buildKarachiLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${PATH}#localbusiness`,
    name: `${siteConfig.name} — Karachi Office`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: absoluteUrl(PATH),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office #912 Portway Trade Center (PTC) - Business Center, SMCHS, Shahrah-e-Faisal",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: { "@type": "City", name: "Karachi" },
    knowsLanguage: ["en", "ur"],
  }
}

export default function StudyVisaConsultantsKarachiPage() {
  const destinations = Object.entries(studyVisasData)

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Study Visa Consultants in Karachi", path: PATH },
    ]),
    buildKarachiLocalBusinessSchema(),
    buildFaqSchema(faq, absoluteUrl(PATH)),
  ]

  return (
    <>
      <JsonLd data={structuredData} />

      <CinematicPageHero
        variant="study"
        eyebrow="Karachi"
        icon={<MapPin className="h-7 w-7" />}
        title={
          <>
            Study Visa &amp; Immigration Consultants in{" "}
            <span className="text-brand-red">Karachi</span>
          </>
        }
        subtitle={`EverNest Consultants has guided students out of Karachi since ${siteConfig.registeredYear}. Our office on Shahrah-e-Faisal handles university selection, admissions, and student visa filing for ${destinations.length} destinations — starting with a free profile evaluation.`}
        chips={siteConfig.affiliations}
        ctas={[
          { href: "/contact", label: "Book a free consultation", variant: "primary" },
          { href: `tel:${siteConfig.contact.phoneHref}`, label: "Call the Karachi office", variant: "secondary", external: true },
        ]}
        stats={[
          { value: "13+ Years", label: "Operating since 2013" },
          { value: `${destinations.length}`, label: "Study destinations" },
          { value: "500+", label: "Institutional partners" },
        ]}
        visualLabel="Karachi office"
      />

      {/* Office details */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                  Visit our Karachi office
                </h2>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm space-y-5">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-blue mb-1">Address</h3>
                      <p className="text-foreground/75 leading-relaxed">
                        {siteConfig.pakistanOffice.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-blue mb-1">Phone &amp; WhatsApp</h3>
                      <a
                        href={`tel:${siteConfig.contact.phoneHref}`}
                        className="text-foreground/75 hover:text-brand-red transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-brand-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-blue mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-foreground/75 hover:text-brand-red transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 border-t border-border-subtle pt-5">
                    We also run a {siteConfig.offices[0].city} office and global desks in
                    North America and Europe, so your case stays supported after you fly out.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">
                    What we handle for Karachi students
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm"
                    >
                      <h3 className="font-bold text-brand-blue mb-3 text-lg">{service.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destinations */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">
                    Destinations we file from Karachi
                  </h2>
                </div>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {destinations.map(([slug, data]) => (
                      <Link
                        key={slug}
                        href={`/study-visas/${slug}`}
                        className="flex items-center text-foreground/80 hover:text-brand-red transition-colors py-1"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-red mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Study in {data.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border-subtle">
                    <Link
                      href="/immigration"
                      className="text-brand-blue font-semibold hover:text-brand-red transition-colors text-sm"
                    >
                      Looking to migrate rather than study? See immigration pathways &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faq.map((item, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-xl border border-border-subtle overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                        {item.q}
                        <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-4">
                  Free profile evaluation
                </h2>
                <p className="text-foreground/70 mb-8">
                  Tell us your grades, budget, and where you want to go. We will tell you which
                  destinations you are a realistic candidate for — before you spend anything.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
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
