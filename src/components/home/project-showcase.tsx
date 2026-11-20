"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/agency-data";
import { ReactSpringCard } from "../react-spring-card/react-spring-card";

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectShowcase({
  projects,
  onSelectProject,
}: ProjectShowcaseProps) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? projects.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= projects.length - 2 ? 0 : prev + 1));
  };

  const visibleProjects = [
    projects[startIndex % projects.length],
    projects[(startIndex + 1) % projects.length],
  ];

  return (
    <section id="projects" className="w-full py-16 sm:py-24 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF3E1D]">
              Our Project
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#111111]/75 hover:text-[#111111] hover:border-[#111111] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D]"
              aria-label="Previous projects"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#111111]/75 hover:text-[#111111] hover:border-[#111111] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D]"
              aria-label="Next projects"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          {visibleProjects.map((project, idx) => (
            <ReactSpringCard
              key={`${project.id}-${idx}`}
              intensity={4}
              onClick={() => onSelectProject(project)}
              ariaLabel={`Open case study for ${project.title}`}
              className="cursor-pointer h-full"
            >
              <article className="group bg-[#ECEBE6] hover:bg-[#E6E4DD] rounded-[28px] p-5 sm:p-6 transition-colors duration-200 border border-black/6 flex flex-col justify-between h-full">
                <div className="w-full aspect-4/3 rounded-[20px] overflow-hidden bg-white relative flex flex-col">
                  {project.previewType === "real-estate" && (
                    <div className="w-full h-full flex flex-col bg-[#0D1113] text-white select-none">
                      <div className="h-9 px-4 flex items-center justify-between border-b border-white/10 bg-[#0A0D0E] text-[10px]">
                        <span className="uppercase tracking-wider text-white/65">
                          Menu
                        </span>
                        <span className="font-bold tracking-widest text-white">
                          KONTAKO
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FF3E1D] text-[9px] font-semibold text-white">
                          Contact Us
                        </span>
                      </div>

                      <div className="relative flex-1 overflow-hidden flex flex-col justify-end p-5">
                        <Image
                          src={"/assets/images/kontako_villa_1795182355896.jpg"}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 560px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div
                          className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/20"
                          aria-hidden="true"
                        />
                        <div className="relative z-10 flex items-end justify-between gap-4">
                          <div className="max-w-65">
                            <h4 className="text-lg sm:text-xl font-extrabold uppercase leading-tight tracking-tight text-white mb-1">
                              The Future of Home Living
                            </h4>
                            <p className="text-white/75 text-[10px] leading-relaxed">
                              Private Nordic timber residences designed for
                              tranquil modern living.
                            </p>
                          </div>
                          <span className="w-7 h-7 rounded-full bg-[#FF3E1D] flex items-center justify-center text-white shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      <div className="bg-[#FAF9F5] text-[#111111] px-5 py-3.5 border-t border-black/5 flex items-center justify-between gap-4">
                        <p className="text-[10px] text-[#111111]/80 italic leading-snug line-clamp-2">
                          &ldquo;Kontako is committed to providing the best
                          service in meeting your property needs.&rdquo;
                        </p>
                        <div className="flex items-center gap-2 shrink-0 text-[9px] text-[#111111]/65">
                          <span className="w-5 h-5 rounded-full overflow-hidden relative shrink-0 border border-black/10">
                            <Image
                              src={
                                "/assets/images/client_portrait_1795182355293.jpg"
                              }
                              alt="Kianna Curtis"
                              fill
                              sizes="20px"
                              className="object-cover"
                            />
                          </span>
                          <span className="font-semibold text-[#111111] whitespace-nowrap">
                            Kianna Curtis
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === "law-firm" && (
                    <div className="w-full h-full flex flex-col bg-white text-[#111111] p-5 justify-between select-none">
                      <div className="flex items-center justify-between border-b border-black/8 pb-2.5 text-[10px]">
                        <span className="font-bold tracking-widest">
                          ROOLLAND
                        </span>
                        <span className="text-black/45">Corporate Counsel</span>
                        <span className="px-2.5 py-0.5 rounded-full border border-black/20 text-[9px] font-semibold">
                          Contact Us
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 py-2 flex-1 min-h-0">
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] text-black/45 uppercase tracking-wider block mb-1">
                            We build bridges between
                          </span>
                          <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight leading-none text-[#111111]">
                            Problem <br />
                            Solution
                          </h4>
                          <p className="text-[9px] leading-relaxed text-black/65 mt-2.5 max-w-52.5">
                            Every legal dispute is distinct. Our partners build
                            litigation strategies tailored to your commercial
                            stakes.
                          </p>
                        </div>
                        <div className="w-24 sm:w-28 h-full max-h-42 aspect-3/4 rounded-lg overflow-hidden bg-neutral-100 shrink-0 relative">
                          <Image
                            src={
                              "/assets/images/roolland_counsel_1795182355090.jpg"
                            }
                            alt={project.imageAlt}
                            fill
                            sizes="112px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-black/8 pt-3 text-center">
                        <div>
                          <div className="text-sm sm:text-base font-extrabold text-[#111111] tabular-nums">
                            284
                          </div>
                          <div className="text-[9px] text-black/55">
                            Cases Resolved
                          </div>
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-extrabold text-[#111111] tabular-nums">
                            84%
                          </div>
                          <div className="text-[9px] text-black/55">
                            Case Win Rate
                          </div>
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-extrabold text-[#111111] tabular-nums">
                            $28B
                          </div>
                          <div className="text-[9px] text-black/55">
                            Case Results
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(project.previewType === "branding-pack" ||
                    project.previewType === "stationery") && (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                        <div>
                          <p className="text-[11px] text-white/75">
                            {project.client} · {project.year}
                          </p>
                          <p className="text-sm font-bold">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-5 px-1 gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] uppercase tracking-tight truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#111111]/60 tracking-wide truncate mt-0.5">
                      {project.subtitle} · {project.year}
                    </p>
                  </div>

                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-150 ${
                      idx === 0
                        ? "bg-[#FF3E1D] text-white group-hover:scale-105"
                        : "bg-white border border-black/15 text-[#111111] group-hover:bg-[#FF3E1D] group-hover:text-white group-hover:border-[#FF3E1D]"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </span>
                </div>
              </article>
            </ReactSpringCard>
          ))}
        </div>
      </div>
    </section>
  );
}
