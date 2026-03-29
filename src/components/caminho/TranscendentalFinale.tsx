"use client";

import { motion } from "framer-motion";
import { TRANSCENDENTALS } from "@/data/o-mal";

export default function TranscendentalFinale() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center pb-24 pt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Terminal node - larger, golden */}
      <motion.div
        className="mb-8 h-6 w-6 rounded-full"
        style={{ backgroundColor: "hsl(45, 70%, 55%)" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={{
          boxShadow: [
            "0 0 20px hsl(45, 70%, 60%), 0 0 40px hsl(45, 50%, 40%), 0 0 6px hsl(45, 70%, 70%)",
            "0 0 30px hsl(45, 70%, 65%), 0 0 60px hsl(45, 50%, 45%), 0 0 10px hsl(45, 70%, 75%)",
            "0 0 20px hsl(45, 70%, 60%), 0 0 40px hsl(45, 50%, 40%), 0 0 6px hsl(45, 70%, 70%)",
          ],
        }}
        transition={{
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 120, delay: 0.2 },
        }}
      />

      <motion.h2
        className="mb-2 font-serif text-2xl text-accent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Os Transcendentais
      </motion.h2>

      <motion.p
        className="mb-8 text-center text-sm text-foreground-muted max-w-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        O destino de toda virtude: as propriedades do Ser que transcendem toda
        categoria.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 max-w-sm">
        {TRANSCENDENTALS.map((t, idx) => (
          <motion.div
            key={t.latin}
            className="flex flex-col items-center rounded-lg border border-border bg-background-elevated/50 p-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
          >
            <span className="font-serif text-lg text-accent">{t.latin}</span>
            <span className="text-sm text-foreground">{t.name}</span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-foreground-muted">
              {t.beingIs}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
