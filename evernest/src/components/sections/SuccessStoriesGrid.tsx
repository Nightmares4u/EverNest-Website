"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react"
import { startTransition, useEffect, useEffectEvent, useState } from "react"

import { successStories } from "@/data/success-stories"

const AUTO_ADVANCE_MS = 5000

/**
 * `headingLevel` keeps the document outline valid: this block is one section
 * among many on the homepage (h2), but the page's main heading on
 * /success-stories (h1).
 */
export function SuccessStoriesGrid({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2"
} = {}) {
  const Heading = headingLevel
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const storyCount = successStories.length
  const safeIndex = storyCount ? activeIndex % storyCount : 0
  const activeStory = successStories[safeIndex]
  const hasMultipleStories = storyCount > 1
  const shouldContainOnMobile = activeStory?.mobileImageFit === "contain"
  const shouldUseContainedImage = activeStory?.imageFit === "contain" || shouldContainOnMobile
  const shouldCoverOnDesktop = shouldContainOnMobile && activeStory?.imageFit !== "contain"

  const goToStory = (nextIndex: number) => {
    if (!storyCount || nextIndex === safeIndex) {
      return
    }

    setDirection(getDirection(safeIndex, nextIndex, storyCount))
    startTransition(() => {
      setActiveIndex(nextIndex)
    })
  }

  const stepStory = (step: number) => {
    if (!hasMultipleStories) {
      return
    }

    setDirection(step > 0 ? 1 : -1)
    startTransition(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + step + storyCount) % storyCount
      })
    })
  }

  const advanceStory = useEffectEvent(() => {
    stepStory(1)
  })

  useEffect(() => {
    if (prefersReducedMotion || !hasMultipleStories) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      advanceStory()
    }, AUTO_ADVANCE_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeStory?.id, hasMultipleStories, prefersReducedMotion])

  if (!activeStory) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(225,29,46,0.12),_transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-20 lg:py-28"
      id="success-stories"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-grid-soft opacity-40" />

      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-red-100 bg-white px-4 py-1 text-xs font-semibold tracking-[0.24em] text-red-600 uppercase shadow-sm">
            Client Wins On Repeat
          </span>
          <Heading className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Success Stories That <span className="text-red-600">Keep Moving</span>
          </Heading>
          <p className="mt-4 text-lg text-slate-600">
            Explore real Evernest outcomes through an auto-rolling story reel. It advances every 5 seconds, and visitors can swipe, tap, or use the arrows to move at their own pace.
          </p>
        </div>

        <motion.div
          drag={hasMultipleStories ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            if (info.offset.x <= -80) {
              stepStory(1)
            }

            if (info.offset.x >= 80) {
              stepStory(-1)
            }
          }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-slate-950 text-white shadow-[0_32px_90px_rgba(15,23,42,0.18)]"
        >
          <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />

          <div className="relative grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="relative min-h-[420px] overflow-hidden bg-slate-900 lg:min-h-[620px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStory.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : direction > 0 ? 44 : -44,
                    scale: prefersReducedMotion ? 1 : 1.03,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : direction > 0 ? -44 : 44,
                    scale: prefersReducedMotion ? 1 : 0.98,
                  }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {shouldUseContainedImage ? (
                    <>
                      <Image
                        src={activeStory.imagePath}
                        alt=""
                        aria-hidden="true"
                        fill
                        priority={activeIndex === 0}
                        className="scale-110 object-cover blur-xl"
                        style={{ objectPosition: activeStory.imagePosition ?? "center center" }}
                        sizes="(max-width: 1024px) 100vw, 52vw"
                      />
                      <div className="absolute inset-0 bg-slate-950/24" />
                      <div
                        className={`absolute inset-0 p-5 sm:p-6 ${
                          shouldCoverOnDesktop ? "lg:p-0" : "lg:p-8"
                        }`}
                      >
                        <Image
                          src={activeStory.imagePath}
                          alt={activeStory.imageAlt}
                          fill
                          priority={activeIndex === 0}
                          className={shouldCoverOnDesktop ? "object-contain lg:object-cover" : "object-contain"}
                          style={{ objectPosition: activeStory.imagePosition ?? "center top" }}
                          sizes="(max-width: 1024px) 100vw, 52vw"
                        />
                      </div>
                    </>
                  ) : (
                    <Image
                      src={activeStory.imagePath}
                      alt={activeStory.imageAlt}
                      fill
                      priority={activeIndex === 0}
                      className="object-cover object-top"
                      style={{ objectPosition: activeStory.imagePosition ?? "center top" }}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.38)_52%,rgba(2,6,23,0.82)_100%)]" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-3 p-5 lg:p-7">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                  {activeStory.destinationCountry || activeStory.serviceType}
                </div>
                <div className="rounded-full bg-emerald-400/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-lg">
                  {activeStory.outcomeLabel}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7">
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                    Story {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                    {activeStory.reviewSource === "google"
                      ? "Google Review"
                      : activeStory.reviewSource === "facebook"
                        ? "Facebook Review"
                        : "Direct Testimonial"}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:p-8 lg:min-h-[620px] lg:p-10">
              <div>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-red-300">
                      Success Reel
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Swipe left or right, or let the story roll automatically.
                    </p>
                  </div>

                  {hasMultipleStories ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => stepStory(-1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/14"
                        aria-label="Show previous success story"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => stepStory(1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/14"
                        aria-label="Show next success story"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : null}
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${activeStory.id}-content`}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 24,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : -20,
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeStory.rating ? (
                      <div className="mb-5 flex items-center gap-1 text-amber-300">
                        {[...Array(activeStory.rating)].map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    ) : null}

                    <div className="flex items-start gap-4">
                      <div className="mt-1 hidden rounded-2xl bg-white/8 p-3 text-red-300 sm:block">
                        <Quote className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                          {formatClientName(activeStory.clientName, activeStory.privacyMode)}
                        </h3>
                        <p className="mt-3 text-base font-medium text-red-200">
                          {activeStory.serviceType}
                        </p>
                        <blockquote className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                          &quot;{activeStory.displayQuote || activeStory.testimonialQuote}&quot;
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8">
                <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={activeStory.id}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: prefersReducedMotion || !hasMultipleStories ? 0 : AUTO_ADVANCE_MS / 1000,
                      ease: "linear",
                    }}
                    className="h-full rounded-full bg-red-400"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <p>
                    {String(activeIndex + 1).padStart(2, "0")} / {String(successStories.length).padStart(2, "0")}
                  </p>
                  <p>Auto-rolling every 5 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {successStories.map((story, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={story.id}
                type="button"
                onClick={() => goToStory(index)}
                className={`group min-w-[260px] flex-1 rounded-2xl border p-3 text-left transition ${
                  isActive
                    ? "border-red-200 bg-white shadow-[0_18px_50px_rgba(225,29,46,0.12)]"
                    : "border-slate-200/80 bg-white/80 hover:border-slate-300 hover:bg-white"
                }`}
                aria-label={`Show story from ${formatClientName(story.clientName, story.privacyMode)}`}
                aria-pressed={isActive}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={story.imagePath}
                      alt={story.imageAlt}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-slate-900">
                      {formatClientName(story.clientName, story.privacyMode)}
                    </p>
                    <p className="mt-1 truncate text-sm text-slate-500">
                      {story.destinationCountry || story.serviceType}
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  {isActive ? (
                    <motion.div
                      key={`${story.id}-rail-progress`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: prefersReducedMotion || !hasMultipleStories ? 0 : AUTO_ADVANCE_MS / 1000,
                        ease: "linear",
                      }}
                      className="h-full rounded-full bg-red-500"
                    />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  )
}

function formatClientName(clientName: string, privacyMode?: "full" | "initials" | "firstName") {
  if (privacyMode === "initials") {
    return clientName
      .split(" ")
      .map((name) => name[0])
      .join("")
  }

  if (privacyMode === "firstName") {
    return clientName.split(" ")[0]
  }

  return clientName
}

function getDirection(currentIndex: number, nextIndex: number, totalStories: number) {
  if (currentIndex === totalStories - 1 && nextIndex === 0) {
    return 1
  }

  if (currentIndex === 0 && nextIndex === totalStories - 1) {
    return -1
  }

  return nextIndex > currentIndex ? 1 : -1
}
