export type MediaPlatform = "youtube" | "tiktok" | "facebook" | "coming-soon";

export type MediaFeature = {
  id: string;
  title: string;
  description: string;
  platform: MediaPlatform;
  label?: string;
  url?: string;
  youtubeEmbedUrl?: string;
  ctaLabel?: string;
  featured?: boolean;
  /** YouTube video id, used to derive the thumbnail for VideoObject schema. */
  videoId?: string;
  /** ISO 8601 upload date, read from the live YouTube page. Required by
   *  VideoObject — never approximate it, invalid dates void the markup. */
  uploadDate?: string;
  /** ISO 8601 duration, e.g. PT26M25S. */
  duration?: string;
  /** Channel that published the video. Three of these are appearances on
   *  other people's shows, so the schema must credit them, not us. */
  channelName?: string;
};

export const sirRazaMediaSection = {
  heading: "In Conversation with Mr. Raza",
  subtitle:
    "Watch selected podcasts and public sessions where Mr. Raza discusses study abroad, immigration pathways, scholarships, visas, and global opportunities.",
};

export const mediaFeatures: MediaFeature[] = [
  {
    id: "syed-raza-the-visa-expert",
    videoId: "aHTRGpQ85vE",
    uploadDate: "2025-06-25T07:23:02-07:00",
    duration: "PT26M25S",
    channelName: "The Trend Point",
    title: "Syed Raza: The Visa Expert",
    description:
      "Mr. Raza shares practical guidance on visas, international education, and global pathways.",
    platform: "youtube",
    label: "YouTube Feature",
    url: "https://youtu.be/aHTRGpQ85vE?si=rSAnINNPtinef3_W",
    youtubeEmbedUrl: "https://www.youtube.com/embed/aHTRGpQ85vE",
    ctaLabel: "Watch on YouTube",
    featured: true,
  },
  {
    id: "scholarships-visas-eu",
    videoId: "OJKEuyWwNZ8",
    uploadDate: "2023-04-18T09:25:59-07:00",
    duration: "PT37M18S",
    channelName: "Ailaan",
    title: "How to Get Scholarships and Visas for the EU",
    description:
      "A focused discussion on scholarships, European study options, and visa planning.",
    platform: "youtube",
    label: "YouTube Podcast",
    url: "https://www.youtube.com/watch?v=OJKEuyWwNZ8",
    youtubeEmbedUrl: "https://www.youtube.com/embed/OJKEuyWwNZ8",
    ctaLabel: "Watch on YouTube",
  },
  {
    id: "how-to-get-canadian-pr",
    videoId: "TNCQAHXmipA",
    uploadDate: "2023-08-07T06:54:01-07:00",
    duration: "PT24M38S",
    channelName: "Ailaan",
    title: "How to Get Canadian PR",
    description:
      "Mr. Raza discusses Canadian PR pathways and practical immigration planning.",
    platform: "youtube",
    label: "YouTube Podcast",
    url: "https://www.youtube.com/watch?v=TNCQAHXmipA",
    youtubeEmbedUrl: "https://www.youtube.com/embed/TNCQAHXmipA",
    ctaLabel: "Watch on YouTube",
  },
  {
    id: "jinnah-polytechnic-seminar",
    videoId: "vXRQ85lzMSk",
    uploadDate: "2026-05-05T04:02:26-07:00",
    duration: "PT4M5S",
    channelName: "EverNest Consultants",
    title: "Seminar at Jinnah Polytechnic",
    description:
      "A public seminar session by Mr. Raza at Jinnah Polytechnic, highlighting education and immigration guidance for students.",
    platform: "youtube",
    label: "YouTube Session",
    url: "https://www.youtube.com/watch?v=vXRQ85lzMSk",
    youtubeEmbedUrl: "https://www.youtube.com/embed/vXRQ85lzMSk",
    ctaLabel: "Watch on YouTube",
  },
];
