"use client";

import { motion } from "framer-motion";
import type { VirtueAxis } from "@/data/types";

interface Props {
  axis: VirtueAxis;
  hue: string;
  compact?: boolean;
}

/**
 * Wrap text into lines for SVG rendering.
 * Keeps "/" intact. Wraps by word when exceeding maxCharsPerLine.
 */
function splitLines(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (current && (current + " " + word).length > maxCharsPerLine) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);

  return lines;
}

export default function AxisVisualizer({ axis, hue, compact = false }: Props) {
  // --- Dimensions ---
  const w = compact ? 560 : 600;

  // Margins
  const leftX = compact ? w * 0.18 : w * 0.17;
  const rightX = compact ? w * 0.82 : w * 0.83;
  const cx = w / 2;

  const lineY = compact ? 30 : 70;
  const r = compact ? 5 : 10;
  const virtueR = compact ? 8 : 16;
  const glowR = compact ? virtueR * 2.5 : virtueR * 3;

  // More gap between circle and label
  const labelGap = compact ? 24 : 40;
  const textY = lineY + labelGap;
  const lineHeight = compact ? 13 : 18;
  const latinGap = compact ? 3 : 4;

  const viceFontSize = compact ? 10 : 12;
  const virtueFontSize = compact ? 12 : 14;
  const latinFontSize = compact ? 9 : 11;
  const viceLatinFontSize = compact ? 8 : 10;
  const dirFontSize = compact ? 8 : 9;
  const maxChars = compact ? 22 : 28;

  // Pre-compute lines for vice labels
  const defLines = splitLines(axis.viceDeficiency.name, maxChars);
  const excLines = splitLines(axis.viceExcess.name, maxChars);

  // Calculate height dynamically
  const maxViceLines = Math.max(defLines.length, excLines.length);
  const virtueLines = 1; // virtue name is always 1 line
  const maxTextLines = Math.max(maxViceLines, virtueLines);
  const textBlockHeight = maxTextLines * lineHeight;
  const latinLineHeight = compact ? 12 : 16;
  const h = textY + textBlockHeight + latinLineHeight + (compact ? 8 : 14);

  // --- Colors ---
  const accentColor = `hsl(${hue}, 70%, 55%)`;
  const accentGlow = `hsl(${hue}, 70%, 70%)`;
  const viceColor = "hsl(220, 8%, 40%)";
  const lineColor = "hsl(220, 8%, 20%)";
  const mutedColor = "hsl(220, 8%, 50%)";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full mx-auto"
      style={{ maxWidth: compact ? "100%" : "42rem" }}
      role="img"
      aria-label={`Eixo: ${axis.virtue.name} entre ${axis.viceDeficiency.name} e ${axis.viceExcess.name}`}
    >
      <defs>
        <radialGradient id={`glow-${axis.id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentGlow} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accentGlow} stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${axis.id}`}>
          <feGaussianBlur stdDeviation={compact ? 6 : 8} />
        </filter>
      </defs>

      {/* Lines from virtue outward */}
      <motion.line
        x1={cx} y1={lineY} x2={leftX} y2={lineY}
        stroke={lineColor} strokeWidth={compact ? 1.5 : 2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
      <motion.line
        x1={cx} y1={lineY} x2={rightX} y2={lineY}
        stroke={lineColor} strokeWidth={compact ? 1.5 : 2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />

      {/* Vice: Deficiency (left) */}
      <motion.circle
        cx={leftX} cy={lineY} r={r}
        fill="hsl(220, 12%, 10%)" stroke={viceColor} strokeWidth={1.5}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      {/* Vice: Excess (right) */}
      <motion.circle
        cx={rightX} cy={lineY} r={r}
        fill="hsl(220, 12%, 10%)" stroke={viceColor} strokeWidth={1.5}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      {/* Virtue glow */}
      <motion.circle
        cx={cx} cy={lineY} r={glowR}
        fill={`url(#glow-${axis.id})`}
        filter={`url(#blur-${axis.id})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />

      {/* Virtue point */}
      <motion.circle
        cx={cx} cy={lineY} r={virtueR}
        fill={accentColor} stroke={accentGlow} strokeWidth={2}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
      />

      {/* ── Labels ── */}

      {/* Deficiency label (multi-line) */}
      <motion.text
        x={leftX} y={textY} textAnchor="middle"
        fill={mutedColor} fontSize={viceFontSize} fontFamily="var(--font-sans)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        {defLines.map((line, i) => (
          <tspan key={i} x={leftX} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </motion.text>
      {axis.viceDeficiency.latin && (
        <motion.text
          x={leftX} y={textY + defLines.length * lineHeight + latinGap}
          textAnchor="middle"
          fill={mutedColor} fontSize={viceLatinFontSize}
          fontFamily="var(--font-serif)" fontStyle="italic" opacity={0.5}
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.1 }}
        >
          {axis.viceDeficiency.latin}
        </motion.text>
      )}

      {/* Virtue label */}
      <motion.text
        x={cx} y={textY} textAnchor="middle"
        fill={accentColor} fontSize={virtueFontSize} fontWeight="600"
        fontFamily="var(--font-serif)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      >
        {axis.virtue.name}
      </motion.text>
      <motion.text
        x={cx} y={textY + lineHeight + latinGap} textAnchor="middle"
        fill={accentGlow} fontSize={latinFontSize}
        fontFamily="var(--font-serif)" fontStyle="italic" opacity={0.6}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.6 }}
      >
        {axis.virtue.latin}
      </motion.text>

      {/* Excess label (multi-line) */}
      <motion.text
        x={rightX} y={textY} textAnchor="middle"
        fill={mutedColor} fontSize={viceFontSize} fontFamily="var(--font-sans)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      >
        {excLines.map((line, i) => (
          <tspan key={i} x={rightX} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </motion.text>
      {axis.viceExcess.latin && (
        <motion.text
          x={rightX} y={textY + excLines.length * lineHeight + latinGap}
          textAnchor="middle"
          fill={mutedColor} fontSize={viceLatinFontSize}
          fontFamily="var(--font-serif)" fontStyle="italic" opacity={0.5}
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.1 }}
        >
          {axis.viceExcess.latin}
        </motion.text>
      )}

      {/* Direction labels */}
      <motion.text
        x={(leftX + cx) / 2} y={lineY - (compact ? 8 : 12)}
        textAnchor="middle" fill={mutedColor} fontSize={dirFontSize}
        fontFamily="var(--font-sans)" opacity={0.4}
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.2 }}
      >
        {axis.eixoLabels?.left ?? "← falta"}
      </motion.text>
      <motion.text
        x={(rightX + cx) / 2} y={lineY - (compact ? 8 : 12)}
        textAnchor="middle" fill={mutedColor} fontSize={dirFontSize}
        fontFamily="var(--font-sans)" opacity={0.4}
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.2 }}
      >
        {axis.eixoLabels?.right ?? "demasia →"}
      </motion.text>
    </svg>
  );
}
