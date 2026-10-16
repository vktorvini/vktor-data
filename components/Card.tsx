import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  footer?: ReactNode;
};

export function Card({
  title,
  description,
  icon,
  className = "",
  footer,
}: CardProps) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-card)] bg-card/90 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.1),0_20px_48px_-28px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gold/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col gap-5">
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-background/40 text-gold transition-colors duration-300 group-hover:border-gold/40 group-hover:text-gold-light">
            {icon}
          </div>
        ) : null}
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        {footer ? (
          <div className="mt-auto border-t border-border-subtle pt-5">
            {footer}
          </div>
        ) : null}
      </div>
    </article>
  );
}
