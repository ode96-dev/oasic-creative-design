"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ServiceItem, SERVICES } from "@/data/agency-data";

interface ServicesAccordionProps {
  onServiceSelect: (service: ServiceItem) => void;
}

export function ServicesAccordion({ onServiceSelect }: ServicesAccordionProps) {
  const [activeNumber, setActiveNumber] = useState<string>("02");

  return (
    <section id="services" className="w-full py-20 sm:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF3E1D] mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111111] text-balance">
            Our Area of Specialization
          </h2>
        </div>

        <div className="border-t border-black/10 divide-y divide-black/10">
          {SERVICES.map((srv) => {
            const isActive = activeNumber === srv.number;

            return (
              <div key={srv.number}>
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#0D0D0D] text-white rounded-3xl p-6 sm:p-9 my-4 border border-white/10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <div className="w-full lg:w-52 aspect-4/3 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 bg-[#171717]">
                        <Image
                          src={srv.image}
                          alt={srv.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 208px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-4">
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="text-lg sm:text-2xl font-mono font-semibold text-[#FF3E1D] tabular-nums shrink-0">
                            {srv.number}.
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                            {srv.title}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-2xl">
                          {srv.description}
                        </p>

                        <p className="text-xs text-white/55 leading-relaxed">
                          {srv.deliverables.join(" · ")}
                        </p>
                      </div>

                      <div className="flex items-center lg:justify-end shrink-0">
                        <button
                          type="button"
                          onClick={() => onServiceSelect(srv)}
                          className="group inline-flex items-center gap-3 lg:gap-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D] rounded-full"
                          aria-label={`Discuss ${srv.title} project`}
                        >
                          <span className="lg:hidden text-xs font-semibold uppercase tracking-wider text-white/80">
                            Inquire
                          </span>
                          <span className="w-12 h-12 rounded-full bg-[#FF3E1D] hover:bg-[#E03214] flex items-center justify-center text-white transition-transform duration-150 group-hover:scale-105">
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveNumber(srv.number)}
                    className="w-full py-6 sm:py-7 flex items-center justify-between text-left group hover:px-3 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#FF3E1D]"
                  >
                    <h3 className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111] group-hover:text-[#FF3E1D] transition-colors duration-150">
                      {srv.title}
                    </h3>

                    <div className="flex items-center gap-8 sm:gap-14 shrink-0">
                      <span className="text-xs sm:text-sm font-mono text-[#111111]/45 group-hover:text-[#111111] transition-colors tabular-nums">
                        {srv.number}
                      </span>
                      <span className="w-8 h-8 flex items-center justify-center text-[#111111]/55 group-hover:text-[#111111] group-hover:translate-x-1 transition-all duration-150">
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
