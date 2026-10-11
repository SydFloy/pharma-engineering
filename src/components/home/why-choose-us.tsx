import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { DynamicIcon } from "@/components/icons/DynamicIcon";
import { whyChooseUs } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose Us"
          subtitle="A technical partner focused on reliability, compliance and the full equipment and facility lifecycle."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <SlideEffect key={item.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-secondary p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-black">
                  <DynamicIcon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </SlideEffect>
          ))}
        </div>
      </Container>
    </section>
  );
}
