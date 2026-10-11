import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pharma-engineering.vercel.app"),
  title: {
    default: "[COMPANY NAME] — Engineering & Maintenance for Pharmaceutical Facilities",
    template: "%s | [COMPANY NAME]",
  },
  description:
    "Engineering and maintenance solutions for pharmaceutical facilities. HVAC, cleanrooms, equipment installation, automation, instrumentation, utilities and maintenance.",
  keywords: [
    "pharmaceutical engineering",
    "pharmaceutical maintenance",
    "pharmaceutical HVAC",
    "cleanroom engineering",
    "cleanroom installation",
    "pharmaceutical equipment installation",
    "HVAC engineering",
    "HVAC qualification",
    "pharmaceutical utilities",
    "pharmaceutical automation",
    "BMS pharmaceutical",
    "cleanroom HVAC",
  ],
  openGraph: {
    title: "[COMPANY NAME] — Engineering & Maintenance for Pharmaceutical Facilities",
    description:
      "From engineering and installation to commissioning and maintenance, we deliver reliable technical solutions for pharmaceutical manufacturing environments.",
    type: "website",
    locale: "en_US",
    siteName: "[COMPANY NAME]",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="w-full min-h-screen overflow-x-hidden antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
