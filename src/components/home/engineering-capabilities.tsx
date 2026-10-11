import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { DynamicIcon } from "@/components/icons/DynamicIcon";
import { capabilities } from "@/data/home";

export default function EngineeringCapabilities() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technical Scope"
          title="Engineering Capabilities"
          subtitle="Multidisciplinary engineering across the systems that keep pharmaceutical facilities reliable and compliant."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((cap, i) => (
            <SlideEffect key={cap.label} delay={i * 0.03}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center transition-all duration-300 hover:bg-secondary hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-black transition-colors group-hover:bg-primary">
                  <DynamicIcon name={cap.icon} className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-black">{cap.label}</span>
              </div>
            </SlideEffect>
          ))}
        </div>
      </Container>
    </section>
  );
}
