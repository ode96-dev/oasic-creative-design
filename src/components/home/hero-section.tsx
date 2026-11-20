"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
import { LottieAnimation } from "../animation/lottie-animation";

interface HeroSectionProps {
  onContactClick: () => void;
  onPlayClick: () => void;
}

export function HeroSection({ onContactClick, onPlayClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [springProps, springApi] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1.1, tension: 220, friction: 30 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    springApi.start({
      xys: [-(y / rect.height) * 3.5, (x / rect.width) * 3.5, 1.005],
    });
  };

  const handleMouseLeave = () => {
    springApi.start({ xys: [0, 0, 1] });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative">
          <button
            type="button"
            onClick={scrollToProjects}
            className="hidden xl:flex absolute -left-12 top-6 flex-col items-center gap-3 text-[#FF3E1D] hover:opacity-80 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D]"
            aria-label="Scroll to selected projects"
          >
            <span
              className="text-[11px] font-medium tracking-widest uppercase whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Scroll Down
            </span>
            <span className="w-px h-10 bg-[#FF3E1D]/35 relative overflow-hidden block">
              <motion.span
                animate={{ y: [-16, 40] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block w-full h-4 bg-[#FF3E1D]"
              />
            </span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <div className="mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight text-[#111111] uppercase leading-[0.95] text-balance">
                WE COMPLETE
              </h1>

              <button
                type="button"
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 py-1 text-[#FF3E1D] hover:text-[#D92D10] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D] rounded-full"
              >
                <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#FF3E1D] flex items-center justify-center group-hover:bg-[#FF3E1D] group-hover:text-white transition-colors duration-150">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase underline underline-offset-4 decoration-[#FF3E1D]/45 group-hover:decoration-[#FF3E1D]">
                  Let&apos;s talk now
                </span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 mt-2">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight text-[#111111] uppercase leading-[0.95] text-balance">
                YOUR CREATIVE IDEAS
              </h2>

              <p className="max-w-sm lg:mb-1.5 text-sm sm:text-[15px] text-[#111111]/70 font-normal leading-relaxed">
                Oasic is a visionary design agency that breathes life into ideas
                and transforms them into extraordinary realities.
              </p>
            </div>
          </div>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full"
            style={{ perspective: 1200 }}
          >
            <animated.div
              style={{
                transform: springProps.xys.to(
                  (rx, ry, s) =>
                    `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`,
                ),
                willChange: "transform",
              }}
              className="relative w-full aspect-video sm:aspect-[2.1/1] max-h-140 bg-[#090909] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 group"
            >
              <Image
                src={"/assets/images/hero_sculptural_orb_1795182355405.jpg"}
                alt="Sculptural burnt-orange sphere resting on obsidian draped silk"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div
                className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-black/25 pointer-events-none"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={onPlayClick}
                aria-label="Play agency showreel"
                className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#FF3E1D]"
              >
                <span className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
                  <LottieAnimation
                    type="play-ring"
                    className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-95 transition-opacity duration-200"
                    loop
                  />
                  <span className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#141414]/85 hover:bg-[#FF3E1D] backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 group-hover:scale-105">
                    Play
                  </span>
                </span>
              </button>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}
