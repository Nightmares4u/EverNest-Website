import type { Metadata } from "next"

import { Hero } from "@/components/sections/Hero"
import { OurJourney } from "@/components/sections/OurJourney"
import { CoreServices } from "@/components/sections/CoreServices"
import { SplitSection } from "@/components/sections/SplitSection"
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations"
import { FeaturedImmigration } from "@/components/sections/FeaturedImmigration"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { WhyEvernest } from "@/components/sections/WhyEvernest"
import { B2BHighlight } from "@/components/sections/B2BHighlight"
import { VideoReelsShowcase } from "@/components/sections/VideoReelsShowcase"
import { SuccessStoriesGrid } from "@/components/sections/SuccessStoriesGrid"
import { GoogleReviewsShowcase } from "@/components/sections/GoogleReviewsShowcase"
import { PartnerStrip } from "@/components/sections/PartnerStrip"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { homepageGoogleReviews } from "@/data/google-reviews"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Study Visa & Immigration Consultants in Pakistan",
  description:
    "EverNest Consultants (EN Consultants Pvt Ltd) — British Council certified study visa and immigration consultants in Karachi, Lahore & Islamabad. Study abroad, work permits, and B2B partnerships.",
  path: "/",
  keywords: [
    "study visa consultants in Pakistan",
    "immigration consultants in Pakistan",
    "study abroad consultants Karachi",
    "study visa consultants Lahore",
    "EverNest Consultants",
    "B2B partnerships",
  ],
})

export default function Home() {
  return (
    <>
      <Hero />
      <OurJourney />
      <CoreServices />
      <FeaturedDestinations />
      <SplitSection />
      <FeaturedImmigration />
      <WhyEvernest />
      <ProcessSteps />
      <B2BHighlight />
      <VideoReelsShowcase />
      <SuccessStoriesGrid />
      <GoogleReviewsShowcase reviews={homepageGoogleReviews} compact />
      <PartnerStrip />
      <FinalCTA />
    </>
  );
}
