import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Plataforma Seaneamento",
  description:
    "protótipo do projeto de extensão que vou desenvolver para o terceiro semestre da minha faculdade de ADS. Uma plataforma educativa sobre saneamento básico e uso consciente da água.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
