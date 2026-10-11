import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/sections/cta-section";
import SlideEffect from "@/components/effects/slide-effect";
import { ProjectImagePlaceholder } from "@/components/projects/project-card";
import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects, getCaseStudyBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return { title: "Case Study" };
  return {
    title: `${project.title} — Case Study`,
    description: project.overview,
  };
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-8 last:border-0">
      <h2 className="text-2xl font-medium capitalize text-black">{title}</h2>
      <div className="mt-3 leading-relaxed text-gray-500">{children}</div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.industry}
        title={project.title}
        subtitle={project.scope}
      />

      <Container className="pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </Container>

      <Container className="pb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl bg-secondary p-8 text-center"
            >
              <div className="text-4xl font-medium text-primary">{stat.value}</div>
              <div className="text-sm font-medium text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>

      <section className="pb-10">
        <Container>
          <SlideEffect>
            <div className="rounded-2xl bg-secondary p-8 md:p-10">
              <span className="flex items-center gap-1.5 text-gray-500">
                <MapPin className="h-4 w-4 text-primary" />
                {project.location}
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-black/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </SlideEffect>

          <div className="mt-8">
            <DetailBlock title="1. Project Overview">
              <p>{project.overview}</p>
            </DetailBlock>
            <DetailBlock title="2. Client Challenge">
              <p>{project.challenge}</p>
            </DetailBlock>
            <DetailBlock title="3. Engineering Approach">
              <p>{project.approach}</p>
            </DetailBlock>
            <DetailBlock title="4. Installation">
              <p>{project.installation}</p>
            </DetailBlock>
            <DetailBlock title="5. Commissioning">
              <p>{project.commissioning}</p>
            </DetailBlock>
            <DetailBlock title="6. Results">
              <p>{project.results}</p>
            </DetailBlock>
            <DetailBlock title="7. Technical Details">
              <ul className="space-y-2">
                {project.technicalDetails.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-y border-border bg-background py-16">
        <Container>
          <SlideEffect>
            <h2 className="text-2xl font-medium capitalize text-black">
              8. Gallery
            </h2>
            <p className="mt-2 mb-8 text-sm text-gray-400">
              Placeholder images to be replaced with project photography.
            </p>
          </SlideEffect>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.gallery.map((img, i) => (
              <SlideEffect key={i} delay={i * 0.05}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <ProjectImagePlaceholder
                    label={i === 0 ? project.scope : `Project image ${i + 1}`}
                    className="h-full w-full"
                  />
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
