"use client";
import { ContactModal } from "@/components/contact-modal/contact-modal";
import { HeroSection } from "@/components/home/hero-section";
import { ShowreelModal } from "@/components/showreel-modal/showreel-modal";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [activeInquiryService, setActiveInquiryService] =
    useState<string>("Web Design");

  const handleOpenContact = (initialService = "Web Design") => {
    setActiveInquiryService(initialService);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] overflow-x-hidden">
      <main>
        <HeroSection
          onContactClick={() => handleOpenContact("Web Design")}
          onPlayClick={() => setIsShowreelOpen(true)}
        />
      </main>

      <ContactModal
        key={activeInquiryService}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={activeInquiryService}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </div>
  );
}
