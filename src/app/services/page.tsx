import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/services/service-card";
import { CTASection } from "@/components/sections/cta-section";
import SlideEffect from "@/components/effects/slide-effect";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Engineering and maintenance services for pharmaceutical facilities: HVAC, cleanrooms, equipment installation, automation, instrumentation, utilities and maintenance.",
};

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Our Engineering & Maintenance Services"
        subtitle="Integrated technical solutions designed for pharmaceutical and controlled environments."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          <SlideEffect className="mt-16">
            <div className="rounded-2xl bg-secondary p-8 md:p-12">
              <h2 className="text-3xl font-medium capitalize text-black">
                A Single Technical Partner
              </h2>
              <p className="mt-3 max-w-3xl text-gray-500">
                Our multidisciplinary team covers HVAC, cleanrooms, mechanical,
                electrical, automation, instrumentation and utilities. This
                allows us to support your project from engineering and design,
                through installation and commissioning, to maintenance and
                continuous improvement — under one accountable team.
              </p>
            </div>
          </SlideEffect>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
