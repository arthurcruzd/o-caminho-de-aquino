"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScroll } from "framer-motion";
import { buildPathData, type PathNode } from "@/data/caminho";
import PathLine from "@/components/caminho/PathLine";
import CategoryHeader from "@/components/caminho/CategoryHeader";
import VirtueNode from "@/components/caminho/VirtueNode";
import SubAxisBranch from "@/components/caminho/SubAxisBranch";
import TranscendentalFinale from "@/components/caminho/TranscendentalFinale";

const pathData = buildPathData();

export default function CaminhoClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dynamic accent color based on visible nodes
  const updateAccent = useCallback(() => {
    if (!containerRef.current) return;
    const nodes = containerRef.current.querySelectorAll<HTMLElement>("[data-hue]");
    const viewportCenter = window.innerHeight / 2;
    let closest: HTMLElement | null = null;
    let closestDist = Infinity;

    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = el;
      }
    });

    if (closest) {
      const hue = (closest as HTMLElement).dataset.hue;
      if (hue) {
        document.documentElement.style.setProperty("--accent-h", hue);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateAccent, { passive: true });
    return () => window.removeEventListener("scroll", updateAccent);
  }, [updateAccent]);

  // Track sub-axis index per principal virtue for alternating sides
  let subAxisIndex = 0;
  let lastPrincipalId: string | null = null;

  return (
    <main className="mx-auto max-w-5xl px-4 pt-28 pb-12">
      {/* Page header */}
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl text-accent md:text-5xl">
          O Caminho
        </h1>
        <p className="mt-4 text-sm text-foreground-muted max-w-md mx-auto leading-relaxed">
          A rota reta das virtudes — e os desvios que nos afastam dela.
          <br />
          <span className="italic opacity-70">
            Role para revelar o caminho.
          </span>
        </p>
      </div>

      {/* Path container */}
      <div ref={containerRef} className="relative">
        <PathLine scrollProgress={scrollYProgress} />

        {pathData.map((node, i) => {
          // Reset sub-axis index for each new principal virtue
          if (node.type !== "sub-axis") {
            subAxisIndex = 0;
            if (
              node.type === "virtue-principal" ||
              node.type === "virtue-simple"
            ) {
              lastPrincipalId = node.id;
            }
          } else {
            subAxisIndex++;
          }

          switch (node.type) {
            case "category-header":
              return <CategoryHeader key={node.id} name={node.name} />;

            case "virtue-simple":
            case "virtue-principal":
              return <VirtueNode key={node.id} node={node} />;

            case "sub-axis":
              return (
                <SubAxisBranch
                  key={node.id}
                  node={node}
                  index={subAxisIndex}
                />
              );

            case "transcendental":
              // Only render the finale component on the first transcendental
              if (node.id === "transcendental-verum") {
                return <TranscendentalFinale key="finale" />;
              }
              return null;

            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}
