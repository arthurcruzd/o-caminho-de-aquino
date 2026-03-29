"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { VirtueAxis, PrincipalVirtue, ExtraSection } from "@/data/types";
import AxisVisualizer from "@/components/virtue/AxisVisualizer";
import ReflectionBlock from "@/components/virtue/ReflectionBlock";
import SiblingNav from "@/components/virtue/SiblingNav";
import { CATEGORY_LABELS } from "@/lib/constants";
import { renderText } from "@/lib/renderText";

interface Props {
  axis: VirtueAxis;
  principal: PrincipalVirtue;
  allAxes: VirtueAxis[];
}

export default function VirtueDetailClient({ axis, principal, allAxes }: Props) {
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-h", principal.color);
  }, [principal.color]);

  const categoryLabel = CATEGORY_LABELS[principal.category];
  const hue = principal.color;
  const accentColor = `hsl(${hue}, 70%, 55%)`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground-muted"
      >
        <Link href="/mapa" className="hover:text-foreground transition-colors">
          Mapa
        </Link>
        <span>/</span>
        <span style={{ color: accentColor }}>
          {categoryLabel}
        </span>
        <span>/</span>
        <Link
          href={`/virtude/${principal.id}`}
          className="hover:text-foreground transition-colors"
        >
          {principal.name}
        </Link>
        {axis.id !== principal.id && (
          <>
            <span>/</span>
            <span className="text-foreground">{axis.virtue.name}</span>
          </>
        )}
      </motion.nav>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-accent leading-tight">
          {axis.virtue.name}
        </h1>
        <p className="font-serif italic text-foreground-muted text-lg mt-1">
          {axis.virtue.latin}
        </p>
        {axis.isPrincipal && (
          <span className="inline-block mt-2 text-xs uppercase tracking-widest text-accent-dim border border-accent-dim px-2 py-0.5 rounded">
            Virtude Principal
          </span>
        )}
      </motion.div>

      {/* A Virtude */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8 mb-10"
      >
        <h2 className="text-sm uppercase tracking-widest text-foreground-muted mb-3">
          A virtude
        </h2>
        <p className="text-foreground text-base leading-relaxed">
          {renderText(axis.aVirtude)}
        </p>
      </motion.div>

      {/* Eixo + Lógica */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
      >
        <div>
          <span className="text-foreground-muted text-xs uppercase tracking-widest block mb-1">
            Eixo
          </span>
          <p className="text-foreground text-lg">{axis.eixo}</p>
        </div>
        <div>
          <span className="text-foreground-muted text-xs uppercase tracking-widest block mb-1">
            Lógica
          </span>
          <p className="text-foreground-muted">{axis.logica}</p>
        </div>
      </motion.div>

      {/* The Axis Visualizer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="my-10"
      >
        <AxisVisualizer axis={axis} hue={hue} />
      </motion.div>

      {/* Triptych: deficiency / virtue / excess with expanded descriptions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10"
      >
        {/* Virtue center (first on mobile) */}
        <div
          className="rounded-lg border-2 p-5 order-first md:order-2"
          style={{
            borderColor: `hsl(${hue}, 70%, 35%)`,
            background: `hsl(${hue}, 20%, 8%)`,
          }}
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-2 text-center">
            Virtude
          </p>
          <p className="text-accent font-serif text-lg font-semibold text-center">
            {axis.virtue.name}
          </p>
          <p className="latin mt-1 text-center" style={{ color: `hsl(${hue}, 60%, 60%)` }}>
            {axis.virtue.latin}
          </p>
        </div>

        {/* Deficiency */}
        <div className="rounded-lg border border-border bg-background-elevated p-5 md:order-1">
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-2 text-center">
            {axis.eixoLabels ? "Defeito (não buscar)" : "Defeito (falta)"}
          </p>
          <p className="text-vice font-medium text-center">{axis.viceDeficiency.name}</p>
          {axis.viceDeficiency.latin && (
            <p className="latin mt-1 text-center">{axis.viceDeficiency.latin}</p>
          )}
          <p className="text-foreground-muted text-sm leading-relaxed mt-3">
            {renderText(axis.defeitoDescricao)}
          </p>
        </div>

        {/* Excess */}
        <div className="rounded-lg border border-border bg-background-elevated p-5 md:order-3">
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-2 text-center">
            {axis.eixoLabels ? "Excesso (absolutizar)" : "Excesso (demasia)"}
          </p>
          <p className="text-vice font-medium text-center">{axis.viceExcess.name}</p>
          {axis.viceExcess.latin && (
            <p className="latin mt-1 text-center">{axis.viceExcess.latin}</p>
          )}
          <p className="text-foreground-muted text-sm leading-relaxed mt-3">
            {renderText(axis.excessoDescricao)}
          </p>
        </div>
      </motion.div>

      {/* Extras */}
      {axis.extras && axis.extras.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 space-y-8"
        >
          {axis.extras.map((section, idx) => (
            <ExtraSectionBlock key={idx} section={section} hue={hue} />
          ))}
        </motion.div>
      )}

      {/* Dom do Espírito Santo */}
      {axis.domDoEspiritoSanto && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              borderColor: `hsl(${hue}, 40%, 30%)`,
              backgroundColor: `hsl(${hue}, 20%, 8%)`,
            }}
          >
            <span className="text-xs uppercase tracking-widest text-foreground-muted">
              Dom do Espírito Santo
            </span>
            <span
              className="font-serif text-sm font-medium"
              style={{ color: accentColor }}
            >
              {axis.domDoEspiritoSanto}
            </span>
          </div>
        </motion.div>
      )}

      {/* Observations */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-10"
      >
        <h2 className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
          Observações
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground leading-relaxed text-base">{renderText(axis.observacoes)}</p>
        </div>
      </motion.div>

      {/* Relação com as virtudes morais */}
      {axis.relacaoVirtudesMorais && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
            Relação com as virtudes morais
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground leading-relaxed text-base">
              {renderText(axis.relacaoVirtudesMorais)}
            </p>
          </div>
        </motion.div>
      )}

      {/* Privação do Bem */}
      {axis.privacaoDoBem && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
            A privação do Bem
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground leading-relaxed text-base">
              {renderText(axis.privacaoDoBem)}
            </p>
          </div>
        </motion.div>
      )}

      {/* Reflection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <ReflectionBlock reflexoes={axis.reflexoes} />
      </motion.div>

      {/* Navigation */}
      <SiblingNav axes={allAxes} currentId={axis.id} />
    </div>
  );
}

function ExtraSectionBlock({ section, hue }: { section: ExtraSection; hue: string }) {
  return (
    <div>
      <h3
        className="text-sm uppercase tracking-widest mb-3"
        style={{ color: `hsl(${hue}, 50%, 55%)` }}
      >
        {section.titulo}
      </h3>
      <div className="space-y-3">
        {section.itens.map((item, i) => (
          <div key={i} className="pl-4 border-l border-border">
            <p className="text-foreground text-sm font-medium">
              {item.nome}
            </p>
            <p className="text-foreground-muted text-sm leading-relaxed mt-0.5">
              {renderText(item.descricao)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
