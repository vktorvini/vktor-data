import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Dashboards, automação e análise de dados para empresas. Visualização de indicadores, redução de tarefas manuais e insights estratégicos em Boituva e região.",
  keywords: [
    "dashboard para empresas",
    "automação de planilhas",
    "análise de dados negócios",
    "analista de dados em Boituva",
  ],
};

const blocks = [
  {
    title: "Controle com dashboards",
    description: "Veja exatamente o que está acontecendo no seu negócio.",
    price: "Investimento: R$ 300 – R$ 800",
  },
  {
    title: "Automação de processos",
    description: "Pare de perder tempo com tarefas manuais.",
    price: "Investimento: R$ 200 – R$ 600",
  },
  {
    title: "Decisão com dados",
    description: "Saiba o que fazer, quando fazer e por quê.",
    price: "Valor sob escopo (projeto)",
  },
] as const;

export default function ServicesPage() {
  const wa = getWhatsAppUrl(
    "Quero contratar serviço de dados (dashboard, automação ou análise).",
  );

  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-border-subtle bg-card/25">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Serviços
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Se você não tem controle dos seus dados, você está perdendo
            dinheiro todos os dias.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-foreground">
            Para pequenas empresas que usam planilhas e não têm clareza dos
            números.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Eu organizo e traduzo seus dados em decisão: o que medir, o que
            cortar e o que priorizar — com foco em lucro, ritmo e previsibilidade.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Quero um plano agressivo para meus dados
            </a>
            <Link
              href="/portfolio"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Ver prova no portfólio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-10">
          {blocks.map((b) => (
            <Card
              key={b.title}
              title={b.title}
              description={b.description}
              footer={
                <p className="text-sm font-semibold tracking-tight text-gold">
                  {b.price}
                </p>
              }
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-gold/30 bg-card/70 p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Manutenção
              </p>
              <p className="mt-3 max-w-xl text-lg font-semibold text-foreground">
                Manutenção: R$ 100 – R$ 300/mês
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Para quem quer evoluir o painel, manter automações vivas e não
                depender de gambiarra quando o negócio cresce.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Quero falar sobre manutenção de dashboards/automações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Fechar manutenção
            </a>
          </div>
        </div>

        <div className="vk-surface mt-20 grid gap-10 rounded-3xl p-10 sm:grid-cols-2 sm:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Tom de entrega
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">
              Quem entende os dados, controla o resultado.
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted">
              Visão de ponta a ponta: do dado que entra ao número que sustenta
              decisão. Não vendo “tela bonita”. Vendo controle, ritmo e resultado
              no caixa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(
                  "Quero alinhar serviço ao meu cenário (planilhas / dashboards / automação).",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="vk-btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contact"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Página de contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
