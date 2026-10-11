import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Articles", href: "/resources" },
  { label: "Technical Guides", href: "/resources" },
  { label: "Quality & Compliance", href: "/quality-compliance" },
];

const serviceLinks = services.slice(0, 6).map((s) => ({
  label: s.name.split(" ")[0],
  href: `/services/${s.slug}`,
}));

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-black">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-gray-500 hover:text-black">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white py-14 md:py-20 text-sm">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-black">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M4 8 12 3l8 5v8l-8 5-8-5V8Z" />
                  <path d="M12 3v18" />
                  <path d="M4 8l8 5 8-5" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight text-black">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-500">{siteConfig.tagline}</p>
            <div className="mt-6 space-y-2 text-gray-500">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                {siteConfig.whatsapp}
              </p>
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms &amp; Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
