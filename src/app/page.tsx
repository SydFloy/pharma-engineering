import Hero from "@/components/home/hero";
import CapabilityBar from "@/components/home/capability-bar";
import ServicesSection from "@/components/home/services-section";
import EngineeringCapabilities from "@/components/home/engineering-capabilities";
import IndustriesSection from "@/components/home/industries-section";
import ProcessSection from "@/components/home/process-section";
import ProjectsSection from "@/components/home/projects-section";
import QualitySection from "@/components/home/quality-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import Statistics from "@/components/home/statistics";
import Testimonials from "@/components/home/testimonials";
import ResourcesSection from "@/components/home/resources-section";
import { CTASection } from "@/components/sections/cta-section";
import OrganizationSchema from "@/components/seo/organization-schema";

export default function Home() {
  return (
    <>
      <OrganizationSchema />

      <Hero />
      <CapabilityBar />
      <ServicesSection />
      <EngineeringCapabilities />
      <ProcessSection />
      <IndustriesSection />
      <ProjectsSection />
      <QualitySection />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <ResourcesSection />
      <CTASection />
    </>
  );
}
