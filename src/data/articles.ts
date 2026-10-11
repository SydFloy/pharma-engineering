import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "pharmaceutical-hvac-design",
    title: "Pharmaceutical HVAC Design",
    category: "HVAC Engineering",
    date: "2026-01-15",
    excerpt:
      "Key considerations in HVAC design for pharmaceutical facilities, from airflow and pressure cascade to filtration and temperature control.",
    readingTime: "8 min read",
  },
  {
    slug: "cleanroom-classification",
    title: "Cleanroom Classification",
    category: "Cleanrooms",
    date: "2026-01-28",
    excerpt:
      "An introduction to cleanroom classification and how ISO 14644 categories apply to pharmaceutical control areas.",
    readingTime: "6 min read",
  },
  {
    slug: "cleanroom-pressure-cascades",
    title: "Cleanroom Pressure Cascades",
    category: "Cleanrooms",
    date: "2026-02-10",
    excerpt:
      "How pressure cascades protect classified areas and why differential pressure control matters in pharmaceutical facilities.",
    readingTime: "7 min read",
  },
  {
    slug: "gmp-annex-1-hvac",
    title: "GMP Annex 1 and HVAC",
    category: "Compliance",
    date: "2026-02-22",
    excerpt:
      "Understanding how EU GMP Annex 1 expectations influence HVAC design, qualification and operation in pharmaceutical manufacturing.",
    readingTime: "9 min read",
  },
  {
    slug: "preventive-maintenance-pharmaceutical",
    title: "Preventive Maintenance in Pharmaceutical Facilities",
    category: "Maintenance",
    date: "2026-03-05",
    excerpt:
      "Building effective preventive maintenance programs for HVAC, utilities and equipment in regulated environments.",
    readingTime: "8 min read",
  },
  {
    slug: "hvac-qualification",
    title: "HVAC Qualification",
    category: "HVAC Engineering",
    date: "2026-03-18",
    excerpt:
      "An overview of HVAC qualification activities and how IQ/OQ support ensures systems perform as intended.",
    readingTime: "7 min read",
  },
  {
    slug: "pharmaceutical-equipment-commissioning",
    title: "Pharmaceutical Equipment Commissioning",
    category: "Commissioning",
    date: "2026-04-01",
    excerpt:
      "Planning and executing commissioning and site acceptance testing for pharmaceutical process equipment.",
    readingTime: "8 min read",
  },
  {
    slug: "pharmaceutical-utilities",
    title: "Pharmaceutical Utilities",
    category: "Utilities",
    date: "2026-04-14",
    excerpt:
      "An overview of purified water, WFI, compressed air, steam and other utility systems supporting pharmaceutical manufacturing.",
    readingTime: "9 min read",
  },
  {
    slug: "automation-pharmaceutical-manufacturing",
    title: "Automation in Pharmaceutical Manufacturing",
    category: "Automation",
    date: "2026-04-28",
    excerpt:
      "How automation, instrumentation and industrial networks support control, monitoring and data integrity in pharmaceutical facilities.",
    readingTime: "8 min read",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
