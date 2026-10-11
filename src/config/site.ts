export const siteConfig = {
  name: "[COMPANY NAME]",
  shortName: "[LOGO]",
  tagline:
    "Engineering & Maintenance Solutions for Pharmaceutical Facilities",
  email: "[EMAIL]",
  phone: "[PHONE]",
  whatsapp: "[WHATSAPP]",
  address: "[ADDRESS]",
  country: "[COUNTRY]",
  businessHours: "[MON-FRI: 08:00 – 18:00]",
  url: "https://pharma-engineering.vercel.app",
  whatsappMessage:
    "Hello, I would like to discuss a pharmaceutical engineering project.",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & Compliance", href: "/quality-compliance" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;
