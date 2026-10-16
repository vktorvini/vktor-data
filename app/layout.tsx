import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Vktor Data — Portfolio & Lead Engine | Analista de Dados em Boituva",
    template: "%s | Vktor Data",
  },
  description:
    "Transformo dados em decisões estratégicas para empresas que querem crescer com controle e inteligência. Dashboards, automação e análise de dados para negócios.",
  keywords: [
    "analista de dados em Boituva",
    "dashboard para empresas",
    "automação de planilhas",
    "análise de dados negócios",
    "Vktor Data",
    "Victor Vinicius",
  ],
  openGraph: {
    title: "Vktor Data — Portfolio & Lead Engine",
    description:
      "Transformo dados em decisões estratégicas que aumentam lucro, reduzem erros e melhoram a eficiência operacional.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="site-content flex min-h-full flex-1 flex-col">
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
