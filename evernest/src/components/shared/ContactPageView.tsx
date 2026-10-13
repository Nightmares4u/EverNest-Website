"use client"

import * as React from "react"

import { trackEvent } from "@/lib/analytics"

export function ContactPageView() {
  React.useEffect(() => {
    trackEvent("contact_page_view")
  }, [])

  return null
}
