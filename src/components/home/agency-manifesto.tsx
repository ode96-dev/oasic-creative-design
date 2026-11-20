import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GALLERY_ARTIFACTS } from "@/data/agency-data";
import { ReactSpringCard } from "../react-spring-card/react-spring-card";

interface AgencyManifestoProps {
  onContactClick: () => void;
  onPortfolioClick: () => void;
  onArtifactClick?: (projectId: string) => void;
}

export function AgencyManifesto({
  onContactClick,
  onPortfolioClick,
  onArtifactClick,
}: AgencyManifestoProps) {
  return (
    <section
      id="agency"
      className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FF3E1D] mb-4">
              The Agency
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-[1.06] text-white text-balance">
              OASIC IS A VISIONARY DESIGN AGENCY THAT BREATHES LIFE INTO IDEAS
              AND TRANSFORMS THEM INTO EXTRAORDINARY REALITIES.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right gap-6">
            <p className="max-w-md text-sm sm:text-[15px] text-white/70 leading-relaxed">
              From tactile print collateral and architectural packaging to
              flagship digital platforms, we build cohesive systems that hold up
              under scrutiny.
            </p>

            <button
              type="button"
              onClick={onContactClick}
              className="group inline-flex items-center gap-3.5 text-white hover:text-[#FF3E1D] transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D] rounded-full"
            >
              <span className="w-11 h-11 rounded-full bg-[#FF3E1D] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-150">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                Let&apos;s talk now
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-12 sm:pt-16">
          {GALLERY_ARTIFACTS.map((artifact) => (
            <ReactSpringCard
              key={artifact.id}
              intensity={4}
              onClick={() =>
                onArtifactClick
                  ? onArtifactClick(artifact.projectId)
                  : onPortfolioClick()
              }
              ariaLabel={`View ${artifact.title} for ${artifact.client}`}
              className="cursor-pointer h-full"
            >
              <figure className="h-full flex flex-col group">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-[#141414] border border-white/10">
                  <Image
                    src={artifact.image}
                    alt={artifact.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-200 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="pt-3.5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] text-white/50 font-mono tabular-nums uppercase tracking-wider">
                      {artifact.index} · {artifact.discipline}
                    </span>
                    <p className="text-sm font-semibold text-white truncate mt-0.5 group-hover:text-[#FF3E1D] transition-colors duration-150">
                      {artifact.title}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-white/60 shrink-0 pt-0.5">
                    {artifact.client}
                  </span>
                </figcaption>
              </figure>
            </ReactSpringCard>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 sm:mt-14 pt-8 border-t border-white/10">
          <p className="text-xs text-white/55">
            Selected artifacts across identity, packaging, and digital systems.
          </p>
          <button
            type="button"
            onClick={onPortfolioClick}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-transparent hover:bg-white text-white hover:text-[#111111] text-xs font-semibold tracking-wider uppercase border border-white/25 hover:border-white transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E1D]"
          >
            See our portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
