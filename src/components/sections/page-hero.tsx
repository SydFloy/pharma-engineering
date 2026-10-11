import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import TextRevealEffect from "@/components/effects/text-reveal-effect";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-14 md:pt-36 md:pb-20">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          {eyebrow && (
            <SlideEffect>
              <div className="flex h-7 items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                {eyebrow}
              </div>
            </SlideEffect>
          )}
          <SlideEffect delay={0.05}>
            <h1 className="heading-gradient text-4xl font-medium leading-tight capitalize tracking-tight md:text-5xl lg:text-6xl lg:leading-none">
              <TextRevealEffect>{title}</TextRevealEffect>
            </h1>
          </SlideEffect>
          {subtitle && (
            <SlideEffect delay={0.1}>
              <p className="max-w-2xl text-sm text-gray-500 lg:text-base">
                {subtitle}
              </p>
            </SlideEffect>
          )}
        </div>
      </Container>
    </section>
  );
}
