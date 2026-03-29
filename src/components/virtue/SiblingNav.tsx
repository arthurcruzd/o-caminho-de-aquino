import Link from "next/link";
import type { VirtueAxis } from "@/data/types";

interface Props {
  axes: VirtueAxis[];
  currentId: string;
}

export default function SiblingNav({ axes, currentId }: Props) {
  const currentIndex = axes.findIndex((a) => a.id === currentId);
  const prev = currentIndex > 0 ? axes[currentIndex - 1] : null;
  const next = currentIndex < axes.length - 1 ? axes[currentIndex + 1] : null;

  return (
    <nav className="flex items-center justify-between mt-12 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={`/virtude/${prev.id}`}
          className="group flex flex-col items-start text-foreground-muted hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest opacity-60">← Anterior</span>
          <span className="font-serif text-lg group-hover:text-accent transition-colors">
            {prev.virtue.name}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/virtude/${next.id}`}
          className="group flex flex-col items-end text-foreground-muted hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest opacity-60">Próximo →</span>
          <span className="font-serif text-lg group-hover:text-accent transition-colors">
            {next.virtue.name}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
