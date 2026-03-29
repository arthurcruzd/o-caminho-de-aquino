import { PrincipalVirtue, VirtueAxis } from "./types";

export const VIRTUES: PrincipalVirtue[] = [
  // ─── VIRTUDES TEOLOGAIS ───
  {
    id: "fe",
    name: "Fé",
    latin: "Fides",
    category: "theological",
    color: "45",
    axes: [
      {
        id: "fe",
        isPrincipal: true,
        principalVirtue: "fe",
        eixo: "Crença",
        logica: "De menos = incredulidade; mal-direcionado = superstição",
        aVirtude:
          "Fé (*Fides*, QQ. 1–16) — o assentimento do intelecto à verdade revelada por Deus, sob o movimento da vontade e da graça. Não é opinião nem sentimento: é aderir à Verdade que excede a razão natural, porque Deus — que não pode enganar nem ser enganado — a revelou.",
        viceDeficiency: { name: "Incredulidade / Infidelidade", latin: "Infidelitas" },
        defeitoDescricao:
          "A recusa de assentir à verdade divina. Tomás distingue três espécies: o paganismo (nunca ter recebido a fé), a heresia (aceitar parcialmente, escolhendo o que agrada) e a apostasia (abandonar inteiramente a fé uma vez professada — a mais grave, porque envolve ruptura total com o que se conheceu como verdadeiro).",
        virtue: { name: "Fé", latin: "Fides" },
        viceExcess: { name: "Superstição / Credulidade", latin: "Superstitio" },
        excessoDescricao:
          "Não se pode crer 'demais' em Deus. O excesso é fé mal-direcionada: assentir ao que não merece assentimento, crer nas coisas erradas. Inclui credulidade diante de revelações privadas não verificadas, falsos profetas e sinais fabricados.",
        observacoes:
          "Não se pode crer 'demais' em Deus. O excesso é fé mal-direcionada — crer nas coisas erradas (superstição, heresia), não excesso de quantidade.",
        privacaoDoBem:
          "A incredulidade e a superstição dependem da mesma capacidade de assentir à verdade — que é matéria da Fé. Uma se recusa a assentir; a outra assente ao que não merece assentimento. Nenhuma cria uma relação nova com a verdade; ambas distorcem a única relação verdadeira.",
        extras: [
          {
            titulo: "Espécies da Incredulidade",
            itens: [
              { nome: "Paganismo (infidelitas paganorum, Q. 10, a. 1)", descricao: "Nunca ter recebido a fé. Não é culpável em si, mas torna-se quando se recusa a verdade uma vez conhecida." },
              { nome: "Heresia (haeresis, Q. 11)", descricao: "Aceitar parcialmente a fé, escolhendo (*hairesis* = escolha) o que agrada e rejeitando o resto. O herege edita a revelação segundo o próprio juízo." },
              { nome: "Apostasia (apostasia, Q. 12)", descricao: "Abandonar inteiramente a fé uma vez professada. É a incredulidade mais grave porque envolve ruptura total com o que se conheceu como verdadeiro." },
            ],
          },
          {
            titulo: "Outros vícios contra a Fé",
            itens: [
              { nome: "Blasfêmia (blasphemia, Q. 13)", descricao: "Negar verbalmente algo que pertence à confissão da fé, ou atribuir a Deus o que não Lhe pertence." },
            ],
          },
        ],
        domDoEspiritoSanto: "Entendimento e Ciência",
        reflexoes: [
          "Você tende a duvidar de tudo, exigindo certezas antes de dar qualquer passo — ou aceita crenças sem exame, acreditando em qualquer coisa que pareça espiritual?",
          "Diante do mistério, sua reação mais comum é rejeitar o que não entende ou abraçar explicações fáceis que confirmam o que você quer ouvir?",
        ],
        order: 1,
      },
    ],
  },
  {
    id: "esperanca",
    name: "Esperança",
    latin: "Spes",
    category: "theological",
    color: "155",
    axes: [
      {
        id: "esperanca",
        isPrincipal: true,
        principalVirtue: "esperanca",
        eixo: "Confiança",
        logica: "De menos = desespero; demais = presunção",
        aVirtude:
          "Esperança (*Spes*, QQ. 17–22) — a confiança firme de que Deus concederá a vida eterna e os meios para alcançá-la. Não é otimismo vago: é a orientação da alma para um bem futuro, árduo mas possível, apoiada no auxílio divino.",
        viceDeficiency: { name: "Desespero", latin: "Desperatio" },
        defeitoDescricao:
          "Abandonar a confiança na misericórdia de Deus. O desesperado julga que seu mal é maior do que a bondade divina — o que é, implicitamente, uma negação do poder de Deus. Tomás a considera um dos pecados mais perigosos, porque remove o freio que impede os outros pecados.",
        virtue: { name: "Esperança", latin: "Spes" },
        viceExcess: { name: "Presunção", latin: "Praesumptio" },
        excessoDescricao:
          "Esperar a salvação sem mérito, sem arrependimento, ou sem os meios ordenados por Deus. Duas formas: (1) presumir da própria capacidade, como se a graça fosse desnecessária; (2) presumir da misericórdia divina, como se o arrependimento fosse dispensável. Ambas distorcem a natureza da Esperança, que é confiança em Deus, não em si.",
        observacoes:
          "Desespero = abandonar a confiança na misericórdia de Deus. Presunção = esperar a salvação sem mérito ou arrependimento. Par clássico de defeito/excesso.",
        privacaoDoBem:
          "O desespero e a presunção dependem da mesma capacidade de se voltar ao futuro divino — que é matéria da Esperança. Um abandona o horizonte; o outro o reivindica sem fundamento. Nenhum inventa um futuro próprio; ambos parasitam o único futuro real.",
        domDoEspiritoSanto: "Temor",
        reflexoes: [
          "Você tende a desistir antes da hora, achando que nada vai dar certo — ou presume que tudo se resolverá sem esforço da sua parte?",
          "Diante de uma dificuldade séria, sua primeira reação é 'não tem jeito' ou 'vai dar tudo certo de qualquer forma'?",
        ],
        order: 2,
      },
    ],
  },
  {
    id: "caridade",
    name: "Caridade",
    latin: "Caritas",
    category: "theological",
    color: "0",
    axes: [
      {
        id: "caridade",
        isPrincipal: true,
        principalVirtue: "caridade",
        eixo: "Amor",
        logica: "Só defeito — não se pode amar Deus demais",
        aVirtude:
          "Caridade (*Caritas*, QQ. 23–46) — o amor de amizade com Deus e, por extensão, com o próximo por amor a Deus. É a forma de todas as virtudes (*forma virtutum*, Q. 23, a. 8): sem caridade, nenhuma outra virtude é plenamente virtuosa. É a única virtude que não tem excesso — não se pode amar a Deus demais.",
        viceDeficiency: { name: "Ódio / Indiferença a Deus", latin: "Odium Dei" },
        defeitoDescricao:
          "A rejeição direta de Deus como bem supremo. Inclui o ódio formal a Deus (raro) e a indiferença prática (comum): viver como se Deus não existisse.",
        virtue: { name: "Caridade", latin: "Caritas" },
        viceExcess: { name: "— (nenhum excesso possível)", latin: null },
        excessoDescricao:
          "Para Tomás, é literalmente impossível amar a Deus demais. Todos os vícios sob a Caridade são formas de defeito — falha em amar retamente, não amor excessivo.",
        observacoes:
          "Para Tomás, é literalmente impossível amar a Deus demais. Os 'vícios' sob a Caridade (acédia (preguiça espiritual), inveja) são formas de defeito — falha em amar retamente, não amor excessivo.",
        privacaoDoBem:
          "O ódio e a indiferença dependem da mesma capacidade de amar — que é matéria da Caridade. Todo vício sob ela é defeito: formas de não amar, que só se definem em contraste com o amor que recusam. O Amor não tem teto; por isso não há excesso.",
        extras: [
          {
            titulo: "Outros vícios por defeito sob a Caridade",
            itens: [
              { nome: "Acédia / Preguiça espiritual (Acedia, Q. 35)", descricao: "A tristeza diante do bem divino. Não é preguiça física, mas a recusa interior de se alegrar com Deus e com as coisas de Deus." },
              { nome: "Inveja (Invidia, Q. 36)", descricao: "A tristeza diante do bem do próximo. É o anti-amor por excelência: onde a caridade se alegra com o bem alheio, a inveja se entristece." },
              { nome: "Discórdia (Discordia, Q. 37)", descricao: "A desunião voluntária de vontades, oposta à Paz." },
              { nome: "Contenda (Contentio, Q. 38)", descricao: "Atacar a verdade alheia com palavras, por espírito combativo." },
              { nome: "Cisma (Schisma, Q. 39)", descricao: "Recusar-se a submeter à unidade da Igreja." },
              { nome: "Escândalo (Scandalum, Q. 43)", descricao: "Oferecer ocasião de queda espiritual ao próximo por palavra ou ação." },
            ],
          },
          {
            titulo: "Virtudes associadas à Caridade",
            itens: [
              { nome: "Alegria (Gaudium, Q. 28)", descricao: "O fruto interior da caridade." },
              { nome: "Paz (Pax, Q. 29)", descricao: "A tranquilidade da ordem, fruto da união de vontades." },
              { nome: "Misericórdia (Misericordia, Q. 30)", descricao: "A compaixão diante do sofrimento alheio, acompanhada do desejo de aliviá-lo." },
              { nome: "Beneficência (Beneficentia, Q. 31)", descricao: "Fazer o bem ao próximo." },
              { nome: "Esmola (Eleemosyna, Q. 32)", descricao: "Partilhar bens com quem necessita." },
              { nome: "Correção fraterna (Correctio fraterna, Q. 33)", descricao: "Corrigir o irmão com caridade." },
            ],
          },
        ],
        domDoEspiritoSanto: "Sabedoria",
        reflexoes: [
          "Você se reconhece mais na indiferença — não se importar com o que deveria importar — ou já se perguntou se existe excesso no amor ao que é verdadeiramente bom?",
          "A acédia (preguiça espiritual) é a tristeza diante do bem divino. Você sente resistência interior ao que sabe ser bom?",
        ],
        order: 3,
      },
    ],
  },

  // ─── VIRTUDES CARDEAIS ───
  {
    id: "prudencia",
    name: "Prudência",
    latin: "Prudentia",
    category: "cardinal",
    color: "210",
    axes: [
      {
        id: "prudencia",
        isPrincipal: true,
        principalVirtue: "prudencia",
        eixo: "Ação",
        logica: "Ausente = negligência; torto = manipulação",
        aVirtude:
          "Prudência (*Prudentia*, QQ. 47–56) — a *recta ratio agibilium*: a razão reta aplicada à ação. Não é cautela nem timidez — é a capacidade de ver o que é verdadeiro numa situação concreta e agir de acordo. É a 'auriga das virtudes' (*auriga virtutum*): sem prudência, nenhuma outra virtude moral encontra o meio reto.",
        viceDeficiency: { name: "Imprudência / Negligência", latin: "Imprudentia / Negligentia" },
        defeitoDescricao:
          "A falha em deliberar, em considerar as circunstâncias, em medir os meios. O imprudente não pensa; o negligente não se importa.",
        virtue: { name: "Prudência", latin: "Prudentia" },
        viceExcess: { name: "Astúcia Ardilosa / Manipulação (uso torto da inteligência)", latin: "Astutia" },
        excessoDescricao:
          "Usar meios simulados, indiretos ou enganosos para atingir um fim, mesmo que o fim pareça legítimo. A Prudência e a Astúcia são igualmente 'espertas'; a diferença é que a Prudência busca meios verdadeiros e a Astúcia busca meios aparentes.",
        observacoes:
          "O vício não é ser inteligente — é desviar a inteligência para caminhos tortuosos. A Prudência e a Astúcia são igualmente 'espertas'; a diferença é que a Prudência busca meios verdadeiros para fins bons, enquanto a Astúcia usa meios simulados, indiretos ou enganosos — mesmo que o fim pareça legítimo. Defeito = imprudência, a falha em deliberar.",
        privacaoDoBem:
          "A negligência e a astúcia dependem da mesma inteligência prática — que é matéria da Prudência. Uma não a usa; a outra a usa torta. Nenhuma inventa uma faculdade nova; ambas parasitam a única que pode ver o caminho reto.",
        extras: [
          {
            titulo: "Partes integrais da Prudência (Q. 49)",
            itens: [
              { nome: "Memória (memoria)", descricao: "Aprender com a experiência passada." },
              { nome: "Inteligência (intelligentia)", descricao: "Perceber o que está em jogo agora." },
              { nome: "Docilidade (docilitas)", descricao: "Estar disposto a aprender com outros." },
              { nome: "Sagacidade (solertia)", descricao: "Encontrar rapidamente o meio-termo em situações imprevistas." },
              { nome: "Razão (ratio)", descricao: "Raciocinar de causa a efeito." },
              { nome: "Previdência (providentia)", descricao: "Ordenar os meios ao fim futuro." },
              { nome: "Circunspecção (circumspectio)", descricao: "Considerar as circunstâncias." },
              { nome: "Precaução (cautio)", descricao: "Antecipar obstáculos e evitar males." },
            ],
          },
          {
            titulo: "Filhas da Astúcia",
            itens: [
              { nome: "Ardil (dolus, Q. 55, a. 4)", descricao: "Enganar pela ação, executar o plano astuto." },
              { nome: "Fraude (fraus, Q. 55, a. 5)", descricao: "Enganar pela palavra, mentir para implementar o ardil." },
            ],
          },
          {
            titulo: "Outros vícios contra a Prudência",
            itens: [
              { nome: "Prudência da carne (prudentia carnis, Q. 55, a. 1)", descricao: "Inteligência a serviço dos apetites desordenados." },
              { nome: "Solicitude excessiva (sollicitudo, Q. 55, a. 6)", descricao: "Ansiedade mundana, preocupação desproporcional com bens temporais." },
            ],
          },
        ],
        domDoEspiritoSanto: "Conselho",
        reflexoes: [
          "Você costuma agir sem pensar nas consequências — ou pensa demais, calculando meios indiretos quando o caminho direto seria mais honesto?",
          "Sua inteligência serve para encontrar a verdade ou para encontrar justificativas para o que você já quer fazer?",
        ],
        order: 4,
      },
      {
        id: "boa-deliberacao",
        isPrincipal: false,
        principalVirtue: "prudencia",
        eixo: "Decisão",
        logica: "Agir sem pensar ↔ pensar sem agir",
        aVirtude:
          "Deliberação / Eubulía (*Eubulia*, Q. 51, a. 1) — a virtude de deliberar bem, pesar os meios disponíveis à luz do fim reto. É o processo da Prudência: a Prudência julga e comanda; a Eubulía examina.",
        viceDeficiency: { name: "Precipitação (agir sem pensar)", latin: "Praecipitatio" },
        defeitoDescricao:
          "Agir antes de pensar. Pular o processo deliberativo, ir direto da percepção à ação sem examinar os meios.",
        virtue: { name: "Deliberação (Eubulía)", latin: "Eubulia" },
        viceExcess: { name: "Paralisia por análise (pensar sem agir)", latin: null },
        excessoDescricao:
          "Nunca concluir o exame, pensar sem nunca agir. Tomás não nomeia um termo latino formal para o excesso (a *Sollicitudo* de Q. 55 refere-se a ansiedade mundana, não a paralisia deliberativa).",
        observacoes:
          "A deliberação é o processo da prudência — examinar meios à luz do fim. O defeito (precipitação) pula o processo: age antes de pensar. O excesso (paralisia) nunca o conclui: pensa sem nunca agir. Tomás não nomeia um termo latino formal para o excesso.",
        privacaoDoBem:
          "A precipitação e a paralisia dependem da mesma capacidade de examinar meios — que é matéria da Deliberação. Uma pula o exame; a outra nunca o conclui. O processo é o mesmo; o que difere é a recusa de completá-lo retamente.",
        extras: [
          {
            titulo: "Virtudes associadas (Q. 51)",
            itens: [
              { nome: "Sínese (Synesis)", descricao: "O juízo reto em casos comuns." },
              { nome: "Gnome (Gnome)", descricao: "O juízo reto em casos excepcionais, onde a regra geral não se aplica." },
            ],
          },
        ],
        reflexoes: [
          "Você tende a decidir rápido demais, pulando etapas importantes — ou fica preso na análise, nunca chegando a agir?",
          "Nas últimas decisões importantes, você se arrependeu por ter sido impulsivo ou por ter demorado demais?",
        ],
        order: 5,
      },
    ],
  },
  {
    id: "justica",
    name: "Justiça",
    latin: "Iustitia",
    category: "cardinal",
    color: "270",
    axes: [
      {
        id: "justica",
        isPrincipal: true,
        principalVirtue: "justica",
        eixo: "O devido",
        logica: "De menos = injustiça; rígido demais = legalismo",
        aVirtude:
          "Justiça (*Iustitia*, QQ. 57–122) — a disposição constante e perpétua de dar a cada um o que lhe é devido (*ius suum cuique tribuere*). É a única virtude cardinal que reside na vontade (não num apetite sensível) e cuja matéria são operações externas em relação a outrem.",
        viceDeficiency: { name: "Injustiça (negar o que é devido)", latin: "Iniustitia" },
        defeitoDescricao:
          "Negar ao outro o que lhe é devido. Pode ser por ação (roubo, calúnia, homicídio) ou por omissão (negligência do dever).",
        virtue: { name: "Justiça", latin: "Iustitia" },
        viceExcess: { name: "Legalismo / Literalismo rígido", latin: null },
        excessoDescricao:
          "Aplicar a letra da lei tão rigidamente que derrota a justiça. Tomás não nomeia formalmente o excesso como vício; aborda pela via da virtude: a *Epikeia* (Q. 120) é a disposição de corrigir a lei quando sua aplicação literal produziria injustiça.",
        observacoes:
          "Defeito = não dar o que é devido. Excesso = aplicar a letra da lei tão rigidamente que derrota a justiça. Tomás não nomeia formalmente o excesso como vício — aborda pela via da virtude: a *Epikeia* (equidade, Q.120) é a disposição de corrigir a lei quando sua aplicação literal produziria injustiça.",
        privacaoDoBem:
          "A injustiça e o legalismo dependem da mesma percepção do que é devido — que é matéria da Justiça. Uma nega o devido; o outro o petrifica. Nenhum cria uma ordem nova; ambos distorcem a única ordem verdadeira entre pessoas.",
        domDoEspiritoSanto: "Piedade",
        reflexoes: [
          "Você tende a ignorar o que deve aos outros — ou aplica regras tão rigidamente que perde de vista o propósito por trás delas?",
          "Quando a letra da lei e o espírito da justiça entram em conflito, para qual lado você tende?",
        ],
        order: 6,
      },
      {
        id: "veracidade",
        isPrincipal: false,
        principalVirtue: "justica",
        eixo: "Apresentação",
        logica: "Diminuir-se ↔ inflar-se",
        aVirtude:
          "Veracidade (*Veritas*, Q. 109) — a disposição de se apresentar como se é, nem mais nem menos. Não é apenas 'não mentir'; é a correspondência habitual entre o que a pessoa é e o que ela manifesta.",
        viceDeficiency: { name: "Autodepreciação / Falsa modéstia", latin: "Ironia" },
        defeitoDescricao:
          "Diminuir-se falsamente, projetar menos do que se é. É uma forma de inverdade: negar qualidades reais que se possui.",
        virtue: { name: "Veracidade", latin: "Veritas" },
        viceExcess: { name: "Jactância (inflar-se)", latin: "Iactantia" },
        excessoDescricao:
          "Inflar-se, projetar mais do que se é. O eixo não é quantidade de verdade, mas magnitude da autoapresentação. Ambos os vícios são falsos — em direções opostas.",
        observacoes:
          "O eixo aqui não é quantidade de verdade, mas magnitude da autoapresentação. Defeito = autodepreciação (diminuir-se, projetar menos do que se é). Excesso = jactância (inflar-se, projetar mais do que se é). Ambos são falsos — em direções opostas. A veracidade é o ponto médio: apresentar-se como se é.",
        privacaoDoBem:
          "A autodepreciação e a jactância dependem da mesma capacidade de se apresentar — que é matéria da Veracidade. Uma projeta menos; a outra projeta mais. Nenhuma inventa uma imagem nova; ambas deformam a única imagem verdadeira: o que a pessoa realmente é.",
        extras: [
          {
            titulo: "Outros vícios contra a Veracidade",
            itens: [
              { nome: "Mentira (Mendacium, Q. 110)", descricao: "Falar contra o que se pensa ser verdadeiro, com intenção de enganar." },
              { nome: "Hipocrisia (Hypocrisis, Q. 111)", descricao: "Simular virtude que não se possui. É a mentira vivida, não apenas falada." },
            ],
          },
        ],
        reflexoes: [
          "Você costuma se diminuir, escondendo suas qualidades por falsa modéstia — ou se infla, projetando mais do que realmente é?",
          "As pessoas ao seu redor conhecem quem você realmente é, ou conhecem uma versão editada — pra cima ou pra baixo?",
        ],
        order: 7,
      },
      {
        id: "cordialidade",
        isPrincipal: false,
        principalVirtue: "justica",
        eixo: "Trato",
        logica: "Verdade sem amor ↔ amor sem verdade",
        aVirtude:
          "Cordialidade (*Affabilitas*, Q. 114) — do latim *cor* (coração): a disposição interior de ser genuinamente agradável no trato. Não é mera polidez exterior, mas a qualidade de presença que torna a convivência humana boa.",
        viceDeficiency: { name: "Rispidez / Hostilidade (verdade sem amor)", latin: "Litigium" },
        defeitoDescricao:
          "Verdade sem amor: aspereza que afasta. O ríspido torna a convivência penosa por excesso de dureza.",
        virtue: { name: "Cordialidade", latin: "Affabilitas" },
        viceExcess: { name: "Bajulação / Servilismo (amor sem verdade)", latin: "Adulatio" },
        excessoDescricao:
          "Amor sem verdade: agradar ao custo da verdade. O bajulador sacrifica a verdade pela aprovação alheia.",
        observacoes:
          "Do latim *cor* (coração): não é mera polidez exterior, mas a disposição interior de ser genuinamente agradável no trato. De menos = rispidez que afasta. De mais = bajulação que trai a verdade por agradar.",
        privacaoDoBem:
          "A rispidez e a bajulação dependem da mesma capacidade de se relacionar — que é matéria da Cordialidade. Uma afasta; a outra agrada ao custo da verdade. Nenhuma inventa um modo novo de conviver; ambas distorcem o único modo genuíno.",
        reflexoes: [
          "Você tende a ser ríspido, afastando as pessoas com franqueza excessiva — ou a bajular, traindo a verdade para ser aceito?",
          "Suas interações sociais são guiadas pela verdade com caridade, ou pela conveniência?",
        ],
        order: 8,
      },
      {
        id: "generosidade",
        isPrincipal: false,
        principalVirtue: "justica",
        eixo: "Bens materiais",
        logica: "Acumular ↔ dissipar",
        aVirtude:
          "Generosidade (*Liberalitas*, Q. 117) — o uso reto dos bens materiais: dar e reter na medida certa. Não confundir com 'liberalismo' político — o sentido aqui é estritamente moral.",
        viceDeficiency: { name: "Avareza / Mesquinharia", latin: "Avaritia" },
        defeitoDescricao:
          "O apego desordenado aos bens materiais. O avarento acumula e não partilha; retém além do necessário. Tomás a considera um dos vícios mais destrutivos da vida social.",
        virtue: { name: "Generosidade", latin: "Liberalitas" },
        viceExcess: { name: "Prodigalidade / Desperdício", latin: "Prodigalitas" },
        excessoDescricao:
          "O gasto irresponsável que dissipa bens sem razão nem medida.",
        observacoes:
          "A virtude do uso reto dos bens materiais. Defeito = avareza, o apego que acumula e não partilha. Excesso = prodigalidade, o gasto irresponsável que dissipa os bens sem razão. Não confundir com 'liberalismo' político — o sentido aqui é estritamente moral.",
        privacaoDoBem:
          "A avareza e a prodigalidade dependem dos mesmos bens materiais — que são matéria da Generosidade. Uma os retém; a outra os dissipa. Nenhuma cria riqueza nova; ambas corrompem o único uso reto dos bens: dar e reter na medida certa.",
        reflexoes: [
          "Você segura seus bens com medo de perder — ou gasta sem critério, sem considerar o propósito?",
          "Seus bens materiais servem a algo maior que você mesmo, ou são fins em si?",
        ],
        order: 9,
      },
      {
        id: "religiao",
        isPrincipal: false,
        principalVirtue: "justica",
        eixo: "Adoração",
        logica: "Negligência ↔ superstição",
        aVirtude:
          "Religião (*Religio*, QQ. 81–100) — a virtude de dar a Deus o culto que Lhe é devido. Em Tomás, 'Religião' não é um sistema de crenças, mas uma virtude moral — é sub-virtude da Justiça porque adorar é uma forma de dívida: devemos a Deus mais do que podemos pagar.",
        viceDeficiency: { name: "Irreligião / Negligência no culto", latin: "Irreligiositas" },
        defeitoDescricao:
          "Não prestar a Deus o culto que Lhe é devido. Inclui: tentação de Deus (pôr Deus à prova), perjúrio (jurar falsamente), sacrilégio (profanar o que é sagrado) e simonia (comprar ou vender coisas espirituais).",
        virtue: { name: "Religião (culto a Deus)", latin: "Religio" },
        viceExcess: { name: "Superstição / Idolatria (culto a quem não é Deus)", latin: "Superstitio" },
        excessoDescricao:
          "Dar culto a quem não é Deus, ou dar culto a Deus de modo indevido. Tomás divide em quatro espécies: culto indevido ao Deus verdadeiro, idolatria (dar culto divino a criaturas), adivinhação (buscar conhecimento oculto por meios ilegítimos) e vãs observâncias (amuletos, simpatias, rituais mágicos).",
        observacoes:
          "Religião em Tomás não é 'uma religião' ou sistema de crenças, mas a virtude de dar a Deus o culto que Lhe é devido — é sub-virtude da Justiça porque é uma forma de dívida (devemos a Deus mais do que podemos pagar). Defeito = não prestar o culto devido. Excesso = cultuar de forma errada (idolatria, adivinhação, vãs observâncias).",
        privacaoDoBem:
          "A irreligião e a superstição dependem da mesma capacidade de adorar — que é matéria da Religião. Uma se recusa a adorar; a outra adora o que não deve, como não deve, ou a quem não deve — criaturas, ídolos, poderes ocultos. Nenhuma inventa uma relação nova com o Sagrado; ambas deformam a única relação verdadeira: a criatura diante do Criador.",
        extras: [
          {
            titulo: "Atos interiores da Religião",
            itens: [
              { nome: "Devoção (Devotio, Q. 82)", descricao: "A prontidão da vontade para o que pertence ao serviço de Deus." },
              { nome: "Oração (Oratio, Q. 83)", descricao: "Elevar a mente a Deus, pedir o que é conveniente." },
            ],
          },
          {
            titulo: "Atos exteriores da Religião",
            itens: [
              { nome: "Adoração (Adoratio, Q. 84)", descricao: "A reverência corporal diante de Deus." },
              { nome: "Sacrifício (Sacrificium, Q. 85)", descricao: "Oferecer algo a Deus em reconhecimento de Sua soberania." },
              { nome: "Oblações e dízimos (Oblationes, Q. 86)", descricao: "Oferta de bens." },
              { nome: "Voto (Votum, Q. 88)", descricao: "Promessa deliberada a Deus." },
              { nome: "Juramento (Iuramentum, Q. 89)", descricao: "Invocar Deus como testemunha da verdade." },
            ],
          },
          {
            titulo: "Espécies da Irreligião (QQ. 97–100)",
            itens: [
              { nome: "Tentação de Deus (Tentatio Dei, Q. 97)", descricao: "Pôr Deus à prova, exigir sinais." },
              { nome: "Perjúrio (Periurium, Q. 98)", descricao: "Jurar falsamente, usando o nome de Deus para mentir." },
              { nome: "Sacrilégio (Sacrilegium, Q. 99)", descricao: "Profanar o que é sagrado." },
              { nome: "Simonia (Simonia, Q. 100)", descricao: "Comprar ou vender coisas espirituais." },
            ],
          },
          {
            titulo: "Espécies da Superstição (QQ. 92–96)",
            itens: [
              { nome: "Culto indevido ao Deus verdadeiro (cultus indebitus, Q. 93)", descricao: "Adorar a Deus do jeito errado. Ritual vazio, performance religiosa sem interior." },
              { nome: "Idolatria (idololatria, Q. 94)", descricao: "Dar culto divino a criaturas. Elevar qualquer criatura ao lugar de Deus — uma pessoa, um líder, uma nação, dinheiro, o próprio eu." },
              { nome: "Adivinhação (divinatio, Q. 95)", descricao: "Buscar conhecimento oculto por meios ilegítimos: invocação de demônios, astrologia determinista, necromancia, sortes, augúrios." },
              { nome: "Vãs observâncias (vanae observantiae, Q. 96)", descricao: "Amuletos, simpatias, rituais mágicos, superstições populares — atribuir poderes sobrenaturais a coisas que não os têm." },
            ],
          },
        ],
        reflexoes: [
          "Você negligencia o que deve a Deus — ou seu culto se desvia para formas desordenadas, rituais vazios ou superstições?",
          "O que motiva sua prática religiosa: dívida reconhecida ou medo/hábito/vaidade?",
        ],
        order: 10,
      },
      {
        id: "gratidao",
        isPrincipal: false,
        principalVirtue: "justica",
        eixo: "Reconhecimento",
        logica: "Ingratidão ↔ servilismo",
        aVirtude:
          "Gratidão (*Gratitudo*, Q. 106) — o reconhecimento reto do benefício recebido. Inclui três graus: (1) reconhecer o dom interiormente, (2) expressar agradecimento, (3) retribuir segundo a capacidade e a oportunidade.",
        viceDeficiency: { name: "Ingratidão", latin: "Ingratitudo" },
        defeitoDescricao:
          "Negar o dom recebido, não reconhecer o benefício, ou recusar-se a retribuir.",
        virtue: { name: "Gratidão", latin: "Gratitudo" },
        viceExcess: { name: "Servilismo / Endividamento excessivo", latin: null },
        excessoDescricao:
          "Tomás não nomeia formalmente um excesso. A lógica do sistema se estende — gratidão que se torna servil, obsequiosa, ou que gera dependência psicológica do benfeitor. Mas é extrapolação dos comentadores, não vício formal na *Summa*.",
        observacoes:
          "Tomás não nomeia formalmente um excesso, e não há termo latino consagrado. A lógica do sistema se estende — gratidão que se torna servil — mas é extrapolação dos comentadores, não vício formal na *Summa*.",
        privacaoDoBem:
          "A ingratidão e o servilismo dependem do mesmo benefício recebido — que é matéria da Gratidão. Uma nega o dom; o outro se escraviza a ele. Nenhum cria uma nova relação com o dom; ambos distorcem o único reconhecimento reto.",
        reflexoes: [
          "Você reconhece os benefícios que recebeu — ou os toma como garantidos?",
          "Sua gratidão é livre e proporcionada, ou se transforma em servilismo e dependência emocional?",
        ],
        order: 11,
      },
    ],
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    latin: "Fortitudo",
    category: "cardinal",
    color: "30",
    axes: [
      {
        id: "fortaleza",
        isPrincipal: true,
        principalVirtue: "fortaleza",
        eixo: "Perigo",
        logica: "Recuar sem razão ↔ avançar sem razão",
        aVirtude:
          "Fortaleza (*Fortitudo*, QQ. 123–140) — a disposição de enfrentar o perigo e suportar o sofrimento quando a razão o exige. É a virtude do apetite irascível: não elimina o medo, mas ordena-o. O forte sente medo e age; o temerário não sente medo — e por isso erra. O ato principal da Fortaleza é *sustinere* (suportar), não *aggredi* (atacar). É mais difícil aguentar do que avançar — e é no aguentar que a fortaleza se revela mais profundamente.",
        viceDeficiency: { name: "Covardia / Timidez (recuar sem razão)", latin: "Timiditas" },
        defeitoDescricao:
          "Recuar sem razão: fugir do perigo que se deveria enfrentar. O covarde subordina o bem à sua segurança.",
        virtue: { name: "Fortaleza (Coragem)", latin: "Fortitudo" },
        viceExcess: { name: "Temeridade / Audácia (avançar sem razão)", latin: "Audacia" },
        excessoDescricao:
          "Avançar sem razão: lançar-se ao perigo sem razão reta. O temerário não é corajoso — é imprudente diante do perigo.",
        observacoes:
          "O caso paradigmático. Fortaleza não é ausência de medo, mas a disposição de enfrentar o perigo apesar do medo, quando a razão o exige. O forte sente medo e age; o temerário não sente medo — e por isso erra. Defeito = covardia, fugir do perigo que se deveria enfrentar. Excesso = temeridade, lançar-se ao perigo sem razão reta.",
        privacaoDoBem:
          "A covardia e a temeridade dependem do mesmo perigo — que é matéria da Fortaleza. Uma foge dele; a outra se lança nele sem razão. Nenhuma inventa uma relação nova com o real; ambas distorcem a única relação verdadeira.",
        extras: [
          {
            titulo: "A virtude suprema da Fortaleza",
            itens: [
              { nome: "Martírio (Martyrium, Q. 124)", descricao: "Suportar a morte pela fé. É o ato mais perfeito da fortaleza porque enfrenta o maior dos males temporais pelo maior dos bens." },
            ],
          },
        ],
        domDoEspiritoSanto: "Fortaleza (Dom)",
        reflexoes: [
          "Diante do perigo, você tende a fugir — ou a se lançar sem pensar?",
          "Você sente o medo e age apesar dele, ou não sente nada — o que pode ser tão errado quanto sentir demais?",
        ],
        order: 12,
      },
      {
        id: "magnanimidade",
        isPrincipal: false,
        principalVirtue: "fortaleza",
        eixo: "Ambição",
        logica: "Fazer menos do que pode ↔ fingir mais do que é",
        aVirtude:
          "Magnanimidade (*Magnanimitas*, Q. 129) — a grandeza de alma que empreende coisas grandes e se julga digna de grandes honras. Não é arrogância — é a avaliação justa da própria capacidade, acompanhada da disposição de agir à altura.",
        viceDeficiency: { name: "Pusilanimidade / Acanhamento (fazer menos do que pode)", latin: "Pusillanimitas" },
        defeitoDescricao:
          "Acanhamento: a pessoa que se encolhe diante do que poderia e deveria fazer, negando os talentos que recebeu. É um pecado contra os dons de Deus: recusar-se a usá-los.",
        virtue: { name: "Magnanimidade", latin: "Magnanimitas" },
        viceExcess: { name: "Presunção / Vanglória (fingir mais do que é)", latin: "Praesumptio / Inanis Gloria" },
        excessoDescricao:
          "A vanglória (*inanis gloria*) é o desejo interior desordenado de glória e reconhecimento — fazer coisas grandes não por seu valor intrínseco, mas para ser admirado. A presunção é tentar o que excede a própria capacidade.",
        observacoes:
          "A vanglória (*inanis gloria*) é o desejo interior desordenado de glória e reconhecimento — a raiz da qual a jactância é apenas um fruto. Aqui o foco é a motivação: fazer coisas grandes não por seu valor intrínseco, mas para ser admirado. Defeito = pusilanimidade: encolher-se diante do que poderia e deveria fazer.",
        privacaoDoBem:
          "A pusilanimidade e a vanglória dependem da mesma grandeza possível — que é matéria da Magnanimidade. Uma encolhe diante do que poderia fazer; a outra infla o que pretende fazer. Nenhuma cria grandeza nova; ambas deformam a única grandeza real: empreender o digno, pelo digno.",
        reflexoes: [
          "Você se encolhe diante do que poderia e deveria fazer — ou busca grandeza para ser admirado?",
          "Suas ambições são proporcionais aos seus dons reais, ou são menores (por medo) ou maiores (por vaidade)?",
        ],
        order: 13,
      },
      {
        id: "magnificencia",
        isPrincipal: false,
        principalVirtue: "fortaleza",
        eixo: "Execução",
        logica: "Fazer barato ↔ fazer ostentoso",
        aVirtude:
          "Magnificência (*Magnificentia*, Q. 134) — fazer coisas grandes de forma digna, proporcionada à grandeza da obra. Diz respeito a despesas grandes e obras grandes: o magnífico emprega recursos à altura do empreendimento.",
        viceDeficiency: { name: "Mesquinhez nas grandes obras", latin: "Parvificentia" },
        defeitoDescricao:
          "Fazer o grande com meios insuficientes. Construir a catedral com material barato. O vício não é economizar — é empobrecer o que merecia grandeza.",
        virtue: { name: "Magnificência", latin: "Magnificentia" },
        viceExcess: { name: "Desperdício / Extravagância de mau gosto", latin: "Consumptio" },
        excessoDescricao:
          "Gastar além da proporção, não pela obra, mas pela ostentação. Dourar tudo para exibir.",
        observacoes:
          "Fazer coisas grandes de forma digna. De menos = construir a catedral com material barato. De mais = dourar tudo por ostentação.",
        privacaoDoBem:
          "A mesquinhez e a extravagância dependem da mesma obra grande — que é matéria da Magnificência. Uma a faz mal; a outra a faz para exibir. Nenhuma cria uma obra nova; ambas corrompem o único modo de executar com dignidade.",
        reflexoes: [
          "Quando faz algo importante, você tende a economizar onde não deveria — ou a gastar por ostentação?",
          "A escala do que você faz é digna do propósito, ou é distorcida (pra menos ou pra mais)?",
        ],
        order: 14,
      },
      {
        id: "paciencia",
        isPrincipal: false,
        principalVirtue: "fortaleza",
        eixo: "Dor",
        logica: "Quebrar-se ↔ tornar-se insensível",
        aVirtude:
          "Paciência (*Patientia*, Q. 136) — suportar sofrimentos presentes sem desordenamento interior. Diz respeito à dor. Não confundir com Perseverança, que diz respeito à continuidade.",
        viceDeficiency: { name: "Impaciência / Desistir fácil demais", latin: "Impatientia" },
        defeitoDescricao:
          "Quebrar-se diante da dor, desistir fácil demais. O impaciente não suporta o mal que deveria suportar.",
        virtue: { name: "Paciência", latin: "Patientia" },
        viceExcess: { name: "Insensibilidade / Apatia estoica", latin: "Insensibilitas" },
        excessoDescricao:
          "Tomás diria que o excesso não é 'paciência demais' mas indiferença desordenada ao sofrimento: a apatia estoica que falha em resistir a males que se deveria resistir, ou que nega a dor em vez de suportá-la com dignidade.",
        observacoes:
          "Paciência é suportar sofrimentos presentes sem desordenamento interior — diz respeito à dor. Não confundir com Perseverança, que é sobre duração. O excesso não é 'paciência demais' mas indiferença desordenada ao sofrimento — a apatia estoica que falha em resistir a males que se deveria resistir.",
        privacaoDoBem:
          "A impaciência e a apatia dependem da mesma dor — que é matéria da Paciência. Uma se despedaça diante dela; a outra se anestesia. Nenhuma cria uma dor nova; ambas distorcem o único modo de suportá-la sem perder a alma.",
        reflexoes: [
          "Diante do sofrimento, você tende a quebrar rápido — ou a se tornar insensível, fingindo que não dói?",
          "Sua paciência é suportar com firmeza interior, ou é apenas indiferença disfarçada?",
        ],
        order: 15,
      },
      {
        id: "perseveranca",
        isPrincipal: false,
        principalVirtue: "fortaleza",
        eixo: "Continuidade",
        logica: "Desistir ↔ obstinar-se",
        aVirtude:
          "Perseverança (*Perseverantia*, Q. 137) — manter-se firme no bem difícil ao longo do tempo. Diz respeito à continuidade. Não confundir com Paciência, que diz respeito à dor.",
        viceDeficiency: { name: "Moleza (desistência fácil)", latin: "Mollities" },
        defeitoDescricao:
          "Desistência fácil: ceder ao primeiro desconforto, abandonar o caminho quando fica difícil. O latim *mollities* significa 'mole' — a pessoa que não aguenta pressão prolongada.",
        virtue: { name: "Perseverança", latin: "Perseverantia" },
        viceExcess: { name: "Pertinácia / Teimosia", latin: "Pertinacia" },
        excessoDescricao:
          "Recusar-se a parar quando a razão e as circunstâncias exigem mudança de curso. O pertinaz confunde firmeza com rigidez.",
        observacoes:
          "Perseverança é manter-se firme no bem difícil ao longo do tempo — diz respeito à duração. Não confundir com Paciência, que é sobre suportar a dor. Defeito = moleza: ceder ao primeiro desconforto. Excesso = pertinácia: recusar-se a parar quando a razão e as circunstâncias exigem mudança de curso.",
        privacaoDoBem:
          "A moleza e a pertinácia dependem do mesmo bem difícil ao longo do tempo — que é matéria da Perseverança. Uma abandona o caminho; a outra se recusa a sair dele. Nenhuma inventa um caminho novo; ambas deformam o único modo de percorrê-lo com discernimento.",
        reflexoes: [
          "Você desiste ao primeiro desconforto — ou se recusa a mudar de rumo quando claramente deveria?",
          "Sua persistência é guiada pela razão ou pelo orgulho?",
        ],
        order: 16,
      },
    ],
  },
  {
    id: "temperanca",
    name: "Temperança",
    latin: "Temperantia",
    category: "cardinal",
    color: "180",
    axes: [
      {
        id: "temperanca",
        isPrincipal: true,
        principalVirtue: "temperanca",
        eixo: "Prazer",
        logica: "Rejeitar tudo ↔ entregar-se sem freio",
        aVirtude:
          "Temperança (*Temperantia*, QQ. 141–170) — a virtude que modera os apetites sensíveis, não os eliminando, mas ordenando-os segundo a razão. É a virtude-mãe de toda uma família: abstinência, castidade, humildade, estudiosidade são todas 'filhas' da Temperança.",
        viceDeficiency: { name: "Insensibilidade (rejeitar todo prazer)", latin: "Insensibilitas" },
        defeitoDescricao:
          "Rejeitar todo prazer legítimo. O asceta que recusa bens que Deus deu como bons. Tomás é claro: o prazer não é mau; o prazer desordenado é mau. Rejeitar o prazer legítimo é tão desordenado quanto entregar-se a ele.",
        virtue: { name: "Temperança (Moderação)", latin: "Temperantia" },
        viceExcess: { name: "Intemperança / Autoindulgência", latin: "Intemperantia" },
        excessoDescricao:
          "Entregar-se ao prazer sem freio, subordinando a razão ao apetite.",
        observacoes:
          "A virtude que modera os apetites sensíveis — não os elimina, mas os ordena segundo a razão. Defeito = o asceta que recusa bens legítimos. Excesso = entregar-se ao prazer sem freio. É a virtude-mãe de toda a seção: abstinência, castidade, humildade, estudiosidade são todas 'filhas' da temperança.",
        privacaoDoBem:
          "A insensibilidade e a intemperança dependem do mesmo prazer — que é matéria da Temperança. Uma o rejeita; a outra se entrega a ele. Nenhuma inventa um prazer novo; ambas distorcem o único modo reto de recebê-lo.",
        domDoEspiritoSanto: "Temor",
        reflexoes: [
          "Você tende a rejeitar prazeres legítimos por rigidez — ou a se entregar a eles sem critério?",
          "Seus apetites são ordenados pela razão ou governam você?",
        ],
        order: 17,
      },
      {
        id: "abstinencia",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Alimento",
        logica: "Autonegar ↔ fixar-se",
        aVirtude:
          "Abstinência (*Abstinentia*, Q. 146) — a moderação no comer, ordenando o prazer da comida ao bem do corpo e da alma.",
        viceDeficiency: { name: "Jejum excessivo / Autonegação extrema", latin: null },
        defeitoDescricao:
          "O defeito não é a abstinência em si, mas sua deformação: jejum que prejudica o corpo, autonegação que se torna orgulho disfarçado, ou mortificação que ignora o dom da criação.",
        virtue: { name: "Abstinência (apetite sob governo)", latin: "Abstinentia" },
        viceExcess: { name: "Gula", latin: "Gula" },
        excessoDescricao:
          "A fixação desordenada no prazer da comida. Tomás identifica cinco modos (Q. 148, a. 4): comer cedo demais (*praepropere*), com requinte excessivo (*laute*), em quantidade excessiva (*nimis*), com avidez (*ardenter*) e com preparação excessiva (*studiose*).",
        observacoes:
          "O defeito não é a abstinência em si, mas sua deformação: jejum que prejudica o corpo, autonegação que se torna orgulho disfarçado. O excesso é a gula — não apenas comer demais, mas a fixação desordenada no prazer da comida.",
        privacaoDoBem:
          "A autonegação extrema e a gula dependem da mesma necessidade de se alimentar — que é matéria da Abstinência. Uma nega o corpo; a outra o idolatra. Nenhuma cria uma necessidade nova; ambas corrompem o único modo de alimentar-se com retidão.",
        reflexoes: [
          "Sua relação com a comida é ordenada — ou oscila entre restrição rígida e indulgência?",
          "Você come para viver ou vive para comer? E quando restringe, é por disciplina ou por orgulho?",
        ],
        order: 18,
      },
      {
        id: "sobriedade",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Lucidez",
        logica: "Rigidez puritana ↔ embriaguez",
        aVirtude:
          "Sobriedade (*Sobrietas*, Q. 149) — a moderação no uso da bebida, especialmente as que podem obscurecer a razão.",
        viceDeficiency: { name: "Rigidez puritana (rejeição do convívio)", latin: "Insensibilitas" },
        defeitoDescricao:
          "Tomás não desenvolve formalmente o defeito (Q. 149), mas a lógica do sistema o prevê: assim como rejeitar todo prazer é vício sob a Temperança, rejeitar a bebida moderada por puritanismo — transformando a abstinência em juízo moral sobre os outros — é o defeito da Sobriedade. O eixo é a Lucidez: o defeito não a compromete, mas deforma a convivialidade que a bebida moderada serve.",
        virtue: { name: "Sobriedade", latin: "Sobrietas" },
        viceExcess: { name: "Embriaguez", latin: "Ebrietas" },
        excessoDescricao:
          "A perda voluntária da lucidez pelo uso excessivo de bebida. É vício porque destrói o uso da razão — e a razão é o que nos permite exercer todas as outras virtudes. A gravidade depende de ser voluntária e habitual.",
        observacoes:
          "Tomás não desenvolve formalmente o defeito (Q. 149), mas a lógica do sistema o prevê: assim como rejeitar todo prazer é vício sob a Temperança, rejeitar a bebida moderada por puritanismo — transformando a abstinência em juízo moral sobre os outros — é o defeito da Sobriedade. O eixo é a Lucidez: o defeito não a compromete, mas deforma a convivialidade que a bebida moderada serve.",
        privacaoDoBem:
          "A rigidez puritana e a embriaguez dependem da mesma lucidez — que é matéria da Sobriedade. Uma transforma a abstinência em juízo moral, rejeitando o convívio que a bebida moderada serve; a outra destrói a lucidez que a sobriedade protege. Nenhuma inventa uma relação nova com a bebida; ambas distorcem o único modo reto de usá-la.",
        reflexoes: [
          "Sua relação com substâncias que alteram a consciência é governada pela razão ou pelo apetite?",
        ],
        order: 19,
      },
      {
        id: "castidade",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Sexualidade",
        logica: "Frigidez ↔ luxúria",
        aVirtude:
          "Castidade (*Castitas*, Q. 151) — o uso ordenado do prazer sexual segundo o estado de vida. Castidade não é abstinência sexual: a virgindade consagrada e o matrimônio têm cada um seu modo próprio de castidade. É a integração da sexualidade na pessoa, não sua supressão.",
        viceDeficiency: { name: "Frigidez / Rejeição do dever conjugal", latin: "Insensibilitas" },
        defeitoDescricao:
          "Dentro do matrimônio, recusar o débito conjugal é um defeito da castidade retamente ordenada. Nota: Tomás usa especificamente *debitum conjugale* — débito, dever. É linguagem de Justiça (o que é devido ao cônjuge), não de Temperança (o que dá prazer). Isso revela que as virtudes se entrelaçam: a Castidade é filha da Temperança, mas seu defeito conjugal é formulado como violação de Justiça — negar ao outro o que lhe é devido.",
        virtue: { name: "Castidade", latin: "Castitas" },
        viceExcess: { name: "Luxúria (todas as espécies)", latin: "Luxuria" },
        excessoDescricao:
          "O desejo desordenado do prazer sexual. Tomás lista suas espécies (Q. 154): fornicação simples, adultério, incesto, estupro, rapto e o vício contra a natureza.",
        observacoes:
          "Castidade não é abstinência sexual — é o uso ordenado do prazer sexual segundo o estado de vida. A virgindade consagrada e o matrimônio têm cada um seu modo próprio de castidade. Dentro do matrimônio, recusar o débito conjugal é um defeito da castidade retamente ordenada. Fora dele, a luxúria é o excesso.",
        privacaoDoBem:
          "A frigidez e a luxúria dependem do mesmo prazer sexual — que é matéria da Castidade. Uma o nega; a outra o absolutiza. Nenhuma cria um prazer novo; ambas distorcem o único modo de vivê-lo segundo o estado de vida.",
        extras: [
          {
            titulo: "Virtude associada",
            itens: [
              { nome: "Virgindade (Virginitas, Q. 152)", descricao: "A renúncia perpétua ao prazer sexual por amor a Deus. É um conselho evangélico, não um mandamento." },
            ],
          },
        ],
        reflexoes: [
          "Sua sexualidade é ordenada ao amor e à vida — ou é governada pelo prazer isolado ou pela rejeição?",
          "Castidade é o uso reto, não a ausência. Você vive a castidade própria do seu estado de vida?",
        ],
        order: 20,
      },
      {
        id: "humildade",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Autoestima",
        logica: "Negar o que se é ↔ reivindicar o que não se é",
        aVirtude:
          "Humildade (*Humilitas*, Q. 161) — a virtude que ordena a pessoa diante de Deus reconhecendo a própria dependência. Não é autodepreciação: é a verdade sobre si mesmo, vista do ângulo da relação com Deus.",
        viceDeficiency: { name: "Autoabatimento (negar o que se é)", latin: "Abiectio sui" },
        defeitoDescricao:
          "Negar dons reais que Deus concedeu. É uma forma de inverdade: mentir sobre si por baixo. O falso humilde peca contra a verdade e contra a gratidão (nega os dons do Doador).",
        virtue: { name: "Humildade", latin: "Humilitas" },
        viceExcess: { name: "Soberba (reivindicar o que não se é)", latin: "Superbia" },
        excessoDescricao:
          "Reivindicar para si o que pertence a Deus. Tomás a trata como raiz de todo pecado (Q. 162, a. 2): o primeiro movimento de todo desordenamento moral é o apetite desordenado da própria excelência.",
        observacoes:
          "A Soberba (Superbia) é tratada por Tomás como raiz de todo pecado — o primeiro movimento de todo desordenamento é reivindicar para si o que pertence a Deus. A humildade ordena a pessoa diante de Deus reconhecendo a própria dependência. Defeito = negar dons reais que Deus concedeu (forma de inverdade). Excesso = reivindicar mais do que se é.",
        privacaoDoBem:
          "O autoabatimento e a soberba dependem da mesma autoestima — que é matéria da Humildade. Um nega os dons reais; a outra reivindica dons falsos. Nenhum cria uma identidade nova; ambos deformam a única identidade verdadeira: quem a pessoa é diante de Deus.",
        extras: [
          {
            titulo: "Quatro graus da Soberba (segundo S. Gregório)",
            itens: [
              { nome: "1.º grau", descricao: "Julgar que o bem vem de si." },
              { nome: "2.º grau", descricao: "Julgar que o merece." },
              { nome: "3.º grau", descricao: "Gabar-se do que não tem." },
              { nome: "4.º grau", descricao: "Desprezar os outros." },
            ],
          },
        ],
        reflexoes: [
          "Você nega seus dons reais por falsa humildade — ou reivindica para si o que não lhe pertence?",
          "Você se conhece como realmente é diante de Deus, ou vive uma versão editada — pra baixo ou pra cima?",
        ],
        order: 21,
      },
      {
        id: "estudiosidade",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Conhecimento",
        logica: "Ignorar por indolência ↔ saber por vaidade",
        aVirtude:
          "Estudiosidade (*Studiositas*, Q. 166) — o apetite reto de conhecimento: buscar o que se deve saber, pelo modo e na medida retos. É a temperança aplicada ao apetite intelectual.",
        viceDeficiency: { name: "Preguiça intelectual / Negligência (ignorar por indolência)", latin: "Negligentia" },
        defeitoDescricao:
          "Não buscar o conhecimento que se deveria. É o defeito que menos se reconhece, mas Tomás é claro: cada pessoa tem obrigação de conhecer o que seu estado de vida exige.",
        virtue: { name: "Estudiosidade", latin: "Studiositas" },
        viceExcess: { name: "Curiosidade / Dispersão (saber por vaidade)", latin: "Curiositas" },
        excessoDescricao:
          "O desejo desordenado de saber. Tomás (seguindo Agostinho, Confissões X) identifica a *concupiscentia oculorum* — a 'concupiscência dos olhos': o apetite de saber que nunca descansa em contemplação do Verdadeiro. A curiosidade é a estudiosidade que perdeu sua ordenação à Sabedoria.",
        observacoes:
          "Defeito = não buscar o conhecimento que se deveria. Excesso = buscar conhecimento por razões erradas ou negligenciar o superior pelo inferior. Agostinho chama o excesso de *concupiscentia oculorum* — a 'concupiscência dos olhos', o apetite de saber que nunca descansa em contemplação do Verdadeiro. A curiosidade é a estudiosidade que perdeu sua ordenação à Sabedoria.",
        privacaoDoBem:
          "A preguiça intelectual e a curiosidade dependem do mesmo apetite de conhecer — que é matéria da Estudiosidade. Uma adormece o apetite; a outra o desordena. Nenhuma cria um apetite novo; ambas parasitam o único desejo que poderia conduzir à Sabedoria.",
        extras: [
          {
            titulo: "Formas da Curiosidade",
            itens: [
              { nome: "Buscar conhecimento por orgulho", descricao: "Para exibir-se, não para crescer." },
              { nome: "Negligenciar o superior pelo inferior", descricao: "Estudar o trivial enquanto se ignora o necessário." },
              { nome: "Buscar conhecimento de fontes ilícitas", descricao: "Adivinhação, curiosidade pecaminosa sobre a vida alheia." },
              { nome: "Buscar conhecimento sem ordená-lo a Deus", descricao: "Saber pelo saber, sem referência à Sabedoria." },
            ],
          },
        ],
        reflexoes: [
          "Você negligencia o conhecimento que deveria buscar — ou consome informação compulsivamente, sem ordenação à sabedoria?",
          "Seu desejo de saber serve à contemplação do verdadeiro ou à agitação do novo?",
        ],
        order: 22,
      },
      {
        id: "mansidao",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Ira",
        logica: "Calar a ira justa ↔ soltar a ira injusta",
        aVirtude:
          "Mansidão (*Mansuetudo*, Q. 157) — do latim *mansuetus* ('acostumado à mão'): a força sob controle. O animal domado não perdeu sua força; sua força foi ordenada. Mansidão não é fraqueza nem passividade, mas o governo da ira pela razão: saber quando, quanto e com quem se irar.",
        viceDeficiency: { name: "Passividade / Omissão (calar a ira justa)", latin: "Inirascibilitas" },
        defeitoDescricao:
          "Calar a ira justa: não se irar mesmo diante do mal, aceitar injustiças sem reação — não por mansidão virtuosa, mas por inércia ou medo. Tomás é explícito: não se irar quando se deveria é pecado.",
        virtue: { name: "Mansidão (força sob controle)", latin: "Mansuetudo" },
        viceExcess: { name: "Ira desordenada (soltar a ira injusta)", latin: "Ira" },
        excessoDescricao:
          "Ira desproporcional à causa, ou dirigida a quem não a merece, ou mantida além do que a razão permite. Tomás distingue três espécies: (1) *acuti* — os que se iram rapidamente e passam rápido; (2) *amari* — os que retêm a ira por longo tempo; (3) *difficiles* — os que não descansam até se vingarem.",
        observacoes:
          "Do latim *mansuetus* ('acostumado à mão') — o animal domado não perdeu sua força; sua força foi ordenada. Mansidão não é fraqueza nem passividade, mas o governo da ira pela razão. Defeito = passividade: não se irar mesmo diante do mal. Excesso = ira desordenada, desproporcional à causa. O manso sabe quando, quanto e com quem se irar.",
        privacaoDoBem:
          "A passividade e a ira desordenada dependem da mesma capacidade de indignar-se — que é matéria da Mansidão. Uma silencia a ira justa; a outra a descontrola. Nenhuma inventa uma ira nova; ambas distorcem a única força que, sob controle, defende o bem.",
        extras: [
          {
            titulo: "Três espécies da Ira (Q. 158, a. 5)",
            itens: [
              { nome: "Acuti", descricao: "Os que se iram rapidamente e passam rápido." },
              { nome: "Amari", descricao: "Os que retêm a ira por longo tempo." },
              { nome: "Difficiles", descricao: "Os que não descansam até se vingarem." },
            ],
          },
        ],
        reflexoes: [
          "Diante da injustiça, você fica passivo — ou explode desproporcionalmente?",
          "Você sabe quando, quanto e com quem se irar — ou sua ira (ou falta dela) é governada pelo impulso?",
        ],
        order: 23,
      },
      {
        id: "clemencia",
        isPrincipal: false,
        principalVirtue: "temperanca",
        eixo: "Punição",
        logica: "Punir de menos ↔ punir demais",
        aVirtude:
          "Clemência (*Clementia*, Q. 157) — a disposição de moderar a pena sem abandonar a justiça. Não é perdão (que pertence à Caridade), mas a moderação no exercício do poder de punir.",
        viceDeficiency: { name: "Laxismo / Permissividade (punir de menos)", latin: "Remissio" },
        defeitoDescricao:
          "Permissividade: não punir quando a justiça exige, deixando o mal prosperar por omissão. O laxista não é misericordioso — é negligente.",
        virtue: { name: "Clemência", latin: "Clementia" },
        viceExcess: { name: "Crueldade / Severidade (punir demais)", latin: "Crudelitas / Saevitia" },
        excessoDescricao:
          "Punir além da proporção, ou com prazer no sofrimento alheio. Tomás distingue *crudelitas* (excesso na punição) de *saevitia* / *feritas* (prazer na punição) — a segunda é pior porque desumaniza.",
        observacoes:
          "Defeito = laxismo: não punir quando a justiça exige, deixando o mal prosperar por omissão. Excesso = crueldade, punir além da proporção ou com prazer no sofrimento alheio. A clemência é a disposição de moderar a pena sem abandonar a justiça.",
        privacaoDoBem:
          "O laxismo e a crueldade dependem da mesma capacidade de punir — que é matéria da Clemência. Um se omite; a outra excede. Nenhum cria um poder novo; ambos corrompem o único exercício reto da punição: moderar a pena sem abandonar a justiça.",
        reflexoes: [
          "Quando alguém erra, você tende a deixar passar (permitindo que o mal prospere) — ou a punir com excesso?",
          "Sua resposta ao erro alheio é governada pela justiça temperada pela misericórdia, ou pelo impulso?",
        ],
        order: 24,
      },
    ],
  },

  // ─── VIRTUDES INTELECTUAIS ───
  {
    id: "entendimento",
    name: "Entendimento",
    latin: "Intellectus",
    category: "intellectual",
    color: "90",
    axes: [
      {
        id: "entendimento",
        isPrincipal: true,
        principalVirtue: "entendimento",
        eixo: "Fundamentos",
        logica: "Negar os princípios ↔ fabricar princípios",
        eixoLabels: { left: "← não buscar", right: "absolutizar →" },
        aVirtude:
          "Entendimento (*Intellectus*, I-II, Q. 57, a. 2) — a captação imediata dos primeiros princípios, as verdades auto-evidentes que não se demonstram, se *veem*. 'O todo é maior que a parte.' 'Não se pode afirmar e negar a mesma coisa ao mesmo tempo.' 'O bem deve ser feito e o mal evitado.' Não são conclusões de raciocínios; são os alicerces sobre os quais todo raciocínio se constrói. O Entendimento não é 'inteligência' no sentido moderno (QI, rapidez mental). É algo mais fundamental: a capacidade da mente de *tocar* a realidade nos seus pontos mais básicos — e reconhecer o que é verdadeiro antes de qualquer argumento.",
        viceDeficiency: { name: "Ceticismo radical (negar que haja verdades auto-evidentes)", latin: null },
        defeitoDescricao:
          "Negar que haja verdades auto-evidentes. 'Não se pode ter certeza de nada.' 'A verdade é relativa.' 'Não existe natureza humana.' A recusa de reconhecer os fundamentos. É a corrupção mais perigosa porque opera silenciosamente — se o alicerce é negado, todo o edifício do conhecimento desmorona antes de ser construído.",
        virtue: { name: "Entendimento", latin: "Intellectus" },
        viceExcess: { name: "Dogmatismo (afirmar como auto-evidente o que não é)", latin: null },
        excessoDescricao:
          "Afirmar como auto-evidente o que não é. Transformar opinião em princípio, ideologia em axioma, preferência em verdade necessária. O dogmático não busca os fundamentos — os fabrica.",
        observacoes:
          "A captação imediata dos primeiros princípios — verdades que não se demonstram, se veem: 'o todo é maior que a parte', 'não se pode afirmar e negar a mesma coisa'. É o alicerce de todo conhecimento. O Entendimento prático (*synderesis*) fornece à Prudência seu primeiro princípio: 'faça o bem e evite o mal'.",
        privacaoDoBem:
          "O ceticismo e o dogmatismo dependem da mesma capacidade de captar os primeiros princípios — que é matéria do Entendimento. Um nega que haja fundamentos; o outro fabrica fundamentos falsos. Nenhum inventa uma relação nova com a verdade; ambos distorcem a única relação que permite ao conhecimento começar.",
        extras: [
          {
            titulo: "Nota sobre o latim",
            itens: [
              { nome: "Ausência de termos formais", descricao: "Tomás não nomeia formalmente o ceticismo radical nem o dogmatismo — escreve antes de Descartes e do ceticismo moderno. Os conceitos existem implicitamente no sistema (errar nos primeiros princípios é a pior forma de erro intelectual), mas sem termos latinos consagrados na *Summa*." },
            ],
          },
        ],
        relacaoVirtudesMorais:
          "O Entendimento prático (*synderesis*) fornece à Prudência seu primeiro princípio: 'faça o bem e evite o mal.' Sem Entendimento reto, a Prudência opera sobre fundamentos errados — delibera bem a partir de premissas falsas, o que é pior do que não deliberar.",
        domDoEspiritoSanto: "Entendimento (*Donum Intellectus*, II-II, Q. 8) — o Dom eleva a captação natural dos princípios para a penetração sobrenatural das verdades da fé.",
        reflexoes: [
          "Você reconhece que existem verdades que não dependem da sua opinião — ou tende a tratar toda certeza como 'dogmatismo'?",
          "Você confunde abertura intelectual com recusa de fundamentos?",
        ],
        order: 25,
      },
    ],
  },
  {
    id: "ciencia",
    name: "Ciência",
    latin: "Scientia",
    category: "intellectual",
    color: "160",
    axes: [
      {
        id: "ciencia",
        isPrincipal: true,
        principalVirtue: "ciencia",
        eixo: "Demonstração",
        logica: "Recusar o método ↔ absolutizar o método",
        eixoLabels: { left: "← não buscar", right: "absolutizar →" },
        aVirtude:
          "Ciência (*Scientia*, I-II, Q. 57, a. 2) — o conhecimento demonstrativo: dadas as premissas (fornecidas pelo Entendimento), chegar às conclusões com necessidade lógica. Cada disciplina tem sua ciência própria — física, matemática, biologia, teologia — cada uma com seus princípios e seu método. A Ciência não inventa verdades; descobre as que estão inscritas no real. A relação entre Entendimento e Ciência é a de fundamento e edifício: o Entendimento fornece as pedras angulares; a Ciência constrói a partir delas.",
        viceDeficiency: { name: "Anti-intelectualismo / Ignorância voluntária", latin: "Ignorantia" },
        defeitoDescricao:
          "A recusa de usar o método demonstrativo. 'Pensar demais é perigoso.' 'O coração sabe mais que a razão.' 'Não preciso estudar isso.' É a abdicação da capacidade de conhecer com rigor — muitas vezes disfarçada de humildade ou de espiritualidade.",
        virtue: { name: "Ciência", latin: "Scientia" },
        viceExcess: { name: "Cientificismo (reduzir toda verdade ao método empírico)", latin: null },
        excessoDescricao:
          "Reduzir *toda* verdade legítima ao método empírico-quantitativo, negando validade ao Entendimento (primeiros princípios), à Sabedoria (causas últimas) e à Teologia (verdade revelada). A afirmação 'só o verificável empiricamente é verdadeiro' não é ela mesma verificável empiricamente — o cientificismo se autodestrói. Também: o *sophisma* — usar a forma da demonstração para chegar a conclusões falsas.",
        observacoes:
          "O conhecimento demonstrativo: dadas as premissas, chegar às conclusões com necessidade. Cada disciplina tem sua ciência. A Ciência não inventa verdades; descobre as inscritas no real. A afirmação 'só o verificável empiricamente é verdadeiro' não é ela mesma verificável empiricamente — o cientificismo se autodestrói.",
        privacaoDoBem:
          "O anti-intelectualismo e o cientificismo dependem da mesma capacidade de demonstrar — que é matéria da Ciência. Um recusa o método; o outro o idolatra. Nenhum inventa um modo novo de conhecer; ambos distorcem o único modo reto de construir sobre os fundamentos.",
        relacaoVirtudesMorais:
          "A Ciência informa a Prudência sobre o funcionamento do real. Não se pode agir retamente no mundo sem conhecê-lo — o médico precisa de ciência médica para exercer a prudência médica. Mas Ciência sem Prudência é saber sem saber o que fazer com o saber. O físico nuclear que entende a fissão mas não discerne se deve construir a bomba tem Ciência sem Prudência.",
        domDoEspiritoSanto: "Ciência (*Donum Scientiae*, II-II, Q. 9) — o Dom eleva o conhecimento das causas criadas para a avaliação sobrenatural de todas as coisas à luz de Deus.",
        reflexoes: [
          "Você tende a rejeitar o rigor intelectual — ou a absolutizar o método científico como única forma válida de conhecimento?",
          "Sua relação com o conhecimento é de humildade diante do real ou de controle sobre o real?",
        ],
        order: 26,
      },
    ],
  },
  {
    id: "sabedoria-intelectual",
    name: "Sabedoria",
    latin: "Sapientia",
    category: "intellectual",
    color: "50",
    axes: [
      {
        id: "sabedoria-intelectual",
        isPrincipal: true,
        principalVirtue: "sabedoria-intelectual",
        eixo: "Causas últimas",
        logica: "Nunca perguntar 'por quê?' ↔ responder com falsa autoridade",
        eixoLabels: { left: "← não buscar", right: "absolutizar →" },
        aVirtude:
          "Sabedoria (*Sapientia*, I-II, Q. 57, a. 2) — o conhecimento das causas mais altas e dos princípios mais universais. A Ciência pergunta 'por quê?' dentro de um domínio; a Sabedoria pergunta 'por que o domínio existe?'. É a virtude arquitetônica do intelecto especulativo: ordena e julga todas as outras ciências à luz das causas supremas. A hierarquia é clara: o Entendimento capta os princípios → a Ciência demonstra a partir deles → a Sabedoria julga tudo à luz das causas mais altas. Em última instância, a causa suprema é Deus.",
        viceDeficiency: { name: "Superficialidade / Incuriosidade pelas causas supremas", latin: null },
        defeitoDescricao:
          "Nunca levantar os olhos. O especialista que sabe tudo sobre sua área e nunca pergunta *para que* ela existe é cientista sem ser sábio. A superficialidade não é falta de inteligência; é falta de *apetite pelo último*.",
        virtue: { name: "Sabedoria", latin: "Sapientia" },
        viceExcess: { name: "Falsa sabedoria (julgar as causas últimas por critérios mundanos)", latin: "Prudentia carnis" },
        excessoDescricao:
          "Julgar as causas últimas por critérios mundanos: poder, utilidade, prestígio, conforto. Também: o gnóstico que *inventa* causas últimas em vez de se submeter às reais — o falso sábio que responde antes de contemplar.",
        observacoes:
          "O conhecimento das causas mais altas. A Ciência pergunta 'por quê?' dentro de um domínio; a Sabedoria pergunta 'por que o domínio existe?'. É a virtude arquitetônica do intelecto especulativo. Em última instância, a causa suprema é Deus.",
        privacaoDoBem:
          "A superficialidade e a falsa sabedoria dependem da mesma capacidade de contemplar as causas últimas — que é matéria da Sabedoria. Uma nunca levanta os olhos; a outra levanta os olhos e vê o que quer ver. Nenhuma inventa causas novas; ambas distorcem a única contemplação que pode ordenar todo o conhecimento.",
        relacaoVirtudesMorais:
          "A Sabedoria é o horizonte que ordena tudo. A Prudência governa a ação concreta; a Sabedoria julga se a ação inteira da vida está ordenada ao fim último. Sem Sabedoria, a Prudência pode ser eficiente mas errar o alvo — como o piloto habilidoso que dirige o navio para o porto errado.",
        domDoEspiritoSanto: "Sabedoria (*Donum Sapientiae*, II-II, QQ. 45-46) — o Dom mais alto. A Sabedoria natural alcança Deus por raciocínio; o Dom da Sabedoria alcança Deus por experiência, por conaturalidade com as coisas divinas.",
        reflexoes: [
          "Você busca conhecer as causas últimas das coisas — ou se contenta com o funcionamento superficial?",
          "Sua 'sabedoria' é contemplação do real ou projeção dos seus critérios mundanos?",
        ],
        order: 27,
      },
    ],
  },
  {
    id: "arte",
    name: "Arte",
    latin: "Ars",
    category: "intellectual",
    color: "330",
    axes: [
      {
        id: "arte",
        isPrincipal: true,
        principalVirtue: "arte",
        eixo: "O fazer",
        logica: "Não se importar com a obra ↔ idolatrar a obra (ou o artista)",
        eixoLabels: { left: "← não buscar", right: "absolutizar →" },
        aVirtude:
          "Arte (*Ars*, I-II, Q. 57, a. 3-4) — a *recta ratio factibilium*: a razão reta das coisas a serem produzidas. O carpinteiro que faz a mesa bem feita, o músico que compõe com maestria, o arquiteto que projeta com proporção, o programador que escreve código elegante — todos exercem *Ars*. O padrão de medida é a obra: está bem feita? Serve ao seu fim? É bela? A Arte julga pela qualidade do que é produzido, não pela intenção de quem produz. Um artesão moralmente péssimo pode fazer uma mesa perfeita — a *Ars* não exige bondade moral, exige excelência na execução.",
        viceDeficiency: { name: "Desleixo / Incompetência (desprezo pela excelência)", latin: "Negligentia" },
        defeitoDescricao:
          "Desprezo pela excelência. Não se importar com a qualidade da obra. Não é simplesmente 'não ser talentoso' — é não buscar a maestria que se poderia alcançar. O desleixado pode ter capacidade; o que lhe falta é o respeito pela obra.",
        virtue: { name: "Arte", latin: "Ars" },
        viceExcess: { name: "Esteticismo / Auto-expressão como fim (idolatria do eu aplicada ao fazer)", latin: null },
        excessoDescricao:
          "A inversão mais sutil e mais moderna. Duas formas: (1) Esteticismo — absolutizar a beleza da obra, desvinculando-a do Bom e do Verdadeiro; a 'arte pela arte' que se recusa a servir qualquer coisa além de si mesma. (2) Auto-expressão como ideal supremo — quando o fim da Arte deixa de ser a obra e se torna o *eu* do artista. O artista genuíno *se* expressa — inevitavelmente. Mas a auto-expressão acontece como subproduto da busca pela excelência, não como objetivo.",
        observacoes:
          "A *recta ratio factibilium*: a razão reta das coisas a serem produzidas. O padrão de medida é a obra: está bem feita? É bela? A Arte é a virtude do *Pulchrum* (Belo) — o transcendental menos representado nas virtudes morais. A distinção crucial: a Arte ordena o *fazer* (*factibilia*); a Prudência ordena o *agir* (*agibilia*).",
        privacaoDoBem:
          "O desleixo e o esteticismo dependem da mesma capacidade de produzir com excelência — que é matéria da Arte. Um não se importa com a obra; o outro a transforma em ídolo — ou, pior, transforma o eu do artista em ídolo. Nenhum inventa uma criatividade nova; ambos distorcem a única relação reta entre o artesão, a obra e o Belo.",
        extras: [
          {
            titulo: "A Arte e o Pulchrum (Belo)",
            itens: [
              { nome: "*Integritas* (completude)", descricao: "Nada falta à obra." },
              { nome: "*Consonantia* (proporção)", descricao: "As partes se harmonizam entre si." },
              { nome: "*Claritas* (esplendor)", descricao: "A forma resplandece através da matéria. A grande arte manifesta todas as três." },
            ],
          },
          {
            titulo: "A distinção *Ars* / *Prudentia*",
            itens: [
              { nome: "Arte = razão reta do *fazer* (*factibilia*)", descricao: "Produzir coisas externas com excelência." },
              { nome: "Prudência = razão reta do *agir* (*agibilia*)", descricao: "Conduzir a própria vida com retidão." },
            ],
          },
        ],
        relacaoVirtudesMorais:
          "A Arte sem Prudência produz coisas belas que podem destruir. A Prudência sem Arte age retamente mas não cria. A Arte sem Caridade serve a si mesma. A Arte com Caridade serve a Deus — e nesse serviço encontra sua máxima liberdade e excelência. Bach é o exemplo supremo: excelência técnica perfeita a serviço da adoração (*Soli Deo Gloria*).",
        reflexoes: [
          "Você busca excelência no que produz — ou se contenta com o 'bom o suficiente'?",
          "Sua criatividade serve à obra ou ao seu ego?",
        ],
        order: 28,
      },
    ],
  },
];

export function getAllAxes(): VirtueAxis[] {
  return VIRTUES.flatMap((v) => v.axes).sort((a, b) => a.order - b.order);
}

export function getAxisById(id: string): VirtueAxis | undefined {
  return getAllAxes().find((a) => a.id === id);
}

export function getPrincipalVirtue(id: string): PrincipalVirtue | undefined {
  return VIRTUES.find((v) => v.axes.some((a) => a.id === id));
}

export function getAxesByPrincipal(principalId: string): VirtueAxis[] {
  const pv = VIRTUES.find((v) => v.id === principalId);
  return pv ? pv.axes : [];
}
