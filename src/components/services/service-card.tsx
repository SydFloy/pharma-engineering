import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { DynamicIcon } from "@/components/icons/DynamicIcon";
import SlideEffect from "@/components/effects/slide-effect";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <SlideEffect delay={index * 0.06} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col gap-4 rounded-2xl bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-black transition-colors group-hover:bg-primary">
          <DynamicIcon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-medium text-black">{service.name}</h3>
        <p className="flex-1 text-sm text-gray-500">{service.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-full bg-muted px-2.5 py-1 text-xs text-black/60"
            >
              {f}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1.5 text-sm font-medium text-black">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </SlideEffect>
  );
}
