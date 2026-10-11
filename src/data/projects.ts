import type { CaseStudy } from "@/types";

export const projects: CaseStudy[] = [
  {
    slug: "pharmaceutical-hvac-upgrade",
    title: "Pharmaceutical HVAC Upgrade",
    industry: "Pharmaceutical Manufacturing",
    location: "[LOCATION]",
    scope: "HVAC modification and improvement",
    services: ["Engineering", "Installation", "Commissioning"],
    overview:
      "Engineering and execution of an HVAC upgrade across multiple pharmaceutical production areas, improving airflow, filtration and pressure control.",
    challenge:
      "The facility required enhanced HVAC performance to meet stricter controlled-environment criteria while maintaining ongoing operations.",
    approach:
      "Surveyed existing systems, defined the pressure cascade and airflow strategy, and developed the HVAC modification design and documentation.",
    installation:
      "Installed and modified air handling units, ducting, filtration and control elements with coordinated shutdowns to minimize disruption.",
    commissioning:
      "Balanced airflow, tested HEPA filtration, verified pressure differentials and supported qualification documentation.",
    results:
      "Controlled conditions achieved across the target production areas with reliable, documented HVAC performance.",
    technicalDetails: [
      "12 AHUs",
      "3 production areas",
      "Pressure cascade zones",
      "HEPA filtration",
      "Control and monitoring integration",
    ],
    gallery: ["[IMAGE-PLACEHOLDER-1]", "[IMAGE-PLACEHOLDER-2]", "[IMAGE-PLACEHOLDER-3]"],
    stats: [
      { label: "AHUs", value: "12" },
      { label: "Production Areas", value: "3" },
      { label: "Controlled Environment", value: "[X] m²" },
      { label: "Project Duration", value: "[X] months" },
    ],
    placeholder: true,
  },
  {
    slug: "cleanroom-installation-biotech",
    title: "Cleanroom Installation — Biotech",
    industry: "Biotechnology",
    location: "[LOCATION]",
    scope: "Cleanroom design and installation",
    services: ["Engineering", "Construction", "Commissioning"],
    overview:
      "Design and installation of a classified cleanroom suite for biotech process and fill operations.",
    challenge:
      "Deliver a cleanroom meeting strict class and pressure requirements within an existing building envelope.",
    approach:
      "Designed the cleanroom layout, filtration and pressure cascade aligned with ISO 14644 and GMP expectations.",
    installation:
      "Constructed partitions, ceilings and floors; installed HVAC, HEPA filtration, airlocks and monitoring.",
    commissioning:
      "Tested particle counts, pressure differentials and airflow, and documented results.",
    results:
      "Classified environment delivered and documented, ready for qualification support.",
    technicalDetails: [
      "ISO-classified areas",
      "HEPA filtration",
      "Airlocks and pressure differentials",
      "Environmental monitoring support",
    ],
    gallery: ["[IMAGE-PLACEHOLDER-1]", "[IMAGE-PLACEHOLDER-2]"],
    stats: [
      { label: "Cleanroom Areas", value: "[X]" },
      { label: "Classified Environment", value: "[X] m²" },
      { label: "Project Duration", value: "[X] months" },
    ],
    placeholder: true,
  },
  {
    slug: "equipment-integration-production",
    title: "Process Equipment Installation & Integration",
    industry: "Pharmaceutical Manufacturing",
    location: "[LOCATION]",
    scope: "Equipment installation and commissioning",
    services: ["Mechanical", "Electrical", "Instrumentation", "Commissioning"],
    overview:
      "Mechanical, electrical and instrumentation installation and integration of pharmaceutical process equipment.",
    challenge:
      "Integrate new process equipment with existing utilities and controls in an active production facility.",
    approach:
      "Planned installation in coordination with production, defining utility connections and control integration.",
    installation:
      "Positioned equipment, installed mechanical and electrical connections, and integrated instrumentation.",
    commissioning:
      "Tested, integrated and supported site acceptance and commissioning activities.",
    results:
      "Equipment installed, integrated and delivered for qualification and operation.",
    technicalDetails: [
      "Mechanical installation",
      "Electrical connections",
      "Instrumentation and control integration",
      "Utility connections",
    ],
    gallery: ["[IMAGE-PLACEHOLDER-1]", "[IMAGE-PLACEHOLDER-2]"],
    stats: [
      { label: "Equipment Installed", value: "[X]" },
      { label: "Project Duration", value: "[X] months" },
    ],
    placeholder: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
