import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Design Concepts · Templates | The Portfolio Architect" },
      {
        name: "description",
        content:
          "Browse high-fidelity portfolio previews for our Starter, Professional, and Executive tiers. Custom-coded for high-tier performance.",
      },
      {
        property: "og:title",
        content: "Design Concepts · Templates | The Portfolio Architect",
      },
      {
        property: "og:description",
        content:
          "Preview each TPA portfolio tier. Pick the design that matches your career stage.",
      },
    ],
  }),
  component: TemplatesPage,
});

/* ------------------------------------------------------------------ */
/* Shared building blocks                                             */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <span
      className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-primary-soft"
      style={{ marginTop: 1 }}
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6.5L4.5 9L10 3"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BrowserChrome({ url, dark = false }: { url: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 border-b px-3 py-2 ${
        dark ? "border-white/10 bg-black/40" : "border-border bg-[#F4F5F8]"
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <div
        className={`ml-3 flex-1 truncate rounded px-3 py-1 text-[0.7rem] ${
          dark ? "bg-white/10 text-white/60" : "bg-white text-muted-foreground"
        }`}
      >
        {url}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STARTER PREVIEW — The Minimalist                                   */
/* ------------------------------------------------------------------ */

function StarterPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
      <BrowserChrome url="adaobi.dev" />
      <div className="bg-background p-8 sm:p-12">
        {/* Nav */}
        <nav className="mb-14 flex items-center justify-between">
          <span className="font-display text-lg font-extrabold tracking-tight">
            Adaobi<span className="text-primary">.</span>
          </span>
          <div className="hidden items-center gap-7 sm:flex">
            <span className="text-[0.82rem] text-foreground">Work</span>
            <span className="text-[0.82rem] text-muted-foreground">About</span>
            <span className="text-[0.82rem] text-muted-foreground">Contact</span>
          </div>
          <span className="rounded-md border border-foreground px-3 py-1.5 font-display text-[0.72rem] font-bold">
            Hire Me
          </span>
        </nav>

        {/* Hero */}
        <div className="mb-12 max-w-[640px]">
          <span className="mb-5 inline-block rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary">
            Available for Roles
          </span>
          <h3 className="mb-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            Senior Frontend
            <br />
            <span className="text-primary">Engineer.</span>
          </h3>
          <p className="text-[0.92rem] leading-[1.7] text-muted-foreground">
            I build performant, accessible interfaces for fintech and SaaS teams. Currently shipping
            at a Series B startup in Lagos.
          </p>
        </div>

        {/* 2x2 project grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { name: "Kora Banking", tag: "Fintech · 2024", accent: true },
            { name: "Pulse Analytics", tag: "SaaS · 2024" },
            { name: "Lume Marketplace", tag: "E-commerce · 2023" },
            { name: "Field CMS", tag: "Internal Tool · 2023", accent: true },
          ].map((p) => (
            <div
              key={p.name}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div
                className={`mb-3 flex aspect-[5/3] items-end overflow-hidden rounded-md p-3 ${
                  p.accent
                    ? "bg-gradient-to-br from-primary to-primary-dark"
                    : "bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A]"
                }`}
              >
                <div className="flex w-full gap-1">
                  <span className="h-1 w-6 rounded-full bg-white/80" />
                  <span className="h-1 w-3 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="font-display text-[0.85rem] font-bold">{p.name}</div>
              <div className="text-[0.7rem] text-muted-foreground">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PROFESSIONAL PREVIEW — The Narrative                               */
/* ------------------------------------------------------------------ */

function ProfessionalPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
      <BrowserChrome url="emekastudio.com / case-studies / kora-banking" />
      <div className="bg-background">
        {/* Top nav */}
        <div className="flex items-center justify-between border-b border-border px-8 py-4">
          <span className="font-display text-base font-extrabold tracking-tight">
            EMEKA<span className="text-primary">/</span>STUDIO
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-[0.78rem] font-medium text-muted-foreground">Work</span>
            <span className="text-[0.78rem] font-medium text-primary">Case Studies</span>
            <span className="text-[0.78rem] font-medium text-muted-foreground">Process</span>
            <span className="text-[0.78rem] font-medium text-muted-foreground">About</span>
            <span className="text-[0.78rem] font-medium text-muted-foreground">Resume</span>
          </div>
          <span className="rounded-md bg-primary px-3 py-1.5 font-display text-[0.7rem] font-bold text-white">
            Get in Touch
          </span>
        </div>

        {/* Crumb */}
        <div className="border-b border-border bg-[#FAFAFB] px-8 py-2.5 text-[0.7rem] text-muted-foreground">
          Case Studies <span className="mx-1.5">/</span>{" "}
          <span className="text-foreground">Kora Banking — Onboarding Redesign</span>
        </div>

        {/* Body: sidebar + main */}
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-5 border-r-0 md:border-r md:border-border md:pr-6">
            <div>
              <div className="mb-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                Role
              </div>
              <div className="text-[0.78rem] leading-tight text-foreground">
                Lead Product Designer
              </div>
            </div>
            <div>
              <div className="mb-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                Timeline
              </div>
              <div className="text-[0.78rem] leading-tight text-foreground">
                Mar – Aug 2024 · 5 mo
              </div>
            </div>
            <div>
              <div className="mb-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                Tools
              </div>
              <div className="space-y-1 text-[0.78rem] leading-tight text-foreground">
                <div>Figma</div>
                <div>Maze</div>
                <div>Mixpanel</div>
                <div>Webflow</div>
              </div>
            </div>
            <div>
              <div className="mb-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">
                Team
              </div>
              <div className="text-[0.78rem] leading-tight text-foreground">
                2 PMs · 4 Engineers · 1 Researcher
              </div>
            </div>
          </aside>

          {/* Main */}
          <div>
            <h3 className="mb-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
              Cutting onboarding drop-off by{" "}
              <span className="text-primary">42% in one quarter.</span>
            </h3>
            <p className="mb-6 text-[0.88rem] leading-[1.7] text-muted-foreground">
              Kora Banking's account opening flow had a 67% abandonment rate. I led the redesign
              from research through ship — here's how we got it down to 25%.
            </p>

            {/* Inline image block */}
            <div className="mb-6 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-soft via-primary/10 to-primary/5">
              <div className="flex gap-2">
                <div className="h-16 w-10 rounded-sm bg-white shadow" />
                <div className="h-16 w-10 rounded-sm bg-white shadow" />
                <div className="h-16 w-10 rounded-sm bg-primary shadow" />
                <div className="h-16 w-10 rounded-sm bg-white shadow" />
              </div>
            </div>

            <h4 className="mb-2 font-display text-[0.95rem] font-bold">Process & Impact</h4>
            <div className="space-y-2 text-[0.83rem] leading-[1.7] text-muted-foreground">
              <p>
                We started with 12 user interviews and a heuristic teardown of the existing 9-step
                flow. Three friction points emerged: KYC document upload, BVN verification copy, and
                the unbranded loading states.
              </p>
              <p>
                I prototyped four variants in Figma and ran moderated tests with 18 participants.
                The winning concept collapsed identity verification into a single progressive
                screen, with inline help and clearer error states.
              </p>
            </div>

            {/* Metrics row */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
              <div>
                <div className="font-display text-xl font-extrabold text-primary">-42%</div>
                <div className="text-[0.7rem] text-muted-foreground">Drop-off rate</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-primary">+3.1×</div>
                <div className="text-[0.7rem] text-muted-foreground">Daily activations</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-primary">4.7</div>
                <div className="text-[0.7rem] text-muted-foreground">Post-flow CSAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* EXECUTIVE PREVIEW — The Signature                                  */
/* ------------------------------------------------------------------ */

function ExecutivePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-charcoal shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <BrowserChrome url="tundeokafor.com" dark />
      <div className="relative bg-[#0E0E10] p-8 text-white sm:p-12">
        {/* Custom cursor element (interaction design) */}
        <div
          className="pointer-events-none absolute h-9 w-9 rounded-full border border-primary"
          style={{ top: "38%", left: "62%" }}
        >
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.6rem] font-bold uppercase tracking-[0.14em] text-primary">
            View Project
          </span>
        </div>

        {/* Soft glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 28%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* Nav */}
        <nav className="relative z-10 mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-display text-xs font-extrabold">
              T
            </span>
            <span className="font-display text-base font-extrabold tracking-tight">
              Tunde Okafor
            </span>
          </div>
          <div className="hidden items-center gap-7 text-[0.78rem] text-white/60 md:flex">
            <span>Index</span>
            <span>Ventures</span>
            <span>Writing</span>
            <span>Brand</span>
          </div>
          <span className="rounded-full border border-white/20 px-4 py-1.5 font-display text-[0.7rem] font-bold">
            Get in Touch
          </span>
        </nav>

        {/* Headline */}
        <div className="relative z-10 mb-10 max-w-[680px]">
          <span className="mb-4 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1 w-1 animate-pulse rounded-full bg-primary" />
            Founder · Engineer · Operator
          </span>
          <h3 className="mb-5 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Building infrastructure
            <br />
            for the next billion
            <br />
            <span className="italic text-primary">African internet users.</span>
          </h3>
          <p className="max-w-[440px] text-[0.9rem] leading-[1.7] text-white/60">
            15 years across distributed systems, climate-tech, and venture. Currently advising three
            seed-stage teams.
          </p>
        </div>

        {/* Two-column: Brand strategy + Featured */}
        <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                Personal Brand Strategy
              </span>
              <span className="text-[0.6rem] text-white/40">01 / 04</span>
            </div>
            <h4 className="mb-2 font-display text-[1rem] font-bold leading-tight">
              Operator-led storytelling.
            </h4>
            <p className="mb-4 text-[0.78rem] leading-[1.65] text-white/55">
              Voice, narrative arcs, and content cadence designed to position you as the obvious
              authority in your category.
            </p>
            <div className="flex items-center gap-3 border-t border-white/10 pt-3">
              <div className="flex -space-x-2">
                <span className="h-5 w-5 rounded-full border border-charcoal bg-primary" />
                <span className="h-5 w-5 rounded-full border border-charcoal bg-white/30" />
                <span className="h-5 w-5 rounded-full border border-charcoal bg-white/15" />
              </div>
              <span className="text-[0.66rem] text-white/40">Trusted by 30+ founders</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-primary/40 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                Featured Venture
              </span>
              <span className="font-display text-[0.6rem] font-bold text-primary">↗ 2024</span>
            </div>
            <h4 className="mb-2 font-display text-[1rem] font-bold leading-tight">
              Mango Energy — Seed
            </h4>
            <p className="mb-4 text-[0.78rem] leading-[1.65] text-white/65">
              Co-founded a distributed solar lease platform now powering 4,200 rural homes across
              Kaduna and Plateau states.
            </p>
            <div className="flex items-end gap-1">
              {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
                <span
                  key={i}
                  className="w-2 rounded-sm bg-primary/70"
                  style={{ height: `${h * 0.35}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer marquee */}
        <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[0.66rem] uppercase tracking-[0.14em] text-white/40">
          <span>Featured in TechCabal</span>
          <span>·</span>
          <span>Stears Business</span>
          <span>·</span>
          <span>Rest of World</span>
          <span>·</span>
          <span>The Africa Report</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TIER DATA                                                          */
/* ------------------------------------------------------------------ */

type Tier = {
  key: "starter" | "professional" | "executive";
  badge: string;
  badgeClass: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  Preview: () => React.ReactElement;
};

const tiers: Tier[] = [
  {
    key: "starter",
    badge: "Starter · The Minimalist",
    badgeClass: "bg-[#F0F0F0] text-muted-foreground",
    name: "The Starter Portfolio",
    tagline:
      "A focused one-page build that establishes presence fast. Bold headline, clean nav, and a 2×2 grid of project showcases.",
    price: "₦65,000",
    priceNote: "One-time. 5 business day delivery.",
    features: [
      "One-page responsive layout",
      "About, Skills, and Bio sections",
      "4 project showcase cards",
      "Working contact form",
      "Mobile-first, cross-browser tested",
      "5 business day delivery",
    ],
    cta: "Choose Starter",
    Preview: StarterPreview,
  },
  {
    key: "professional",
    badge: "Professional · The Narrative",
    badgeClass: "bg-primary text-primary-foreground",
    name: "The Professional Portfolio",
    tagline:
      "Multi-page case studies with a project sidebar (Tools · Role · Timeline) and a deep Process and Impact narrative engineered for serious competition.",
    price: "₦130,000",
    priceNote: "One-time. 5 business day delivery.",
    features: [
      "Everything in Starter",
      "Custom multi-page UI design",
      "Full case study writeups",
      "On-page SEO optimization",
      "CV/Resume integration page",
      "5 business day delivery",
    ],
    cta: "Choose Professional",
    highlight: true,
    Preview: ProfessionalPreview,
  },
  {
    key: "executive",
    badge: "Executive · The Signature",
    badgeClass: "bg-charcoal text-offwhite",
    name: "The Executive Bundle",
    tagline:
      "Premium dark-mode infrastructure with a personal brand strategy module and signature interaction design. Custom cursor, scroll-reveals, motion.",
    price: "₦200,000+",
    priceNote: "Custom scope. Bespoke timeline.",
    features: [
      "Everything in Professional",
      "Custom interaction & motion design",
      "Domain procurement & DNS setup",
      "High-level personal branding",
      "Priority delivery & ongoing support",
      "Bespoke timeline",
    ],
    cta: "Choose Executive",
    Preview: ExecutivePreview,
  },
];

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

function TemplatesPage() {
  useReveal();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#E4E4E4 1px, transparent 1px), linear-gradient(90deg, #E4E4E4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 10%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6">
          <div className="reveal max-w-[760px]">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              Design Concepts
            </span>
            <h1 className="mb-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              See the architecture
              <br />
              <span className="text-primary">before you commission it.</span>
            </h1>
            <p className="mb-10 max-w-[560px] text-[1.02rem] font-light leading-[1.75] text-[#4A4A4A]">
              Each tier ships with a distinct design language tuned to its role in your career
              story. Browse the live preview sections below, built in the same brand system your
              portfolio will use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/" className="btn btn-outline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTIONS */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-[1180px] space-y-24 px-6">
          {tiers.map((tier, idx) => {
            const Preview = tier.Preview;
            return (
              <article key={tier.name} className="reveal">
                {/* Section header */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-[640px]">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] ${tier.badgeClass}`}
                      >
                        {tier.badge}
                      </span>
                      {tier.highlight && (
                        <span className="inline-block rounded-full border border-primary/30 px-2.5 py-0.5 text-[0.66rem] font-medium uppercase tracking-[0.08em] text-primary">
                          Most Popular
                        </span>
                      )}
                      <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Concept 0{idx + 1}
                      </span>
                    </div>
                    <h2 className="mb-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                      {tier.name}
                    </h2>
                    <p className="text-[0.95rem] leading-[1.7] text-muted-foreground">
                      {tier.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.03em]">
                      {tier.price}
                    </div>
                    <p className="mt-1.5 text-[0.74rem] text-muted-foreground">{tier.priceNote}</p>
                  </div>
                </div>

                {/* Layout: preview + feature card */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
                  <div className="reveal">
                    <Preview />
                  </div>

                  <aside
                    className={`flex flex-col rounded-2xl border bg-background p-7 ${
                      tier.highlight
                        ? "border-primary shadow-[0_8px_32px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
                        : "border-border"
                    }`}
                  >
                    <h3 className="mb-1 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em] text-primary">
                      Feature Breakdown
                    </h3>
                    <p className="mb-5 text-[0.78rem] text-muted-foreground">
                      Guaranteed inclusions for this tier.
                    </p>

                    <ul className="mb-6 flex-1 list-none">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 border-b border-[#F0F0F0] py-2.5 text-[0.86rem] leading-[1.5] text-[#4A4A4A] last:border-none"
                        >
                          <CheckIcon />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-5 rounded-lg bg-primary-soft px-4 py-3">
                      <div className="font-display text-[1.6rem] font-extrabold leading-none tracking-[-0.02em] text-primary">
                        {tier.price}
                      </div>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">{tier.priceNote}</p>
                    </div>

                    <Link
                      to="/booking"
                      search={{ tier: tier.key }}
                      className={`btn w-full ${tier.highlight ? "btn-primary" : "btn-outline"}`}
                    >
                      {tier.cta}
                    </Link>
                  </aside>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* RETURN CTA */}
      <section className="bg-charcoal py-20 text-center">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
            Want the full breakdown?
          </h2>
          <p className="mx-auto mb-9 max-w-[460px] text-[1rem] leading-[1.7] text-[#A0A0A0]">
            Head back to the home page for pricing, process, and results in one view.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link to="/" className="btn btn-primary">
              ← Return to Home
            </Link>
            <Link to="/templates" className="btn btn-white">
              Stay on Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
