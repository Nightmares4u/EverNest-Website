import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, GraduationCap } from "lucide-react"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { ContactInquiryForm } from "@/components/shared/ContactInquiryForm"
import { JsonLd } from "@/components/shared/JsonLd"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"

const PATH = "/resources/uk-january-2027-intake"

export const metadata: Metadata = {
  ...buildMetadata({
    title: "UK January 2027 Intake for Pakistani Students",
    description:
      "Explore UK January 2027 courses, university deadlines and application steps. Check course availability and plan your documents with EverNest.",
    path: PATH,
    keywords: [
      "UK January 2027 intake",
      "January intake UK Pakistani students",
      "UK winter intake 2027",
      "UK January 2027 universities",
      "UK student visa January 2027",
      "EverNest Consultants",
    ],
    type: "article",
  }),
  title: { absolute: "UK January 2027 Intake for Pakistani Students | EverNest" },
}

export default function UkJanuary2027IntakePage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "UK January 2027 Intake", path: PATH },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <CinematicPageHero
        variant="article"
        eyebrow="January 2027 intake"
        icon={<GraduationCap className="h-7 w-7" />}
        backLink={{ href: "/resources", label: "Back to Resources" }}
        title={
          <>
            UK January 2027 Intake for{" "}
            <span className="text-brand-red">Pakistani Students</span>
          </>
        }
        subtitle="January entry is a second chance to start in the UK — but availability is per course, and the deadlines close early. Check the confirmed picture below before you apply."
        chips={["January 2027 entry", "CAS planning", "Student visa", "Course availability"]}
        galleryImages={[
          { src: "/images/destinations/homepage/united-kingdom-landmark.jpg", alt: "United Kingdom study destination" },
          { src: "/images/destinations/homepage/canada-landmark.jpg", alt: "Canada study destination" },
          { src: "/images/destinations/homepage/australia-landmark.jpg", alt: "Australia study destination" },
        ]}
        visualLabel="January 2027 entry"
        center
      />

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <p className="text-sm text-foreground/60">
              Reviewed 27 October 2026. Deadlines and availability change — always confirm
              on the university&apos;s official course page before you apply.
            </p>

            {/* 1. Universities and courses */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Universities and Courses Accepting Applications
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  January 2027 is the UK&apos;s winter intake: a second entry point after
                  September, with fewer courses on offer than September and mainly
                  postgraduate courses plus some undergraduate and foundation courses.
                  Availability is per course, not per university — a university offering
                  January entry does not offer every course in January, so confirm your
                  exact course before planning anything else.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-blue">University of Northampton</strong> —
                      applications are open for programmes starting in January 2027.
                      Undergraduate welcome and induction runs 11–15 January 2027 with
                      teaching from 18 January 2027; postgraduate welcome and induction
                      runs 25–29 January 2027 with teaching from 1 February 2027.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-blue">University of Liverpool</strong> —
                      the International Business MSc and the Liverpool MBA offer January
                      2027 entry, with course welcome starting 25 January 2027 and
                      teaching starting 1 February 2027.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-blue">University of Bedfordshire</strong> —
                      undergraduate course pages list January 2027 as a next start date.
                      Confirm the course you want, as start dates vary by course.
                    </span>
                  </li>
                </ul>
                <p>
                  If your course is not listed for January at one university, it may still
                  be open at another — or only in the next intake. Ask us to check live
                  course availability before you commit to a timeline.
                </p>
              </div>
            </div>

            {/* 2. Deadlines */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Course-Specific Application and Deposit Deadlines
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  January deadlines are set by each university and each course — there is
                  no single UK-wide January deadline. As a rule, winter-intake
                  applications open around June–September of the previous year. The
                  confirmed University of Northampton deadlines for January 2027 are:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="text-left border-b border-border-subtle">
                        <th className="py-3 pr-4 font-bold text-brand-blue">Step</th>
                        <th className="py-3 pr-4 font-bold text-brand-blue">Undergraduate</th>
                        <th className="py-3 font-bold text-brand-blue">Postgraduate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border-subtle/50">
                        <td className="py-3 pr-4 font-medium">Application deadline</td>
                        <td className="py-3 pr-4">Monday 14 December 2026</td>
                        <td className="py-3">4 January 2027</td>
                      </tr>
                      <tr className="border-b border-border-subtle/50">
                        <td className="py-3 pr-4 font-medium">International deposit deadline</td>
                        <td className="py-3 pr-4">3 January 2027</td>
                        <td className="py-3">18 January 2027</td>
                      </tr>
                      <tr className="border-b border-border-subtle/50">
                        <td className="py-3 pr-4 font-medium">CAS issuance deadline</td>
                        <td className="py-3 pr-4">8 January 2027</td>
                        <td className="py-3">To confirm with the university</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium">Last arrival and enrolment</td>
                        <td className="py-3 pr-4">8 February 2027</td>
                        <td className="py-3">22 February 2027</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Do not confuse January-start deadlines with the UCAS dates for 2027
                  entry: UCAS applications for 2027 entry opened 1 September 2026, with
                  an equal-consideration deadline of 13 January 2027 at 6pm and a £34.50
                  application fee. Those dates govern 2027 entry generally — they are
                  not a January 2027 start deadline.
                </p>
                <p>
                  Some January 2027 deadlines have already passed. See{" "}
                  <a href="#closed" className="text-brand-red font-semibold hover:text-brand-blue transition-colors">
                    What to Do If Your Course Is Closed
                  </a>{" "}
                  below for a concrete example.
                </p>
              </div>
            </div>

            {/* 3. Entry and English */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Entry and English-Language Requirements
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  Exact requirements are set by the university and the course, and the
                  offer letter governs. As a general picture from our UK guidance:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Undergraduate study: 12 years of education (A-levels, Intermediate,
                      IB, or High School Diploma), with minimum grades set by the
                      university — usually 50–60% and above for average universities and
                      higher for top-tier institutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Master&apos;s study: a recognized bachelor&apos;s degree (16 years of
                      education) at roughly a UK 2:2 or 2:1 equivalent, around 55–60% and
                      above.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      English: most universities ask for an overall IELTS band of 6.0–6.5
                      depending on the course. Many also accept PTE, TOEFL, Duolingo, or
                      a Medium of Instruction certificate instead. Under UK visa rules,
                      degree-level study requires English at CEFR level B2; your higher
                      education provider may assess your English itself, otherwise a
                      Secure English Language Test from an approved provider is needed.
                      Pakistan is not on the UK&apos;s majority English-speaking country
                      list, so plan to evidence your English.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Documents and CAS */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Documents and CAS Planning
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  Your CAS (Confirmation of Acceptance for Studies) is the reference
                  number your university sends once you hold an unconditional offer from
                  a licensed student sponsor. You need it before you can apply for a
                  visa, and you must apply for your visa within 6 months of receiving
                  it. From outside the UK, the earliest you can apply for a Student visa
                  is 6 months before your course starts, and a decision usually takes
                  3 weeks.
                </p>
                <p className="font-semibold text-brand-blue">Documents to prepare:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>Valid passport and your CAS reference.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>Academic records (Intermediate, bachelor&apos;s, or master&apos;s, depending on the course).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Bank statement showing sufficient funds: first-year course fees as
                      stated on your CAS, plus living costs of £1,529 per month in
                      London or £1,171 per month outside London, for up to 9 months.
                      The funds must have been held for at least 28 consecutive days,
                      with the end of that period within 31 days of applying. Pakistan
                      is not on the UK&apos;s differential-evidence list, so expect to
                      provide financial evidence with your application.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      TB test certificate from a Home Office-approved clinic — Pakistan
                      is a listed country, so the test is required for stays of 6 months
                      or more, and the certificate is valid for 6 months from the x-ray
                      date.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Visa application fee of £558 from outside the UK, plus the
                      Immigration Health Surcharge.
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-brand-blue pt-2">After you graduate</h3>
                <p>
                  The Graduate visa allows you to stay and work in the UK after
                  successfully completing your course for 2 years if you apply on or
                  before 31 December 2026, and for 18 months if you apply on or after
                  1 January 2027 (3 years for a PhD or other doctoral qualification).
                  January 2027 starters will graduate after the change date, so check
                  the rules in force when you graduate rather than relying on the
                  two-year figure.
                </p>
              </div>
            </div>

            {/* 5. Scholarships */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Scholarships Still Available
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  Scholarship availability for January starts is narrower than for
                  September, and what is still open depends on the university and the
                  course. Confirm with the university — at offer stage — what funding,
                  if any, is still available for your January start, before relying on
                  it in your budget. Do not assume a September scholarship applies to a
                  January start.
                </p>
                <p>
                  If funding is decisive for you, September entry usually offers the
                  widest scholarship choice. We can compare the January offer in hand
                  against waiting for September so the trade-off is explicit.
                </p>
              </div>
            </div>

            {/* 6. Closed course */}
            <div id="closed">
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                What to Do If Your Course Is Closed
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  January deadlines close early, and some already have. The University
                  of Brighton&apos;s January 2027 CAS deadlines for nationals of
                  Pakistan (and Bangladesh, Ghana, Iran, and Nigeria) were: application
                  deadline Friday 9 October 2026, deposit-and-documents deadline Friday
                  16 October 2026, and final CAS-actions date Friday 30 October 2026,
                  for a course start of Monday 8 February 2027. As of this page&apos;s
                  review date, the Brighton application deadline for Pakistani nationals
                  has passed — a reminder to check deadlines per university rather
                  than assuming January is still open everywhere.
                </p>
                <p>If your course is closed for January, your options are:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Ask the university directly whether late applications or a later
                      CAS are possible for your course — some courses stay open longer
                      than others, and only the university can confirm.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Check the same course at another university with a later January
                      deadline, or a closely related course with January availability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Use the time well: prepare your documents, hold your funds for the
                      required 28-day period, and complete your English evidence, so the
                      next intake application is ready to file.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Compare waiting for the next intake against a January start
                      elsewhere, including scholarship differences, before deciding.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enquiry module */}
            <div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Tell us your destination, study level, intake, and city, and we will
                check live January 2027 course availability for your profile — starting
                with a free profile evaluation. You can also reach us at{" "}
                <a href={`tel:${siteConfig.contact.phoneHref}`} className="text-brand-red font-semibold hover:text-brand-blue transition-colors">
                  {siteConfig.contact.phone}
                </a>{" "}
                or{" "}
                <Link href="/contact" className="text-brand-red font-semibold hover:text-brand-blue transition-colors">
                  book a consultation
                </Link>
                .
              </p>
              <ContactInquiryForm />
            </div>

            <p className="text-sm text-foreground/60">
              See also:{" "}
              <Link href="/study-visas/united-kingdom" className="text-brand-red font-semibold hover:text-brand-blue transition-colors">
                Study in the United Kingdom
              </Link>
              . Final admission and visa decisions always rest with the university
              and the embassy.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
