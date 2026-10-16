"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Serviços" },
  { href: "/portfolio", label: "Projetos" },
  { href: "/about", label: "Sobre" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`relative rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
        active
          ? "bg-white/[0.06] text-gold"
          : "text-muted hover:bg-white/[0.04] hover:text-gold"
      }`}
    >
      {label}
      {active ? (
        <span
          className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-gold"
        >
          Vktor<span className="text-gold transition-colors group-hover:text-gold-light">.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex md:gap-1">
          <nav className="flex items-center gap-1 pr-2" aria-label="Principal">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <Link
            href="/contact"
            className="vk-btn-primary ml-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Contato
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="vk-btn-primary rounded-full px-4 py-2 text-xs font-semibold"
          >
            Contato
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-card)] bg-card/60 text-foreground transition-all duration-200 hover:border-gold/40 hover:text-gold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border-subtle bg-background/95 backdrop-blur-lg md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-0.5 px-5 py-4 sm:px-8"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
