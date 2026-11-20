"use client";
import { ContactModal } from "@/components/contact-modal/contact-modal";
import { ClientLogos } from "@/components/home/client-logos";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { PortfolioModal } from "@/components/portfolio-modal/portfolio-modal";
import { ProjectDetailModal } from "@/components/project-detail-modal/project-detail-modal";
import { ShowreelModal } from "@/components/showreel-modal/showreel-modal";
import { ProjectItem, PROJECTS } from "@/data/agency-data";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [activeInquiryService, setActiveInquiryService] =
    useState<string>("Web Design");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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

        <ClientLogos />

        <ProjectShowcase
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
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

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => {
          const title = selectedProject?.category || "Web Design";
          setSelectedProject(null);
          handleOpenContact(title);
        }}
      />

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        onSelectProject={(proj) => {
          setIsPortfolioOpen(false);
          setSelectedProject(proj);
        }}
      />
    </div>
  );
}
