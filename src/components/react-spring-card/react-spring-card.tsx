"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ReactSpringCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
  ariaLabel?: string;
}

export function ReactSpringCard({
  children,
  className = "",
  intensity = 4,
  onClick,
  ariaLabel,
}: ReactSpringCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [props, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 240, friction: 28 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const rx =
      -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) *
      intensity;
    const ry =
      ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * intensity;
    api.start({ xys: [rx, ry, 1.008] });
  };

  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
      className={`focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3E1D] rounded-[28px] ${className}`}
      style={{ perspective: 1200 }}
    >
      <animated.div
        style={{
          transform: props.xys.to(
            (rx, ry, s) =>
              `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`,
          ),
          willChange: "transform",
        }}
        className="w-full h-full"
      >
        {children}
      </animated.div>
    </div>
  );
}
