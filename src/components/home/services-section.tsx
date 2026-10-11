import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Our Engineering & Maintenance Services"
          subtitle="Integrated technical solutions designed for pharmaceutical and controlled environments."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
