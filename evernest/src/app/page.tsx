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

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Study Abroad Consultants in Pakistan",
    description:
      "Plan your studies abroad with EverNest. Get guidance on universities, admissions, scholarships and student visas in Karachi, Lahore and Islamabad.",
    path: "/",
    keywords: [
      "study abroad consultants in Pakistan",
      "study visa consultants in Pakistan",
      "immigration consultants in Pakistan",
      "study abroad consultants Karachi",
      "study visa consultants Lahore",
      "EverNest Consultants",
      "B2B partnerships",
    ],
  }),
  title: { absolute: "Study Abroad Consultants in Pakistan | EverNest" },
}

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
