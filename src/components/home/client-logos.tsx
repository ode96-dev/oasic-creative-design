"use client";

import { Square, Triangle } from "lucide-react";

export function ClientLogos() {
  return (
    <section
      aria-label="Selected Client Partners"
      className="w-full py-10 sm:py-12 border-y border-black/[0.07] bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center">
          <div className="flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity duration-150 select-none">
            <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight text-[#111111]">
              <span
                className="w-3.5 h-3.5 bg-[#111111] inline-block rotate-12"
                aria-hidden="true"
              />
              <span>PAPERZ</span>
            </div>
            <span className="text-[10px] tracking-wide text-[#111111]/55 mt-0.5">
              Creative Print Co.
            </span>
          </div>

          <div className="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-150 select-none">
            <span className="font-serif italic font-bold text-2xl sm:text-[26px] tracking-tight text-[#111111]">
              Dorfus
            </span>
          </div>

          <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity duration-150 select-none">
            <div className="flex gap-0.5 items-end h-4" aria-hidden="true">
              <span className="w-1 h-2.5 bg-[#111111]" />
              <span className="w-1 h-4 bg-[#111111]" />
              <span className="w-1 h-3 bg-[#111111]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none text-[#111111]">
                Martino
              </span>
              <span className="text-[9px] tracking-wider text-[#111111]/50 mt-0.5">
                Studio &amp; Craft
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity duration-150 select-none">
            <Square
              className="w-4 h-4 text-[#111111] stroke-[2.5]"
              aria-hidden="true"
            />
            <span className="font-mono font-bold text-lg tracking-tight text-[#111111]">
              square
            </span>
          </div>

          <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity duration-150 select-none col-span-2 sm:col-span-1">
            <Triangle
              className="w-4 h-4 text-[#111111] stroke-[2.5]"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight leading-none text-[#111111]">
                Gobona
              </span>
              <span className="text-[9px] tracking-wider text-[#111111]/50 mt-0.5">
                Global Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
