"use client";

import { useEffect, useState } from "react";
import { O_MAL_SECTIONS } from "@/data/o-mal";

export default function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = O_MAL_SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1"
      aria-label="Índice das seções"
    >
      {O_MAL_SECTIONS.map((section, idx) => {
        const isActive = idx === activeIndex;
        const isPast = idx < activeIndex;
        const isHopeSection = idx >= 5;

        const dotColor = isActive
          ? isHopeSection
            ? "hsl(45, 50%, 55%)"
            : "hsl(220, 8%, 55%)"
          : isPast
            ? "hsl(220, 8%, 35%)"
            : "hsl(220, 8%, 18%)";

        const textColor = isActive
          ? isHopeSection
            ? "hsl(45, 40%, 65%)"
            : "hsl(220, 10%, 75%)"
          : isPast
            ? "hsl(220, 8%, 40%)"
            : "hsl(220, 8%, 28%)";

        return (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 py-1.5 text-left transition-all duration-300"
            aria-label={`Seção ${section.number}: ${section.title}`}
          >
            <span
              className="block w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500"
              style={{
                backgroundColor: dotColor,
                boxShadow: isActive
                  ? isHopeSection
                    ? "0 0 6px hsl(45, 50%, 55%)"
                    : "0 0 4px hsl(220, 8%, 55%)"
                  : "none",
                transform: isActive ? "scale(1.5)" : "scale(1)",
              }}
            />
            <span
              className="text-[11px] tracking-wide whitespace-nowrap transition-all duration-300"
              style={{
                color: textColor,
                fontWeight: isActive ? 500 : 400,
              }}
            >
              {section.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
