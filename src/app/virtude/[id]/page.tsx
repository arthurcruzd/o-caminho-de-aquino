import { notFound } from "next/navigation";
import { VIRTUES, getAllAxes, getAxisById, getPrincipalVirtue } from "@/data/virtues";
import VirtueDetailClient from "./VirtueDetailClient";

export function generateStaticParams() {
  return getAllAxes().map((a) => ({ id: a.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const axis = getAxisById(id);
    if (!axis) return { title: "Não encontrado" };
    return {
      title: `${axis.virtue.name} — O Caminho de Aquino`,
      description: `${axis.eixo}: ${axis.logica}`,
    };
  });
}

export default async function VirtuePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const axis = getAxisById(id);
  if (!axis) notFound();

  const principal = getPrincipalVirtue(id)!;
  const allAxes = getAllAxes();

  return (
    <VirtueDetailClient
      axis={axis}
      principal={principal}
      allAxes={allAxes}
    />
  );
}
