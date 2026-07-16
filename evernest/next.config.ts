import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy URLs from the old WordPress site — still indexed by Google.
      // 301s transfer their ranking equity to the new pages.
      { source: "/study-visa", destination: "/study-visas", permanent: true },
      { source: "/work-visa", destination: "/immigration", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Country slugs that differ between old and new site (must come
      // before the generic /study-in-:country rule).
      {
        source: "/study-in-uk",
        destination: "/study-visas/united-kingdom",
        permanent: true,
      },
      {
        source: "/study-in-united-states",
        destination: "/study-visas/usa",
        permanent: true,
      },
      // Generic: /study-in-usa → /study-visas/usa, /study-in-azerbaijan →
      // /study-visas/azerbaijan, etc.
      {
        source: "/study-in-:country",
        destination: "/study-visas/:country",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
