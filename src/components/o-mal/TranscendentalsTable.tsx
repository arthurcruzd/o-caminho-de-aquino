"use client";

import { motion } from "framer-motion";
import { TRANSCENDENTALS } from "@/data/o-mal";

export default function TranscendentalsTable() {
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-widest text-foreground-muted border-b border-border">
            <th className="text-left py-3 px-2 font-normal">Transcendental</th>
            <th className="text-left py-3 px-2 font-normal">O Ser é...</th>
            <th className="text-left py-3 px-2 font-normal">O pecado causa...</th>
            <th className="text-left py-3 px-2 font-normal hidden md:table-cell">Exemplo</th>
          </tr>
        </thead>
        <tbody>
          {TRANSCENDENTALS.map((item, idx) => (
            <motion.tr
              key={item.latin}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border-b border-border/50"
            >
              <td className="py-3 px-2">
                <span className="text-foreground">{item.name}</span>
                <span className="font-serif italic text-foreground-muted text-xs ml-1.5">
                  {item.latin}
                </span>
              </td>
              <td className="py-3 px-2 text-foreground-muted">{item.beingIs}</td>
              <td className="py-3 px-2 text-foreground font-medium">{item.sinCauses}</td>
              <td className="py-3 px-2 text-foreground-muted hidden md:table-cell">
                {item.example}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
