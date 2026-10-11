import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IndustriesSection() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Who We Work With"
          title="Industries We Serve"
          subtitle="Focused engineering and maintenance solutions for regulated and controlled environments."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <SlideEffect key={industry.slug} delay={i * 0.04} className="h-full">
              <div
                className={
                  industry.primary
                    ? "flex h-full flex-col gap-3 rounded-2xl bg-primary p-6 text-black"
                    : "flex h-full flex-col gap-3 rounded-2xl bg-secondary p-6"
                }
              >
                <h3 className="text-lg font-medium">{industry.name}</h3>
                <p className="flex-1 text-sm text-black/60">{industry.description}</p>
                {industry.primary && (
                  <span className="inline-flex w-fit rounded-full bg-black px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                    Primary Focus
                  </span>
                )}
              </div>
            </SlideEffect>
          ))}
          <SlideEffect delay={0.3} className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-background p-6 text-center">
              <Link href="/contact">
                <Button variant="outline">Does your industry fit?</Button>
              </Link>
            </div>
          </SlideEffect>
        </div>
      </Container>
    </section>
  );
}
