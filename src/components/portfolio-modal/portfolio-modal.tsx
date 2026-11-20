"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { ProjectItem, PROJECTS } from "@/data/agency-data";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function PortfolioModal({
  isOpen,
  onClose,
  onSelectProject,
}: PortfolioModalProps) {
  const [filter, setFilter] = useState<"all" | "web" | "brand">("all");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.filterGroup === filter;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
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
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#0F0F0F] border border-white/15 rounded-3xl p-6 sm:p-10 text-white z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close portfolio archive"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pr-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF3E1D] mb-1.5">
                  Selected Archives
                </p>
                <h2
                  id="portfolio-modal-title"
                  className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight"
                >
                  Complete Portfolio
                </h2>
              </div>

              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
                {(["all", "web", "brand"] as const).map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      filter === cat
                        ? "bg-[#FF3E1D] text-white"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {cat === "all"
                      ? "All Work"
                      : cat === "web"
                        ? "Web Design"
                        : "Brand Identity"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProjects.map((proj) => (
                <button
                  type="button"
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(proj);
                  }}
                  className="group text-left bg-[#161616] hover:bg-[#1D1D1D] border border-white/10 hover:border-white/25 rounded-[20px] p-4 transition-colors cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-16/10 w-full rounded-[14px] overflow-hidden mb-4 bg-black">
                    <Image
                      src={proj.image}
                      alt={proj.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 px-1">
                    <div className="min-w-0">
                      <p className="text-xs text-white/55 truncate">
                        {proj.client} · {proj.category} ·{" "}
                        <span className="font-mono tabular-nums">
                          {proj.year}
                        </span>
                      </p>
                      <h3 className="text-lg font-extrabold tracking-tight text-white group-hover:text-[#FF3E1D] transition-colors mt-0.5 truncate">
                        {proj.title}
                      </h3>
                    </div>

                    <span className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF3E1D] text-white flex items-center justify-center shrink-0 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
