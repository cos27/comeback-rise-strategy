import { Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, NAV_LINKS } from "@/lib/cos";
import logo from "@/assets/cos-logo.jpg.asset.json";

const footerLinks = [
  { label: "About COS", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "COS Returnship Program\u2122", href: "#program" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Call", href: "/book-a-call" },
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
          <div className="mt-6">
            <Button asChild variant="hero" size="lg">
              <Link to="/book-a-call">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((link) =>
              link.href.startsWith("/") ? (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground">
        &copy; 2026 Comeback Operating System&trade;. All rights reserved.
      </div>
    </footer>
  );
}
