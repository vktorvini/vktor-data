import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Victor Vinicius — analista de dados com foco em gestão e negócios inteligentes.",
};

export default function AboutPage() {
  const wa = getWhatsAppUrl(
    "Quero conversar sobre dados, dashboards e automação.",
  );

  return (
    <div className="flex flex-1 flex-col">
      {/* HEADER */}
      <section className="border-b border-border-subtle bg-card/25">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Sobre
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Victor Vinicius — Analista de Dados | Gestão | Negócios Inteligentes
          </h1>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">

          {/* ESQUERDA */}
          <div className="lg:col-span-7">

            <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
              Sou analista de dados com foco em transformar informação em decisão estratégica.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-muted">
              Atuo organizando dados, criando dashboards e automatizando processos
              para dar clareza, controle e eficiência ao negócio.
            </p>

            <p className="mt-8 text-lg font-medium leading-relaxed text-foreground">
              Meu objetivo é simples: aumentar lucro, reduzir erro e melhorar a
              tomada de decisão.
            </p>

            {/* STACK */}
            <section className="mt-16">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gold">
                Como eu trabalho
              </h2>

              <p className="mt-4 text-sm text-muted">
                Uso ferramentas e métodos de dados para estruturar informação e apoiar decisões com clareza.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {["Python", "SQL", "Power BI", "Pandas", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-subtle px-4 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* EXPERIÊNCIA */}
            <section className="mt-16">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gold">
                Experiência
              </h2>

              <div className="mt-6 space-y-6 text-sm text-muted">
                <div>
                  <p className="text-foreground font-medium">
                    Auxiliar de TI — Faculdade de Boituva (FIB)
                  </p>
                  <p>
                    Suporte técnico, infraestrutura e resolução de problemas em ambiente educacional.
                  </p>
                </div>

                <div>
                  <p className="text-foreground font-medium">
                    Instituto Educare Veritas
                  </p>
                  <p>
                    Atuação com tecnologia e suporte, apoiando operação e organização de processos.
                  </p>
                </div>

                <div>
                  <p className="text-foreground font-medium">
                    Projetos independentes em dados
                  </p>
                  <p>
                    Desenvolvimento de dashboards, automações e análises para melhorar decisões e eficiência.
                  </p>
                </div>
              </div>
            </section>

            {/* CERTIFICADOS */}
            <section className="mt-16">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gold">
                Formação e Certificados
              </h2>

              <div className="mt-6 space-y-4 text-sm text-muted">
                <p>• Bacharelado em Ciência de Dados — UNIVESP </p>
                <p>• Bacharelado em Tecnologia da Informação — UNIVESP</p>
                <p>• Tecnólogo em Gestão de TI — FATEC</p>
                <p>• MBA em Business Intelligence  </p>
                <p>• Pós-graduação em Análise de Dados  </p>
                
              </div>
            </section>

          </div>

          {/* DIREITA */}
          <aside className="lg:col-span-5">
            <div className="vk-surface sticky top-28 rounded-3xl p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Próximo passo
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted">
                Se você quer usar dados para crescer com controle e previsibilidade,
                o próximo passo é uma conversa objetiva.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vk-btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
                >
                  Falar no WhatsApp
                </a>

                <Link
                  href="/services"
                  className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Ver serviços
                </Link>

                <Link
                  href="/portfolio"
                  className="vk-btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Ver projetos
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}