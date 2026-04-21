export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3.5 px-6">
        <span className="font-display text-[1.1rem] font-extrabold tracking-[-0.02em]">
          TPA<span className="text-primary">.</span> The Portfolio Architect
        </span>
        <span className="text-[0.84rem] text-muted-foreground">
          © 2025 The Portfolio Architect. Lagos, Nigeria.
        </span>
        <a
          href="mailto:hello@theportfolioarchitect.com"
          className="text-[0.84rem] text-muted-foreground transition-colors hover:text-primary"
        >
          hello@theportfolioarchitect.com
        </a>
      </div>
    </footer>
  );
}
