"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Check } from "lucide-react";
import { ProjectItem } from "@/data/agency-data";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onContactClick,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <ProjectDetailModalContent
          key={project.id}
          project={project}
          onClose={onClose}
          onContactClick={onContactClick}
        />
      )}
    </AnimatePresence>
  );
}

function ProjectDetailModalContent({
  project,
  onClose,
  onContactClick,
}: {
  project: ProjectItem;
  onClose: () => void;
  onContactClick: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "results" | "deliverables"
  >("overview");

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-[#0F0F0F] border border-white/15 rounded-t-3xl sm:rounded-3xl text-white overflow-hidden shadow-2xl"
      >
        <header className="shrink-0 px-6 sm:px-8 pt-6 sm:pt-7 pb-5 border-b border-white/10 bg-[#0F0F0F]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs text-white/60 mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[#FF3E1D] font-semibold uppercase tracking-wider">
                  Case Study
                </span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{project.client}</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{project.year}</span>
              </p>
              <h2
                id="project-modal-title"
                className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-balance"
              >
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-white/75 text-sm leading-relaxed max-w-2xl mt-3">
            {project.description}
          </p>

          <div
            role="tablist"
            aria-label="Project sections"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 mt-5"
          >
            {(["overview", "results", "deliverables"] as const).map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-[#111111]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#171717]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 text-xs text-white/85">
                  <span className="font-medium">{project.subtitle}</span>
                  <span className="font-mono text-white/65 tabular-nums shrink-0">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white/3 border border-white/10 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                  Outcome
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, i) => (
                <div
                  key={`${m.label}-${i}`}
                  className="bg-white/4 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF3E1D] tabular-nums mb-3">
                    {m.value}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-white block">
                      {m.label}
                    </span>
                    <span className="text-xs text-white/55 mt-1 block leading-relaxed">
                      {m.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "deliverables" && (
            <div className="rounded-2xl border border-white/10 bg-white/2 divide-y divide-white/10 px-5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={item}
                  className="py-4 flex items-center justify-between gap-4 text-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-white/45 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                  <Check
                    className="w-4 h-4 text-[#FF3E1D] shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="shrink-0 px-6 sm:px-8 py-4 sm:py-5 border-t border-white/10 bg-[#131313] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            Interested in a similar scope for your organization?
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF3E1D] hover:bg-[#E03214] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </footer>
      </motion.div>
    </div>
  );
}
