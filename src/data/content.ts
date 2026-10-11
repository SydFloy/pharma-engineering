import type { TeamMember, Testimonial, Faq } from "@/types";

export const team: TeamMember[] = [
  { name: "[NAME]", role: "[Managing Director]", photo: "" },
  { name: "[NAME]", role: "[Engineering Manager]", photo: "" },
  { name: "[NAME]", role: "[HVAC Engineer]", photo: "" },
  { name: "[NAME]", role: "[Automation Engineer]", photo: "" },
  { name: "[NAME]", role: "[Project Manager]", photo: "" },
  { name: "[NAME]", role: "[Maintenance Manager]", photo: "" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "[Testimonial placeholder — describe a positive experience with the reliability and quality of the engineering and maintenance services provided.]",
    author: "[NAME]",
    role: "[Role]",
    company: "[COMPANY]",
  },
  {
    quote:
      "[Testimonial placeholder — describe a positive experience with the reliability and quality of the engineering and maintenance services provided.]",
    author: "[NAME]",
    role: "[Role]",
    company: "[COMPANY]",
  },
  {
    quote:
      "[Testimonial placeholder — describe a positive experience with the reliability and quality of the engineering and maintenance services provided.]",
    author: "[NAME]",
    role: "[Role]",
    company: "[COMPANY]",
  },
];

export const faqs: Faq[] = [
  {
    question: "Which industries do you work with?",
    answer:
      "We focus primarily on pharmaceutical manufacturing, and also serve biotechnology, medical devices, laboratories, healthcare facilities, cosmetics and food & beverage.",
  },
  {
    question: "Do you provide multidisciplinary engineering?",
    answer:
      "Yes. We cover HVAC, cleanrooms, mechanical, electrical, automation, instrumentation and utilities, acting as a single technical partner across the project lifecycle.",
  },
  {
    question: "Can you support qualification and validation?",
    answer:
      "We provide commissioning and qualification support (including IQ/OQ support and FAT/SAT) aligned with GMP expectations and with awareness of applicable standards.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we provide structured preventive, corrective and predictive maintenance programs tailored to your facility and equipment.",
  },
];
