"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { ContactModal } from "../contact-modal/contact-modal";

const NAV_LINKS = [
  { label: "Project", href: "#projects" },
  { label: "About", href: "#agency" },
  { label: "Service", href: "#services" },
  { label: "Career", href: "#career" },
];

export function SiteHeader() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeInquiryService, setActiveInquiryService] =
    useState<string>("Web Design");

  const handleOpenContact = (initialService = "Web Design") => {
    setActiveInquiryService(initialService);
    setIsContactOpen(true);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#career") {
      handleOpenContact("Web Design");
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="w-full bg-[#F7F6F2]/95 backdrop-blur-md border-b border-black/6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D] rounded-sm"
            aria-label="OASIC Homepage"
          >
            <span
              className="relative w-4 h-4 inline-block shrink-0"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 bg-[#111111] transition-transform duration-200 group-hover:scale-105"
                style={{ clipPath: "polygon(0 0, 58% 50%, 0 100%)" }}
              />
              <span
                className="absolute inset-0 bg-[#737373]"
                style={{ clipPath: "polygon(48% 22%, 100% 50%, 48% 78%)" }}
              />
            </span>
            <span className="text-sm font-extrabold tracking-tight text-[#111111]">
              OASIC
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-9"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="relative py-1 text-sm font-medium text-[#111111]/70 hover:text-[#111111] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-[#111111] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => handleOpenContact("Web Design")}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF3E1D] hover:bg-[#E03214] active:scale-[0.98] text-white text-xs font-semibold tracking-wide transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleOpenContact("Web Design")}
              className="px-4 py-2 min-h-10 rounded-full bg-[#FF3E1D] text-white text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-full text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden border-t border-black/6 bg-[#F7F6F2] px-6 py-5"
            >
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-base font-semibold text-[#111111]/85 hover:text-[#111111] py-2.5 border-b border-black/4 last:border-b-0 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <ContactModal
        key={activeInquiryService}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={activeInquiryService}
      />
    </>
  );
}
