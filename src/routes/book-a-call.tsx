import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";

const CALENDLY_URL =
  "https://calendly.com/aanchal-comebackoperatingsystem/30min?hide_gdpr_banner=1";
const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

const TITLE = "Book Your Free Strategy Call | Comeback Operating System™";
const DESCRIPTION =
  "Schedule a free 30-minute career comeback strategy call with Aanchal Soni and the COS team.";

export const Route = createFileRoute("/book-a-call")({
  component: BookACallPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book-a-call" }],
  }),
});

function BookACallPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined" || !widgetRef.current) return;

    const existing = document.querySelector(`script[src="${WIDGET_SCRIPT}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <p className="eyebrow">Free 30-Minute Call</p>
            <h1 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
              Book Your Free Strategy Call
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Select a convenient date and time below to discuss your career comeback strategy.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div
              ref={widgetRef}
              className="calendly-inline-widget w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]"
              data-url={CALENDLY_URL}
              style={{ minWidth: 320, height: 700 }}
            />
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outlinePlum" size="xl">
              <Link to="/">
                <ArrowLeft aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
