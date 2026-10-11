import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { CTASection } from "@/components/sections/cta-section";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "Engineering guides and articles on pharmaceutical HVAC, cleanrooms, compliance, utility systems, automation and maintenance.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical Resources & Articles"
        subtitle="Engineering guides covering HVAC, cleanrooms, compliance, utilities, automation and maintenance for pharmaceutical facilities."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <SlideEffect key={article.slug} delay={i * 0.03} className="h-full">
                <Link
                  href={`/resources/${article.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-primary">
                      {article.category}
                    </span>
                    <FileText className="h-4 w-4 text-gray-400" />
                  </div>
                  <h2 className="text-lg font-medium leading-snug text-black">
                    {article.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {article.excerpt}
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-border pt-3 text-xs text-gray-400">
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-black">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
