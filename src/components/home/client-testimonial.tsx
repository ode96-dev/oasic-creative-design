"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "@/data/agency-data";

export function ClientTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      aria-label="Client Testimonials"
      className="w-full py-20 sm:py-28 bg-[#F7F6F2] border-t border-black/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10 relative shrink-0 bg-neutral-200">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-bold text-[#111111] truncate">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-[#111111]/60 truncate">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#111111]/70 hover:text-[#111111] hover:border-[#111111] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#111111]/70 hover:text-[#111111] hover:border-[#111111] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D]"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="ml-2 text-xs font-mono text-[#111111]/45 tabular-nums">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#111111] max-w-3xl"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
