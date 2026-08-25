"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  FileHeart,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

function HealthFeatures() {
  const t = useTranslations("home");
  const featureIcons = [HeartPulse, Activity, FileHeart, BellRing, ShieldCheck];
  const featureKeys = [
    "care",
    "records",
    "medications",
    "support",
    "privacy",
  ] as const;

  return (
    <section className="relative z-20 mx-auto -mt-12 max-w-6xl px-4 sm:-mt-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="rounded-[2rem] border border-slate-100 bg-white px-5 py-7 shadow-[0_22px_55px_rgba(15,85,95,0.18)] sm:px-8"
      >
        <h2 className="mb-6 text-center text-lg font-bold text-[var(--TextMain)] sm:text-xl">
          {t("featuresTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.38, delay: index * 0.08, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-3 flex size-11 items-center justify-center rounded-full bg-[var(--Primary)]/10 text-[var(--Primary)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-xs font-bold text-slate-800 sm:text-sm">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                  {t(`features.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default HealthFeatures;
