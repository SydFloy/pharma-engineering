import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock, Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import SlideEffect from "@/components/effects/slide-effect";
import ProjectRequestForm from "@/components/forms/project-request-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact our engineering team to discuss your pharmaceutical facility project, request a consultation, or submit a technical request.",
};

const contactItems = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Our Engineering Team"
        subtitle="Tell us about your pharmaceutical engineering project and our team will review your requirements."
      />

      {/* Contact info cards */}
      <Container className="pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <SlideEffect key={item.label}>
              <div className="flex items-center gap-3 rounded-2xl bg-secondary p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-black">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.label}
                  </div>
                  <div className="truncate text-sm font-medium text-black">
                    {item.value}
                  </div>
                </div>
              </div>
            </SlideEffect>
          ))}
        </div>
      </Container>

      {/* Form + details */}
      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SlideEffect>
              <h2 className="text-3xl font-medium capitalize text-black">
                Request a Consultation
              </h2>
              <p className="mt-2 mb-8 text-gray-500">
                Provide your project details below. All fields marked with{" "}
                <span className="text-primary">*</span> are required.
              </p>
            </SlideEffect>
            <ProjectRequestForm />
          </div>

          <aside className="space-y-6">
            <SlideEffect>
              <div className="rounded-2xl bg-secondary p-6">
                <div className="flex items-center gap-2 text-black">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-medium">Business Hours</h3>
                </div>
                <p className="mt-3 text-gray-500">{siteConfig.businessHours}</p>
                <p className="mt-1 text-xs text-gray-400">
                  Placeholder — to be updated with actual business hours.
                </p>
              </div>
            </SlideEffect>

            <SlideEffect delay={0.05}>
              <div className="rounded-2xl bg-secondary p-6">
                <div className="flex items-center gap-2 text-black">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-medium">Main Office</h3>
                </div>
                <p className="mt-3 leading-relaxed text-gray-500">
                  {siteConfig.address}
                  <br />
                  {siteConfig.country}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Placeholder location — to be updated with the actual address.
                </p>
              </div>
            </SlideEffect>

            {/* Map placeholder */}
            <SlideEffect delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-muted to-secondary">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 px-4 text-xs font-medium uppercase tracking-wider text-black/40">
                      Google Maps — [ADDRESS]
                    </p>
                    <p className="mt-1 text-[10px] text-black/30">
                      Placeholder map to be replaced
                    </p>
                  </div>
                </div>
              </div>
            </SlideEffect>
          </aside>
        </div>
      </Container>
    </>
  );
}
