import type { Metadata } from "next"
import { SuccessStoriesGrid } from "@/components/sections/SuccessStoriesGrid"
import { VideoReelsShowcase } from "@/components/sections/VideoReelsShowcase"
import { GoogleReviewsShowcase } from "@/components/sections/GoogleReviewsShowcase"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { successStoriesGoogleReviews } from "@/data/google-reviews"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Read success stories and client outcomes across study visa and immigration pathways supported by EverNest Consultants.",
  path: "/success-stories",
  keywords: ["Success stories", "study visa outcomes", "immigration outcomes", "EverNest Consultants"],
})

export default function SuccessStoriesPage() {
  return (
    <div className="pt-20">
      <SuccessStoriesGrid headingLevel="h1" />
      <VideoReelsShowcase />
      <GoogleReviewsShowcase reviews={successStoriesGoogleReviews} />
      <FinalCTA />
    </div>
  )
}
