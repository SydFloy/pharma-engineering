import { capabilitiesBar } from "@/data/home";
import { DynamicIcon } from "@/components/icons/DynamicIcon";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";

export default function CapabilityBar() {
  return (
    <section className="border-y border-border bg-background py-10 md:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilitiesBar.map((item, i) => (
            <SlideEffect key={item.title} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-secondary p-6 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-black">
                  <DynamicIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-medium leading-snug text-black">
                  {item.title}
                </h3>
              </div>
            </SlideEffect>
          ))}
        </div>
      </Container>
    </section>
  );
}
