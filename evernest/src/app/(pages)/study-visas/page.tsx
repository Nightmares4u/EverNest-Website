import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Compass,
  GraduationCap,
} from "lucide-react"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { studyVisasData } from "@/data/study-visas"
import { buildMetadata, getFirstSentence } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  // Ranked ~7 with a 0% CTR: good position, but "Study Visas" gave searchers
  // no reason to click. Now targets the commercial query and states the offer.
  title: "Study Visa Consultants in Pakistan",
  description:
    "Study visa guidance for 18 destinations including the UK, Canada, Italy, and Australia. Free profile evaluation from British Council certified consultants.",
  path: "/study-visas",
  keywords: [
    "study visa consultants in Pakistan",
    "study abroad consultants Karachi",
    "student visa consultants Lahore",
    "study visa destinations",
    "EverNest Consultants",
  ],
})

const destinations = Object.entries(studyVisasData).map(([slug, data]) => ({
  name: data.name,
  slug,
  image: data.homepageImage || data.sectionBackgroundImage,
  imageAlt: data.homepageImage ? (data.imageAlt || data.name) : (data.backgroundImageAlt || data.name),
  code:
    ({
      italy: "IT",
      france: "FR",
      uae: "AE",
      usa: "US",
      canada: "CA",
      "united-kingdom": "UK",
      finland: "FI",
      turkey: "TR",
      georgia: "GE",
      azerbaijan: "AZ",
      ireland: "IE",
      malta: "MT",
      uzbekistan: "UZ",
      malaysia: "MY",
      spain: "ES",
      cyprus: "CY",
      australia: "AU",
    }[slug] || data.name.substring(0, 2).toUpperCase()),
  desc: getFirstSentence(data.heroDesc),
  cost: data.costs?.[0]?.desc || "Varies by program"
}))

const studyHeroImages = [
  studyVisasData["united-kingdom"]?.homepageImage,
  studyVisasData.canada?.homepageImage,
  studyVisasData.italy?.homepageImage,
].filter(Boolean).map((src, index) => ({
  src: src as string,
  alt: ["United Kingdom study destination", "Canada study destination", "Italy study destination"][index],
}))

export default function StudyVisasIndexPage() {
  return (
    <>
      {/* Hero Section */}
      <CinematicPageHero
        variant="study"
        eyebrow="Secure a Study Visa"
        icon={<GraduationCap className="h-7 w-7" />}
        title={<>Studying Abroad is No More Than a <span className="text-brand-red">Dream</span></>}
        subtitle="The top institutes of the world are waiting. EverNest helps you find the one that suits you."
        chips={["United States", "Canada", "United Kingdom", "Australia", "New Zealand", "European Union countries"]}
        galleryImages={studyHeroImages}
        visualLabel="Explore study destinations"
        center
      />

      {/* Intro Section */}
      <section className="py-16 bg-white border-b border-border-subtle">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">
            EverNest Simplifies Your Journey to Study Abroad
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We have proven experts who understand your preferences and guide you towards a suitable study destination.
          </p>
        </div>
      </section>

      {/* Dynamic Destinations Grid */}
      <section className="py-20 bg-brand-ice/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-blue">Explore Our Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <Link 
                key={dest.name} 
                href={`/study-visas/${dest.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-border-subtle shadow-sm hover:shadow-card hover:border-brand-blue/30 hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {dest.image ? (
                    <>
                      <Image
                        src={dest.image}
                        alt={dest.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.12)_32%,rgba(7,18,42,0.5)_100%)]"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,18,42,0.26)_0%,rgba(7,18,42,0.1)_46%,rgba(7,18,42,0.16)_100%)]"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,#08162f_0%,#102750_54%,#183978_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.24),transparent_28%)]" />
                      <div className="absolute -right-12 top-8 h-44 w-44 rounded-full border border-white/10 bg-white/5" />
                      <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-brand-red/18 blur-2xl" />
                    </>
                  )}
                  <div className="absolute bottom-4 left-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white font-bold font-display">
                    {dest.code}
                  </div>
                  <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-red group-hover:border-transparent transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">{dest.name}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {dest.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border-subtle flex justify-between items-start text-sm font-medium">
                    <span className="text-foreground/50 mr-4 flex-shrink-0">Tuition</span>
                    <span className="text-brand-blue text-right line-clamp-2">{dest.cost}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What EverNest Offers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">What Can EverNest Offer?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Along with securing your admission to a top university, EverNest stays by your side every step of the way, offering these added benefits to ensure you settle smoothly and confidently in your new country.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-neutral rounded-2xl p-8 border border-border-subtle hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Scholarship Opportunities</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                We understand that university fees can be overwhelming — that’s why we go the extra mile to help you unlock generous scholarships and financial aid opportunities, so you can focus on your future, not your finances.
              </p>
            </div>
            
            <div className="bg-brand-neutral rounded-2xl p-8 border border-border-subtle hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Pre-departure Assistance</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Admission secured? Now, we help you with the challenges that are ahead. EverNest helps you with booking an air ticket, arranging your accommodation, and other minor things. To ensure everything goes smoothly, EverNest also offers a pre-departure seminar, which is free of charge.
              </p>
            </div>
            
            <div className="bg-brand-neutral rounded-2xl p-8 border border-border-subtle hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Part-time Study</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Want to self-finance your education? We help you legally secure a part-time job that meets the country’s legal guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Types of Study Visas That Are Available</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For the United States</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>F-1 Visa:</strong> For academic programs (e.g. university, college, language school); allows part-time on-campus work.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For Canada</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Study Permit:</strong> Allows part-time work during study.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Post-Graduation Work Permit:</strong> After completing a program at an eligible DLI, you can apply for a PGWP.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For the United Kingdom</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Student Visa:</strong> For full-time study at licensed institutions; allows limited work during term and full-time in holidays.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Short-term Study Visa:</strong> For English courses up to 11 months; no work allowed.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For Australia</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Subclass 500:</strong> Main student visa for full-time study; allows 48 hours of work per fortnight during sessions.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Subclass 590:</strong> For guardians of underage international students.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For New Zealand</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Fee Paying Student Visa:</strong> For full-time study, 20 hours of work per week is allowed during the term.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Pathway Student Visa:</strong> Covers multiple courses under one visa.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Exchange Student Visa:</strong> For government-approved exchange programs.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-red mb-4">Visa For the European Union</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>National Long-Stay Visa (D-Visa):</strong> Required for studies over 90 days in most EU countries like Italy, France, Spain, Germany, Cyprus; usually allows part-time work.</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-brand-red mt-0.5" />
                  <span className="text-brand-ice/90"><strong>Short-Stay Visa (C-Visa):</strong> For courses under 90 days; no work rights.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-ice/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-blue">What People Ask</h2>
          </div>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-border-subtle overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                Can EverNest Help Me With Pre-departure?
                <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                Yes. We can help make travel plans like booking flights, airport pickups, and more.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-border-subtle overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                What Kind of Assistance Can You Provide For Course Selection?
                <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                After understanding your goals and preferences, we help you with the application process to ensure you opt for the right courses.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-border-subtle overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                Are There Any Specific Language Proficiency Tests I Need to Give?
                <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                Generally, universities require students to have a valid IELTS and TOEFL. You can prepare yourself for these tests from platforms like Duolingo and Language Cert.
              </div>
            </details>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
