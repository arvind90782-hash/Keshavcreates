"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTextProps {
  text?: string;
  className?: string;
}

export default function HeroText({ text = "PORTFOLIO", className = "" }: HeroTextProps) {
  const [count, setCount] = useState(0);
  const characters = text.split("");

  return (
    <div
      onClick={() => setCount((c) => c + 1)}
      title="Click to re-shutter animation"
      className={`relative inline-block cursor-pointer select-none group w-full ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          role="presentation"
          aria-hidden="true"
          className="hero-huge-title font-['Space_Grotesk'] font-extrabold uppercase tracking-tight flex flex-wrap items-baseline"
        >
          {characters.map((char, i) => {
            // First 4 characters "PORT" in pure white, last 5 "FOLIO" in orange/amber gradient
            const isGradient = i >= 4;

            return (
              <span
                key={i}
                className="relative overflow-hidden inline-block"
              >
                {/* Main Character with blur reveal on mount/refresh */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.04 + 0.25, duration: 0.7 }}
                  className={`inline-block ${
                    isGradient
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFA114] to-[#FF2A00]"
                      : "text-white"
                  }`}
                >
                  {char}
                </motion.span>

                {/* Top Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 font-['Space_Grotesk'] font-extrabold uppercase tracking-tight text-[#FF5500] z-10 pointer-events-none"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                >
                  {char}
                </motion.span>

                {/* Middle Slice Layer */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "-100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.04 + 0.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 font-['Space_Grotesk'] font-extrabold uppercase tracking-tight text-white/90 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                  }}
                >
                  {char}
                </motion.span>

                {/* Bottom Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.04 + 0.18,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 font-['Space_Grotesk'] font-extrabold uppercase tracking-tight text-[#FF2A00] z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                  }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

