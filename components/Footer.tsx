import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Serviços" },
  { href: "/portfolio", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-card/35">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-5">
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              Vktor<span className="text-gold">.</span>
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Victor Vinicius — Analista de Dados | Gestão | Negócios
              Inteligentes. Transformo dados em decisões estratégicas que
              aumentam lucro, reduzem erros e melhoram a eficiência operacional.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Não é um site. É um ativo de geração de dinheiro.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Navegação
              </p>
              <ul className="mt-5 space-y-3">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Stack
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Recharts</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border-subtle pt-12 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vktor Data. Todos os direitos reservados.</p>
          <p className="max-w-xl leading-relaxed sm:text-right">
            Boituva · analista de dados · dashboards · automação de planilhas ·
            análise para negócios
          </p>
        </div>
      </div>
    </footer>
  );
}
