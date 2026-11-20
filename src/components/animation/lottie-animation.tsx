"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react").then((mod) => mod.Lottie), {
  ssr: false,
});

type LottiePreset = "success" | "play-ring";

function buildLottiePreset(type: LottiePreset) {
  if (type === "play-ring") {
    return {
      v: "5.5.7",
      fr: 60,
      ip: 0,
      op: 120,
      w: 120,
      h: 120,
      nm: "PlayRing",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "OuterArc",
          sr: 1,
          ks: {
            o: { k: 65 },
            r: {
              k: [
                { t: 0, s: [0] },
                { t: 120, s: [360] },
              ],
            },
            p: { k: [60, 60, 0] },
            a: { k: [0, 0, 0] },
            s: { k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  p: { k: [0, 0] },
                  s: { k: [104, 104] },
                },
                {
                  ty: "st",
                  c: { k: [1, 1, 1, 0.45] },
                  w: { k: 1.5 },
                  d: [
                    { n: "d", nm: "dash", v: { k: 18 } },
                    { n: "g", nm: "gap", v: { k: 10 } },
                  ],
                },
                {
                  ty: "tr",
                  p: { k: [0, 0] },
                  a: { k: [0, 0] },
                  s: { k: [100, 100] },
                  r: { k: 0 },
                  o: { k: 100 },
                },
              ],
            },
          ],
        },
      ],
    };
  }

  return {
    v: "5.5.7",
    fr: 60,
    ip: 0,
    op: 45,
    w: 100,
    h: 100,
    nm: "SuccessCheck",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Check",
        sr: 1,
        ks: {
          o: { k: 100 },
          r: { k: 0 },
          p: { k: [50, 50, 0] },
          a: { k: [0, 0, 0] },
          s: {
            k: [
              {
                i: { x: [0.16], y: [1] },
                o: { x: [0.3], y: [0] },
                t: 0,
                s: [60, 60, 100],
              },
              { t: 22, s: [100, 100, 100] },
            ],
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "sh",
                ks: {
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                    ],
                    v: [
                      [-14, 1],
                      [-4, 11],
                      [16, -11],
                    ],
                    c: false,
                  },
                },
              },
              {
                ty: "st",
                c: { k: [1, 0.243, 0.114, 1] },
                w: { k: 4.5 },
                lc: 2,
                lj: 2,
              },
              {
                ty: "tr",
                p: { k: [0, 0] },
                a: { k: [0, 0] },
                s: { k: [100, 100] },
                r: { k: 0 },
                o: { k: 100 },
              },
            ],
          },
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                p: { k: [0, 0] },
                s: { k: [76, 76] },
              },
              {
                ty: "st",
                c: { k: [1, 0.243, 0.114, 0.85] },
                w: { k: 2.5 },
              },
              {
                ty: "tr",
                p: { k: [0, 0] },
                a: { k: [0, 0] },
                s: { k: [100, 100] },
                r: { k: 0 },
                o: { k: 100 },
              },
            ],
          },
        ],
      },
    ],
  };
}

interface LottieAnimationProps {
  type?: LottiePreset;
  className?: string;
  loop?: boolean;
}

export function LottieAnimation({
  type = "success",
  className = "w-16 h-16",
  loop = false,
}: LottieAnimationProps) {
  const animationData = useMemo(() => buildLottiePreset(type), [type]);

  return (
    <div
      className={`inline-flex items-center justify-center pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <Lottie
        src={animationData}
        loop={loop}
        autoplay
        className="w-full h-full"
      />
    </div>
  );
}
