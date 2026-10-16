import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Home — Portfolio & Lead Engine",
  description:
    "Seus dados estão te fazendo perder dinheiro todos os dias — e você não tem controle disso. Organização e decisões claras para lucro, menos erro e controle real do negócio.",
};

const executingProjects: Project[] = [
  {
    title: "Clareza de demanda e calendário comercial",
    problem:
      "Picos e vazios invisíveis na planilha: o time reage tarde e deixa dinheiro na mesa em dia bom.",
    solution:
      "Organização da leitura de demanda e dos gatilhos que movem reserva e ocupação — uma narrativa única para comercial e operação.",
    impact:
      "Decisão mais rápida sobre preço, capacidade e campanha; menos improviso e mais previsibilidade de caixa.",
  },
  {
    title: "Um único painel para faturamento e performance",
    problem:
      "Cada gestor com sua planilha: ninguém discute o mesmo faturamento, produto ou performance na mesma hora.",
    solution:
      "Estrutura de indicadores e painel executivo alinhado ao que importa para margem, estoque e canal.",
    impact:
      "Reuniões mais curtas, priorização com número e correção de rota antes do problema virar buraco no caixa.",
  },
];

export default function HomePage() {
  const waHero = getWhatsAppUrl("Quero mais controle no meu negócio.");
  const waContact = getWhatsAppUrl(
    "Quero falar sobre dados, dashboards ou automação.",
  );
  const waDiagnostico = getWhatsAppUrl(
    "Quero o diagnóstico rápido do meu negócio no WhatsApp.",
  );

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        id="topo"
        className="relative overflow-hidden border-b border-border-subtle"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(212,175,55,0.16),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:px-10 lg:py-44">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border-card)] bg-card/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-colors duration-300 hover:border-gold/25">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            Vktor Data — Portfolio &amp; Lead Engine
          </div>
          <h1 className="mt-12 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Seus dados estão te fazendo perder dinheiro todos os dias — e você
            não tem controle disso.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Eu organizo e transformo seus dados em decisões claras para aumentar
            lucro, reduzir erros e dar controle real ao seu negócio.
          </p>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-center text-sm font-semibold"
            >
              Quero mais controle no meu negócio
            </a>
            <Link
              href="/services"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Ver como eu trabalho
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            <span>✔ Projetos reais em desenvolvimento</span>
            <span>✔ Experiência com dados e sistemas</span>
            <span>✔ Foco em resultado, não estética</span>
          </div>
          <div className="mt-4 text-sm text-muted">
            +3 projetos em desenvolvimento • Experiência com dados e sistemas •
            Foco em resultado real
          </div>
        </div>
      </section>

      {/* Projetos em execução */}
      <section className="border-b border-border-subtle bg-card/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Projetos em execução
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Não é teoria — é aplicação real.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Estou desenvolvendo soluções reais com dados, automação e análise
              estratégica. Cada projeto resolve um problema prático e gera
              impacto direto.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Atendendo empresas de Boituva e região que querem crescer com dados.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {executingProjects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                whatsappMessage={`Quero conversar sobre o case em execução: ${p.title}`}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/portfolio"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Ver portfólio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Dor */}
      <section
        id="dor"
        className="border-b border-border-subtle bg-card/15 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                A dor
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Dados sem organização geram decisões erradas.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Seu problema não é falta de dados, é falta de clareza. Quem
                entende os dados, controla o resultado.
              </p>
            </div>
            <ul className="lg:col-span-7 lg:pt-2">
              {[
                "Falta de clareza nos números",
                "Decisão baseada em achismo",
                "Planilhas confusas",
                "Tempo perdido com tarefas manuais",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex gap-6 border-b border-border-subtle py-8 transition-colors first:pt-0 hover:border-gold/20"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_14px_rgba(212,175,55,0.5)] transition-all duration-300 group-hover:bg-gold-light group-hover:shadow-[0_0_18px_rgba(212,175,55,0.65)]"
                    aria-hidden
                  />
                  <span className="text-lg font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-gold sm:text-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="vk-surface relative overflow-hidden rounded-3xl p-10 sm:p-14 lg:p-16">
            <div
              className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              A solução
            </p>
            <blockquote className="relative mt-6 max-w-4xl font-display text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Eu organizo, analiso e transformo seus dados em uma ferramenta de
              decisão.
            </blockquote>
            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={waContact}
                target="_blank"
                rel="noopener noreferrer"
                className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contact"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Quero parar de perder dinheiro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Copy de conversão (briefing §11) */}
      <section
        aria-label="Mensagens de conversão"
        className="border-b border-border-subtle py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 sm:gap-8 sm:px-8 lg:px-10">
          <figure className="vk-quote-card rounded-2xl p-8 sm:p-9">
            <blockquote className="text-base font-semibold leading-relaxed text-foreground">
              Dados sem organização geram decisões erradas.
            </blockquote>
          </figure>
          <figure className="vk-quote-card rounded-2xl p-8 sm:p-9">
            <blockquote className="text-base font-semibold leading-relaxed text-foreground">
              Seu problema não é falta de dados, é falta de clareza.
            </blockquote>
          </figure>
          <figure className="vk-quote-card rounded-2xl p-8 sm:p-9">
            <blockquote className="text-base font-semibold leading-relaxed text-foreground">
              Quem entende os dados, controla o resultado.
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Serviços resumo */}
      <section
        id="servicos"
        className="border-y border-border-subtle bg-card/20 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Serviços em resumo
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Três frentes para dominar o jogo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Dashboards, automação e análise — cada uma atacando um ponto
              crítico da sua operação. O objetivo não é “bonito”. É controle,
              velocidade e lucro.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
            <Card
              title="Dashboards"
              description="Visualização clara de indicadores. Controle de vendas e desempenho sem ruído."
            />
            <Card
              title="Automação"
              description="Redução de tarefas manuais. Processos mais rápidos e menos erro humano."
            />
            <Card
              title="Análise de dados"
              description="Insights estratégicos. Apoio à decisão com rigor, sem achismo."
            />
          </div>
          <div className="mt-14 flex flex-wrap gap-4 sm:gap-5">
            <a
              href={getWhatsAppUrl(
                "Quero entender serviços, escopo e faixa de investimento.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Falar no WhatsApp sobre serviços
            </a>
            <Link
              href="/portfolio"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Ver projetos reais
            </Link>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Diferencial
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Visão completa do problema.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Experiência de ponta a ponta — do dado que entra à decisão no dia a
              dia do negócio.
            </p>
          </div>
          <div className="vk-surface rounded-3xl p-10 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Posicionamento
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Victor Vinicius — Analista de Dados | Gestão | Negócios
              Inteligentes.
            </p>
            <p className="mt-6 text-lg font-medium leading-relaxed text-foreground">
              Proposta de valor: transformar dados em decisões estratégicas que
              aumentam lucro, reduzem erros e melhoram a eficiência operacional.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
            >
              Conhecer minha trajetória
            </Link>
          </div>
        </div>
      </section>

      {/* Futuro + Objetivo */}
      <section
        id="futuro"
        className="border-t border-border-subtle bg-card/25 py-28 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Futuro
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                O que vem na máquina.
              </h2>
              <ul className="mt-8 space-y-4 text-base text-muted">
                <li className="flex gap-3">
                  <span className="text-gold" aria-hidden>
                    —
                  </span>
                  Integração contínua com as fontes que importam para o negócio
                </li>
                <li className="flex gap-3">
                  <span className="text-gold" aria-hidden>
                    —
                  </span>
                  Priorização e cenários com modelo — quando fizer sentido
                </li>
                <li className="flex gap-3">
                  <span className="text-gold" aria-hidden>
                    —
                  </span>
                  Entrega acoplada aos seus processos e rotinas de decisão
                </li>
                <li className="flex gap-3">
                  <span className="text-gold" aria-hidden>
                    —
                  </span>
                  Base para escalar atendimento sem perder padrão de qualidade
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-3xl border border-gold/30 bg-background/80 p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Objetivo final
              </p>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                Transformar o site em máquina de geração de leads, portfólio
                profissional e fonte de renda.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Objetivo do projeto: conversão de visitantes em leads, venda de
                serviços de dados e posicionamento premium (gestor + analista +
                visão de negócios).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnóstico rápido */}
      <section
        aria-label="Diagnóstico rápido"
        className="border-t border-border-subtle py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="vk-surface max-w-3xl rounded-2xl p-10 sm:p-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Diagnóstico rápido do seu negócio
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Me chama no WhatsApp e eu te mostro onde você pode estar perdendo
              dinheiro com base no seu cenário atual.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
              <a
                href={waDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                WhatsApp — diagnóstico
              </a>
              <Link
                href="/contact"
                className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Página de contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="pb-28 pt-28 sm:pb-36 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="vk-surface relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/95 via-card/90 to-background px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div
              className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contato
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Fale comigo e descubra como seus dados podem melhorar seus
                resultados.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Este não é um site decorativo. É um ativo de geração de
                dinheiro. Se você quer controle, clareza e resultado, o próximo
                passo é simples.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={getWhatsAppUrl(
                    "Quero falar com você sobre dados e resultados.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vk-btn-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold"
                >
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold"
                >
                  Página de contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
