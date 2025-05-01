import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/layout/GoogleTagManager";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luttjohann & Soares Advocacia | Especialistas em Direito Bancário",
  description:
    "O Luttjohann & Soares Advocacia Bancária, conta com Advogados Especialistas em Direito Bancário, com mais de 15 anos de experiência prática no setor financeiro. Nosso escritório atua na defesa de pessoas físicas e jurídicas em questões como renegociação de dívidas, revisão de contratos, defesa contra cobranças abusivas e defesa em ações de cobrança e execução de dívidas bancárias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="icon"
          href="/icons/favicon.svg"
        />

        <GoogleTagManager />
      </head>
      <body className={`${spaceGrotesk.variable}  antialiased`}>
        <GoogleTagManagerNoScript />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
