export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3.5 px-6">
        <span className="font-display text-[1.1rem] font-extrabold tracking-[-0.02em]">
          TPA<span className="text-primary">.</span> Studio
        </span>
        <span className="text-[0.84rem] text-muted-foreground">
          © 2026 TPA Studio. Built in Lagos.
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
