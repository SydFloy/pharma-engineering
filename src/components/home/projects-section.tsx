import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import SlideEffect from "@/components/effects/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Selected case studies across pharmaceutical and controlled-environment delivery."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <SlideEffect className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button size="lg" variant="secondary">
              View All Projects
            </Button>
          </Link>
        </SlideEffect>
      </Container>
    </section>
  );
}
