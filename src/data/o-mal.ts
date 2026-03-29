import { VIRTUE_COLORS } from "@/lib/constants";

// ─── TYPES ───

export interface OMalSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapitalVice {
  vice: string;
  latin: string;
  whatItSeeks: string;
  whatItDistorts: string;
  eixo: string;
  virtueId: string;
  virtue: string;
  virtueLatin: string;
  principalVirtueId: string;
}

export interface Transcendental {
  name: string;
  latin: string;
  beingIs: string;
  sinCauses: string;
  example: string;
}

// ─── SECTIONS ───

export const O_MAL_SECTIONS: OMalSection[] = [
  {
    id: "o-parasita",
    number: 1,
    title: "O Parasita",
    subtitle: "Por que o mal é parasitário",
    paragraphs: [
      "O mal *não é uma coisa*. Não é uma substância, não é uma força oposta a Deus, não é algo que Deus criou.",
      "O mal é *privatio boni* — a privação de um bem que deveria estar presente num sujeito bom. Ele é ausência, não presença. Como a escuridão não é \"produzida\", mas surge quando se remove a luz. Como a cegueira não é uma nova faculdade, mas a falta da visão no olho que foi feito para ver.",
      "Todo mal pressupõe um bem. A injustiça só existe porque existe a vontade — feita para a justiça. A luxúria só existe porque existe o prazer sexual — que é bom em si. O ceticismo e o dogmatismo só existem porque existe a capacidade natural de captar a verdade.",
      "Tomás diz que o mal *não tem causa eficiente per se* — apenas causa deficiente. O mal acontece quando alguém *falha* em realizar o bem — como o carpinteiro que faz a mesa torta não porque quis produzir tortuosidade, mas porque falhou em aplicar a régua.",
      "A consequência é radical: *o bem é ontologicamente primeiro*. O mal pressupõe o bem; o bem não pressupõe o mal. Pode existir um mundo sem mal; não pode existir um mundo feito *de* mal, porque o mal não tem substância com a qual construir nada.",
    ],
  },
  {
    id: "as-tres-faces",
    number: 2,
    title: "As Três Faces",
    subtitle: "Os três tipos de mal",
    paragraphs: [
      "Tomás distingue claramente três tipos de mal — e a distinção importa, porque muda o que se pode fazer diante de cada um.",
    ],
  },
  {
    id: "a-anatomia-do-pecado",
    number: 3,
    title: "A Anatomia do Pecado",
    subtitle: "Como o pecado funciona",
    paragraphs: [
      "Todo pecado tem dois movimentos simultâneos:",
      "*Aversio a Deo* — virar as costas a Deus, ao Bem supremo.",
      "*Conversio ad creaturam* — virar-se para uma criatura, tratando um bem finito como se fosse supremo.",
      "O pecador *nunca busca o mal enquanto mal*. O que acontece é mais sutil: a pessoa busca um *bem real — mas desordenado*. O adúltero busca prazer — bem real — mas fora da ordem conjugal. O avarento busca segurança — bem real — mas idolatra o meio. O soberbo busca excelência — bem real — mas a reivindica para si em vez de reconhecê-la como dom.",
      "*O mal é, em última análise, a escolha de bens menores ao invés de bens maiores.* O prazer em vez do amor. A segurança em vez da generosidade. O aplauso em vez da verdade. O conforto em vez da virtude. Cada pecado é uma troca — e toda troca é para baixo.",
      "Agostinho sintetiza: *uti fruendis, frui utendis* — usar o que deveria ser fruído e fruir o que deveria ser usado. Tratar Deus (bem supremo) como meio e as criaturas (bens instrumentais) como fim. A inversão da hierarquia do ser.",
    ],
  },
  {
    id: "as-sete-raizes",
    number: 4,
    title: "As Sete Raízes",
    subtitle: "Os vícios capitais",
    paragraphs: [
      "Não são os piores pecados — são os mais *generativos*. Tomás os chama de \"capitais\" do latim *caput* (cabeça): são as cabeças de exércitos de vícios derivados.",
      "*Soberba* está à parte: é a raiz de todas as raízes. O primeiro movimento de todo desordenamento moral é o apetite desordenado da própria excelência — reivindicar para si o que pertence a Deus.",
      "Cada vício capital busca um bem real e o distorce — e cada um tem, neste mapa, uma virtude que governa o mesmo eixo:",
    ],
  },
  {
    id: "o-mal-e-os-transcendentais",
    number: 5,
    title: "O Mal e os Transcendentais",
    subtitle: "Falso, mau, fragmentado e feio",
    paragraphs: [
      "Se o Ser é convertível com o Bem — *Ens et Bonum convertuntur* — então o mal é também um movimento em direção à *diminuição do ser*. Não ao nada absoluto, mas à perda de plenitude.",
      "E como os transcendentais são convertíveis entre si, todo pecado é simultaneamente falso, mau, fragmentador e feio:",
    ],
  },
  {
    id: "por-que-o-mal-confirma-o-bem",
    number: 6,
    title: "Por Que o Mal Confirma o Bem",
    subtitle: "A grande ironia",
    paragraphs: [
      "Aqui está a grande ironia: cada vício, ao tentar diminuir o bem, acaba *testemunhando* — contra a própria vontade — a grandeza do bem que está corrompendo.",
      "A coluna \"A privação do Bem\" nos eixos deste mapa repete a mesma história: os dois vícios dependem da mesma matéria que a virtude. A covardia e a temeridade dependem do mesmo perigo. A avareza e a prodigalidade dependem dos mesmos bens. A passividade e a ira desordenada dependem da mesma capacidade de indignar-se.",
      "O padrão é sempre o mesmo, repetido de ângulos diferentes: *o vício não cria uma relação nova com o real; distorce a única relação verdadeira.*",
      "Ou, na frase que o sistema inteiro grita:",
      "*Cada vício é uma virtude que perdeu sua direção.*",
      "O fio é o mesmo; o que difere é se está no lugar certo no tecido.",
    ],
  },
  {
    id: "a-esperanca",
    number: 7,
    title: "A Esperança",
    subtitle: "Dentro da doutrina do mal",
    paragraphs: [
      "Se o mal não tem substância — se é privação, sombra, ausência — então *o mal não tem a última palavra*. Nunca pode ter. Porque não tem *nada* com que falar.",
      "É por isso que o desespero é, para Tomás, um dos pecados mais graves: porque é agir como se o mal tivesse substância suficiente para vencer o Bem. O desesperado atribui ao mal um ser que ele não tem.",
      "A Esperança é a resposta existencial à metafísica do mal: se o Bem é primeiro e o mal é parasita, então a confiança no Bem é *metafisicamente fundamentada*. Não é otimismo ingênuo — é realismo ontológico.",
      "Não lutamos contra uma \"força das trevas\" criativa. Lutamos para *restaurar o bem* que foi privado. A santidade não é fuga do mal — é deixar que a graça preencha novamente o que o vício esvaziou.",
      "O mal não tem a última palavra. Mas exige de nós a primeira: *escolher o bem*.",
    ],
  },
];

// ─── THREE TYPES OF EVIL ───

export const THREE_TYPES_OF_EVIL = [
  {
    name: "Mal da Natureza",
    latin: "Malum Naturae",
    description:
      "Sofrimento, doença, morte, catástrofe. Não é pecado. É consequência da finitude da criação. O terremoto não peca; o corpo que envelhece não peca.",
    virtueResponse: "A Fortaleza e a Paciência existem precisamente para este tipo de mal.",
    linkedAxes: ["fortaleza", "paciencia"],
  },
  {
    name: "Mal da Culpa",
    latin: "Malum Culpae",
    description:
      "O pecado. O único mal no sentido pleno, porque é o único que a *vontade* causa livremente. O terremoto destrói o corpo; o pecado destrói a relação entre a pessoa e o Bem.",
    virtueResponse: "Por isso Tomás diz que é pior pecar do que sofrer.",
    linkedAxes: [],
  },
  {
    name: "Mal da Pena",
    latin: "Malum Poenae",
    description:
      "O sofrimento como consequência do pecado. Pode ser justo — a pena que restaura a ordem — e medicinal — o sofrimento que conduz ao arrependimento.",
    virtueResponse: "A Clemência governa sua aplicação; a Justiça determina sua proporção.",
    linkedAxes: ["clemencia", "justica"],
  },
];

// ─── CAPITAL VICES ───

export const CAPITAL_VICES: CapitalVice[] = [
  {
    vice: "Soberba",
    latin: "Superbia",
    whatItSeeks: "Excelência",
    whatItDistorts: "Reivindica para si o que é dom",
    eixo: "Autoestima",
    virtueId: "humildade",
    virtue: "Humildade",
    virtueLatin: "Humilitas",
    principalVirtueId: "temperanca",
  },
  {
    vice: "Avareza",
    latin: "Avaritia",
    whatItSeeks: "Segurança, provisão",
    whatItDistorts: "Acumula além do devido",
    eixo: "Bens materiais",
    virtueId: "generosidade",
    virtue: "Generosidade",
    virtueLatin: "Liberalitas",
    principalVirtueId: "justica",
  },
  {
    vice: "Luxúria",
    latin: "Luxuria",
    whatItSeeks: "Prazer, intimidade",
    whatItDistorts: "Absolutiza o prazer",
    eixo: "Sexualidade",
    virtueId: "castidade",
    virtue: "Castidade",
    virtueLatin: "Castitas",
    principalVirtueId: "temperanca",
  },
  {
    vice: "Ira",
    latin: "Ira",
    whatItSeeks: "Justiça, reparação",
    whatItDistorts: "Excede a proporção",
    eixo: "Ira",
    virtueId: "mansidao",
    virtue: "Mansidão",
    virtueLatin: "Mansuetudo",
    principalVirtueId: "temperanca",
  },
  {
    vice: "Gula",
    latin: "Gula",
    whatItSeeks: "Subsistência, prazer",
    whatItDistorts: "Fixa-se no prazer",
    eixo: "Alimento",
    virtueId: "abstinencia",
    virtue: "Abstinência",
    virtueLatin: "Abstinentia",
    principalVirtueId: "temperanca",
  },
  {
    vice: "Inveja",
    latin: "Invidia",
    whatItSeeks: "Reconhecimento",
    whatItDistorts: "Entristece-se com o bem alheio",
    eixo: "Amor",
    virtueId: "caridade",
    virtue: "Caridade",
    virtueLatin: "Caritas",
    principalVirtueId: "caridade",
  },
  {
    vice: "Acédia",
    latin: "Acedia",
    whatItSeeks: "Descanso, conforto",
    whatItDistorts: "Recusa o esforço que o amor exige",
    eixo: "Amor",
    virtueId: "caridade",
    virtue: "Caridade",
    virtueLatin: "Caritas",
    principalVirtueId: "caridade",
  },
];

// ─── TRANSCENDENTALS ───

export const TRANSCENDENTALS: Transcendental[] = [
  {
    name: "Verdade",
    latin: "Verum",
    beingIs: "Inteligível",
    sinCauses: "Falsificação",
    example: "A jactância falsifica o eu; a astúcia falsifica os meios",
  },
  {
    name: "Bem",
    latin: "Bonum",
    beingIs: "Apetecível",
    sinCauses: "Desordem",
    example: "A injustiça retém o bem devido; a avareza acumula",
  },
  {
    name: "Unidade",
    latin: "Unum",
    beingIs: "Indiviso",
    sinCauses: "Fragmentação",
    example: "O intemperante está em guerra consigo mesmo",
  },
  {
    name: "Beleza",
    latin: "Pulchrum",
    beingIs: "Resplandecente",
    sinCauses: "Desfiguração",
    example: "O vício desfigura a imagem de Deus na pessoa",
  },
];

// ─── REFLECTION QUESTIONS ───

export const O_MAL_REFLECTIONS = [
  "Em cada eixo do mapa, onde estou? — quanto da plenitude que me foi dada estou realizando, e quanto estou desperdiçando?",
  "Que bens reais eu estou buscando de forma desordenada — tratando meios como fins, ou fins como meios?",
  "A minha relação com o mal é de desespero (atribuir ao mal mais ser do que ele tem) ou de negligência (fingir que não existe)?",
];

// ─── HELPER: get hue for a principal virtue ───

export function getVirtueHue(principalVirtueId: string): string {
  return VIRTUE_COLORS[principalVirtueId]?.hue ?? "220";
}
