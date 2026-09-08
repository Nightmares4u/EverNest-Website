export interface FaqItem {
  q: string;
  a: string;
}

export interface ProgramStat {
  label: string;
  value: string;
}

export interface TitledDescription {
  title: string;
  desc: string;
}

export interface WhyEvernestBlock {
  title: string;
  desc: string;
  points?: string[];
}

export interface StudyVisaAdmissionRequirements {
  undergraduate?: string[];
  master?: string[];
  phd?: string[];
}

export interface StudyVisaLanguageRequirements {
  english?: string[];
  italian?: string[];
  [language: string]: string[] | undefined;
}

export interface StudyVisaCountryData {
  name: string;
  heroDesc: string;
  /**
   * Purpose-written search snippet. Falls back to the first sentence of
   * heroDesc, which reads as body prose and earns very few clicks.
   */
  metaDescription?: string;
  homepageImage?: string;
  sectionBackgroundImage?: string;
  imageAlt?: string;
  backgroundImageAlt?: string;
  benefits?: TitledDescription[];
  admissionRequirements?: StudyVisaAdmissionRequirements;
  languageRequirements?: StudyVisaLanguageRequirements;
  documents?: string[];
  visaProcessTitle?: string;
  visaProcessDesc?: string;
  visaRequirements?: string[];
  intakes?: string[];
  costs?: TitledDescription[];
  scholarships?: string[];
  visaProcessSteps?: string[];
  workDuringStudies?: string;
  postStudy?: string;
  whyEvernest?: WhyEvernestBlock;
  faq?: FaqItem[];
}

export interface ImmigrationProgramData {
  title: string;
  desc: string;
  overview?: string;
  requirements?: string[];
  benefits?: string[];
}

export interface ImmigrationWhyImmigrateBlock {
  title: string;
  desc: string;
  benefits: string[];
}

export interface ImmigrationProcessTimeline {
  title: string;
  desc: string;
  steps: string[];
}

export interface ImmigrationCountryData {
  name: string;
  heroTitle: string;
  heroDesc: string;
  whyImmigrate?: ImmigrationWhyImmigrateBlock;
  programsTitle?: string;
  programsDesc?: string;
  programs?: ImmigrationProgramData[];
  whyEvernest?: WhyEvernestBlock;
  processTimeline?: ImmigrationProcessTimeline;
  faq?: FaqItem[];
  ctaTitle?: string;
  ctaDesc?: string;
}

export interface ImmigrationProgramPageData {
  name: string;
  country: string;
  heroDesc: string;
  stats: ProgramStat[];
  benefits: string[];
  requirements: string[];
  process: string[];
}
