import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const number = siteConfig.whatsapp.replace(/\D/g, "");

  const isPlaceholder =
    siteConfig.whatsapp.startsWith("[") && siteConfig.whatsapp.endsWith("]");

  const url = isPlaceholder
    ? "/contact"
    : `https://wa.me/${number}?text=${encodeURIComponent(
        siteConfig.whatsappMessage,
      )}`;

  const external = !isPlaceholder;

  return (
    <a
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={
        isPlaceholder
          ? "Contact us about a pharmaceutical engineering project"
          : "Chat with us on WhatsApp about a pharmaceutical engineering project"
      }
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
