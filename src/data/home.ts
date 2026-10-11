export const stats = [
  { value: "XX+", label: "Projects", note: "[replace with actual value]" },
  { value: "XX+", label: "Engineers & Technicians", note: "[replace with actual value]" },
  { value: "XX+", label: "Years of Combined Experience", note: "[replace with actual value]" },
  { value: "XX+", label: "Facilities Supported", note: "[replace with actual value]" },
];

export interface Capability {
  label: string;
  icon: string;
}

export const capabilities: Capability[] = [
  { label: "HVAC", icon: "hvac" },
  { label: "Cleanrooms", icon: "cleanroom" },
  { label: "Mechanical", icon: "mechanical" },
  { label: "Electrical", icon: "electrical" },
  { label: "Automation", icon: "automation" },
  { label: "Instrumentation", icon: "instrumentation" },
  { label: "BMS", icon: "bms" },
  { label: "Pharmaceutical Utilities", icon: "utilities" },
  { label: "Commissioning", icon: "commissioning" },
  { label: "Maintenance", icon: "maintenance" },
];

export const processSteps = [
  { step: "01", title: "Consultation", detail: "Understand the project requirements." },
  {
    step: "02",
    title: "Site Survey",
    detail: "Assess existing systems, equipment, utilities, and facility constraints.",
  },
  {
    step: "03",
    title: "Engineering & Design",
    detail: "Develop the technical solution and engineering documentation.",
  },
  {
    step: "04",
    title: "Installation & Commissioning",
    detail: "Execute installation, integration, testing, and commissioning.",
  },
  {
    step: "05",
    title: "Maintenance & Support",
    detail:
      "Provide preventive maintenance, troubleshooting, technical support, and continuous improvement.",
  },
];

export const capabilitiesBar = [
  { title: "Multidisciplinary Engineering", icon: "engineering" },
  { title: "Pharmaceutical Environment", icon: "pharma" },
  { title: "GMP-Aware Execution", icon: "compliance" },
  { title: "Installation & Commissioning", icon: "commissioning" },
  { title: "Maintenance & Technical Support", icon: "maintenance" },
];

export const whyChooseUs = [
  {
    title: "Pharmaceutical Expertise",
    description:
      "Experience with pharmaceutical manufacturing environments and the technical demands of controlled areas.",
    icon: "pharma",
  },
  {
    title: "Multidisciplinary Engineering",
    description:
      "HVAC, mechanical, electrical, automation, instrumentation, and utilities under one technical team.",
    icon: "multidisciplinary",
  },
  {
    title: "GMP-Aware Execution",
    description:
      "Technical execution and documentation adapted to regulated environments.",
    icon: "compliance",
  },
  {
    title: "Single Technical Partner",
    description:
      "From engineering and installation through commissioning and maintenance.",
    icon: "partner",
  },
  {
    title: "Technical Problem Solving",
    description:
      "Focused on reliability, troubleshooting, and continuous improvement.",
    icon: "problem",
  },
  {
    title: "Lifecycle Support",
    description:
      "Support from project execution through long-term maintenance.",
    icon: "lifecycle",
  },
];
