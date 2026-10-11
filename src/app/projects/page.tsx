import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/sections/cta-section";
import { ProjectCard } from "@/components/projects/project-card";
import SlideEffect from "@/components/effects/slide-effect";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Featured engineering and maintenance projects across pharmaceutical and controlled environments, with detailed case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Featured Projects & Case Studies"
        subtitle="A selection of engineering, installation and commissioning projects delivered for pharmaceutical and controlled environments."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect className="mb-10">
            <div className="rounded-2xl border border-dashed border-border bg-secondary p-5 text-center">
              <p className="text-sm text-gray-400">
                Project data shown is placeholder and marked for replacement
                with actual case studies.
              </p>
            </div>
          </SlideEffect>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
