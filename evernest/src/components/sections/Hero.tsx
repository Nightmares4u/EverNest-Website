"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, animate } from "framer-motion"
import { ArrowRight, Award, Globe2, GraduationCap, Handshake, ShieldCheck, Waypoints } from "lucide-react"
import { siteConfig } from "@/data/site"
import { useEffect, useRef, useState } from "react"

const headlineWords = ["Study", "Abroad", "Consultants", "in"]
const headlineHighlight = "Pakistan"
const heroEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const wordVariants = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.72, ease: heroEase },
  },
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.22)
    y.set((e.clientY - r.top - r.height / 2) * 0.22)
  }

  const onLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 25 })
    animate(y, 0, { type: "spring", stiffness: 300, damping: 25 })
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ScrollCue() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 120)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:flex flex-col items-center gap-2 mt-12 select-none pointer-events-none"
      aria-hidden="true"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue/35">Scroll</span>
      <div className="relative h-8 w-px bg-brand-blue/15 overflow-visible">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-red animate-scroll-dot" />
      </div>
    </motion.div>
  )
}

export function Hero() {
  const trustBadges = [
    { icon: ShieldCheck, label: "Founded 2013" },
    { icon: Award, label: "British Council Certified" },
    { icon: Waypoints, label: "3 offices · 2 global desks" },
  ]

  const heroPanels = [
    {
      icon: GraduationCap,
      title: "Study Visas",
      desc: "Admissions, scholarship planning, and compliant filing support.",
      href: "/study-visas",
      cta: "Explore Study Destinations",
    },
    {
      icon: Globe2,
      title: "Immigration Pathways",
      desc: "Clear routes for skilled, work permit, and long-term mobility cases.",
      href: "/immigration",
      cta: "Explore Immigration",
    },
    {
      icon: Handshake,
      title: "B2B Partnerships",
      desc: "A professional operating model for institutional and consultant partners.",
      href: "/b2b-partnerships",
      cta: "Partner With EN Consultants",
    },
    {
      icon: Waypoints,
      title: "Global Desks",
      desc: "Pakistan headquarters with active North America and Europe global desks.",
      href: "/contact",
      cta: "View Contact Options",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-hero-mesh pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-grid-soft opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[68%] bg-[radial-gradient(circle_at_top_right,rgba(11,27,58,0.10),transparent_32%),radial-gradient(circle_at_top_left,rgba(225,29,46,0.10),transparent_25%)]"
        aria-hidden="true"
      />

      {/* Floating ambient orbs */}
      <div
        className="animate-orb-1 absolute -top-20 right-[-8%] h-[540px] w-[540px] rounded-full bg-brand-blue/8 blur-3xl mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="animate-orb-2 absolute -bottom-24 left-[-14%] h-[440px] w-[440px] rounded-full bg-brand-red/8 blur-3xl mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, x: "50%", y: "-50%" }}
        animate={{ opacity: 0.22, x: "33%", y: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="400" fill="url(#hero_radial_1)" />
          <defs>
            <radialGradient id="hero_radial_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#0B1B3A" />
              <stop offset="1" stopColor="#0B1B3A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 max-w-3xl">

            {/* Badge with ping ring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-brand-blue/10 bg-white/85 px-4 py-1.5 text-sm font-bold text-brand-blue mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5 mr-2.5">
                <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-red" />
              </span>
              EN Consultants (Pvt) Ltd. • Trading as EverNest Consultants
            </motion.div>

            {/* Word-by-word headline reveal */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-display font-bold tracking-[-0.02em] text-brand-blue mb-8 leading-[1.01]"
            >
              {headlineWords.map((word) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.28em]">
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
              <span className="inline-block overflow-hidden pb-5 -mb-5">
                <motion.span
                  variants={wordVariants}
                  className="inline-block text-brand-red relative"
                >
                  {headlineHighlight}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.95, duration: 0.55, ease: heroEase }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-brand-red origin-left"
                  />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-lg md:text-[1.18rem] text-brand-blue/78 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              EverNest Consultants helps students plan study abroad — university
              and course selection, admissions, scholarships, and student visa
              filing — from Karachi, Lahore, and Islamabad. We also support
              professionals and institutional partners with immigration pathways,
              work permits, and B2B partnerships, backed by global desks in North
              America and Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue/10 backdrop-blur shadow-sm"
                >
                  <Icon className="h-4 w-4 text-brand-red" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-glow">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/70 backdrop-blur-sm border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                  <Link href="/study-visas">Explore Study Destinations</Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-blue/65"
            >
              <span>Pakistan main line: {siteConfig.contact.phone}</span>
              <span>North America: {siteConfig.contact.northAmericaPhone}</span>
              <span>Europe: {siteConfig.contact.europePhone}</span>
            </motion.div>

            <ScrollCue />
          </div>

          {/* Advisory panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2rem] border border-brand-blue/12 bg-white/82 p-5 shadow-[0_25px_70px_-25px_rgba(11,27,58,0.32)] backdrop-blur-md md:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-brand-blue/10 pb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue/45">
                    Advisory Overview
                  </div>
                  <div className="mt-2 text-2xl font-display font-bold text-brand-blue">
                    Clear routes. Responsible guidance.
                  </div>
                </div>
                <div className="rounded-2xl bg-brand-red/10 px-3 py-2 text-right text-xs font-semibold text-brand-red">
                  3 offices
                  <br />
                  2 global desks
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {heroPanels.map(({ icon: Icon, title, desc, href, cta }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.5 + i * 0.06 }}
                    onMouseMove={(e) => {
                      const r = e.currentTarget.getBoundingClientRect()
                      e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
                      e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
                    }}
                    className="group spotlight-card rounded-[1.6rem] border border-brand-blue/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-sm shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-lg font-bold text-brand-blue">{title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/70">{desc}</p>
                        <Link
                          href={href}
                          className="inline-flex items-center mt-4 text-sm font-bold text-brand-red transition-colors hover:text-brand-blue"
                        >
                          {cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 rounded-[1.7rem] bg-[radial-gradient(120%_120%_at_0%_0%,#1a3a6e_0%,#0b1b3a_45%,#07122a_100%)] px-5 py-5 text-white md:grid-cols-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    North America Global Desk
                  </div>
                  <div className="mt-2 text-lg font-bold">{siteConfig.satelliteContacts[0].manager}</div>
                  <div className="text-sm text-brand-ice/75">
                    {siteConfig.satelliteContacts[0].managerTitle}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    Europe Global Desk
                  </div>
                  <div className="mt-2 text-lg font-bold">{siteConfig.satelliteContacts[1].manager}</div>
                  <div className="text-sm text-brand-ice/75">
                    {siteConfig.satelliteContacts[1].managerTitle}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
