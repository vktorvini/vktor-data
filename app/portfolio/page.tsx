import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases em negócio: clareza de demanda, controle de vendas e rotinas que liberam tempo — com foco em decisão e resultado.",
  keywords: [
    "dashboard para empresas",
    "análise de dados negócios",
    "automação de planilhas",
    "analista de dados em Boituva",
  ],
};

const projects: Project[] = [
  {
    title: "Turismo (balonismo)",
    problem:
      "Falta de organização dos dados de procura, sazonalidade e fatores externos — decisões no ‘feeling’ e perda de oportunidade em dia bom.",
    solution:
      "Leitura estruturada da demanda, da sazonalidade e do que puxa ou segura venda, para o time comercial enxergar o mesmo cenário.",
    impact:
      "Melhora na tomada de decisão: onde reforçar oferta, quando se proteger de vazio e como alinhar preço e capacidade ao mercado.",
    image: "/projects/turismo.png",
  },
  {
    title: "Dashboard de vendas",
    problem:
      "Falta de organização dos números de faturamento, produto e performance — cada um com uma planilha e uma versão da ‘verdade’.",
    solution:
      "Criação de dashboards e estrutura de dados para um painel único: faturamento, mix de produtos e performance no mesmo ritmo.",
    impact:
      "Melhora na tomada de decisão: priorização com clareza, menos discussão sobre dado e mais ação sobre o que vende e o que pesa.",
    image: "/projects/dashboard-vendas.png",
  },
  {
    title: "Automação de relatórios",
    problem:
      "Horas perdidas montando o mesmo relatório, risco de erro na consolidação e atraso para quem precisa decidir.",
    solution:
      "Rotina automática de geração e distribuição de relatórios, com padrão único e revisão no que importa para o negócio.",
    impact:
      "Tempo devolvido ao time, menos erro operacional e informação chegando no momento em que ainda dá para agir.",
    image: "/projects/automacao.png",
  },
];

export default function PortfolioPage() {
  const wa = getWhatsAppUrl(
    "Quero um projeto no nível do seu portfólio (dados/dashboard/automação).",
  );

  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-border-subtle bg-card/25">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Portfólio
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Projetos que mostram método, não teoria.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Aqui o foco é problema, decisão e resultado — não ferramenta da
            moda. Você vê como a clareza vira controle e dinheiro deixado na
            mesa.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Quero um projeto no mesmo padrão
            </a>
            <Link
              href="/services"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Ver serviços e valores
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:gap-10">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              whatsappMessage={`Quero algo como o case: ${p.title}`}
            />
          ))}
        </div>

        <div className="vk-surface mt-20 rounded-3xl p-10 sm:p-12">
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Se você não tem controle dos seus dados, você está perdendo dinheiro
            todos os dias. O próximo passo é uma conversa objetiva: problema,
            cenário e o que precisa mudar primeiro.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href={getWhatsAppUrl(
                "Quero conversar sobre meu cenário e prioridades.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="vk-btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Chamar no WhatsApp
            </a>
            <Link
              href="/contact"
              className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Ir para contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
