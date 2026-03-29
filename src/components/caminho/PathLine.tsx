"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface PathLineProps {
  scrollProgress: MotionValue<number>;
}

export default function PathLine({ scrollProgress }: PathLineProps) {
  const pathLength = useTransform(scrollProgress, [0, 0.95], [0, 1]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
      <svg
        width="3"
        height="100%"
        className="absolute left-1/2 top-0 h-full -translate-x-1/2 overflow-visible"
      >
        <defs>
          <filter id="path-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Glow line */}
        <motion.line
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="100%"
          stroke="hsl(45, 40%, 35%)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#path-glow)"
          style={{ pathLength }}
        />
        {/* Core line */}
        <motion.line
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="100%"
          stroke="hsl(45, 50%, 50%)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
