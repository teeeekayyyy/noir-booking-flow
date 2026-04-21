import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/templates", label: "Templates" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
          <Link to="/" className="font-display text-[1.3rem] font-extrabold tracking-tight">
            TPA<span className="text-primary">.</span>
          </Link>
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="group relative pb-0.5 text-[0.9rem] font-medium text-foreground transition-colors hover:text-primary [&.active]:text-primary"
                activeProps={{ className: "active" }}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <Link to="/templates" className="btn btn-primary btn-sm hidden md:inline-flex">
            Get Started →
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] p-1.5 md:hidden"
          >
            <span className="block h-0.5 w-6 rounded bg-foreground" />
            <span className="block h-0.5 w-6 rounded bg-foreground" />
            <span className="block h-0.5 w-4 rounded bg-foreground" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col bg-background p-6">
          <div className="mb-10 flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-[1.3rem] font-extrabold tracking-tight"
            >
              TPA<span className="text-primary">.</span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-1.5 text-[1.4rem] leading-none"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-1 flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 font-display text-[2rem] font-bold transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/templates"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-8"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
