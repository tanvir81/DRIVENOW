"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * BorderBeam component provides an animated beam of light traveling along the border.
 */
export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        border: `${borderWidth}px solid transparent`,
        maskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
        maskClip: "padding-box, border-box",
        maskComposite: "intersect",
        WebkitMaskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
        WebkitMaskClip: "padding-box, border-box",
        WebkitMaskComposite: "destination-in",
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          // Add default gradient if none provided
          !className?.includes("bg-") && !className?.includes("from-") && "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          // Ensure a gradient background is active if from-/via- is provided without bg-
          !className?.includes("bg-") && (className?.includes("from-") || className?.includes("via-")) && "bg-linear-to-l",
          className
        )}
        style={{
          width: size,
          aspectRatio: "1/1",
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          ...style,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};
