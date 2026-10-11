import Link from "next/link";
import { MapPin, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import type { CaseStudy } from "@/types";
import SlideEffect from "@/components/effects/slide-effect";

export function ProjectImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-muted to-secondary ${className}`}
    >
      <div className="text-center">
        <ImageIcon className="mx-auto h-14 w-14 text-black/20" strokeWidth={1} />
        <p className="mt-3 px-4 text-xs font-medium uppercase tracking-wider text-black/40">
          {label}
        </p>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
}) {
  return (
    <SlideEffect delay={index * 0.06} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <ProjectImagePlaceholder label={project.scope} className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {project.industry}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <MapPin className="h-3 w-3" />
              {project.location}
            </span>
          </div>
          <h3 className="text-xl font-medium text-black">{project.title}</h3>
          <p className="flex-1 text-sm text-gray-500">{project.scope}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-black/60"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-black">
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </SlideEffect>
  );
}
