import * as React from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";

/* ------------------------------------------------------------------ */
/* TIER CATALOG (mirrors home + templates pages)                      */
/* ------------------------------------------------------------------ */

type TierKey = "starter" | "professional" | "executive";

const TIERS: Record<
  TierKey,
  { key: TierKey; name: string; price: string; priceNote: string; tagline: string }
> = {
  starter: {
    key: "starter",
    name: "The Starter Portfolio",
    price: "₦65,000",
    priceNote: "One-time. 5 business day delivery.",
    tagline: "A focused one-page build that establishes presence fast.",
  },
  professional: {
    key: "professional",
    name: "The Professional Portfolio",
    price: "₦130,000",
    priceNote: "One-time. 5 business day delivery.",
    tagline: "Multi-page case studies engineered for serious competition.",
  },
  executive: {
    key: "executive",
    name: "The Executive Bundle",
    price: "₦200,000+",
    priceNote: "Custom scope. Bespoke timeline.",
    tagline: "Premium dark-mode infrastructure with personal brand strategy.",
  },
};

const TARGET_ROLES = [
  "Software Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Product Designer",
  "Product Manager",
  "Data Scientist / Analyst",
  "Engineering Manager",
  "Founder / Operator",
  "Other",
];

/* ------------------------------------------------------------------ */
/* ROUTE                                                              */
/* ------------------------------------------------------------------ */

type BookingSearch = { tier: TierKey };

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => {
    const raw = (search.tier as string)?.toLowerCase();
    const tier: TierKey =
      raw === "starter" || raw === "professional" || raw === "executive" ? raw : "professional";
    return { tier };
  },
  head: ({ match }) => {
    const tier = TIERS[(match.search as BookingSearch).tier] ?? TIERS.professional;
    return {
      meta: [
        { title: `Book ${tier.name} · The Portfolio Architect` },
        {
          name: "description",
          content:
            "Reserve your portfolio architecture slot. Two-step intake, capped at 5 clients per week, deployed in 5 business days.",
        },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: BookingPopup,
});

/* ------------------------------------------------------------------ */
/* COMPONENT                                                          */
/* ------------------------------------------------------------------ */

type Step = 1 | 2;
type FormState = {
  fullName: string;
  email: string;
  linkedin: string;
  targetRole: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;

function BookingPopup() {
  const { tier: tierKey } = Route.useSearch();
  const tier = TIERS[tierKey];
  const router = useRouter();
  const navigate = useNavigate();

  const [step, setStep] = React.useState<Step>(1);
  const [success, setSuccess] = React.useState(false);
  const [form, setForm] = React.useState<FormState>({
    fullName: "",
    email: "",
    linkedin: "",
    targetRole: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Partial<Record<keyof FormState, boolean>>>({});
  const [copied, setCopied] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const firstFieldRef = React.useRef<HTMLInputElement>(null);

  // Lock body scroll while popup is open
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initial focus
  React.useEffect(() => {
    if (step === 1 && !success) {
      firstFieldRef.current?.focus();
    }
  }, [step, success]);

  function handleClose() {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      navigate({ to: "/templates" });
    }
  }

  /* ---------- Validation ---------- */

  function validateField(name: keyof FormState, value: string): string | undefined {
    const v = value.trim();
    switch (name) {
      case "fullName":
        if (!v) return "Please enter your full name.";
        if (v.length < 2) return "Name looks too short.";
        if (!/\s/.test(v)) return "Please include both first and last name.";
        return;
      case "email":
        if (!v) return "Please enter your professional email.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email address.";
        return;
      case "linkedin":
        if (!v) return "LinkedIn URL is required.";
        if (!/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9-]+\/?$/i.test(v))
          return "Use this format: www.linkedin.com/in/your-handle-123abc";
        return;
      case "targetRole":
        if (!v) return "Pick the role you're targeting.";
        return;
    }
  }

  function validateAll(): FormErrors {
    const next: FormErrors = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((k) => {
      const err = validateField(k, form[k]);
      if (err) next[k] = err;
    });
    return next;
  }

  function setField<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      const err = validateField(key, value);
      setErrors((e) => ({ ...e, [key]: err }));
    }
  }

  function blurField(key: keyof FormState) {
    setTouched((t) => ({ ...t, [key]: true }));
    const err = validateField(key, form[key]);
    setErrors((e) => ({ ...e, [key]: err }));
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    const next = validateAll();
    setErrors(next);
    setTouched({ fullName: true, email: true, linkedin: true, targetRole: true });
    if (Object.keys(next).length === 0) {
      setStep(2);
      // Scroll dialog to top
      dialogRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /* ---------- Copy ---------- */

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText("1693880267");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = "1693880267";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-[200] flex items-stretch justify-center overflow-y-auto bg-charcoal/70 px-3 py-6 backdrop-blur-md sm:items-center sm:px-6 sm:py-12"
    >
      {/* Backdrop click to close */}
      <button
        type="button"
        aria-label="Close booking dialog"
        onClick={handleClose}
        className="absolute inset-0 -z-0 cursor-default focus:outline-none"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        className="relative z-10 my-auto w-full max-w-[640px] overflow-hidden rounded-2xl border border-border bg-background shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close booking dialog"
          className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {success ? (
          <SuccessView onClose={handleClose} tier={tier} />
        ) : (
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            {/* Progress */}
            <ProgressIndicator step={step} />

            {step === 1 && (
              <>
                <header className="mb-7">
                  <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-primary">
                    Architectural Brief · Step 1
                  </span>
                  <h2
                    id="booking-title"
                    className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.15] tracking-[-0.025em]"
                  >
                    Reserve your slot for {tier.name}.
                  </h2>
                  <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted-foreground">
                    Intake is capped at 5 clients per week. Tell us who we are designing for so
                    we can prepare your discovery brief.
                  </p>
                </header>

                <form noValidate onSubmit={handleNext} className="space-y-5">
                  <Field
                    id="bk-fullname"
                    label="Full Name"
                    error={errors.fullName}
                    required
                  >
                    <input
                      ref={firstFieldRef}
                      id="bk-fullname"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "bk-fullname-err" : undefined}
                      aria-label="Full name"
                      placeholder="Adaobi Okonkwo"
                      value={form.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                      onBlur={() => blurField("fullName")}
                      className={inputCls(!!errors.fullName)}
                    />
                  </Field>

                  <Field
                    id="bk-email"
                    label="Professional Email"
                    error={errors.email}
                    required
                  >
                    <input
                      id="bk-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "bk-email-err" : undefined}
                      aria-label="Professional email address"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      onBlur={() => blurField("email")}
                      className={inputCls(!!errors.email)}
                    />
                  </Field>

                  <Field
                    id="bk-linkedin"
                    label="LinkedIn URL"
                    error={errors.linkedin}
                    required
                  >
                    <input
                      id="bk-linkedin"
                      name="linkedin"
                      type="url"
                      inputMode="url"
                      aria-required="true"
                      aria-invalid={!!errors.linkedin}
                      aria-describedby={errors.linkedin ? "bk-linkedin-err" : undefined}
                      aria-label="LinkedIn profile URL"
                      placeholder="www.linkedin.com/in/your-handle-123abc"
                      value={form.linkedin}
                      onChange={(e) => setField("linkedin", e.target.value)}
                      onBlur={() => blurField("linkedin")}
                      className={inputCls(!!errors.linkedin)}
                    />
                  </Field>

                  <Field
                    id="bk-role"
                    label="Target Role"
                    error={errors.targetRole}
                    required
                  >
                    <div className="relative">
                      <select
                        id="bk-role"
                        name="targetRole"
                        aria-required="true"
                        aria-invalid={!!errors.targetRole}
                        aria-describedby={errors.targetRole ? "bk-role-err" : undefined}
                        aria-label="Target role"
                        value={form.targetRole}
                        onChange={(e) => setField("targetRole", e.target.value)}
                        onBlur={() => blurField("targetRole")}
                        className={`${inputCls(!!errors.targetRole)} appearance-none pr-10`}
                      >
                        <option value="">Select the role you're targeting…</option>
                        {TARGET_ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Field>

                  <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-md px-4 text-[0.88rem] font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary w-full sm:w-auto">
                      Continue to Payment →
                    </button>
                  </div>
                </form>
              </>
            )}

            {step === 2 && (
              <PaymentStep
                tier={tier}
                form={form}
                copied={copied}
                onCopy={copyAccount}
                onBack={() => setStep(1)}
                onConfirm={() => setSuccess(true)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

function ProgressIndicator({ step }: { step: Step }) {
  return (
    <div className="mb-7" aria-label={`Step ${step} of 2`}>
      <div className="mb-2 flex items-center justify-between text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        <span className={step >= 1 ? "text-primary" : ""}>01 · Intake</span>
        <span className="text-muted-foreground">Step {step} of 2</span>
        <span className={step >= 2 ? "text-primary" : ""}>02 · Payment</span>
      </div>
      <div className="grid grid-cols-2 gap-2" role="progressbar" aria-valuemin={1} aria-valuemax={2} aria-valuenow={step}>
        <span className="h-1 rounded-full bg-primary" />
        <span
          className={`h-1 rounded-full transition-colors ${
            step >= 2 ? "bg-primary" : "bg-border"
          }`}
        />
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-display text-[0.78rem] font-bold uppercase tracking-[0.1em] text-foreground"
      >
        {label}
        {required && <span className="ml-1 text-primary" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-err`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-destructive"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    "block w-full rounded-md border bg-background px-3.5 text-[0.92rem] text-foreground placeholder:text-muted-foreground/70",
    "min-h-[48px] py-2.5 transition-all",
    "focus:outline-none focus-visible:outline-none",
    hasError
      ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/30"
      : "border-input focus:border-primary focus:ring-2 focus:ring-[#2E5BFF]/30",
  ].join(" ");
}

function PaymentStep({
  tier,
  form,
  copied,
  onCopy,
  onBack,
  onConfirm,
}: {
  tier: (typeof TIERS)[TierKey];
  form: FormState;
  copied: boolean;
  onCopy: () => void;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      <header className="mb-7">
        <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-primary">
          Settle the Brief · Step 2
        </span>
        <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
          Direct transfer. You are locked in.
        </h2>
        <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted-foreground">
          Hi {form.fullName.split(" ")[0] || "there"}. Here is your slot summary and the banking
          details for your transfer.
        </p>
      </header>

      {/* Summary card */}
      <div className="mb-5 rounded-xl border border-border bg-card p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
              Selected Tier
            </div>
            <div className="mt-1 font-display text-[1.05rem] font-bold">{tier.name}</div>
            <p className="mt-1 text-[0.8rem] leading-[1.55] text-muted-foreground">
              {tier.tagline}
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-[1.6rem] font-extrabold leading-none tracking-[-0.02em]">
              {tier.price}
            </div>
            <p className="mt-1 text-[0.7rem] text-muted-foreground">{tier.priceNote}</p>
          </div>
        </div>
      </div>

      {/* Glassmorphism bank card */}
      <div
        className="relative overflow-hidden rounded-2xl border p-6"
        style={{
          borderColor: "#2E5BFF",
          borderWidth: "1px",
          background:
            "linear-gradient(135deg, color-mix(in oklab, #2E5BFF 10%, white) 0%, color-mix(in oklab, #2E5BFF 4%, white) 100%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 20px 60px color-mix(in oklab, #2E5BFF 18%, transparent)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, #2E5BFF 28%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
              Direct Bank Transfer
            </span>
            <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-charcoal/60">
              NGN
            </span>
          </div>

          <div className="space-y-3.5">
            <DetailRow label="Bank" value="Access Bank" />
            <DetailRow label="Account Name" value="Tolulope Kayode" />

            <div>
              <div className="mb-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-charcoal/60">
                Account Number
              </div>
              <div className="flex items-center gap-2">
                <code
                  className="flex-1 select-all rounded-md border border-[#2E5BFF]/30 bg-white/70 px-3 py-2.5 font-mono text-[1.1rem] font-bold tracking-[0.12em] text-charcoal"
                  aria-label="Account number 1693880267"
                >
                  1693880267
                </code>
                <button
                  type="button"
                  onClick={onCopy}
                  aria-label={copied ? "Account number copied" : "Copy account number to clipboard"}
                  aria-live="polite"
                  className={`group inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded-md border px-3.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    copied
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-[#2E5BFF] bg-[#2E5BFF] text-white hover:bg-[#1A45E0]"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect
                          x="9"
                          y="9"
                          width="11"
                          height="11"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M5 15V6a2 2 0 012-2h9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              {copied && (
                <span role="status" className="sr-only">
                  Account number copied to clipboard
                </span>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[#2E5BFF]/15 pt-3">
              <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-charcoal/60">
                Amount Due
              </span>
              <span className="font-display text-[1.2rem] font-extrabold tracking-[-0.02em] text-charcoal">
                {tier.price}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[0.78rem] leading-[1.6] text-muted-foreground">
        After transfer, send your receipt to{" "}
        <a
          href="mailto:hello@theportfolioarchitect.com"
          className="font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
        >
          hello@theportfolioarchitect.com
        </a>{" "}
        to finalize your onboarding.
      </p>

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-[48px] items-center justify-center rounded-md px-4 text-[0.88rem] font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          ← Back
        </button>
        <button type="button" onClick={onConfirm} className="btn btn-primary w-full sm:w-auto">
          I Have Made the Transfer
        </button>
      </div>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-charcoal/60">
        {label}
      </span>
      <span className="font-display text-[0.95rem] font-bold text-charcoal">{value}</span>
    </div>
  );
}

function SuccessView({
  onClose,
  tier,
}: {
  onClose: () => void;
  tier: (typeof TIERS)[TierKey];
}) {
  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, #2E5BFF 22%, transparent) 0%, transparent 70%)",
        }}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2E5BFF] text-white shadow-[0_8px_24px_rgba(46,91,255,0.45)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="text-center">
        <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-primary">
          Slot Reserved · {tier.name}
        </span>
        <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.1rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
          Payment received.
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[0.92rem] leading-[1.7] text-muted-foreground">
          Your project has entered the{" "}
          <span className="font-semibold text-foreground">5-day architectural sprint</span>.
          Send your receipt to finalize your onboarding.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-primary/20 bg-primary-soft p-5 text-center">
        <div className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
          Next Step
        </div>
        <p className="mt-2 text-[0.88rem] leading-[1.65] text-foreground">
          Send your transfer receipt to{" "}
          <a
            href="mailto:hello@theportfolioarchitect.com"
            className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            hello@theportfolioarchitect.com
          </a>{" "}
          to finalize your onboarding.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button onClick={onClose} className="btn btn-primary w-full sm:w-auto">
          Done
        </button>
        <Link to="/" className="btn btn-outline w-full sm:w-auto">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
