"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Pause, Volume2, VolumeX, Film } from "lucide-react";
import { CHAPTERS } from "./chapters";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_SECONDS = 144;

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function getChapterIndex(progress: number) {
  const clamped = Math.max(0, Math.min(99.99, progress));
  return Math.min(
    CHAPTERS.length - 1,
    Math.floor((clamped / 100) * CHAPTERS.length),
  );
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  const seekToProgress = useCallback((nextProgress: number) => {
    const clamped = Math.max(0, Math.min(100, nextProgress));
    setProgress(clamped);
    setActiveChapter(getChapterIndex(clamped));
  }, []);

  const selectChapter = useCallback((index: number) => {
    const bounded = Math.max(0, Math.min(CHAPTERS.length - 1, index));
    const startPct = (bounded / CHAPTERS.length) * 100;
    setActiveChapter(bounded);
    setProgress(startPct);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        seekToProgress(progress + 5);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        seekToProgress(progress - 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, progress, seekToProgress]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev >= 100 ? 0 : prev + 0.5;
        setActiveChapter(getChapterIndex(next));
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  const currentSlide = CHAPTERS[activeChapter] ?? CHAPTERS[0];
  const currentSeconds = Math.floor((progress / 100) * TOTAL_SECONDS);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Oasic Studio Showreel"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0A0A0A] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-[#FF3E1D]/15 text-[#FF3E1D]">
                  <Film className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Oasic Studio Reel
                </span>
                <span className="hidden text-xs font-mono text-white/40 sm:inline">
                  — {String(activeChapter + 1).padStart(2, "0")} /{" "}
                  {String(CHAPTERS.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/25 hover:bg-white/15 hover:text-white"
                aria-label="Close showreel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.25 }}
                  transition={{ duration: 0.28 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-black/30 to-black/25"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 sm:p-8">
                <div className="max-w-2xl">
                  <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#FF3E1D]">
                    {currentSlide.label}
                  </p>
                  <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-white sm:text-4xl">
                    {currentSlide.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-white/75 sm:text-sm">
                    {currentSlide.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#0A0A0A] px-4 pt-3 pb-4 sm:px-6">
              <div
                role="slider"
                tabIndex={0}
                aria-label="Showreel progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = ((e.clientX - rect.left) / rect.width) * 100;
                  seekToProgress(pct);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") seekToProgress(progress + 5);
                  if (e.key === "ArrowLeft") seekToProgress(progress - 5);
                }}
                className="group relative mb-3.5 h-2 w-full cursor-pointer rounded-full bg-white/15 transition-all hover:h-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3E1D]"
              >
                <div
                  className="h-full rounded-full bg-[#FF3E1D] transition-[width] duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-white">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#FF3E1D] text-white transition-opacity hover:opacity-90"
                    aria-label={isPlaying ? "Pause reel" : "Play reel"}
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5" />
                    ) : (
                      <Play className="ml-0.5 h-3.5 w-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>

                  <span className="font-mono text-xs tabular-nums text-white/70">
                    {formatTime(currentSeconds)} / {formatTime(TOTAL_SECONDS)}
                  </span>
                </div>

                <div
                  className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0"
                  role="tablist"
                  aria-label="Showreel chapters"
                >
                  {CHAPTERS.map((ch, idx) => {
                    const isActive = activeChapter === idx;
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => selectChapter(idx)}
                        className={`cursor-pointer whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                          isActive
                            ? "bg-white text-[#0A0A0A]"
                            : "bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="mr-1.5 font-mono text-[10px] opacity-60">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {ch.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
