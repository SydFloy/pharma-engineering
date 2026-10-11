import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "pharmaceutical-engineering",
    name: "Pharmaceutical Engineering",
    tagline: "From concept to commissioning",
    description:
      "Multidisciplinary engineering studies and design tailored to pharmaceutical manufacturing and controlled environments.",
    icon: "engineering",
    features: [
      "Process engineering",
      "Facility engineering",
      "Technical studies",
      "Engineering design",
      "Equipment integration",
      "Utility systems",
      "Project support",
    ],
    applications: [
      "Pharmaceutical production facilities",
      "Biotechnology plants",
      "Controlled environments",
      "Utility infrastructure",
    ],
    process: [
      { step: "Consultation", detail: "Understand project scope and requirements." },
      { step: "Design", detail: "Develop engineering documentation and technical solutions." },
      { step: "Integration", detail: "Integrate processes, equipment and utilities." },
      { step: "Commissioning", detail: "Support testing, validation and handover." },
    ],
    faq: [
      {
        question: "What does pharmaceutical engineering cover?",
        answer:
          "It covers process and facility engineering, technical studies, design, equipment integration, utility systems and project support for pharmaceutical and controlled environments.",
      },
      {
        question: "Do you provide engineering documentation?",
        answer:
          "Yes. We develop technical documentation adapted to regulated environments, supporting qualification and validation activities.",
      },
    ],
  },
  {
    slug: "hvac-engineering",
    name: "HVAC Engineering",
    tagline: "Precision air and temperature control",
    description:
      "Design, installation and commissioning of HVAC systems for pharmaceutical facilities, cleanrooms and controlled environments.",
    icon: "hvac",
    features: [
      "HVAC design",
      "AHU systems",
      "Chilled water systems",
      "Heating systems",
      "Air distribution",
      "Pressure cascade",
      "Temperature and humidity control",
      "HVAC commissioning",
      "HVAC qualification support",
    ],
    applications: [
      "Pharmaceutical production areas",
      "Cleanrooms",
      "Laboratories",
      "Storage and utilities areas",
    ],
    process: [
      { step: "Survey", detail: "Assess existing systems and facility constraints." },
      { step: "Design", detail: "Develop HVAC design and pressure cascade strategies." },
      { step: "Installation", detail: "Install AHUs, ducting and control systems." },
      { step: "Commissioning", detail: "Test, balance and qualify the system." },
    ],
    faq: [
      {
        question: "Can you support HVAC qualification?",
        answer:
          "Yes, we provide HVAC commissioning and qualification support aligned with good manufacturing practice expectations.",
      },
      {
        question: "Do you handle pressure cascade and airlocks?",
        answer:
          "We design and install pressure cascade systems and airlocks to maintain proper differential pressure across classified areas.",
      },
    ],
  },
  {
    slug: "cleanrooms",
    name: "Cleanroom Solutions",
    tagline: "Controlled environments built to spec",
    description:
      "Design, construction and installation of cleanrooms with HEPA filtration, airlocks and controlled pressure differentials.",
    icon: "cleanroom",
    features: [
      "Cleanroom design",
      "Cleanroom construction",
      "Cleanroom installation",
      "Cleanroom HVAC",
      "HEPA filtration",
      "Airlocks",
      "Pressure differential systems",
      "Personnel and material flows",
      "Environmental monitoring",
    ],
    applications: [
      "Pharmaceutical manufacturing suites",
      "Classified areas",
      "Laboratories",
      "Medical device production",
    ],
    process: [
      { step: "Requirement analysis", detail: "Define cleanroom class and regulatory requirements." },
      { step: "Design", detail: "Design layout, airflow, filtration and pressure strategy." },
      { step: "Construction", detail: "Build partitions, ceilings, floors and HVAC installation." },
      { step: "Qualification", detail: "Test and document performance against design." },
    ],
    faq: [
      {
        question: "Which cleanroom standards do you work with?",
        answer:
          "We design and build cleanrooms aligned with ISO 14644 classification and GMP expectations for controlled environments.",
      },
      {
        question: "Do you support environmental monitoring?",
        answer:
          "We can support environmental monitoring system design and installation for particulate and microbial control.",
      },
    ],
  },
  {
    slug: "equipment-installation",
    name: "Pharmaceutical Equipment Installation",
    tagline: "Precise equipment positioning and integration",
    description:
      "Mechanical, electrical and instrumentation installation and integration of pharmaceutical process equipment.",
    icon: "equipment",
    features: [
      "Equipment positioning",
      "Mechanical installation",
      "Electrical installation",
      "Instrumentation",
      "Utility connections",
      "Equipment integration",
      "Commissioning",
      "SAT support",
    ],
    applications: [
      "Process equipment",
      "Utilities and skids",
      "Production lines",
      "Laboratory equipment",
    ],
    process: [
      { step: "Planning", detail: "Coordinate installation plan with engineering and production." },
      { step: "Mechanical", detail: "Position and install equipment, piping and supports." },
      { step: "Electrical & instrumentation", detail: "Connect power, controls and instrumentation." },
      { step: "Commissioning", detail: "Test, integrate and support site acceptance." },
    ],
    faq: [
      {
        question: "Do you support site acceptance testing (SAT)?",
        answer:
          "Yes, we provide SAT support including testing, documentation and integration with your acceptance procedures.",
      },
      {
        question: "Can you install complete process skids?",
        answer:
          "Yes, we handle mechanical, electrical and instrumentation installation and integration of skids and process equipment.",
      },
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance Engineering",
    tagline: "Reliability through the equipment lifecycle",
    description:
      "Preventive, corrective and predictive maintenance programs for HVAC, mechanical, electrical, instrumentation and automation systems.",
    icon: "maintenance",
    features: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Predictive maintenance",
      "Troubleshooting",
      "HVAC maintenance",
      "Electrical maintenance",
      "Instrumentation maintenance",
      "Calibration support",
      "Automation support",
    ],
    applications: [
      "Pharmaceutical facilities",
      "Controlled environments",
      "Utility systems",
      "Production equipment",
    ],
    process: [
      { step: "Assessment", detail: "Survey systems and define maintenance requirements." },
      { step: "Plan", detail: "Build preventive and predictive maintenance schedules." },
      { step: "Execution", detail: "Perform planned and corrective interventions." },
      { step: "Improvement", detail: "Analyse data and improve reliability continuously." },
    ],
    faq: [
      {
        question: "Do you offer preventive maintenance contracts?",
        answer:
          "Yes, we provide structured preventive maintenance programs tailored to your equipment and facility requirements.",
      },
      {
        question: "Can you support calibration?",
        answer: "We provide calibration support and coordination for instrumentation and monitoring systems.",
      },
    ],
  },
  {
    slug: "automation-instrumentation",
    name: "Automation & Instrumentation",
    tagline: "Intelligent control and monitoring",
    description:
      "PLC, SCADA, HMI, BMS and industrial network engineering for automation, instrumentation and data monitoring in pharmaceutical facilities.",
    icon: "automation",
    features: [
      "PLC",
      "SCADA",
      "HMI",
      "BMS",
      "Modbus RTU/TCP",
      "BACnet",
      "Industrial networks",
      "Sensors",
      "Instrumentation",
      "Data monitoring",
      "Automation upgrades",
    ],
    applications: [
      "HVAC automation",
      "Cleanroom monitoring",
      "Utility control",
      "Process automation",
    ],
    process: [
      { step: "Definition", detail: "Define control philosophy and I/O requirements." },
      { step: "Design", detail: "Design control architecture and network topology." },
      { step: "Implementation", detail: "Program, configure and install control systems." },
      { step: "Commissioning", detail: "Test, validate and hand over the system." },
    ],
    faq: [
      {
        question: "Which control platforms do you work with?",
        answer:
          "We work across PLC, SCADA, HMI and BMS platforms with Modbus RTU/TCP, BACnet and industrial networking protocols.",
      },
      {
        question: "Can you upgrade existing automation?",
        answer:
          "Yes, we plan and execute automation upgrades with minimal disruption to ongoing production.",
      },
    ],
  },
  {
    slug: "pharmaceutical-utilities",
    name: "Pharmaceutical Utilities",
    tagline: "Bulk utilities for manufacturing",
    description:
      "Design, installation and maintenance of purified water, WFI, compressed air, chilled water, steam, gases and electrical utilities.",
    icon: "utilities",
    features: [
      "Purified Water",
      "WFI",
      "Compressed Air",
      "Chilled Water",
      "Steam",
      "Process gases",
      "Electrical utilities",
      "Drainage",
      "HVAC utilities",
    ],
    applications: [
      "Pharmaceutical facilities",
      "Utility plants",
      "Water systems",
      "Gas distribution",
    ],
    process: [
      { step: "Survey", detail: "Assess utility demand and existing infrastructure." },
      { step: "Design", detail: "Design utility generation and distribution systems." },
      { step: "Installation", detail: "Install and connect utility systems." },
      { step: "Commissioning", detail: "Test, qualify and support handover." },
    ],
    faq: [
      {
        question: "Do you design purified water and WFI systems?",
        answer:
          "Yes, we support the design, installation and maintenance of purified water and WFI generation and distribution systems.",
      },
      {
        question: "What utility systems do you cover?",
        answer:
          "We cover purified water, WFI, compressed air, chilled water, steam, process gases, electrical utilities, drainage and HVAC utilities.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
