import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Engineering and maintenance solutions for pharmaceutical manufacturing, biotechnology, medical devices, laboratories, healthcare, cosmetics and food & beverage.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="Focused engineering and maintenance solutions for regulated and controlled environments."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto max-w-3xl text-center">
            <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black mx-auto">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Primary Focus
            </div>
            <h2 className="heading-gradient mt-4 text-3xl font-medium capitalize md:text-4xl">
              Pharmaceutical Manufacturing &amp; Controlled Environments
            </h2>
            <p className="mt-2 text-gray-500">
              Our core capability is pharmaceutical manufacturing — from HVAC
              and cleanrooms to utilities, automation and maintenance.
            </p>
          </SlideEffect>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="flex-1 text-sm text-black/60">
                    {industry.description}
                  </p>
                  {industry.primary && (
                    <span className="inline-flex w-fit rounded-full bg-black px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                      Primary Focus
                    </span>
                  )}
                </div>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect>
            <div className="rounded-2xl bg-secondary p-8 text-center md:p-16">
              <h2 className="heading-gradient text-3xl font-medium capitalize md:text-4xl">
                Not sure if your industry fits?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                If your operation depends on controlled environments, HVAC,
                utilities or reliable equipment — our engineering and
                maintenance team can likely support it. Contact us to discuss
                your requirements.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button size="lg">Talk to Our Team</Button>
                </Link>
              </div>
            </div>
          </SlideEffect>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
