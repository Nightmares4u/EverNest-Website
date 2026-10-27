import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, CheckCircle2, GraduationCap, Briefcase, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { JsonLd } from "@/components/shared/JsonLd"
import { siteConfig } from "@/data/site"
import { officeMedia } from "@/data/office-media"
import { studyVisasData } from "@/data/study-visas"
import type { FaqItem } from "@/data/types"
import { buildMetadata, absoluteUrl, SITE_URL } from "@/lib/metadata"
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema"

const PATH = "/study-visa-consultants-lahore"
const lahoreOffice = siteConfig.offices[0]

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Study Abroad Consultants in Lahore",
    description:
      "Meet EverNest's Lahore team for guidance on courses, admissions, scholarship options and student visa documents. Plan your next application steps.",
    path: PATH,
    keywords: [
      "study visa consultants in Lahore",
      "immigration consultants in Lahore",
      "best consultants in Lahore",
      "study abroad consultants Lahore",
      "student visa consultants Lahore",
      "EverNest Consultants Lahore",
    ],
  }),
  title: { absolute: "Study Abroad Consultants in Lahore | EverNest" },
}

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
    title: "Scholarship Guidance",
    desc: "Identifying the funding you are actually eligible for and preparing a competitive application for it.",
  },
  {
    title: "Student Visa Filing",
    desc: "Complete visa file preparation, financial documentation, and interview preparation for your chosen destination.",
  },
  {
    title: "Pre-Departure Support",
    desc: "Accommodation guidance, travel planning, and briefings so you land prepared rather than improvising.",
  },
]

const consultationSteps = [
  { title: "Free profile evaluation", desc: "We review your academic record, budget, and target country, and tell you honestly which destinations you are a realistic candidate for before you commit to anything." },
  { title: "University and course shortlist", desc: "Shortlisting that matches your academic record, budget, and target country rather than whichever university pays the highest commission." },
  { title: "Application and SOP preparation", desc: "Statement of Purpose, transcripts, recommendation letters, and application filing prepared and checked before submission." },
  { title: "Visa filing and interview preparation", desc: "Complete visa file preparation, financial documentation, and interview preparation for your chosen destination." },
  { title: "Pre-departure support", desc: "Accommodation guidance, travel planning, and briefings so you land prepared rather than improvising." },
]

const faq: FaqItem[] = [
  {
    q: "Where is the EverNest Consultants office in Lahore?",
    a: `Our Lahore office is at ${lahoreOffice.address} Call or WhatsApp ${siteConfig.contact.phone} before visiting so an advisor is free when you arrive.`,
  },
  {
    q: "Do you charge for the first consultation?",
    a: "No. The initial profile evaluation is free. We review your academic record, budget, and target country, and tell you honestly which destinations you are a realistic candidate for before you commit to anything.",
  },
  {
    q: "Which countries can you help me apply to from Lahore?",
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
 * LocalBusiness markup for the Lahore office specifically. The sitewide
 * Organization schema in the root layout covers the company; this page needs
 * a place-specific entity to be a candidate for local results.
 */
function buildLahoreLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${PATH}#localbusiness`,
    name: `${siteConfig.name} — Lahore Office`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    url: absoluteUrl(PATH),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Venture Hub, Plot No. 744, Office No. G02, Johar Town, Block G4 Phase 2",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: { "@type": "City", name: "Lahore" },
    knowsLanguage: ["en", "ur"],
  }
}

export default function StudyVisaConsultantsLahorePage() {
  const destinations = Object.entries(studyVisasData)

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Study Abroad Consultants in Lahore", path: PATH },
    ]),
    buildLahoreLocalBusinessSchema(),
    buildFaqSchema(faq, absoluteUrl(PATH)),
  ]

  return (
    <>
      <JsonLd data={structuredData} />

      <CinematicPageHero
        variant="study"
        eyebrow="Lahore"
        icon={<MapPin className="h-7 w-7" />}
        title={
          <>
            Study Abroad Consultants in{" "}
            <span className="text-brand-red">Lahore</span>
          </>
        }
        subtitle={`EverNest Consultants guides students out of Lahore from our Johar Town office. Our team handles university selection, admissions, and student visa filing for ${destinations.length} destinations — starting with a free profile evaluation.`}
        chips={siteConfig.affiliations}
        ctas={[
          { href: "/contact", label: "Book a free consultation", variant: "primary" },
          { href: `tel:${siteConfig.contact.phoneHref}`, label: "Call the Lahore office", variant: "secondary", external: true },
        ]}
        stats={[
          { value: "13+ Years", label: "Operating since 2013" },
          { value: `${destinations.length}`, label: "Study destinations" },
          { value: "500+", label: "Institutional partners" },
        ]}
        visualLabel="Lahore office"
      />

      {/* Office details */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                  Visit Our Lahore Office
                </h2>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm space-y-5">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-red mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-blue mb-1">Address</h3>
                      <p className="text-foreground/75 leading-relaxed">
                        {lahoreOffice.address}
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
                    We also run a {siteConfig.pakistanOffice.city} office and global desks in
                    North America and Europe, so your case stays supported after you fly out.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {officeMedia
                    .filter((item) => item.branch === "Lahore")
                    .map((item) => (
                      <figure key={item.id} className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
                        <div className="relative h-56 w-full">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="p-4 text-sm text-foreground/70 leading-relaxed">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                </div>
              </div>

              {/* Counselling team */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-3">
                  Meet Your Counselling Team
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  The Lahore team handles profile evaluation, university and course
                  shortlisting, admission and Statement of Purpose preparation, student
                  visa filing and interview preparation, and pre-departure support.
                  EverNest Consultants is British Council certified, and the first
                  profile evaluation is free. Visit the office and meet the advisor who
                  will handle your file before you pay anything.
                </p>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">
                    Admissions and Scholarship Guidance
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

              {/* Documents */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-3">
                  Prepare Your Application Documents
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Exact requirements vary by destination, university, and course, and
                  your offer letter governs. As a starting checklist, most applications
                  draw on:
                </p>
                <ul className="space-y-3 bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm">
                  {[
                    "Valid passport",
                    "Academic transcripts and certificates",
                    "Statement of Purpose (SOP)",
                    "Letters of Recommendation",
                    "English test evidence (IELTS, TOEFL, or an accepted alternative)",
                    "Financial documents or sponsor evidence",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Destinations */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">
                    Explore Study Destinations
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

              {/* Consultation process */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-3">
                  How Your Consultation Works
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Every case follows the same sequence, so you always know what comes
                  next.
                </p>
                <ol className="space-y-4">
                  {consultationSteps.map((step, i) => (
                    <li
                      key={step.title}
                      className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm flex gap-4"
                    >
                      <span className="h-8 w-8 flex-shrink-0 rounded-full bg-brand-blush text-brand-red font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-brand-blue mb-2">{step.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Student experiences */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-3">
                  Lahore Student Experiences
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Outcomes vary by profile, destination, and course, and the final
                  decision on admission and visa always rests with the university and
                  the embassy. Read examples of students we have guided on our{" "}
                  <Link href="/success-stories" className="text-brand-red font-semibold hover:text-brand-blue transition-colors">
                    success stories
                  </Link>{" "}
                  page, and ask us about recent outcomes for your destination and
                  course level when you visit.
                </p>
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
                  Book an Appointment
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
