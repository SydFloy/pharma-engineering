import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import { CTASection } from "@/components/sections/cta-section";
import { team } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Engineering and maintenance company focused on pharmaceutical and controlled environments, delivering services across the full equipment and facility lifecycle.",
};

const approachSteps = ["Engineering", "Installation", "Commissioning", "Maintenance"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Technical Partner for Pharmaceutical Facilities"
        subtitle="Engineering and maintenance company focused on pharmaceutical and controlled environments."
      />

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <SlideEffect>
            <div className="flex flex-col gap-4">
              <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Who We Are
              </div>
              <h2 className="heading-gradient text-3xl font-medium leading-tight capitalize md:text-4xl">
                Reliable Engineering for Regulated Environments
              </h2>
              <p className="mt-2 text-gray-500">
                We are an engineering and maintenance company focused on
                pharmaceutical and controlled environments. Our engineering,
                installation, commissioning and maintenance capabilities support
                HVAC, cleanrooms, equipment, automation, instrumentation,
                utilities and building systems.
              </p>
              <p className="text-gray-500">
                Acting as a single technical partner, we help pharmaceutical
                manufacturers, engineering departments and facility managers
                deliver and maintain reliable, technical facilities.
              </p>
            </div>
          </SlideEffect>
          <SlideEffect delay={0.1}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary p-8">
                <h3 className="text-lg font-medium text-black">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  Deliver reliable engineering solutions that improve facility
                  performance, equipment reliability, compliance, and
                  operational efficiency.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-8">
                <h3 className="text-lg font-medium text-black">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Become a trusted engineering and technical services partner
                  for pharmaceutical facilities.
                </p>
              </div>
            </div>
          </SlideEffect>
        </Container>
      </section>

      {/* Expertise */}
      <section className="border-y border-border bg-background py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto max-w-3xl text-center">
            <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black mx-auto">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our Expertise
            </div>
            <h2 className="heading-gradient mt-4 text-3xl font-medium capitalize md:text-4xl">
              Multidisciplinary Technical Capability
            </h2>
          </SlideEffect>
          <SlideEffect className="mt-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "HVAC",
                "Cleanrooms",
                "Equipment",
                "Automation",
                "Instrumentation",
                "Utilities",
                "Maintenance",
                "Commissioning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-secondary p-5"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
          </SlideEffect>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto text-center">
            <h2 className="heading-gradient text-3xl font-medium capitalize md:text-4xl">
              Engineering → Installation → Commissioning → Maintenance
            </h2>
          </SlideEffect>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <SlideEffect key={step} delay={i * 0.07} className="h-full">
                <div className="relative flex h-full flex-col rounded-2xl bg-secondary p-8">
                  <span className="font-mono text-3xl font-medium text-primary/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-black">{step}</h3>
                  {i < approachSteps.length - 1 && (
                    <ArrowRight className="absolute right-4 top-6 h-5 w-5 text-gray-300" />
                  )}
                </div>
              </SlideEffect>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-y border-border bg-background py-16 md:py-24">
        <Container>
          <SlideEffect className="mx-auto max-w-3xl text-center">
            <div className="flex h-7 w-fit items-center gap-2 rounded-full bg-muted px-4 text-[12px] uppercase tracking-wider text-black mx-auto">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our Team
            </div>
            <h2 className="heading-gradient mt-4 text-3xl font-medium capitalize md:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-2 text-gray-400">
              Placeholder team profiles to be replaced with actual members.
            </p>
          </SlideEffect>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <SlideEffect key={i} delay={i * 0.04} className="h-full">
                <div className="flex flex-col items-center rounded-2xl bg-secondary p-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-black/30">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-black">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-gray-400">{member.role}</p>
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
