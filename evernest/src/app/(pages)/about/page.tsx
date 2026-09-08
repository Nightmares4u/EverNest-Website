import type { Metadata } from "next"
import { Eye, Target } from "lucide-react"
import { OfficeMediaCarousel } from "@/components/shared/OfficeMediaCarousel"
import { LeadershipProfile } from "@/components/sections/LeadershipProfile"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { TrustPartnershipsSection } from "@/components/sections/TrustPartnershipsSection"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn more about EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd., including the firm’s background, mission, and client-focused approach.",
  path: "/about",
  keywords: ["About EverNest Consultants", siteConfig.legalName, "study visa consultants in Pakistan"],
})

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-ice overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
              About <span className="text-brand-red">EverNest</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Founded in {siteConfig.registeredYear}, EverNest Consultants is a leading business, education, and immigration consultancy firm serving students, professionals, and partners from Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-4">Our Story</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Over the years, we have developed a strong portfolio in the consultancy market by providing professional, tailored solutions to valuable clients. We believe that practicing our core values of honesty, dignity, and professionalism has served as the backbone to our success story.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                  <div className="h-12 w-12 rounded-xl bg-white text-brand-red flex items-center justify-center mb-4 shadow-sm">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">Our Vision</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Introducing effective investment and educational strategies to empower individuals, entrepreneurs, and professionals eager to brighten their future.
                  </p>
                </div>
                
                <div className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                  <div className="h-12 w-12 rounded-xl bg-white text-brand-red flex items-center justify-center mb-4 shadow-sm">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">Our Mission</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    To settle the limitations associated with global mobility. We are highly committed to ensuring confidentiality and transparency to develop a reliable bond with our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <OfficeMediaCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Core Principles
            </h2>
            <p className="text-brand-ice/80">
              The foundation of everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-red">01</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Strategy</h3>
              <p className="text-sm text-brand-ice/70">Profit-oriented bespoke strategies that fit your individual needs.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-red">02</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Expertise</h3>
              <p className="text-sm text-brand-ice/70">A team with deep domain expertise focused on clear guidance, compliant processes, and responsible next-step planning.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-red">03</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Communication</h3>
              <p className="text-sm text-brand-ice/70">Detailed and precise communication to understand your unique requirements.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-red">04</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Flexibility</h3>
              <p className="text-sm text-brand-ice/70">Ultimate flexibility in our approaches to overcome uncertainties readily.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadershipProfile headingLevel="h2" />
      <TrustPartnershipsSection />

      <FinalCTA />
    </>
  )
}
