export type VideoReel = {
  id: string
  title: string
  label: string
  description: string
  youtubeId: string
  sourceUrl: string
  embedUrl: string
  active: boolean
}

export const videoReels: VideoReel[] = [
  {
    id: "hanzala-sapienza-success",
    title: "Hanzala's Sapienza University Success",
    label: "Student Success Reel",
    description:
      "Hanzala secured admission to Sapienza University of Rome, Italy's top-ranked university and one of the oldest universities in the world, with EverNest's study abroad guidance.",
    youtubeId: "srLSVZ4eDj8",
    sourceUrl: "https://youtube.com/shorts/srLSVZ4eDj8?feature=share",
    embedUrl: "https://www.youtube.com/embed/srLSVZ4eDj8",
    active: true,
  },
  {
    id: "syed-uneeb-cyprus-success",
    title: "Syed Uneeb is heading to Cyprus",
    label: "Student Success Reel",
    description:
      "Syed Uneeb, an alumnus of Iqra University, secured admission to the University of Limassol in Cyprus with EverNest's structured study abroad guidance — from profile assessment to university application.",
    youtubeId: "u-Es-dYqZ1s",
    sourceUrl: "https://youtube.com/shorts/u-Es-dYqZ1s?feature=share",
    embedUrl: "https://www.youtube.com/embed/u-Es-dYqZ1s",
    active: true,
  },
  {
    id: "canada-student-visa-success",
    title: "Success Story: Student Visa for Canada",
    label: "Student Success Reel",
    description:
      "Hear it directly from one of our students who trusted EverNest with their Canada study abroad journey — from selecting the right program and institution to navigating the full application and visa process.",
    youtubeId: "vAE9owadmyA",
    sourceUrl: "https://youtube.com/shorts/vAE9owadmyA?feature=share",
    embedUrl: "https://www.youtube.com/embed/vAE9owadmyA",
    active: true,
  },
]

export const activeVideoReels = videoReels.filter((reel) => reel.active)
