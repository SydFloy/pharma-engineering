"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navigation, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "border-b border-border bg-white/90 backdrop-blur-md"
          : "bg-white/0",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 xl:px-0">
        {/* Logo */}
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

        {/* Desktop menu */}
        <div className="hidden items-center justify-center gap-5 lg:flex">
          <ul className="flex items-center justify-center gap-5 text-black font-medium select-none text-link">
            {navigation.map((item) =>
              item.label === "Services" ? (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={cn(
                      "flex items-center gap-1 capitalize hover:opacity-80 transition-all",
                      pathname === item.href && "text-primary",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </Link>
                  {servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute left-0 top-full w-64 pt-2"
                    >
                      <div className="rounded-md bg-white p-2 shadow-xl ring-1 ring-border">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block rounded-md px-3 py-2 text-sm capitalize text-black hover:bg-muted"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "capitalize hover:opacity-80 transition-all",
                      pathname === item.href && "text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <Link href="/contact">
            <Button>Request a Consultation</Button>
          </Link>
        </div>

        {/* Mobile burger */}
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen((v) => !v)}
          className="flex cursor-pointer text-black lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {!isOpen && <AlignJustify size={20} />}
          {isOpen && <X size={20} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1, y: -20 }}
            animate={{ height: "100vh", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 1, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-16 w-full overflow-hidden bg-white lg:hidden"
          >
            <div className="flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto p-6">
              <ul className="flex flex-col space-y-1 text-black font-medium select-none text-base">
                {navigation.map((item) =>
                  item.label === "Services" ? (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-2 capitalize"
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <ul className="pl-4">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-sm capitalize text-gray-600"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 capitalize"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-6">
                <Button className="w-full">Request a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
