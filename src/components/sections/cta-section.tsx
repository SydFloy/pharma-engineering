import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SlideEffect>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 rounded-2xl bg-secondary p-8 text-center md:gap-8 md:p-16">
            <h2 className="heading-gradient text-2xl font-medium leading-normal capitalize md:text-4xl lg:text-5xl">
              Have a Pharmaceutical Engineering Project?
            </h2>
            <p className="mx-auto max-w-2xl text-sm lg:text-base">
              Tell us about your project and our engineering team will review
              your requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">Request a Consultation</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </SlideEffect>
      </Container>
    </section>
  );
}
