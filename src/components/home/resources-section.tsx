import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import SlideEffect from "@/components/effects/slide-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { articles } from "@/data/articles";

export default function ResourcesSection() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Technical Resources"
          subtitle="Engineering guides and articles on HVAC, cleanrooms, compliance and maintenance."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article, i) => (
            <SlideEffect key={article.slug} delay={i * 0.04} className="h-full">
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
                <h3 className="text-base font-medium leading-snug text-black">
                  {article.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">
                  {article.excerpt}
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-border pt-3 text-xs text-gray-400">
                  <span>{article.readingTime}</span>
                  <span className="flex items-center gap-1 font-medium text-black">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </SlideEffect>
          ))}
        </div>
        <SlideEffect className="mt-12 flex justify-center">
          <Link href="/resources">
            <Button size="lg" variant="secondary">
              View All Resources
            </Button>
          </Link>
        </SlideEffect>
      </Container>
    </section>
  );
}
