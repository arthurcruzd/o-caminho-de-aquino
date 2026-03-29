import { Vice, VirtueCategory } from "./types";
import { VIRTUES } from "./virtues";
import { VIRTUE_COLORS, CATEGORY_LABELS } from "@/lib/constants";
import { TRANSCENDENTALS } from "./o-mal";

export type PathNodeType =
  | "category-header"
  | "virtue-simple"
  | "virtue-principal"
  | "sub-axis"
  | "transcendental";

export interface PathNode {
  type: PathNodeType;
  id: string;
  name: string;
  latin?: string;
  hue: string;
  category?: VirtueCategory | "transcendental";
  viceDeficiency?: Vice;
  viceExcess?: Vice;
  depth: number;
  linkTo?: string;
  eixo?: string;
}

export interface TranscendentalNode {
  name: string;
  latin: string;
  beingIs: string;
}

const CATEGORY_ORDER: VirtueCategory[] = [
  "theological",
  "cardinal",
  "intellectual",
];

export function buildPathData(): PathNode[] {
  const nodes: PathNode[] = [];

  for (const category of CATEGORY_ORDER) {
    nodes.push({
      type: "category-header",
      id: `header-${category}`,
      name: CATEGORY_LABELS[category],
      hue: "45",
      depth: 0,
      category,
    });

    const principalVirtues = VIRTUES.filter((v) => v.category === category);

    for (const pv of principalVirtues) {
      const hue = VIRTUE_COLORS[pv.id]?.hue ?? pv.color;
      const principalAxis = pv.axes.find((a) => a.isPrincipal);
      const subAxes = pv.axes.filter((a) => !a.isPrincipal);
      const hasSubAxes = subAxes.length > 0;

      if (principalAxis) {
        nodes.push({
          type: hasSubAxes ? "virtue-principal" : "virtue-simple",
          id: principalAxis.id,
          name: pv.name,
          latin: pv.latin,
          hue,
          category,
          viceDeficiency: principalAxis.viceDeficiency,
          viceExcess: principalAxis.viceExcess,
          depth: 0,
          linkTo: `/virtude/${principalAxis.id}`,
          eixo: principalAxis.eixo,
        });
      }

      for (const axis of subAxes) {
        nodes.push({
          type: "sub-axis",
          id: axis.id,
          name: axis.virtue.name,
          latin: axis.virtue.latin,
          hue,
          category,
          viceDeficiency: axis.viceDeficiency,
          viceExcess: axis.viceExcess,
          depth: 1,
          linkTo: `/virtude/${axis.id}`,
          eixo: axis.eixo,
        });
      }
    }
  }

  for (const t of TRANSCENDENTALS) {
    nodes.push({
      type: "transcendental",
      id: `transcendental-${t.latin.toLowerCase()}`,
      name: t.name,
      latin: t.latin,
      hue: "45",
      depth: 0,
      category: "transcendental",
    });
  }

  return nodes;
}
