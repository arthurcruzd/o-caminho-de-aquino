import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "O Caminho de Aquino — Cartografia das Virtudes",
  description:
    "Um mapa interativo das virtudes e vícios segundo São Tomás de Aquino. A gramática da ação humana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${garamond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
