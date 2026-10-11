import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SlideEffect from "@/components/effects/slide-effect";
import TextBlurEffect from "@/components/effects/text-blur-effect";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const keywords = [
  "HVAC",
  "Cleanrooms",
  "Equipment Installation",
  "Automation",
  "Instrumentation",
  "Utilities",
  "Maintenance",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* subtle decorative blobs */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-8 pt-8 text-center lg:gap-10">
          {/* Badge */}
          <SlideEffect>
            <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] font-medium uppercase tracking-wider text-black">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Pharmaceutical Facility Specialists
            </div>
          </SlideEffect>

          {/* Headline */}
          <SlideEffect delay={0.05} className="max-w-5xl">
            <h1 className="heading-gradient text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[0.95]">
              <TextBlurEffect>
                Engineering &amp; Maintenance Solutions for Pharmaceutical Facilities
              </TextBlurEffect>
            </h1>
          </SlideEffect>

          {/* Sub-headline */}
          <SlideEffect delay={0.1} className="max-w-2xl">
            <p className="text-sm text-gray-500 lg:text-lg">
              From engineering and installation to commissioning and maintenance,
              we deliver reliable technical solutions for pharmaceutical
              manufacturing environments.
            </p>
          </SlideEffect>

          {/* Keyword pills */}
          <SlideEffect delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-black/70"
                >
                  {k}
                </span>
              ))}
            </div>
          </SlideEffect>

          {/* CTAs */}
          <SlideEffect delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Request a Consultation
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="secondary">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </SlideEffect>
        </div>
      </Container>

      {/* scroll indicator */}
      <SlideEffect
        delay={0.3}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-gray-300 pt-1.5">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
      </SlideEffect>
    </section>
  );
}
