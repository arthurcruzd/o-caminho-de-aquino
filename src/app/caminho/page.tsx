import type { Metadata } from "next";
import CaminhoClient from "./CaminhoClient";

export const metadata: Metadata = {
  title: "O Caminho — O Caminho de Aquino",
  description:
    "A rota reta das virtudes segundo São Tomás de Aquino — e os desvios que nos afastam dela.",
};

export default function CaminhoPage() {
  return <CaminhoClient />;
}
