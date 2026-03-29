"use client";

import { motion } from "framer-motion";

export default function PrivationVisualizer() {
  const cx = 150;
  const cy = 150;
  const r = 80;

  return (
    <div className="flex justify-center my-12">
      <svg
        viewBox="0 0 300 300"
        className="w-48 h-48 md:w-64 md:h-64"
        aria-label="Privação: um círculo de luz com uma ausência"
      >
        <defs>
          <radialGradient id="privation-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(220, 8%, 50%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(220, 8%, 50%)" stopOpacity="0" />
          </radialGradient>
          <mask id="privation-mask">
            <rect width="300" height="300" fill="white" />
            {/* The "bite" — the privation */}
            <motion.circle
              cx={cx + 55}
              cy={cy - 40}
              r={50}
              fill="black"
              initial={{ r: 0 }}
              animate={{ r: 50 }}
              transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
            />
          </mask>
        </defs>

        {/* Outer glow */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={120}
          fill="url(#privation-glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* The circle of good — with a bite taken out */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="hsl(220, 8%, 35%)"
          strokeWidth={1.5}
          mask="url(#privation-mask)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Inner fill — the good, with privation */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="hsl(220, 8%, 15%)"
          mask="url(#privation-mask)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Center point — what remains */}
        <motion.circle
          cx={cx - 10}
          cy={cy + 10}
          r={3}
          fill="hsl(220, 8%, 45%)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />

        {/* Labels */}
        <motion.text
          x={cx - 10}
          y={cy + 55}
          textAnchor="middle"
          className="font-serif"
          fill="hsl(220, 8%, 40%)"
          fontSize="11"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          bonum
        </motion.text>

        <motion.text
          x={cx + 50}
          y={cy - 55}
          textAnchor="middle"
          className="font-serif italic"
          fill="hsl(220, 8%, 30%)"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          privatio
        </motion.text>
      </svg>
    </div>
  );
}
