"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  ChevronRight,
  FileText,
  HeartPulse,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import { useTranslations } from "next-intl";

const quickActions = [
  { key: "overview", icon: HeartPulse },
  { key: "records", icon: FileText },
  { key: "alerts", icon: BellRing },
  { key: "care", icon: Stethoscope },
] as const;

function PatientJourneySection() {
  const t = useTranslations("home.patientJourney");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,85,95,0.08)]">
          <div className="pointer-events-none absolute -left-20 top-10 size-64 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-[var(--Primary)]/5 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfa_100%)] p-4 shadow-[0_18px_40px_rgba(15,85,95,0.08)] sm:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {t("eyebrow")}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[var(--TextMain)]">
                      {t("overviewTitle")}
                    </h3>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <HeartPulse className="size-6" />
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                          <Activity className="size-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">
                            {t("vitals")}
                          </p>
                          <p className="text-lg font-bold text-slate-800">
                            120/80
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                        {t("stable")}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <p className="text-xs text-slate-500">
                        {t("nextMedication")}
                      </p>
                      <p className="mt-2 text-sm font-bold text-slate-800">
                        Metformin
                      </p>
                      <p className="mt-1 text-xs text-slate-500">10:00 PM</p>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <p className="text-xs text-slate-500">{t("recovery")}</p>
                      <p className="mt-2 text-sm font-bold text-slate-800">
                        72%
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {t("recoveryText")}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                          <ShieldAlert className="size-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">
                            {t("aiInsight")}
                          </p>
                          <p className="text-sm font-bold text-slate-800">
                            {t("aiSummary")}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="size-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="relative"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--Primary)]">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-[var(--TextMain)] sm:text-4xl">
                {t("title")}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {t("description")}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {quickActions.map(({ key, icon: Icon }) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[var(--Primary)] shadow-sm">
                        <Icon className="size-4" />
                      </span>
                      {t(`items.${key}`)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--Primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,118,110,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  {t("primaryAction")}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--Primary)] hover:text-[var(--Primary)]"
                >
                  {t("secondaryAction")}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientJourneySection;
