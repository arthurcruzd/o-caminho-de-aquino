import type { Metadata } from "next";
import { VIRTUES } from "@/data/virtues";
import ExplorarClient from "./ExplorarClient";

export const metadata: Metadata = {
  title: "Explorar — O Caminho de Aquino",
  description:
    "Explore os eixos da existência humana. Cada eixo é uma dimensão que você já está navegando.",
};

export default function ExplorarPage() {
  return <ExplorarClient virtues={VIRTUES} />;
}
