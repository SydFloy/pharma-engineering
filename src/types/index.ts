export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  applications: string[];
  process: { step: string; detail: string }[];
  faq: { question: string; answer: string }[];
}

export interface Industry {
  name: string;
  slug: string;
  description: string;
  primary?: boolean;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  location: string;
  scope: string;
  services: string[];
  overview: string;
  challenge: string;
  approach: string;
  installation: string;
  commissioning: string;
  results: string;
  technicalDetails: string[];
  gallery: string[];
  stats: ProjectStat[];
  placeholder: boolean;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readingTime: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
