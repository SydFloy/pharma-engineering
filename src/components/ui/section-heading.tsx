import type { ReactNode } from "react";
import SlideEffect from "@/components/effects/slide-effect";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <SlideEffect
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex h-7 items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 className="heading-gradient text-3xl font-medium leading-tight capitalize tracking-tight md:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-sm lg:text-base text-gray-500", align === "center" && "max-w-3xl")}>
          {subtitle}
        </p>
      )}
    </SlideEffect>
  );
}
