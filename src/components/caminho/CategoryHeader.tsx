"use client";

import { motion } from "framer-motion";

interface CategoryHeaderProps {
  name: string;
}

export default function CategoryHeader({ name }: CategoryHeaderProps) {
  return (
    <motion.div
      className="relative z-10 flex items-center justify-center gap-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-border" />
      <h2 className="font-serif text-xs uppercase tracking-[0.25em] text-foreground-muted">
        {name}
      </h2>
      <span className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-border" />
    </motion.div>
  );
}
