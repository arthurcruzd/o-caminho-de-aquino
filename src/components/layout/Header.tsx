"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/explorar", label: "Explorar" },
  { href: "/mapa", label: "Mapa" },
  { href: "/sobre", label: "Sobre" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-foreground transition-colors hover:text-accent"
        >
          O Caminho de Aquino
        </Link>
        <ul className="flex gap-6">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  pathname === href
                    ? "text-accent"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
