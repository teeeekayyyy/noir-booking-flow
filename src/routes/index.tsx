import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Check({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full ${
        light ? "bg-primary/20" : "bg-primary-soft"
      }`}
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

function Feat({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li
      className="flex items-start gap-2.5 py-2 text-[0.87rem] leading-[1.5]"
      style={{
        color: light ? "#C0C0C0" : "#4A4A4A",
        borderBottom: light ? "1px solid rgba(255,255,255,0.08)" : "1px solid #F0F0F0",
      }}
    >
      <Check light={light} />
      <span>{children}</span>
    </li>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "speed":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "narrative":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      );
    case "market":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "discover":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <line x1="2" y1="2" x2="9.586" y2="9.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    default:
      return null;
  }
}

function Index() {
  useReveal();

  return (
    <div id="top">
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden py-20 md:min-h-[calc(100vh-64px)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(#E4E4E4 1px, transparent 1px), linear-gradient(90deg, #E4E4E4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 9%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
          <div className="max-w-[800px]">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              Portfolio Architecture Studio · Lagos, NG
            </span>
            <h1 className="mb-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Build your digital<br />
              infrastructure.<br />
              <span className="text-primary">Deploy with precision.</span>
            </h1>
            <p className="mb-10 max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-[#4A4A4A]">
              Custom-coded portfolios for tech professionals. We architect the digital presence
              that gets you shortlisted before the interview begins.
            </p>
            <div className="mb-13 flex flex-wrap gap-4" style={{ marginBottom: 52 }}>
              <Link to="/templates" className="btn btn-primary">
                Get Started →
              </Link>
              <a href="#process" className="btn btn-outline">
                How It Works
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-muted-foreground">
              <span className="flex items-center gap-2 text-[0.84rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                5 business day delivery
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="flex items-center gap-2 text-[0.84rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                100+ portfolios shipped
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="flex items-center gap-2 text-[0.84rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Full revision cycle included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { n: "3×", l: "Recruiter callback lift, on average" },
              { n: "100+", l: "Portfolios shipped across tech tracks" },
              { n: "5 days", l: "Standard delivery, every tier" },
              { n: "₦0", l: "Extra charge for revision rounds" },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`px-7 py-10 text-center ${
                  i < 3 ? "sm:border-r sm:border-border" : ""
                } ${i % 2 === 0 ? "border-r border-border sm:border-r" : ""} ${
                  i < 2 ? "border-b border-border sm:border-b-0" : ""
                }`}
              >
                <div className="mb-1.5 font-display text-[2.3rem] font-extrabold tracking-[-0.03em]">
                  {s.n}
                </div>
                <div className="text-[0.83rem] leading-[1.4] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-[72px]">
            <div className="reveal">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
                The Problem
              </span>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
                Hiring managers spend 7 seconds on your profile. What do they see?
              </h2>
              <p className="mb-4 text-[0.93rem] leading-[1.8] text-muted-foreground">
                The Nigerian tech market is competitive and getting faster. A GitHub link and a
                PDF CV are no longer enough. Decision-makers expect a digital presence that shows
                how you think, not just what you have done.
              </p>
              <p className="text-[0.93rem] leading-[1.8] text-muted-foreground">
                We treat your career the way a senior engineer treats a deployment: structured,
                tested, and shipped to spec. Architecture, not decoration. Precision, not noise.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-border bg-card p-9">
              {[
                {
                  icon: "speed",
                  t: "Speed to impression",
                  d: "Your portfolio loads fast, reads clearly, and delivers value in the first scroll.",
                },
                {
                  icon: "narrative",
                  t: "Narrative architecture",
                  d: "Projects structured as case studies that show process, decision-making, and impact.",
                },
                {
                  icon: "market",
                  t: "Market-ready output",
                  d: "Built for local Nigerian startups and international remote roles. One portfolio, both contexts.",
                },
              ].map((w, i, arr) => (
                <div
                  key={w.t}
                  className={`flex items-start gap-4 py-5 ${
                    i === 0 ? "pt-0" : ""
                  } ${i === arr.length - 1 ? "border-none pb-0" : "border-b border-border"}`}
                >
                  <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] bg-primary-soft">
                    <Icon name={w.icon} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display text-[0.95rem] font-bold">{w.t}</h3>
                    <p className="text-[0.85rem] leading-[1.6] text-muted-foreground">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mb-13 max-w-[580px]" style={{ marginBottom: 52 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              Services & Pricing
            </span>
            <h2 className="mb-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Three tiers. One mandate: ship the role.
            </h2>
            <p className="text-[0.93rem] leading-[1.8] text-muted-foreground">
              Every tier is custom-coded for high-tier performance. Your portfolio does the
              selling before you open your mouth. Depth and scope scale with the tier.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {/* Starter */}
            <div className="reveal flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <span className="mb-4 inline-block self-start rounded-full bg-[#F0F0F0] px-3 py-1 text-[0.71rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Starter
              </span>
              <h3 className="mb-2.5 mt-4 font-display text-[1.2rem] font-bold">
                The Starter Portfolio
              </h3>
              <p className="mb-5 text-[0.875rem] leading-[1.7] text-muted-foreground">
                A focused one-page build that establishes your professional presence fast.
                For candidates entering the market who need a solid digital home now.
              </p>
              <div className="font-display text-[2.3rem] font-extrabold leading-none tracking-[-0.03em]">
                ₦65,000
              </div>
              <p className="mb-6 mt-1 text-[0.74rem] text-muted-foreground">
                One-time. No hidden fees.
              </p>
              <ul className="mb-7 flex-1 list-none">
                <Feat>One-page responsive layout</Feat>
                <Feat>About, Skills, and Bio sections</Feat>
                <Feat>4 project showcase cards</Feat>
                <Feat>Working contact form</Feat>
                <Feat>Mobile-first, cross-browser tested</Feat>
                <Feat>5 business day delivery</Feat>
              </ul>
              <Link
                to="/booking"
                search={{ tier: "starter" }}
                className="btn btn-outline w-full"
              >
                Start with Starter
              </Link>
            </div>

            {/* Professional */}
            <div className="reveal flex flex-col rounded-2xl border border-charcoal bg-charcoal p-8 text-offwhite transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_48px_rgba(26,26,26,0.28)]">
              <div className="mb-0 flex items-center">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-[0.71rem] font-medium uppercase tracking-[0.1em] text-[#8BA4FF]">
                  Professional
                </span>
                <span className="ml-auto inline-block rounded-full bg-white/10 px-2.5 py-1 text-[0.68rem] tracking-[0.06em] text-[#8BA4FF]">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="mb-2.5 mt-4 font-display text-[1.2rem] font-bold">
                The Professional Portfolio
              </h3>
              <p className="mb-5 text-[0.875rem] leading-[1.7] text-[#B0B0B0]">
                A multi-page build for mid-level professionals competing locally and globally.
                Engineered for depth, not decoration.
              </p>
              <div className="font-display text-[2.3rem] font-extrabold leading-none tracking-[-0.03em]">
                ₦130,000
              </div>
              <p className="mb-6 mt-1 text-[0.74rem] text-[#888]">One-time. Full ownership.</p>
              <ul className="mb-7 flex-1 list-none">
                <Feat light>Everything in Starter</Feat>
                <Feat light>Custom multi-page UI design</Feat>
                <Feat light>Full case study writeups</Feat>
                <Feat light>On-page SEO optimization</Feat>
                <Feat light>CV/Resume integration page</Feat>
                <Feat light>5 business day delivery</Feat>
              </ul>
              <Link
                to="/booking"
                search={{ tier: "professional" }}
                className="btn btn-primary w-full"
              >
                Go Professional
              </Link>
            </div>

            {/* Executive */}
            <div className="reveal flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <span className="mb-4 inline-block self-start rounded-full bg-primary px-3 py-1 text-[0.71rem] font-medium uppercase tracking-[0.1em] text-primary-foreground">
                Executive
              </span>
              <h3 className="mb-2.5 mt-4 font-display text-[1.2rem] font-bold">
                The Executive Bundle
              </h3>
              <p className="mb-5 text-[0.875rem] leading-[1.7] text-muted-foreground">
                Built for senior engineers, PMs, and founders. Custom interaction design,
                personal brand strategy, and full domain deployment.
              </p>
              <div className="font-display text-[2.3rem] font-extrabold leading-none tracking-[-0.03em]">
                ₦200,000+
              </div>
              <p className="mb-6 mt-1 text-[0.74rem] text-muted-foreground">
                Custom scope. Contact for quote.
              </p>
              <ul className="mb-7 flex-1 list-none">
                <Feat>Everything in Professional</Feat>
                <Feat>Custom interaction & motion design</Feat>
                <Feat>Domain procurement & DNS setup</Feat>
                <Feat>High-level personal branding</Feat>
                <Feat>Priority delivery & ongoing support</Feat>
                <Feat>Bespoke timeline</Feat>
              </ul>
              <Link
                to="/booking"
                search={{ tier: "executive" }}
                className="btn btn-primary w-full"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Callout */}
          <div className="reveal rounded-2xl border border-primary/15 bg-primary-soft p-9">
            <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1fr_1px_1fr]">
              <div>
                <h4 className="mb-2.5 font-display text-[0.93rem] font-bold text-primary">
                  Starter vs. Professional. The structural difference.
                </h4>
                <p className="text-[0.84rem] leading-[1.75] text-muted-foreground">
                  Starter makes you visible. It is your professional front door, engineered to
                  move you from invisible to findable. Professional makes you competitive. Case
                  studies prove how you think, SEO drives discovery, and multi-page architecture
                  signals a higher level of craft. Targeting mid-senior roles or international
                  companies? Professional is the floor, not the ceiling.
                </p>
              </div>
              <div className="hidden bg-primary/15 md:block" style={{ alignSelf: "stretch" }} />
              <div>
                <h4 className="mb-2.5 font-display text-[0.93rem] font-bold text-primary">
                  Which tier fits.
                </h4>
                <p className="text-[0.84rem] leading-[1.75] text-muted-foreground">
                  0 to 2 years or starting your search: Starter. 2 to 6 years targeting
                  growth-stage or enterprise companies: Professional pays for itself in your
                  first salary negotiation. Senior IC, engineering manager, or founder: the
                  Executive Bundle is the infrastructure layer for your personal brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[580px]">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              The Execution Lifecycle
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
              Discovery → Design → Ship.
            </h2>
          </div>
          <div className="mt-13 grid grid-cols-1 gap-12 md:grid-cols-3" style={{ marginTop: 52 }}>
            {[
              {
                n: "01",
                icon: "discover",
                t: "Discovery",
                d: "A structured intake session: career goals, target companies, and the position you want to own. Every layout and copy decision compiles from this brief. No template-first thinking.",
                list: [
                  "Career goals alignment",
                  "Target audience mapping",
                  "Content inventory review",
                ],
              },
              {
                n: "02",
                icon: "design",
                t: "Architect",
                d: "Architecture before aesthetics. We map information hierarchy first, then build the visual language around it. You approve wireframes and direction before final code is written.",
                list: [
                  "Layout & copy structure",
                  "Visual direction approval",
                  "Revision loop (2 rounds)",
                ],
              },
              {
                n: "03",
                icon: "ship",
                t: "Deploy",
                d: "Your portfolio ships on schedule. We handle deployment, final browser testing, and a handover walkthrough so you can maintain and update it. Full ownership transfers to you.",
                list: [
                  "Hosting & deployment",
                  "Cross-device testing",
                  "Handover & ownership transfer",
                ],
              },
            ].map((s) => (
              <div key={s.n} className="reveal relative pt-12">
                <span className="pointer-events-none absolute -left-1.5 top-0 select-none font-display text-[4.2rem] font-extrabold leading-none text-[#EBEBEB]">
                  {s.n}
                </span>
                <div className="relative z-10">
                  <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-primary-soft">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mb-3 font-display text-[1.2rem] font-bold">{s.t}</h3>
                  <p className="mb-4 text-[0.875rem] leading-[1.75] text-muted-foreground">
                    {s.d}
                  </p>
                  <ul className="list-none border-t border-border pt-4">
                    {s.list.map((li) => (
                      <li
                        key={li}
                        className="flex items-center gap-2 py-1.5 text-[0.875rem] text-muted-foreground"
                      >
                        <span className="text-[0.8rem] text-primary">→</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mb-13 max-w-[580px]" style={{ marginBottom: 52 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              Career Optimization Add-ons
            </span>
            <h2 className="mb-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
              The portfolio is the foundation.
              <br />
              These are the edges.
            </h2>
            <p className="text-[0.93rem] leading-[1.8] text-muted-foreground">
              A solid portfolio needs reinforcements. Add these to ship a career profile that
              compiles as one coherent system.
            </p>
          </div>

          <div className="flex max-w-[760px] flex-col gap-3.5">
            {[
              {
                badge: "Add-on",
                badgeCls: "bg-[#F0F9FF] text-[#0077AA]",
                t: "CV Revamp",
                d: "ATS-optimized. Keyword-targeted. Achievement-forward. We rebuild your CV to align with your portfolio, not contradict it.",
                price: "₦15,000",
                hl: false,
              },
              {
                badge: "Add-on",
                badgeCls: "bg-[#F0F9FF] text-[#0077AA]",
                t: "LinkedIn Optimization",
                d: "Profile rewrite, headline engineering, summary narrative, and keyword strategy. Convert LinkedIn from passive profile to active recruiter inbound.",
                price: "₦20,000",
                hl: false,
              },
              {
                badge: "Best Value",
                badgeCls: "bg-primary text-primary-foreground",
                t: "Full Career Bundle",
                d: "CV Revamp plus LinkedIn Optimization. Portfolio, CV, and LinkedIn aligned to one narrative. Save ₦5,000.",
                price: "₦30,000",
                hl: true,
              },
            ].map((a) => (
              <div
                key={a.t}
                className={`reveal flex flex-col items-start justify-between gap-6 rounded-xl border p-7 transition-all hover:border-primary/40 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center ${
                  a.hl
                    ? "border-primary bg-gradient-to-br from-[#F9FBFF] to-primary-soft"
                    : "border-border bg-background"
                }`}
              >
                <div>
                  <span
                    className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[0.69rem] font-medium uppercase tracking-[0.08em] ${a.badgeCls}`}
                  >
                    {a.badge}
                  </span>
                  <h4 className="mb-1 font-display text-[1rem] font-bold">{a.t}</h4>
                  <p className="text-[0.84rem] leading-[1.6] text-muted-foreground">{a.d}</p>
                </div>
                <div className="flex-shrink-0 text-left sm:text-right">
                  <div className="font-display text-[1.75rem] font-extrabold tracking-[-0.02em]">
                    {a.price}
                  </div>
                  <Link
                    to="/templates"
                    className="btn btn-primary btn-sm mt-3 whitespace-nowrap"
                  >
                    {a.hl ? "Bundle Up" : "Add This"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[580px]">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-primary">
              Real Results
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
              What happens after you ship.
            </h2>
          </div>
          <div className="mt-13 grid grid-cols-1 gap-[22px] md:grid-cols-3" style={{ marginTop: 52 }}>
            {[
              {
                q: "Three recruiters reached out the week my portfolio went live. Two were from companies I had been trying to get into for over a year. The positioning was the difference.",
                initials: "TI",
                name: "Tunde I.",
                role: "Senior Frontend Engineer, Lagos",
                bg: "var(--primary)",
              },
              {
                q: "My portfolio looked like every other product designer's. TPA built something that read like me. My process, my story. I landed a remote role at a London fintech two months after launch.",
                initials: "AO",
                name: "Amara O.",
                role: "Product Designer, Remote (UK)",
                bg: "var(--charcoal)",
              },
              {
                q: "The CV revamp alone was worth every kobo. I had been getting auto-rejected by ATS systems for months without knowing it. New CV, new portfolio. First shortlist within 11 days.",
                initials: "KA",
                name: "Kelechi A.",
                role: "Backend Engineer, Abuja",
                bg: "var(--primary-dark)",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-3.5 tracking-[2px] text-primary text-[0.85rem]">★★★★★</div>
                <p className="mb-5 text-[0.88rem] italic leading-[1.75]">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full font-display text-[0.8rem] font-bold text-white"
                    style={{ background: t.bg }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-display text-[0.875rem] font-bold">{t.name}</div>
                    <div className="text-[0.77rem] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-charcoal py-24 text-center">
        <div className="mx-auto max-w-[1100px] px-6">
          <span className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.12em] text-[#8BA4FF]">
            Ready when you are
          </span>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Your next career move
            <br />
            starts with how you show up.
          </h2>
          <p className="mx-auto mb-10 max-w-[450px] text-[1.02rem] leading-[1.7] text-[#A0A0A0]">
            Every week you wait, a weaker candidate with a better portfolio gets the shortlist.
            Build the infrastructure that flips that.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link to="/templates" className="btn btn-primary">
              See All Packages
            </Link>
            <Link to="/templates" className="btn btn-white">
              View Design Concepts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
