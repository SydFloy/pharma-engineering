import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Placeholder testimonials to be replaced with client feedback."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <SlideEffect key={i} delay={i * 0.06} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-2xl bg-secondary p-8">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="flex-1 text-sm leading-relaxed text-gray-500">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <div className="text-sm font-medium text-black">{t.author}</div>
                  <div className="text-xs text-gray-400">
                    {t.role}, {t.company}
                  </div>
                </figcaption>
              </figure>
            </SlideEffect>
          ))}
        </div>
      </Container>
    </section>
  );
}
