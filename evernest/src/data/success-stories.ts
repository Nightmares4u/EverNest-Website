export type SuccessStory = {
  id: string;
  clientName: string;
  serviceType: string;
  destinationCountry?: string;
  outcomeLabel: string;
  testimonialQuote: string;
  displayQuote?: string; // Optional shortened version for display
  imagePath: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  mobileImageFit?: "cover" | "contain";
  imagePosition?: string;
  reviewSource?: "google" | "facebook" | "direct" | "video";
  rating?: 1 | 2 | 3 | 4 | 5; // Only if real verified review
  featured: boolean;
  date?: string;
  privacyMode?: "full" | "initials" | "firstName";
  videoUrl?: string; // Optional video paths
  videoPath?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "zia-abdullah-family",
    clientName: "Zia Abdullah",
    serviceType: "Settle Abroad Consultation",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "google",
    testimonialQuote:
      "A very experienced and humble gentleman Mr. Raza owned this business. He is well professional, and a good adviser. A great place to meet if you wanted to settle abroad.",
    displayQuote:
      "A very experienced and humble gentleman Mr. Raza owned this business. He is well professional, and a good adviser. A great place to meet if you wanted to settle abroad.",
    imagePath: "/images/success-stories/zia-abdullah-family.jpeg",
    imageAlt: "Zia Abdullah and family with Sir Raza at the Evernest Consultants office",
    imageFit: "cover",
    mobileImageFit: "contain",
    imagePosition: "center 30%",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "syed-uneeb-south-cyprus",
    clientName: "Syed Uneeb Ur Rehman",
    serviceType: "South Cyprus Study Process",
    destinationCountry: "South Cyprus",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "google",
    testimonialQuote:
      "I had a great experience with Evernest Consultant for my South Cyprus study process. Their team provided excellent support with university admission, documentation, and the visa application. Everything was handled professionally and smoothly, and they were always responsive to my queries. I highly recommend Evernest Consultant to anyone planning to study abroad.",
    displayQuote:
      "EN Consultants supported my South Cyprus study process from university admission to documentation and visa application. The team handled everything professionally, responded to my queries, and made the process smooth. I highly recommend them to anyone planning to study abroad.",
    imagePath: "/images/success-stories/syed-uneeb-south-cyprus.jpg",
    imageAlt: "Syed Uneeb Ur Rehman - South Cyprus Study Visa Success",
    mobileImageFit: "contain",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "hazique-hina-family-canada",
    clientName: "Hazique & Hina Zaheer",
    serviceType: "Canada Immigration",
    destinationCountry: "Canada",
    outcomeLabel: "Process Success",
    rating: 5,
    reviewSource: "google",
    testimonialQuote:
      "Having our process done with Evernest has been a great experience. Their staff members are really helpful and most importantly friendly and available to help whenever needed. Raza sir has been amazing with all his knowledge and expertise in guiding us through every single path. I would suggest anyone planning to go abroad to go for Evernest.",
    imagePath: "/images/success-stories/hazique-hina-family.jpg",
    imageAlt: "Hazique Zaheer and Hina Khan Family - Canada Immigration Success",
    mobileImageFit: "contain",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "kashif-arain-italy",
    clientName: "Kashif Arain",
    serviceType: "Italy Student Visa",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    reviewSource: "direct",
    testimonialQuote:
      "I am delighted to say that I got my Italy student visa, Alhamdulillah, through Evernest Consultancy. I am grateful to Sir Raza for providing me guidance, securing my admission in Italy's number one university, Sapienza University, and helping me manage the bank statements and FBR returns in a way that looked proper and authentic. To accomplish my goal, Sir Raza always guided me, answered my calls, and responded to my messages on time. The overall process was stress-free and well guided. I highly recommend Evernest Consultancy.",
    displayQuote:
      "Evernest Consultancy helped me secure admission to Sapienza University and guided me through my Italy student visa process, including support with bank statements and FBR returns. Sir Raza stayed responsive throughout and made the whole journey stress-free. I highly recommend them.",
    imagePath: "/images/success-stories/kashif-arain-italy.jpg",
    imageAlt: "Kashif Arain with Sir Raza after Italy student visa approval",
    imageFit: "cover",
    mobileImageFit: "contain",
    imagePosition: "center 44%",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "muhammad-ashar",
    clientName: "Muhammad Ashar",
    serviceType: "Malaysia Study Permit",
    destinationCountry: "Malaysia",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I had a great experience with Evernest Consultant for my visa process. Their team was professional, supportive, and guided me through every step smoothly. A special thanks to Sir Raza for his constant help, expert advice, and dedication, which played a key role in the successful approval of my visa. Highly recommended!",
    displayQuote:
      "Evernest Consultant guided me smoothly through my visa process with professional, supportive service at every step. Sir Raza's constant help, expert advice, and dedication played a key role in my successful visa approval. Highly recommended.",
    imagePath: "/images/success-stories/muhammad-ashar.jpg",
    imageAlt: "Muhammad Ashar with Sir Raza after Malaysia study permit approval",
    imageFit: "cover",
    mobileImageFit: "contain",
    imagePosition: "center 68%",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "saboor-quadwai",
    clientName: "Saboor Quadwai",
    serviceType: "Immigration Process",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I had an outstanding experience with Mr. Raza. From start to till date, he provided impeccable service and guidance that surpassed my expectations. Mr. Raza is highly knowledgeable about immigration processes and laws, ensuring that every step of my application was handled with precision and expertise. He patiently answered all my questions and concerns, making me feel confident throughout the entire process. Moreover, his professionalism is remarkable as he kept me updated and promptly responded to any inquiries I had. I truly felt like he cared about my case and was committed to helping me achieve my immigration goals. I highly recommend Evernest to anyone seeking immigration services. Their dedication to their clients and extensive expertise make them stand out in the field. Thank you once again for your exceptional service!",
    displayQuote:
      "Mr. Raza provided expert guidance, clear communication, and dependable support throughout my immigration process. He handled every step with professionalism, kept me updated, and made me feel confident from start to finish. I highly recommend Evernest for immigration services.",
    imagePath: "/images/success-stories/saboor-quadwai.jpg",
    imageAlt: "Saboor Quadwai holding his visa with Evernest branding in the background",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-01",
    clientName: "Ismail Aman",
    serviceType: "Italy Student Visa",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I am delighted to say that I got My Italy student Visa Alhamadulliah through Evernest Consultant. I am soo grateful that I have been through this consultant this all credit Goes to Sir Raza for providing me tremendous support to accomplish my goal his expertise and guidance were splendid in making the overall process stress-free.I highly recommend them.",
    displayQuote:
      "I am delighted to say that I got my Italy student visa through Evernest Consultant. Sir Raza provided tremendous support, expertise, and guidance, making the overall process stress-free. I highly recommend them.",
    imagePath: "/images/success-stories/placeholder-success-01.jpeg",
    imageAlt: "Success Story 1 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-02",
    clientName: "Mahnoor Amjad",
    serviceType: "Study Abroad Process",
    destinationCountry: "Study Abroad",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I've had a remarkable experience with EverNest Consultants as Mr.Raza has guided me from the very beginning of my immigration procedure. The consultancy's efforts and expertise have made me secure admission in my desired field along with the visa. I highly recommend Mr. Raza's consultancy to anyone who dreams of immigration and I assure you that you won't be disappointed.",
    displayQuote:
      "I've had a remarkable experience with EverNest Consultants. Mr. Raza guided me from the beginning of my immigration procedure, helping me secure admission in my desired field along with the visa. I highly recommend his consultancy.",
    imagePath: "/images/success-stories/placeholder-success-02.jpeg",
    imageAlt: "Success Story 2 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-03",
    clientName: "Hanzala",
    serviceType: "Study Abroad Process",
    destinationCountry: "Study Abroad",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "Had a great experience, supported me throuout the process",
    displayQuote:
      "Had a great experience. Evernest supported me throughout the process.",
    imagePath: "/images/success-stories/placeholder-success-03.jpeg",
    imageAlt: "Success Story 3 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-04",
    clientName: "Muhammad Danish",
    serviceType: "Italy Student Visa",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "Hello. I am deeply thankful to EverNest Consultants, especially Sir Raza , for their unwavering support throughout my journey to secure a study visa for Italy. Sir Raza did not only guided me through the critical steps of the visa procedure but he also played a pivotal role in helping me with IELTS preparation. His expertise and the team’s professionalism made the entire process smooth. I highly recommend EverNest Consultants to anyone seeking reliable visa assistance. Thank you for making my dream come true! Because of his support, I got admission in my desired field and successfully received my visa. I really recommend EverNest Consultants to anyone who wants to go abroad.",
    displayQuote:
      "I am deeply thankful to EverNest Consultants, especially Sir Raza, for their support throughout my Italy study visa journey. His guidance, IELTS support, and the team's professionalism made the process smooth.",
    imagePath: "/images/success-stories/placeholder-success-04.jpeg",
    imageAlt: "Success Story 4 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-05",
    clientName: "Mehdi Jiwani",
    serviceType: "Italy Study Visa",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I want to express my heartfelt gratitude to EverNest Consultants, especially Raza Bhai, for their exceptional service in helping me obtain my study visa for Italy. Sir Raza's guidance was invaluable, and the team's professionalism made the process seamless. I highly recommend EverNest Consultants for anyone seeking visa assistance. Thank you for making my dreams come true!",
    displayQuote:
      "I want to express my heartfelt gratitude to EverNest Consultants, especially Raza Bhai, for helping me obtain my Italy study visa. Sir Raza's guidance was invaluable and the process felt seamless.",
    imagePath: "/images/success-stories/placeholder-success-05.jpeg",
    imageAlt: "Success Story 5 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "placeholder-success-06",
    clientName: "Musab Shajee",
    serviceType: "Italy Application Process",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I had a great experience with EverNest Consultants. Mr. Raza helped me from the start of my application process for Italy. He guided me step by step and encouraged me to get a good IELTS score, which made a big difference.",
    displayQuote:
      "I had a great experience with EverNest Consultants. Mr. Raza helped me from the start of my Italy application process, guided me step by step, and encouraged me to get a good IELTS score.",
    imagePath: "/images/success-stories/placeholder-success-06.jpeg",
    imageAlt: "Success Story 6 holding visa approval documents",
    imageFit: "contain",
    mobileImageFit: "contain",
    imagePosition: "center center",
    featured: true,
    privacyMode: "full",
  },
];
