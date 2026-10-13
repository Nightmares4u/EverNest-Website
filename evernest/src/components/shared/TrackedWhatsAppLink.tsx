"use client"

import * as React from "react"

import { trackEvent } from "@/lib/analytics"

type Props = React.ComponentProps<"a"> & { source: string }

export function TrackedWhatsAppLink({ source, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent("whatsapp_open", { source })
        onClick?.(event)
      }}
    />
  )
}
