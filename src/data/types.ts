export type VirtueCategory = "theological" | "cardinal" | "intellectual";

export type PrincipalVirtueName =
  | "fe"
  | "esperanca"
  | "caridade"
  | "prudencia"
  | "justica"
  | "fortaleza"
  | "temperanca"
  | "entendimento"
  | "ciencia"
  | "sabedoria-intelectual"
  | "arte";

export interface Vice {
  name: string;
  latin: string | null;
}

export interface ExtraItem {
  nome: string;
  descricao: string;
}

export interface ExtraSection {
  titulo: string;
  itens: ExtraItem[];
}

export interface VirtueAxis {
  id: string;
  isPrincipal: boolean;
  principalVirtue: PrincipalVirtueName;
  eixo: string;
  logica: string;
  aVirtude: string;
  viceDeficiency: Vice;
  defeitoDescricao: string;
  virtue: { name: string; latin: string };
  viceExcess: Vice;
  excessoDescricao: string;
  observacoes: string;
  privacaoDoBem: string;
  extras?: ExtraSection[];
  domDoEspiritoSanto?: string;
  eixoLabels?: { left: string; right: string };
  relacaoVirtudesMorais?: string;
  reflexoes: string[];
  order: number;
}

export interface PrincipalVirtue {
  id: PrincipalVirtueName;
  name: string;
  latin: string;
  category: VirtueCategory;
  color: string; // HSL hue
  axes: VirtueAxis[];
}
