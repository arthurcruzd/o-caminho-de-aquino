"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PathNode } from "@/data/caminho";

interface VirtueNodeProps {
  node: PathNode;
}

export default function VirtueNode({ node }: VirtueNodeProps) {
  const hue = node.hue;
  const color = `hsl(${hue}, 70%, 55%)`;
  const glow = `hsl(${hue}, 70%, 70%)`;
  const dimColor = `hsl(${hue}, 30%, 25%)`;

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center py-6 md:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      data-hue={hue}
    >
      {/* Desktop: horizontal layout */}
      <div className="flex w-full max-w-2xl items-center justify-center gap-0">
        {/* Left vice (deficiency) */}
        <motion.div
          className="hidden flex-1 items-center justify-end gap-3 md:flex"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {node.viceDeficiency && (
            <span className="text-right text-sm text-vice font-sans leading-tight max-w-[140px]">
              {node.viceDeficiency.name}
            </span>
          )}
          <motion.span
            className="h-px w-10 origin-right"
            style={{ backgroundColor: `hsl(${hue}, 15%, 25%)` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </motion.div>

        {/* Central node */}
        <Link
          href={node.linkTo ?? "#"}
          className="group flex flex-col items-center gap-1.5 px-4"
        >
          <motion.div
            className="h-4 w-4 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 14px ${glow}, 0 0 4px ${color}`,
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          />
          <span
            className="font-serif text-lg transition-colors group-hover:brightness-125 md:text-xl"
            style={{ color }}
          >
            {node.name}
          </span>
          {node.latin && (
            <span className="font-serif text-xs italic opacity-50">
              {node.latin}
            </span>
          )}
          {node.eixo && (
            <span className="text-[10px] uppercase tracking-widest text-foreground-muted">
              {node.eixo}
            </span>
          )}
        </Link>

        {/* Right vice (excess) */}
        <motion.div
          className="hidden flex-1 items-center justify-start gap-3 md:flex"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.span
            className="h-px w-10 origin-left"
            style={{ backgroundColor: `hsl(${hue}, 15%, 25%)` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          {node.viceExcess && (
            <span className="text-left text-sm text-vice font-sans leading-tight max-w-[140px]">
              {node.viceExcess.name}
            </span>
          )}
        </motion.div>
      </div>

      {/* Mobile: vice labels below */}
      <div className="mt-3 flex flex-col items-center gap-1 md:hidden">
        {node.viceDeficiency && (
          <div className="flex items-center gap-2 text-xs text-vice">
            <span className="opacity-50">&larr;</span>
            <span>{node.viceDeficiency.name}</span>
          </div>
        )}
        {node.viceExcess && (
          <div className="flex items-center gap-2 text-xs text-vice">
            <span>{node.viceExcess.name}</span>
            <span className="opacity-50">&rarr;</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
