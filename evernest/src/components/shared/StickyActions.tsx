"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/data/site"
import { trackEvent } from "@/lib/analytics"
import { MessageCircle, FileText } from "lucide-react"

export function StickyActions() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-end gap-3 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:flex-col">
      <Link
        href="/contact"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-white shadow-lg shadow-brand-red/20 transition-all hover:scale-105 hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 sm:h-14 sm:px-6"
        aria-label="Book Free Consultation"
      >
        <FileText className="h-5 w-5" />
        <span className="font-bold text-sm sm:text-base">Book Free Consultation</span>
      </Link>

      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_open", { source: "sticky_button" })}
        className="flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:h-14 sm:w-auto sm:px-6"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-bold hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
