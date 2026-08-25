import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Compass,
  FileText,
  HeartHandshake,
  Linkedin,
  MessageSquare,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import heroImage from "@/assets/aanchal-founder.jpg.asset.json";
import founderImage from "@/assets/aanchal-desk.jpg.asset.json";

const TITLE =
  "Career Comeback for Women After a Career Break | Comeback Operating System\u2122";
const DESCRIPTION =
  "COS helps women restart their careers after a break with career strategy, resume and LinkedIn support, interview preparation and practical AI career guidance.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Comeback Operating System\u2122 (COS)",
          description: DESCRIPTION,
          founder: {
            "@type": "Person",
            name: "Aanchal Soni",
            jobTitle: "Founder | AI Career Comeback Strategist",
          },
        }),
      },
    ],
  }),
});

const questions = [
  "Will employers value my previous experience?",
  "How do I explain my career gap?",
  "Is my resume still relevant?",
  "What should I write on LinkedIn?",
  "How do I prepare for interviews again?",
  "How do I use AI without feeling overwhelmed?",
  "Where do I even begin?",
];

const method = [
  {
    step: "01",
    name: "RESTART",
    text: "Rebuild confidence, professional identity and clarity.",
  },
  {
    step: "02",
    name: "REPOSITION",
    text: "Identify strengths, transferable experience and career direction.",
  },
  {
    step: "03",
    name: "AI-READY",
    text: "Learn practical AI tools and approaches for today\u2019s career landscape.",
  },
  {
    step: "04",
    name: "REBUILD",
    text: "Strengthen resume, LinkedIn and professional positioning.",
  },
  {
    step: "05",
    name: "RISE",
    text: "Prepare for job search, interviews and the next career move.",
  },
];

const services = [
  {
    icon: FileText,
    title: "Resume Writing",
    text: "Craft and reposition your resume after a career break.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    text: "Build a LinkedIn profile that communicates your experience, strengths and career direction.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    text: "Prepare strategically and rebuild confidence for interviews.",
  },
  {
    icon: BrainCircuit,
    title: "AI Career Guidance",
    text: "Learn practical ways to use AI for career planning, job search, resumes, professional branding and productivity.",
  },
  {
    icon: Compass,
    title: "Career Strategy Sessions",
    text: "Get personalized clarity and a practical roadmap for your next career move.",
  },
];

const weeks = [
  {
    week: "Week 1",
    title: "RESTART WITH CONFIDENCE",
    text: "Reconnect with your professional identity, strengths and confidence.",
  },
  {
    week: "Week 2",
    title: "AI FOR CAREER SUCCESS",
    text: "Become more AI-ready and learn practical AI applications for your career.",
  },
  {
    week: "Week 3",
    title: "BUILD YOUR PROFESSIONAL BRAND",
    text: "Strengthen your resume, LinkedIn profile and professional positioning.",
  },
  {
    week: "Week 4",
    title: "LAUNCH YOUR COMEBACK",
    text: "Prepare for job search, interviews and your personalized comeback strategy.",
  },
];

const pillars = [
  {
    icon: HeartHandshake,
    title: "EMPATHY",
    text: "Guidance rooted in understanding, not judgment.",
  },
  { icon: Target, title: "PRACTICALITY", text: "Strategies you can actually implement." },
  {
    icon: Sparkles,
    title: "AI-POWERED",
    text: "Modern AI tools and approaches for today\u2019s workplace.",
  },
  {
    icon: UserRound,
    title: "PERSONALIZED",
    text: "Your comeback should fit your experience, goals and circumstances.",
  },
];

const resourceCategories = [
  "Career Restart",
  "AI for Careers",
  "Resume & LinkedIn",
  "Interview Preparation",
  "Confidence & Career Clarity",
];

const faqs = [
  {
    q: "Who is COS for?",
    a: "COS is designed primarily for women looking to restart or rebuild their careers after a break.",
  },
  {
    q: "Do I need to be currently job searching?",
    a: "No. COS can support women who are exploring their options, preparing to return or actively looking for opportunities.",
  },
  {
    q: "Is COS only about AI?",
    a: "No. AI is one part of the COS approach. The focus is the complete career comeback \u2014 confidence, strategy, professional branding, AI readiness and action.",
  },
  {
    q: "What is the COS Returnship Program\u2122?",
    a: "It is COS\u2019s flagship 4-week career comeback program designed to help women restart their careers with greater clarity, confidence and practical direction.",
  },
  {
    q: "Can I get individual support?",
    a: "Yes. COS offers individual career services and strategy sessions.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="home" className="gradient-soft border-b border-border/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="eyebrow">Restart. Rebuild. Rise.</p>
              <h1 className="mt-5 text-4xl leading-[1.1] font-semibold text-primary sm:text-5xl lg:text-6xl">
                Your Career Break Doesn&rsquo;t Define Your Career. Your Comeback Does.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Comeback Operating System&trade; (COS) combines human career guidance with
                AI-powered tools to help women Restart, Rebuild &amp; Rise after a career break.
              </p>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                From career clarity and confidence to AI readiness, professional branding, job
                search and interview preparation, COS provides a structured path to a confident
                career comeback.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href="#contact">
                    Start Your Comeback <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outlinePlum" size="xl">
                  <a href="#method">Explore COS</a>
                </Button>
              </div>
              <p className="mt-8 border-l-2 border-gold pl-4 font-display text-lg text-foreground/80 italic">
                &ldquo;No woman should give up her career because she took a break.&rdquo;
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-nude/70"
                aria-hidden="true"
              />
              <img
                src={heroImage.url}
                alt="Confident professional woman returning to the workforce after a career break"
                className="relative w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
                width={1080}
                height={1440}
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="eyebrow">You are not alone</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              A Career Break Can Change Your Confidence. It Doesn&rsquo;t Have to End Your Career.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most women returning to work carry the same quiet questions:
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {questions.map((q) => (
              <li key={q} className="surface-card p-5 text-sm text-foreground/85">
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>

          <p className="mt-10 font-display text-xl text-primary sm:text-2xl">
            COS helps you turn uncertainty into a practical comeback plan.
          </p>
        </section>

        {/* METHOD */}
        <section id="method" className="gradient-plum text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-3xl">
              <p className="eyebrow">The COS Method</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Your Comeback Needs More Than Motivation. It Needs a System.
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Confidence + Career Strategy + AI + Professional Branding + Action.
              </p>
            </div>

            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {method.map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur"
                >
                  <span className="font-display text-3xl text-gold">{item.step}</span>
                  <h3 className="mt-3 text-sm font-semibold tracking-[0.16em] text-primary-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-primary-foreground/75">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Practical Support for Every Stage of Your Career Comeback
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="surface-card p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-primary">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Find the Right Support</a>
            </Button>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold-soft/40 px-3 py-1 text-xs font-medium tracking-[0.16em] text-primary uppercase">
                Coming Soon
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-primary sm:text-4xl">
                COS Returnship Program&trade;
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A 4-Week Career Comeback Program for Women Ready to Restart.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {weeks.map((w) => (
                <article key={w.week} className="surface-card p-6">
                  <p className="eyebrow">{w.week}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-wide text-primary">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="gold" size="xl">
                <a href="#contact">Join the Waitlist</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <img
              src={founderImage.url}
              alt="Aanchal Soni, Founder and AI Career Comeback Strategist, working at her desk"
              className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
              width={1080}
              height={1080}
              loading="lazy"
            />
            <div>
              <p className="eyebrow">About COS</p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Built From Experience. Designed for Your Comeback.
              </h2>
              <p className="mt-5 font-display text-2xl text-foreground">Aanchal Soni</p>
              <p className="text-sm tracking-wide text-gold">
                Founder | AI Career Comeback Strategist
              </p>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Comeback Operating System&trade; grew out of professional career experience
                  combined with Aanchal&rsquo;s own experience of restarting a career after a
                  significant break. She knows how it feels to have real capability and still
                  wonder how to explain a gap, where to begin, and whether your experience still
                  counts.
                </p>
                <p>
                  That perspective shapes everything in COS: guidance without judgment, strategy
                  that fits real life, and practical steps that move you forward &mdash; from
                  rebuilding confidence and professional identity to becoming AI-ready for
                  today&rsquo;s workplace.
                </p>
              </div>
              <div className="mt-7">
                <Button asChild variant="outlinePlum" size="xl">
                  <a href="#contact">Meet the Founder</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY COS */}
        <section className="border-y border-border bg-nude/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Why COS?</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <article key={p.title} className="surface-card p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-[0.16em] text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="surface-card px-6 py-14 text-center">
            <p className="eyebrow">Social proof</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Real Comebacks. Real Stories.
            </h2>
            <p className="mt-4 text-muted-foreground">Client stories coming soon.</p>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-3xl">
              <p className="eyebrow">Resources</p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Career Comeback Resources
              </h2>
              <p className="mt-4 text-muted-foreground">
                Coming soon &mdash; practical resources to help you restart, rebuild and rise.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resourceCategories.map((c) => (
                <li key={c} className="surface-card p-6">
                  <h3 className="text-lg font-semibold text-primary">{c}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Coming soon</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Questions Women Often Ask
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-y border-border bg-nude/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Ready to Start Your Comeback?
              </h2>
              <p className="mt-4 text-muted-foreground">
                You don&rsquo;t have to figure out your next career move alone. Tell us where you
                are in your journey, and let&rsquo;s explore the right next step.
              </p>
              <div className="mt-8">
                <WhatsAppCta />
              </div>

              <div className="surface-card mt-10 p-6">
                <p className="eyebrow">Coming Soon</p>
                <h3 className="mt-3 text-xl font-semibold text-primary">
                  COS Career Comeback Community
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A future space for women to connect, learn, grow and navigate their career
                  comeback together.
                </p>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="gradient-plum text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Your Comeback Starts With One Step.
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              You already have experience. You may just need the right strategy to bring it forward
              again.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#contact">Start Your Comeback</a>
              </Button>
              <WhatsAppCta variant="outlineLight" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
