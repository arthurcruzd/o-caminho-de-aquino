"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  O_MAL_SECTIONS,
  THREE_TYPES_OF_EVIL,
  O_MAL_REFLECTIONS,
  getVirtueHue,
} from "@/data/o-mal";
import { renderText } from "@/lib/renderText";
import PrivationVisualizer from "@/components/o-mal/PrivationVisualizer";
import CapitalVicesTable from "@/components/o-mal/CapitalVicesTable";
import TranscendentalsTable from "@/components/o-mal/TranscendentalsTable";
import SectionProgress from "@/components/o-mal/SectionProgress";
import ReflectionBlock from "@/components/virtue/ReflectionBlock";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

function SectionHeading({ section }: { section: (typeof O_MAL_SECTIONS)[number] }) {
  return (
    <motion.div className="mb-8" {...fadeIn}>
      <span className="text-xs uppercase tracking-widest text-foreground-muted block mb-2">
        {section.number} / 7
      </span>
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
        {section.title}
      </h2>
      <p className="font-serif italic text-foreground-muted text-base mt-1">
        {section.subtitle}
      </p>
    </motion.div>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <motion.p
          key={i}
          className="text-foreground leading-relaxed text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          {renderText(p)}
        </motion.p>
      ))}
    </div>
  );
}

function ThreeTypesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {THREE_TYPES_OF_EVIL.map((type, idx) => (
        <motion.div
          key={type.latin}
          className="rounded-lg border border-border bg-background-elevated p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-2">
            {type.name}
          </p>
          <p className="font-serif italic text-foreground-muted text-sm mb-3">
            {type.latin}
          </p>
          <p className="text-foreground text-sm leading-relaxed mb-3">
            {renderText(type.description)}
          </p>
          <p className="text-foreground-muted text-xs leading-relaxed">
            {type.virtueResponse}
            {type.linkedAxes.length > 0 && (
              <span>
                {" "}
                {type.linkedAxes.map((axisId, i) => (
                  <span key={axisId}>
                    {i > 0 && ", "}
                    <Link
                      href={`/virtude/${axisId}`}
                      className="transition-colors hover:text-foreground"
                      style={{
                        color: `hsl(${getVirtueHue(
                          axisId === "paciencia" || axisId === "fortaleza"
                            ? "fortaleza"
                            : axisId === "clemencia"
                              ? "fortaleza"
                              : "justica"
                        )}, 60%, 55%)`,
                      }}
                    >
                      →
                    </Link>
                  </span>
                ))}
              </span>
            )}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Epigraph({ text, source }: { text: string; source: string }) {
  return (
    <motion.blockquote
      className="border-l-2 border-border pl-5 my-8"
      {...fadeIn}
    >
      <p className="font-serif text-foreground-muted italic text-base leading-relaxed">
        {renderText(text)}
      </p>
      <cite className="text-foreground-muted text-xs mt-2 block not-italic">
        — {source}
      </cite>
    </motion.blockquote>
  );
}

function VirtueLink({
  id,
  name,
  principalId,
}: {
  id: string;
  name: string;
  principalId: string;
}) {
  const hue = getVirtueHue(principalId);
  return (
    <Link
      href={`/virtude/${id}`}
      className="font-serif font-medium transition-colors"
      style={{ color: `hsl(${hue}, 70%, 55%)` }}
    >
      {name}
    </Link>
  );
}

export default function OMalClient() {
  // Desaturation: set accent-s to 0% on mount, restore on unmount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-s", "0%");
    root.style.setProperty("--accent-l", "35%");
    return () => {
      root.style.removeProperty("--accent-s");
      root.style.removeProperty("--accent-l");
    };
  }, []);

  const sections = O_MAL_SECTIONS;

  return (
    <div className="relative" style={{ backgroundColor: "hsl(220, 15%, 4%)" }}>
      <SectionProgress />

      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
            O Mal
          </h1>
          <p className="font-serif italic text-foreground-muted text-xl mt-2">
            A Privação do Bem
          </p>
        </motion.div>

        <motion.div
          className="w-12 h-px bg-border mx-0 mb-10 opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        <Epigraph
          text={'"O bem pode existir sem o mal, mas o mal não pode existir sem o bem."'}
          source="Summa Theologiae I, q. 48, a. 3"
        />

        {/* ── SECTION 1: O Parasita ── */}
        <section id={sections[0].id} className="mt-20 scroll-mt-24">
          <SectionHeading section={sections[0]} />
          <Paragraphs paragraphs={sections[0].paragraphs} />
          <PrivationVisualizer />
        </section>

        {/* ── SECTION 2: As Três Faces ── */}
        <section id={sections[1].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[1]} />
          <Paragraphs paragraphs={sections[1].paragraphs} />
          <ThreeTypesCards />
        </section>

        {/* ── SECTION 3: A Anatomia do Pecado ── */}
        <section id={sections[2].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[2]} />
          <Paragraphs paragraphs={sections[2].paragraphs} />
        </section>

        {/* ── SECTION 4: As Sete Raízes ── */}
        <section id={sections[3].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[3]} />
          <Paragraphs paragraphs={sections[3].paragraphs} />
          <motion.div className="mt-8" {...fadeIn}>
            <CapitalVicesTable />
          </motion.div>
          <motion.p
            className="text-foreground-muted text-sm mt-6 leading-relaxed"
            {...fadeIn}
          >
            Cada nome colorido acima é um portal para o eixo onde essa virtude
            opera. Clique e veja: o vício que você leu aqui é a sombra que
            aparece lá.
          </motion.p>
        </section>

        {/* ── SECTION 5: O Mal e os Transcendentais ── */}
        <section id={sections[4].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[4]} />
          <Paragraphs paragraphs={sections[4].paragraphs} />
          <motion.div className="mt-8" {...fadeIn}>
            <TranscendentalsTable />
          </motion.div>
          <motion.p
            className="text-foreground text-base leading-relaxed mt-6"
            {...fadeIn}
          >
            {renderText(
              "A pessoa virtuosa é simultaneamente verdadeira, boa, íntegra e bela. As quatro privações no vício são faces do mesmo cristal quebrado."
            )}
          </motion.p>
        </section>

        {/* ── SECTION 6: Por Que o Mal Confirma o Bem ── */}
        <section id={sections[5].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[5]} />
          <Paragraphs paragraphs={sections[5].paragraphs} />
        </section>

        {/* ── SECTION 7: A Esperança ── */}
        <section id={sections[6].id} className="mt-24 scroll-mt-24">
          <SectionHeading section={sections[6]} />
          <Paragraphs paragraphs={sections[6].paragraphs} />

          <Epigraph
            text={'"A luz brilha nas trevas, e as trevas não a venceram."'}
            source="João 1:5"
          />

          <motion.p
            className="text-foreground-muted text-sm leading-relaxed mt-4"
            {...fadeIn}
          >
            Não porque a luz lutou contra as trevas e ganhou — mas porque as
            trevas, sendo ausência, não têm com que lutar.
          </motion.p>

          {/* Reflection */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ReflectionBlock reflexoes={O_MAL_REFLECTIONS} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4"
            {...fadeIn}
          >
            <Link
              href="/explorar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground-muted text-foreground-muted hover:border-foreground hover:text-foreground transition-all duration-300 font-serif text-base tracking-wide rounded"
            >
              Explorar as virtudes
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/mapa"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-foreground-muted hover:text-foreground transition-colors duration-300 font-serif text-base tracking-wide"
            >
              Ver o mapa completo
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
