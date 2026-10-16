import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale comigo e descubra como seus dados podem melhorar seus resultados. WhatsApp, conversa direta e próximo passo com foco em lead e conversão.",
  keywords: [
    "analista de dados em Boituva",
    "dashboard para empresas",
    "automação de planilhas",
  ],
};

export default function ContactPage() {
  const wa = getWhatsAppUrl(
    "Quero descobrir como meus dados podem melhorar meus resultados.",
  );

  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-border-subtle bg-card/25">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contato
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Fale comigo e descubra como seus dados podem melhorar seus
            resultados.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Transformo dados em decisões estratégicas para empresas que querem
            crescer com controle e inteligência. Eu organizo, analiso e
            transformo seus dados em uma ferramenta de decisão.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="vk-surface rounded-3xl p-10 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              CTA principal
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary mt-8 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-sm font-semibold sm:w-auto"
            >
              WhatsApp
            </a>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Seus dados estão te fazendo perder dinheiro — e você nem percebe.
              Seu problema não é falta de dados, é falta de clareza.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-gold/25 bg-background/90 p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Regra de ouro
            </p>
            <p className="mt-5 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              Não é um site.
            </p>
            <p className="mt-3 text-2xl font-semibold leading-snug text-gold sm:text-3xl">
              É um ativo de geração de dinheiro.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Objetivo: conversão de visitantes em leads, venda de serviços de
              dados e posicionamento premium (gestor + analista + visão de
              negócios).
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/services"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Serviços
              </Link>
              <Link
                href="/portfolio"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Projetos
              </Link>
              <Link
                href="/about"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
