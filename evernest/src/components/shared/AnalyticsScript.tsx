import Script from "next/script"

// Loads Vercel Web Analytics (page views + custom events). The script is
// served by Vercel at /_vercel/insights/script.js once Web Analytics is
// enabled for the project; it 404s harmlessly elsewhere (e.g. local dev).
export function AnalyticsScript() {
  return (
    <Script
      src="/_vercel/insights/script.js"
      strategy="afterInteractive"
      data-sdkn="@vercel/analytics"
    />
  )
}
