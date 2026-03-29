import type { Metadata } from "next";
import { VIRTUES } from "@/data/virtues";
import MapClient from "./MapClient";

export const metadata: Metadata = {
  title: "Mapa — O Caminho de Aquino",
  description: "O mapa completo das virtudes e vícios segundo São Tomás de Aquino.",
};

export default function MapPage() {
  return <MapClient virtues={VIRTUES} />;
}
