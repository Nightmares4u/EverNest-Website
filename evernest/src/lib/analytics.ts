// Vercel Web Analytics custom events for the contact funnel.
//
// Uses the same `window.va` queue that `@vercel/analytics` uses, so events
// are picked up once /_vercel/insights/script.js loads (see
// components/shared/AnalyticsScript.tsx). Payloads are deliberately limited
// to non-PII strings: the page path and a fixed `source` label. Never pass
// form values (name, email, phone, destination, message) here.

export type FunnelEvent =
  | "contact_page_view"
  | "contact_form_submit"
  | "whatsapp_open"

type EventData = Record<string, string>

type VaWindow = Window & {
  va?: (command: "event", payload: { name: string; data?: EventData }) => void
  vaq?: unknown[]
}

export function trackEvent(name: FunnelEvent, data: { source?: string } = {}) {
  if (typeof window === "undefined") return

  const w = window as VaWindow
  if (!w.va) {
    w.va = function (...args: unknown[]) {
      ;(w.vaq = w.vaq || []).push(args)
    } as VaWindow["va"]
  }

  w.va!("event", {
    name,
    data: { path: window.location.pathname, ...data },
  })
}
