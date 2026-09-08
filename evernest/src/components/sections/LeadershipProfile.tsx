import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Clock3,
  PlayCircle,
  Podcast,
  Radio,
} from "lucide-react"

import { sirRazaProfile } from "@/data/leadership"
import { mediaFeatures, sirRazaMediaSection, type MediaPlatform } from "@/data/media"

/**
 * `headingLevel` keeps the document outline valid: this block is the main
 * subject on /about/sir-raza (h1), but a section within /about, which has its
 * own h1 (h2).
 */
export function LeadershipProfile({
  headingLevel = "h1",
}: {
  headingLevel?: "h1" | "h2"
}) {
  const NameHeading = headingLevel
  const featuredMedia = mediaFeatures.find((item) => item.featured)
  const supportingMedia = mediaFeatures.filter((item) => !item.featured)
  const supportingVideoMedia = supportingMedia.filter(
    (item) => item.platform === "youtube" && item.youtubeEmbedUrl,
  )
  const upcomingMedia = supportingMedia.filter(
    (item) => !(item.platform === "youtube" && item.youtubeEmbedUrl),
  )

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07122a_0%,#0b1b3a_100%)] pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,46,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-sm font-medium text-red-200 backdrop-blur-sm">
                Leadership
              </div>
              <NameHeading className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {sirRazaProfile.name}
              </NameHeading>
              <p className="mt-4 text-xl text-blue-100">{sirRazaProfile.title}</p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-200 md:text-lg">
                {sirRazaProfile.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {sirRazaProfile.areasOfExpertise.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-2"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14"
                >
                  Speak With EN Consultants
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              {sirRazaProfile.portraitImage ? (
                <div className="relative mb-6 overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/20">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
                    <Image
                      src={sirRazaProfile.portraitImage.src}
                      alt={sirRazaProfile.portraitImage.alt}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.025]"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.02)_0%,rgba(7,18,42,0.08)_56%,rgba(7,18,42,0.42)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                        Leadership
                      </div>
                      <p className="mt-3 text-sm font-medium text-slate-100/88">
                        Mr. Raza representing EverNest Consultants in a corporate partnership setting.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {sirRazaProfile.credentials.map((credential) => (
                  <div
                    key={credential.label}
                    className="rounded-2xl border border-white/8 bg-slate-950/30 p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
                      {credential.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200/88">
                      {credential.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(225,29,46,0.16),rgba(255,255,255,0.04))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-100">
                  Public-Facing Brand
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  EverNest Consultants
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200/88">
                  EN Consultants (Pvt) Ltd. serves students, families, professionals, and investors through the EverNest Consultants trading brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
              {sirRazaMediaSection.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {sirRazaMediaSection.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]">
            {featuredMedia ? (
              <article className="overflow-hidden rounded-[28px] border border-border-subtle bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="aspect-video w-full overflow-hidden bg-slate-950">
                  {featuredMedia.platform === "youtube" && featuredMedia.youtubeEmbedUrl ? (
                    <iframe
                      src={featuredMedia.youtubeEmbedUrl}
                      title={featuredMedia.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : null}
                </div>

                <div className="grid gap-5 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-brand-blush px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                      YouTube
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                      <PlayCircle className="h-4 w-4 text-brand-red" />
                      Featured Video
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      {featuredMedia.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
                      {featuredMedia.description}
                    </p>
                  </div>

                  {featuredMedia.url ? (
                    <div>
                      <Link
                        href={featuredMedia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-2"
                      >
                        {featuredMedia.ctaLabel || "Watch Video"}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            ) : null}

            <div className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {supportingVideoMedia.map((media) => (
                  <article
                    key={media.id}
                    className="overflow-hidden rounded-[24px] border border-border-subtle bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-950">
                      <iframe
                        src={media.youtubeEmbedUrl}
                        title={media.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ice text-brand-blue">
                          {platformIcon(media.platform)}
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {media.label || platformLabel(media.platform)}
                        </span>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900">
                          {media.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {media.description}
                        </p>
                      </div>

                      {media.url ? (
                        <div className="mt-6">
                          <Link
                            href={media.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/12 bg-white px-4 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue/30 hover:bg-brand-ice"
                          >
                            {media.ctaLabel || "Watch Video"}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>

              {upcomingMedia.map((media) => (
                <article
                  key={media.id}
                  className="flex h-full flex-col rounded-[24px] border border-border-subtle bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ice text-brand-blue">
                      {platformIcon(media.platform)}
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {media.label || platformLabel(media.platform)}
                    </span>
                  </div>

                  <div className="mt-5 flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {media.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {media.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {media.url ? (
                      <Link
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-brand-blue/12 bg-white px-4 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue/30 hover:bg-brand-ice"
                      >
                        {media.ctaLabel || "Watch Video"}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-800">
                        <Clock3 className="h-4 w-4" />
                        {media.ctaLabel || "Coming Soon"}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function platformLabel(platform: MediaPlatform) {
  if (platform === "youtube") {
    return "YouTube"
  }

  if (platform === "tiktok") {
    return "TikTok"
  }

  if (platform === "facebook") {
    return "Facebook"
  }

  return "Coming Soon"
}

function platformIcon(platform: MediaPlatform) {
  if (platform === "youtube") {
    return <PlayCircle className="h-6 w-6" />
  }

  if (platform === "tiktok") {
    return <Podcast className="h-6 w-6" />
  }

  if (platform === "facebook") {
    return <Radio className="h-6 w-6" />
  }

  return <Clock3 className="h-6 w-6" />
}
