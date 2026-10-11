import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

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

export default function QualitySection() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-28">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
          <SlideEffect>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" />
                Quality &amp; Compliance
              </div>
              <h2 className="heading-gradient text-3xl font-medium leading-tight capitalize md:text-4xl">
                Engineering with Pharmaceutical Compliance in Mind
              </h2>
              <p className="text-sm text-gray-500 lg:text-base">
                We execute and document our work with awareness of, and aligned
                with, good manufacturing practice expectations and applicable
                standards.
              </p>
              <Link href="/quality-compliance" className="mt-2">
                <Button>Learn About Quality &amp; Compliance</Button>
              </Link>
            </div>
          </SlideEffect>

          <SlideEffect delay={0.15}>
            <div className="rounded-2xl bg-secondary p-6 md:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
                Frameworks &amp; Technical Practices
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-black/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-border pt-4 text-xs text-gray-400">
                We work with awareness of these frameworks. Specific
                certifications, where applicable, are stated individually.
              </p>
            </div>
          </SlideEffect>
        </div>
      </Container>
    </section>
  );
}
