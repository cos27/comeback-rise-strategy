import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/cos";
import logo from "@/assets/cos-logo.jpg.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <a href="#home" className="flex items-center gap-3" aria-label="Comeback Operating System home">
          <img
            src={logo.url}
            alt="Comeback Operating System (COS) logo"
            className="h-11 w-11 rounded-full object-cover object-top lg:h-12 lg:w-12"
            width={48}
            height={48}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-semibold text-primary">
              Comeback Operating System&trade;
            </span>
            <span className="block text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
              Restart. Rebuild. Rise.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="lg" className="hidden rounded-full sm:inline-flex">
            <Link to="/book-a-call">Book a Free Discovery Call</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <Button asChild variant="hero" size="xl" className="mt-3 w-full">
            <Link to="/book-a-call" onClick={() => setOpen(false)}>
              Book a Free Discovery Call
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
