import type { Metadata } from "next"
import { Manrope, Playfair_Display } from "next/font/google"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { JsonLd } from "@/components/shared/JsonLd"
import { StickyActions } from "@/components/shared/StickyActions"
import { siteConfig } from "@/data/site"
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema"

import "./globals.css"

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Study Visas, Immigration & Partnerships",
    template: "%s | EverNest Consultants",
  },
  description:
    "EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd., provides study visa, immigration, and B2B partnership consulting with a Pakistan-rooted and internationally connected team.",
  applicationName: siteConfig.name,
  metadataBase: new URL("https://www.evernestconsultants.com"),
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  openGraph: {
    title: siteConfig.name,
    description:
      "Study visa, immigration, and B2B partnership consulting from EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd.",
    siteName: siteConfig.name,
    type: "website",
    url: "https://www.evernestconsultants.com",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Study visa, immigration, and B2B partnership consulting from EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd.",
  },
  keywords: [
    siteConfig.name,
    "EN Consultants (Pvt) Ltd.",
    "study visas",
    "immigration",
    "work permits",
    "student counseling",
    "B2B partnerships",
    "university recruitment",
    "global mobility consulting",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <JsonLd data={[buildOrganizationSchema(), buildWebSiteSchema()]} />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
