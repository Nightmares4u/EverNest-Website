import type { Metadata } from "next"

import { FinalCTA } from "@/components/sections/FinalCTA"
import { InstitutionLogoGrid } from "@/components/shared/InstitutionLogoGrid"
import {
  institutionsByRegion,
  institutionalNetworkSection,
} from "@/data/institutional-network"
import { buildMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/shared/JsonLd"

export const metadata: Metadata = buildMetadata({
  title: "Institutional Network & Credentials",
  description:
    "Explore the university and institutional network behind EverNest Consultants' study-abroad pathways, admissions support, and student placements.",
  path: "/about/credentials",
  keywords: [
    "EverNest institutional network",
    "global university network",
    "study abroad institutions",
  ],
})

export default function AboutCredentialsPage() {
  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Credentials", path: "/about/credentials" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="relative overflow-hidden bg-brand-ice pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,46,0.06),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(11,27,58,0.08),transparent_30%)]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-red/12 bg-brand-blush px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              Credentials View
            </span>
            <h1 className="mt-5 text-4xl font-display font-bold tracking-tight text-brand-blue md:text-6xl">
              {institutionalNetworkSection.heading}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
              {institutionalNetworkSection.subtitle}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Logos and institution names are presented here for destination signaling and network context within EN Consultants&apos; study-abroad support ecosystem. They should not be interpreted as standalone official partnership claims unless separately documented.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="space-y-10">
            {institutionsByRegion.map(({ region, institutions }) => (
              <div
                key={region}
                className="rounded-[32px] border border-brand-blue/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8"
              >
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                      {region}
                    </p>
                    <h2 className="mt-3 text-3xl font-display font-bold text-brand-blue">
                      {region} Institutions
                    </h2>
                  </div>
                  <p className="text-sm leading-7 text-slate-500">
                    {institutions.length} institutions in this regional cluster.
                  </p>
                </div>

                <InstitutionLogoGrid
                  institutions={institutions}
                  gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
