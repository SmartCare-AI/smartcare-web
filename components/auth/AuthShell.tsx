import Link from "next/link";
import { LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

type AuthMode = "login" | "register" | "forgot";

type AuthShellProps = {
  locale: string;
  mode: AuthMode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: string;
  footerLinkLabel: string;
  helper?: string;
};

const trustPoints = ["Secure access", "Clinical privacy", "Smart follow-up"];

export function AuthShell({
  locale,
  mode,
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkLabel,
  helper,
}: AuthShellProps) {
  const isRTL = locale === "ar";

  const modeBadge =
    mode === "login"
      ? isRTL
        ? "مرحبًا بعودتك"
        : "Welcome back"
      : mode === "register"
        ? isRTL
          ? "إنشاء حساب"
          : "Create account"
        : isRTL
          ? "استعادة الحساب"
          : "Reset access";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[#eefaf7] px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#dfeae5] bg-white shadow-[0_18px_60px_rgba(15,94,94,0.08)] lg:grid-cols-[1.05fr_1fr]">
        <aside className="relative hidden overflow-hidden bg-[linear-gradient(180deg,#ebfaf7_0%,#f0f9f7_100%)] p-6 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-x-8 top-6 h-40 rounded-full bg-white/50 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between pt-2">
            <div className="flex items-center justify-between px-2 pb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-emerald-700 shadow-sm">
                <Sparkles className="size-3.5" />
                AI care
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/80 text-emerald-600 shadow-sm ring-1 ring-emerald-100">
                <LockKeyhole className="size-5" />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-3 py-2">
              <img
                src="/Logo/Logo.png"
                alt="Shifaa logo"
                className="w-full max-w-[440px] drop-shadow-[0_18px_26px_rgba(13,148,136,0.18)]"
              />
            </div>
          </div>
        </aside>

        <section className="flex items-center justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="w-full max-w-[480px]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#14b8a6]">
                  {modeBadge}
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-900">
                  {title}
                </h1>
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e7faf6] text-[#0f766e] shadow-inner ring-1 ring-emerald-100">
                <LockKeyhole className="size-5" />
              </div>
            </div>

            {helper ? (
              <div className="mb-5 rounded-[1.4rem] border border-emerald-100 bg-[#eafaf5] px-4 py-3 text-sm leading-6 text-emerald-800">
                {helper}
              </div>
            ) : null}

            <p className="mb-5 text-base leading-7 text-slate-600">
              {subtitle}
            </p>

            {children}

            <div className="mt-6 flex items-center justify-center gap-2 text-[15px] text-slate-500">
              <span>{footerText}</span>
              <Link
                href={`/${locale}/auth/${footerLink}`}
                className="font-bold text-[#0f766e] underline-offset-4 hover:underline"
              >
                {footerLinkLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
