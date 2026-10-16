import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  image?: string;
  tech?: string[];
};

type ProjectCardProps = {
  project: Project;
  whatsappMessage?: string;
};

export function ProjectCard({
  project,
  whatsappMessage = "Quero algo assim para meu negócio.",
}: ProjectCardProps) {
  const waHref = getWhatsAppUrl(whatsappMessage);

  return (
    <article className="vk-surface flex h-full flex-col rounded-2xl p-8 sm:p-9">
      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {project.title}
      </h3>
      {project.image ? (
        <div className="mt-5 overflow-hidden rounded-xl border border-border-subtle">
          <Image
            src={project.image}
            alt={`Projeto ${project.title}`}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : null}

      <dl className="mt-6 flex flex-1 flex-col gap-5 text-sm leading-relaxed">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Problema
          </dt>
          <dd className="mt-2 text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Solução
          </dt>
          <dd className="mt-2 text-muted">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Impacto
          </dt>
          <dd className="mt-2 text-foreground">{project.impact}</dd>
        </div>
      </dl>

      {project.tech && project.tech.length > 0 ? (
        <p className="mt-5 text-xs leading-relaxed text-muted">
          <span className="font-medium text-foreground/80">Escopo: </span>
          {project.tech.join(" · ")}
        </p>
      ) : null}

      <div className="mt-8 pt-2">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="vk-btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto"
        >
          Quero algo assim para meu negócio
        </a>
      </div>
    </article>
  );
}
