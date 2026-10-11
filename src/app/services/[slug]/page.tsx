import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/sections/cta-section";
import { DynamicIcon } from "@/components/icons/DynamicIcon";
import SlideEffect from "@/components/effects/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: `${service.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = projects.slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.name}
        subtitle={service.description}
      />

      {/* Overview + features */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-3">
          <SlideEffect className="lg:col-span-2">
            <h2 className="text-3xl font-medium capitalize text-black">Overview</h2>
            <p className="mt-4 text-lg font-medium text-primary">
              {service.tagline}
            </p>
            <p className="mt-3 text-gray-500">
              {service.description} We deliver this through a structured
              process, with documentation and execution adapted to
              pharmaceutical and controlled environments.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-black">Scope of Services</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-500">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </SlideEffect>

          <SlideEffect delay={0.1}>
            <div className="rounded-2xl bg-secondary p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-black">
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-black">{service.name}</h3>
              </div>
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Applications
                </h4>
                <ul className="mt-3 space-y-2">
                  {service.applications.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-gray-500">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideEffect>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-background py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto text-center">
            <h2 className="heading-gradient text-3xl font-medium capitalize md:text-4xl">
              Our {service.name.split(" ")[0]} Process
            </h2>
          </SlideEffect>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <SlideEffect key={p.step} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl bg-secondary p-6">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-black">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {p.detail}
                  </p>
                </div>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <SlideEffect className="text-center">
              <h2 className="heading-gradient text-3xl font-medium capitalize md:text-4xl">
                Related Projects
              </h2>
            </SlideEffect>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((project) => (
                <div
                  key={project.slug}
                  className="flex items-center justify-between rounded-2xl bg-secondary p-8"
                >
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {project.industry} • {project.scope}
                    </p>
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="secondary">View Case Study</Button>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-border bg-background py-16 md:py-24">
        <Container className="max-w-4xl">
          <SlideEffect className="text-center">
            <h2 className="heading-gradient text-3xl font-medium capitalize md:text-4xl">
              Frequently Asked Questions
            </h2>
          </SlideEffect>
          <div className="mt-10 space-y-3">
            {service.faq.map((f) => (
              <SlideEffect key={f.question}>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-lg font-medium text-black">{f.question}</h3>
                  <p className="mt-2 text-gray-500">{f.answer}</p>
                </div>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
