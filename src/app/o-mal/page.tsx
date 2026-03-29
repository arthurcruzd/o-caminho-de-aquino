import type { Metadata } from "next";
import OMalClient from "./OMalClient";

export const metadata: Metadata = {
  title: "O Mal — A Privação do Bem — O Caminho de Aquino",
  description:
    "O mal não é uma coisa. É privação — ausência de um bem que deveria estar presente. Entenda por que cada vício é uma virtude que perdeu sua direção.",
};

export default function OMalPage() {
  return <OMalClient />;
}
