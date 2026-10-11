import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { processSteps } from "@/data/home";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From Engineering Concept to Operational Facility"
          subtitle="A structured, multidisciplinary delivery process across the full project lifecycle."
        />
        <div className="relative mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <SlideEffect key={step.step} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {step.detail}
                  </p>
                </div>
              </SlideEffect>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
