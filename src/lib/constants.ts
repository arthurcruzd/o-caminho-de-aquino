export const VIRTUE_COLORS: Record<string, { hue: string; label: string }> = {
  fe: { hue: "45", label: "Ouro" },
  esperanca: { hue: "155", label: "Esmeralda" },
  caridade: { hue: "0", label: "Carmesim" },
  prudencia: { hue: "210", label: "Azul-prata" },
  justica: { hue: "270", label: "Roxo" },
  fortaleza: { hue: "30", label: "Bronze" },
  temperanca: { hue: "180", label: "Turquesa" },
  entendimento: { hue: "90", label: "Verde-limão" },
  ciencia: { hue: "160", label: "Verde-azulado" },
  "sabedoria-intelectual": { hue: "50", label: "Âmbar" },
  arte: { hue: "330", label: "Magenta" },
};

export const CATEGORY_LABELS = {
  theological: "Virtudes Teologais",
  cardinal: "Virtudes Cardeais",
  intellectual: "Virtudes Intelectuais",
} as const;
