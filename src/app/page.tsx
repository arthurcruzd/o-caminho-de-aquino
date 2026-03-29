import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-serif text-6xl md:text-7xl text-foreground tracking-tight mb-6">
          O Caminho de Aquino
        </h1>

        <div className="w-16 h-px bg-accent mx-auto mb-8 opacity-60" />

        <p className="font-serif text-xl md:text-2xl text-foreground-muted leading-relaxed mb-6">
          Não existe território neutro na vida moral. Em cada dimensão da
          existência — verdade, relações, bens, perigo, prazer, conhecimento,
          ira — você já está posicionado.
        </p>

        <p className="text-foreground-muted leading-relaxed mb-10">
          Este é um mapa das virtudes e vícios segundo São Tomás de Aquino.
          Não um código moral, mas uma cartografia — o Logos inscrito na
          natureza humana. A virtude não é compromisso entre dois extremos.
          É o ponto reto, o único modo real de ser. Todo o resto é distorção.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/explorar"
            className="inline-flex items-center gap-3 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-serif text-lg tracking-wide rounded"
          >
            Trilhar o Caminho
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/o-mal"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
          >
            Ou entender o desvio
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-16 text-xs text-foreground-muted opacity-40 tracking-widest uppercase">
          A gramática da ação humana
        </p>
      </div>
    </div>
  );
}
