import React from "react";

/**
 * Renders a plain string with *italic* markers (markdown-style)
 * into React elements with <em> tags for the italic portions.
 * Used to italicize Latin terms embedded in Portuguese text.
 */
export function renderText(text: string): React.ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}
