"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/data/home";

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-border bg-background py-16 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Track Record"
          title="Our Experience at a Glance"
          subtitle="Values shown are placeholders to be updated with actual figures."
        />
        <div ref={ref} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col items-center gap-2 rounded-2xl bg-secondary p-8 text-center"
            >
              <div className="text-5xl font-medium tracking-tight text-primary">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-black">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.note}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
