"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { PrincipalVirtue, VirtueAxis } from "@/data/types";
import AxisVisualizer from "@/components/virtue/AxisVisualizer";
import { renderText } from "@/lib/renderText";

type FilterKey =
  | "todas"
  | "teologais"
  | "prudencia"
  | "justica"
  | "fortaleza"
  | "temperanca"
  | "intelectuais";

const FILTERS: { key: FilterKey; label: string; hue?: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "teologais", label: "Teologais" },
  { key: "prudencia", label: "Prudência", hue: "210" },
  { key: "justica", label: "Justiça", hue: "270" },
  { key: "fortaleza", label: "Fortaleza", hue: "30" },
  { key: "temperanca", label: "Temperança", hue: "180" },
  { key: "intelectuais", label: "Intelectuais" },
];

interface Props {
  virtues: PrincipalVirtue[];
}

export default function ExplorarClient({ virtues }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("todas");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    // Reset accent to default when on this page
    document.documentElement.style.setProperty("--accent-h", "45");
  }, []);

  const filteredAxes = getFilteredAxes(virtues, activeFilter);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
          Explorar
        </h1>
        <p className="text-foreground-muted text-lg">
          Cada eixo é uma dimensão da existência que você já está navegando.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => {
              setActiveFilter(f.key);
              setExpandedId(null);
            }}
            className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 cursor-pointer ${
              activeFilter === f.key
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-foreground-muted hover:border-foreground-muted hover:text-foreground"
            }`}
            style={
              activeFilter === f.key && f.hue
                ? {
                    borderColor: `hsl(${f.hue}, 70%, 45%)`,
                    color: `hsl(${f.hue}, 70%, 55%)`,
                    backgroundColor: `hsl(${f.hue}, 30%, 10%)`,
                  }
                : undefined
            }
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Axis Cards */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredAxes.map(({ axis, principal }) => (
            <AxisCard
              key={axis.id}
              axis={axis}
              principal={principal}
              isExpanded={expandedId === axis.id}
              onToggle={() =>
                setExpandedId(expandedId === axis.id ? null : axis.id)
              }
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AxisCard({
  axis,
  principal,
  isExpanded,
  onToggle,
}: {
  axis: VirtueAxis;
  principal: PrincipalVirtue;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hue = principal.color;
  const accentColor = `hsl(${hue}, 70%, 55%)`;
  const accentDim = `hsl(${hue}, 30%, 18%)`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-border bg-background-elevated overflow-hidden"
    >
      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 cursor-pointer focus:outline-none group"
      >
        {/* Top row: Eixo name + principal badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ background: accentColor }}
            />
            <span className="font-serif text-lg text-foreground">
              {axis.eixo}
            </span>
            {axis.isPrincipal && (
              <span
                className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border"
                style={{
                  color: accentColor,
                  borderColor: accentDim,
                  backgroundColor: `hsl(${hue}, 20%, 8%)`,
                }}
              >
                Principal
              </span>
            )}
          </div>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-foreground-muted text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </div>

        {/* The axis visualization — always visible */}
        <div className="-mx-2">
          <AxisVisualizer axis={axis} hue={hue} compact />
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: A virtude + Lógica */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-foreground-muted block mb-2 opacity-60">
                    A virtude
                  </span>
                  <p className="text-foreground text-sm leading-relaxed mb-4">
                    {renderText(axis.aVirtude)}
                  </p>
                  <p className="text-foreground-muted text-sm">
                    <span className="text-xs uppercase tracking-widest block mb-1 opacity-60">
                      Lógica
                    </span>
                    {axis.logica}
                  </p>
                </div>

                {/* Right: A privação do Bem */}
                {axis.privacaoDoBem && (
                  <div className="md:border-l md:border-border md:pl-6">
                    <span className="text-xs uppercase tracking-widest text-foreground-muted block mb-2 opacity-60">
                      A privação do Bem
                    </span>
                    <p
                      className="text-foreground text-sm leading-relaxed"
                    >
                      {renderText(axis.privacaoDoBem)}
                    </p>
                  </div>
                )}
              </div>

              {/* Link to full page */}
              <div className="mt-4">
                <Link
                  href={`/virtude/${axis.id}`}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:brightness-125"
                  style={{ color: accentColor }}
                >
                  Ver completo
                  <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function getFilteredAxes(
  virtues: PrincipalVirtue[],
  filter: FilterKey
): { axis: VirtueAxis; principal: PrincipalVirtue }[] {
  const result: { axis: VirtueAxis; principal: PrincipalVirtue }[] = [];

  for (const pv of virtues) {
    let match = false;
    switch (filter) {
      case "todas":
        match = true;
        break;
      case "teologais":
        match = pv.category === "theological";
        break;
      case "prudencia":
        match = pv.id === "prudencia";
        break;
      case "justica":
        match = pv.id === "justica";
        break;
      case "fortaleza":
        match = pv.id === "fortaleza";
        break;
      case "temperanca":
        match = pv.id === "temperanca";
        break;
      case "intelectuais":
        match = pv.category === "intellectual";
        break;
    }
    if (match) {
      for (const axis of pv.axes) {
        result.push({ axis, principal: pv });
      }
    }
  }

  return result;
}
