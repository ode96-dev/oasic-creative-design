"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { LottieAnimation } from "../animation/lottie-animation";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES_LIST = [
  "Logo & Branding",
  "Web Design",
  "Mobile App",
  "Illustration",
  "Development",
];

const BUDGET_TIERS = [
  "< $15,000",
  "$15,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

function matchServiceName(input?: string): string {
  if (!input) return "Web Design";
  const match = SERVICES_LIST.find(
    (s) => s.toLowerCase() === input.toLowerCase(),
  );
  return match || "Web Design";
}

export function ContactModal({
  isOpen,
  onClose,
  initialService,
}: ContactModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    matchServiceName(initialService),
  ]);
  const [budget, setBudget] = useState("$25,000 – $50,000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg("Please provide a valid work email address.");
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMsg(
        "Please share a brief summary of your project (at least 10 characters).",
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    setErrorMsg("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 rounded-3xl p-6 sm:p-10 text-white z-10 my-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF3E1D]"
              aria-label="Close inquiry modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF3E1D] mb-2">
                  Project Inquiry
                </p>

                <h2
                  id="contact-modal-title"
                  className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-2 text-balance"
                >
                  Start Your Design Journey
                </h2>
                <p className="text-white/65 text-sm leading-relaxed mb-7">
                  Outline your scope and timeline. Our design directors respond
                  to every brief within one business day.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <span className="block text-xs font-medium text-white/60 mb-2.5">
                      01. Disciplines Required
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_LIST.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                              isSelected
                                ? "bg-[#FF3E1D] text-white"
                                : "bg-white/5 text-white/75 hover:bg-white/10 border border-white/10"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-white/60 mb-2.5">
                      02. Estimated Budget (USD)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_TIERS.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setBudget(tier)}
                          className={`py-2.5 px-3 text-center rounded-lg text-xs font-medium transition-colors whitespace-nowrap tabular-nums cursor-pointer ${
                            budget === tier
                              ? "bg-white text-[#111111] font-semibold"
                              : "bg-white/5 text-white/75 hover:bg-white/10 border border-white/10"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-medium text-white/60 mb-2"
                      >
                        03. Full Name
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Elena Rostova"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#FF3E1D] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-medium text-white/60 mb-2"
                      >
                        04. Work Email
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#FF3E1D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-brief"
                      className="block text-xs font-medium text-white/60 mb-2"
                    >
                      05. Project Brief &amp; Timeline
                    </label>
                    <textarea
                      id="inquiry-brief"
                      rows={3}
                      required
                      placeholder="Share your goals, target launch window, and any relevant references..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#FF3E1D] transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-[#FF6B52]"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#FF3E1D] hover:bg-[#E03214] active:scale-[0.99] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? "Sending Brief..."
                        : "Submit Project Inquiry"}
                    </span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-5 flex items-center justify-center">
                  <LottieAnimation
                    type="success"
                    className="w-16 h-16"
                    loop={false}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Brief Received
                </h3>
                <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Thank you, <strong className="text-white">{name}</strong>. Our
                  creative director has received your inquiry for{" "}
                  <strong className="text-white">
                    {selectedServices.length > 0
                      ? selectedServices.join(", ")
                      : "Design Services"}
                  </strong>{" "}
                  ({budget}). We will follow up at{" "}
                  <span className="text-white/90">{email}</span> within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-7 py-3 rounded-full bg-white text-[#111111] font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Return to Page
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
