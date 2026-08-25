"use client";

import { motion } from "framer-motion";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

function SecuritySection() {
  const t = useTranslations("home.platform");

  return (
    <section
      id="privacy"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,85,95,0.08)]">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-[var(--Primary)]/5 blur-3xl" />

          <div className="relative grid gap-12 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-14 lg:py-16">
            {/* Content */}
            <div className="flex flex-col justify-center text-center lg:text-right">
              <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 lg:mx-0 lg:ml-auto">
                <LockKeyhole className="size-7" />
              </span>

              <p className="mt-6 text-sm font-bold text-emerald-600">
                {t("security.eyebrow")}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--TextMain)] sm:text-4xl">
                {t("security.title")}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:mr-0">
                {t("security.description")}
              </p>

              <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 lg:justify-start">
                <ShieldCheck className="size-4 text-emerald-500" />
                {t("security.privacy")}
              </div>
            </div>

            {/* Security Features */}
            <div className="grid gap-4 sm:grid-cols-2">
              {["encryption", "control", "verified", "care"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,85,95,0.08)]"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-50">
                      <ShieldCheck className="size-5" />
                    </div>

                    <p className="mt-4 text-sm font-bold text-slate-800">
                      {t(`security.${item}`)}
                    </p>

                    <div className="mt-3 h-1 w-6 rounded-full bg-emerald-500/30 transition-all duration-300 group-hover:w-10 group-hover:bg-emerald-500" />
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
