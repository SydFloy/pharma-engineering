import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { CTASection } from "@/components/sections/cta-section";
import { ShieldCheck, FileCheck2, ClipboardCheck, HardHat, Gauge, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "We execute and document our work with awareness of, and aligned with, good manufacturing practice and applicable standards for pharmaceutical facilities.",
};

const frameworks = [
  "GMP",
  "GAMP 5",
  "EU GMP",
  "EU GMP Annex 1",
  "ISO 14644",
  "Qualification & Validation",
  "IQ/OQ support",
  "FAT/SAT",
  "Risk Assessment",
  "Change Control",
  "Calibration",
  "Technical Documentation",
];

const practices = [
  {
    icon: FileCheck2,
    title: "Technical Documentation",
    description:
      "We prepare and maintain technical documentation and records adapted to regulated environments.",
  },
  {
    icon: ClipboardCheck,
    title: "Qualification & Validation Support",
    description:
      "We provide commissioning and qualification support, including IQ/OQ support and FAT/SAT activities.",
  },
  {
    icon: HardHat,
    title: "GMP-Aware Execution",
    description:
      "Installation and maintenance activities are planned and executed with awareness of good manufacturing practice expectations.",
  },
  {
    icon: Gauge,
    title: "Calibration & Control",
    description:
      "We support calibration coordination and change control for instrumentation and monitoring systems.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Based Approach",
    description:
      "We apply a risk-based approach to engineering and maintenance decisions across the facility lifecycle.",
  },
  {
    icon: CheckCircle2,
    title: "Awareness vs. Certification",
    description:
      "We work with awareness of, and aligned with, these frameworks. Where specific certifications apply, they are stated individually — we do not claim certification unless actual.",
  },
];

export default function QualityCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Engineering with Pharmaceutical Compliance in Mind"
        subtitle="We execute and document our work with awareness of good manufacturing practice and applicable standards."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto max-w-3xl text-center">
            <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black mx-auto">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our Approach
            </div>
            <h2 className="heading-gradient mt-4 text-3xl font-medium capitalize md:text-4xl">
              Frameworks &amp; Technical Practices We Work With
            </h2>
          </SlideEffect>
          <SlideEffect className="mt-10">
            <div className="flex flex-wrap justify-center gap-2">
              {frameworks.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-black"
                >
                  {f}
                </span>
              ))}
            </div>
          </SlideEffect>
        </Container>
      </section>

      <section className="border-y border-border bg-background py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto max-w-3xl text-center">
            <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black mx-auto">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Quality Practices
            </div>
            <h2 className="heading-gradient mt-4 text-3xl font-medium capitalize md:text-4xl">
              How We Maintain Quality
            </h2>
          </SlideEffect>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((p, i) => (
              <SlideEffect key={p.title} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl bg-secondary p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-black">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-black">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                </div>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect>
            <div className="rounded-2xl bg-accent/30 p-8 md:p-12">
              <h2 className="text-2xl font-medium capitalize text-black">
                A Note on Certifications
              </h2>
              <p className="mt-3 leading-relaxed text-black/70">
                This website distinguishes between working{" "}
                <strong>with awareness of / aligned with</strong> certain
                standards and practices, and being{" "}
                <strong>certified according to</strong> a standard. Unless a
                specific certification is clearly and individually stated for
                this company, no such certification is claimed. Please contact
                us for specific certification or qualification details relevant
                to your project.
              </p>
            </div>
          </SlideEffect>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
