import type { Metadata } from "next";
import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
      <body className="flex flex-col min-h-screen bg-slate-50 text-gray-900">
        <Header />
        <main className="flex-grow container mx-auto max-w-6xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
