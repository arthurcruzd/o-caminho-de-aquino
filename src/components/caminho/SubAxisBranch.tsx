"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PathNode } from "@/data/caminho";

interface SubAxisBranchProps {
  node: PathNode;
  index: number;
}

export default function SubAxisBranch({ node, index }: SubAxisBranchProps) {
  const hue = node.hue;
  const color = `hsl(${hue}, 55%, 50%)`;
  const dimBranch = `hsl(${hue}, 15%, 22%)`;
  const isLeft = index % 2 === 0;

  const baseDelay = 0.1 + index * 0.05;

  return (
    <motion.div
      className={`relative z-10 flex items-center py-3 md:py-4 ${
        isLeft ? "md:justify-end md:pr-[calc(50%+16px)]" : "md:justify-start md:pl-[calc(50%+16px)]"
      } justify-center`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: baseDelay }}
      data-hue={hue}
    >
      {/* Connector line to center (desktop) */}
      <motion.div
        className={`hidden md:block absolute top-1/2 h-px w-4 -translate-y-1/2 ${
          isLeft ? "right-[calc(50%-1px)]" : "left-[calc(50%-1px)]"
        }`}
        style={{ backgroundColor: dimBranch }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, delay: baseDelay }}
      />

      <div
        className={`flex items-center gap-3 ${
          isLeft ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Small node circle */}
        <motion.div
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 200, delay: baseDelay + 0.1 }}
        />

        <Link
          href={node.linkTo ?? "#"}
          className="group flex flex-col"
        >
          <span
            className="font-serif text-sm transition-colors group-hover:brightness-125"
            style={{ color }}
          >
            {node.name}
          </span>
          {node.latin && (
            <span className="font-serif text-[10px] italic opacity-40">
              {node.latin}
            </span>
          )}
        </Link>

        {/* Vice labels */}
        <div
          className={`hidden items-center gap-2 text-[11px] text-vice opacity-70 md:flex ${
            isLeft ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <span className="opacity-30">|</span>
          <div className="flex flex-col leading-tight">
            {node.viceDeficiency && (
              <span className={isLeft ? "text-right" : "text-left"}>
                {node.viceDeficiency.name}
              </span>
            )}
            {node.viceExcess && (
              <span className={isLeft ? "text-right" : "text-left"}>
                {node.viceExcess.name}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile vice labels */}
      <div className="ml-2 flex flex-col text-[10px] text-vice opacity-60 md:hidden">
        {node.viceDeficiency && <span>&larr; {node.viceDeficiency.name}</span>}
        {node.viceExcess && <span>{node.viceExcess.name} &rarr;</span>}
      </div>
    </motion.div>
  );
}
