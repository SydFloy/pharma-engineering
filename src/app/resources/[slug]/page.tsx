import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/sections/cta-section";
import SlideEffect from "@/components/effects/slide-effect";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
      />

      <Container className="pb-6">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resources
        </Link>
      </Container>

      <section className="pb-20">
        <Container className="max-w-3xl">
          <SlideEffect>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime}
              </span>
            </div>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700">
              <p>
                This article is a technical introduction to{" "}
                <strong>{article.title}</strong>. The full editorial body is
                being prepared and this placeholder ensures the structure and
                route are in place for production content.
              </p>
              <h2 className="text-2xl font-medium capitalize text-black">
                Overview
              </h2>
              <p>
                {article.excerpt} For pharmaceutical facilities, a structured,
                documented and risk-based approach is essential to maintaining
                controlled environments and reliable systems.
              </p>
              <h2 className="text-2xl font-medium capitalize text-black">
                Related Technical Considerations
              </h2>
              <p>
                Depending on the topic, key considerations include system
                design, commissioning and qualification, monitoring, preventive
                maintenance and documentation — each adapted to the regulated
                nature of pharmaceutical environments.
              </p>
              <p>
                Working with an engineering and maintenance partner that
                understands pharmaceutical facilities supports reliable and
                compliant outcomes across the system lifecycle.
              </p>
            </div>
          </SlideEffect>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="text-lg font-medium capitalize text-black">
              Related Resources
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="rounded-2xl bg-secondary p-4 text-sm transition-colors hover:shadow-md"
                >
                  <span className="text-xs font-medium text-primary">
                    {r.category}
                  </span>
                  <span className="mt-1 block font-medium text-black">
                    {r.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
