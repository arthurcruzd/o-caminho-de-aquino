"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PrincipalVirtue } from "@/data/types";
import { CATEGORY_LABELS } from "@/lib/constants";

interface Props {
  virtues: PrincipalVirtue[];
}

export default function MapClient({ virtues }: Props) {
  const theological = virtues.filter((v) => v.category === "theological");
  const cardinal = virtues.filter((v) => v.category === "cardinal");
  const intellectual = virtues.filter((v) => v.category === "intellectual");

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
          Mapa das Virtudes
        </h1>
        <p className="text-foreground-muted text-lg mb-10">
          Cada linha é um eixo da existência humana. Você já está em todos eles.
        </p>
      </motion.div>

      <VirtueSection
        label={CATEGORY_LABELS.theological}
        virtues={theological}
        delay={0.2}
      />
      <VirtueSection
        label={CATEGORY_LABELS.cardinal}
        virtues={cardinal}
        delay={0.4}
      />
      <VirtueSection
        label={CATEGORY_LABELS.intellectual}
        virtues={intellectual}
        delay={0.6}
        deficitLabel="Defeito (não buscar)"
        excessLabel="Excesso (absolutizar)"
      />

      {/* Prudência cross-reference note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-2 mb-12 text-foreground-muted text-sm border-l-2 border-border pl-4"
      >
        <p>
          A <Link href="/virtude/prudencia" className="text-accent hover:brightness-125 transition-colors font-serif">Prudência</Link> é simultaneamente virtude intelectual e moral — a ponte entre o conhecer e o agir.
          Ver tratamento completo nas <span className="font-medium text-foreground">Virtudes Cardeais</span>.
        </p>
      </motion.div>
    </div>
  );
}

function VirtueSection({
  label,
  virtues,
  delay,
  deficitLabel = "Defeito (falta)",
  excessLabel = "Excesso (demasia)",
}: {
  label: string;
  virtues: PrincipalVirtue[];
  delay: number;
  deficitLabel?: string;
  excessLabel?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h2 className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-6 border-b border-border pb-2">
        {label}
      </h2>

      {virtues.map((pv) => (
        <div key={pv.id} className="mb-8">
          <Link
            href={`/virtude/${pv.id}`}
            className="inline-flex items-center gap-2 mb-3 group"
          >
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ background: `hsl(${pv.color}, 70%, 55%)` }}
            />
            <h3
              className="font-serif text-2xl transition-colors group-hover:brightness-125"
              style={{ color: `hsl(${pv.color}, 70%, 55%)` }}
            >
              {pv.name}
            </h3>
            <span className="font-serif italic text-foreground-muted text-sm">
              {pv.latin}
            </span>
          </Link>

          {/* Grid of axes */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-widest text-foreground-muted">
                  <th className="text-left py-2 px-3 w-1/6">Eixo</th>
                  <th className="text-center py-2 px-3 w-1/4">{deficitLabel}</th>
                  <th className="text-center py-2 px-3 w-1/4">Virtude</th>
                  <th className="text-center py-2 px-3 w-1/4">{excessLabel}</th>
                </tr>
              </thead>
              <tbody>
                {pv.axes.map((axis) => (
                  <tr
                    key={axis.id}
                    className="border-t border-border hover:bg-background-elevated transition-colors group"
                  >
                    <td className="py-3 px-3 text-foreground-muted">
                      <Link
                        href={`/virtude/${axis.id}`}
                        className="hover:text-foreground transition-colors block"
                      >
                        {axis.eixo}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center text-vice">
                      <Link href={`/virtude/${axis.id}`} className="block">
                        {axis.viceDeficiency.name}
                        {axis.viceDeficiency.latin && (
                          <span className="block latin text-xs">
                            {axis.viceDeficiency.latin}
                          </span>
                        )}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <Link
                        href={`/virtude/${axis.id}`}
                        className="block font-serif font-semibold transition-colors"
                        style={{ color: `hsl(${pv.color}, 70%, 55%)` }}
                      >
                        {axis.virtue.name}
                        <span
                          className="block latin text-xs font-normal"
                          style={{ color: `hsl(${pv.color}, 50%, 50%)` }}
                        >
                          {axis.virtue.latin}
                        </span>
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center text-vice">
                      <Link href={`/virtude/${axis.id}`} className="block">
                        {axis.viceExcess.name}
                        {axis.viceExcess.latin && (
                          <span className="block latin text-xs">
                            {axis.viceExcess.latin}
                          </span>
                        )}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
