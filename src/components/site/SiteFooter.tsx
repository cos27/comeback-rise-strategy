import { Linkedin } from "lucide-react";

import { LINKEDIN_URL } from "@/lib/cos";
import logo from "@/assets/cos-logo.jpg.asset.json";

const links = [
  { label: "About COS", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "COS Returnship Program\u2122", href: "#program" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Comeback Operating System (COS) logo"
              className="h-12 w-12 rounded-full object-cover object-top"
              width={48}
              height={48}
              loading="lazy"
            />
            <p className="font-display text-xl font-semibold text-primary">
              Comeback Operating System&trade; (COS)
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Empowering Women to Restart, Rebuild &amp; Rise.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground">
        &copy; 2026 Comeback Operating System&trade;. All rights reserved.
      </div>
    </footer>
  );
}
