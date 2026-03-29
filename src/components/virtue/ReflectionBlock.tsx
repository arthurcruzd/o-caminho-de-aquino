"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  reflexoes: string[];
}

export default function ReflectionBlock({ reflexoes }: Props) {
  const [open, setOpen] = useState(false);

  if (reflexoes.length === 0) return null;

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm uppercase tracking-widest text-foreground-muted hover:text-accent transition-colors"
      >
        <span className="inline-block w-4 h-px bg-current" />
        {open ? "Fechar reflexão" : "Reflexão pessoal"}
        <span className="inline-block w-4 h-px bg-current" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-l-2 border-accent-dim pl-6">
              {reflexoes.map((r, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className="text-foreground-muted font-serif text-lg leading-relaxed"
                >
                  {r}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
