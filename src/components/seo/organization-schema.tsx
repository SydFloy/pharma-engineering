import { siteConfig } from "@/config/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Pharmaceutical engineering",
      "HVAC engineering",
      "Cleanroom engineering",
      "Pharmaceutical equipment installation",
      "Pharmaceutical maintenance",
      "Pharmaceutical utilities",
      "Pharmaceutical automation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
