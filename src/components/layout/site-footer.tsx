"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { ContactModal } from "../contact-modal/contact-modal";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#projects" },
  { label: "Terms & Conditions", href: "#agency" },
  { label: "About Us", href: "#agency" },
  { label: "FAQ", href: "#services" },
];

export function SiteFooter() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeInquiryService, setActiveInquiryService] =
    useState<string>("Web Design");

  const handleOpenContact = (initialService = "Web Design") => {
    setActiveInquiryService(initialService);
    setIsContactOpen(true);
  };

  return (
    <>
      {" "}
      <footer className="w-full bg-[#000000] text-white pt-16 sm:pt-24 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 sm:pb-20 border-b border-white/10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="font-bold text-sm sm:text-base tracking-widest uppercase">
                  OASIC
                </span>
                <button
                  type="button"
                  onClick={() => handleOpenContact("Web Design")}
                  className="w-11 h-11 rounded-full bg-[#FF3E1D] hover:bg-[#E03214] flex items-center justify-center text-white transition-transform duration-150 hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Start a collaboration with Oasic"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.05] max-w-xl text-balance">
                Collaborate with Oasic and start your design journey
              </h3>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-8 h-full">
              <nav
                className="flex flex-wrap gap-5 sm:gap-7 text-xs font-medium text-white/70"
                aria-label="Footer"
              >
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-[#FF3E1D] transition-colors duration-150 uppercase tracking-wider whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-5 text-white/70">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 -m-2 hover:text-white transition-colors duration-150"
                  aria-label="Oasic on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 -m-2 hover:text-white transition-colors duration-150"
                  aria-label="Oasic on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 -m-2 hover:text-white transition-colors duration-150"
                  aria-label="Oasic on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 -m-2 hover:text-white transition-colors duration-150"
                  aria-label="Oasic on YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-white/45 tracking-wide">
                &copy; 2026 OASIC INC. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="pt-10 sm:pt-14 pb-2 flex items-center justify-center overflow-hidden">
            <p
              className="text-[13.5vw] font-black text-white uppercase tracking-tighter leading-none select-none text-center whitespace-nowrap"
              aria-hidden="true"
            >
              OASIC&mdash;2026
            </p>
          </div>
        </div>
      </footer>
      <ContactModal
        key={activeInquiryService}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={activeInquiryService}
      />
    </>
  );
}
