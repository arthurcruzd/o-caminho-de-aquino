"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CAPITAL_VICES, getVirtueHue } from "@/data/o-mal";

export default function CapitalVicesTable() {
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-widest text-foreground-muted border-b border-border">
            <th className="text-left py-3 px-2 font-normal">Vício</th>
            <th className="text-left py-3 px-2 font-normal hidden md:table-cell">O que busca</th>
            <th className="text-left py-3 px-2 font-normal hidden md:table-cell">O que distorce</th>
            <th className="text-left py-3 px-2 font-normal">Virtude</th>
            <th className="text-left py-3 px-2 font-normal hidden sm:table-cell">Eixo</th>
          </tr>
        </thead>
        <tbody>
          {CAPITAL_VICES.map((item, idx) => {
            const hue = getVirtueHue(item.principalVirtueId);
            const virtueColor = `hsl(${hue}, 70%, 55%)`;

            return (
              <motion.tr
                key={item.vice}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="border-b border-border/50 group transition-colors hover:bg-background-elevated"
              >
                <td className="py-3 px-2">
                  <span className="text-foreground">{item.vice}</span>
                  <span className="font-serif italic text-foreground-muted text-xs ml-1.5 hidden lg:inline">
                    {item.latin}
                  </span>
                </td>
                <td className="py-3 px-2 text-foreground-muted hidden md:table-cell">
                  {item.whatItSeeks}
                </td>
                <td className="py-3 px-2 text-foreground-muted hidden md:table-cell">
                  {item.whatItDistorts}
                </td>
                <td className="py-3 px-2">
                  <Link
                    href={`/virtude/${item.virtueId}`}
                    className="font-serif font-medium transition-all duration-300"
                    style={{ color: virtueColor }}
                  >
                    {item.virtue}
                    <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                  <span
                    className="font-serif italic text-xs ml-1.5 hidden lg:inline"
                    style={{ color: `hsl(${hue}, 40%, 45%)` }}
                  >
                    {item.virtueLatin}
                  </span>
                </td>
                <td className="py-3 px-2 text-foreground-muted hidden sm:table-cell">
                  {item.eixo}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
