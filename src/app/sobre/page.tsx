import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — O Caminho de Aquino",
  description: "A filosofia por trás do mapa das virtudes.",
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        Sobre
      </h1>

      <div className="space-y-6 text-foreground leading-relaxed">
        <p>
          <strong className="text-accent font-serif">O Caminho de Aquino</strong> é um
          mapa interativo baseado na estrutura das virtudes e vícios elaborada
          por São Tomás de Aquino na{" "}
          <em className="font-serif">Summa Theologiae</em>, seguindo
          Aristóteles.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
          O Meio-Termo não é compromisso
        </h2>
        <p>
          A virtude não é &ldquo;um pouco de cada vício&rdquo;. Não é um ponto
          médio aritmético entre dois extremos. A virtude é de{" "}
          <em>natureza diferente</em>. É o único ponto em que a coisa é o que
          realmente é. A coragem é o único modo real de se relacionar com o
          perigo. A veracidade é o único modo real de se apresentar. Todo o
          resto é distorção — para cima ou para baixo, mas distorção.
        </p>

        <p>
          Os dois vícios — por defeito e por excesso — são mais parecidos
          entre si do que qualquer um deles é com a virtude. O covarde e o
          temerário cometem o mesmo erro: ambos falham em medir o perigo pela
          razão. O avarento e o pródigo cometem o mesmo erro: ambos falham em
          ordenar os bens ao seu propósito. Os extremos são irmãos gêmeos
          disfarçados de opostos.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
          A gramática da ação humana
        </h2>
        <p>
          Quando você lê os eixos de cima a baixo, o que aparece é um mapa
          completo da vida humana: verdade, relações, bens, culto, gratidão,
          perigo, ambição, dor, prazer, conhecimento, ira, punição. Aquino não
          está fazendo uma lista arbitrária de &ldquo;coisas boas&rdquo;. Ele
          está dizendo: estas são as dimensões inescapáveis da existência, e em
          cada uma delas há exatamente um ponto reto e infinitas formas de
          errar.
        </p>

        <p>
          Se a virtude é o ponto reto, e o ponto reto não é convenção mas
          estrutura da realidade, então o mapa das virtudes é um mapa da ordem
          do ser. A <em className="font-serif">Summa</em> não é um código
          moral — é uma cartografia. E o que ela cartografa é o Logos inscrito
          na natureza humana.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
          Um chassis, não uma carroceria
        </h2>
        <p>
          Esta organização é uma porta de entrada para as descobertas de São
          Tomás. Mas é importante notar que ele construiu um{" "}
          <em>chassis</em>, não uma carroceria final. É sólido, mas ele mesmo
          indica que há mais a descobrir. A estrutura está aberta — como todo
          bom mapa, convida a ser percorrida.
        </p>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-foreground-muted text-sm">
            O nome <strong>&ldquo;O Caminho de Aquino&rdquo;</strong> ecoa o{" "}
            <em>Tao</em> — o caminho, a via, a ordem que atravessa todas as
            coisas. A mesma intuição que Lao-Tsé sentiu no Oriente, Tomás
            articulou com precisão no Ocidente: há uma ordem inscrita na
            realidade, e viver bem é conformar-se a ela.
          </p>
        </div>
      </div>
    </div>
  );
}
