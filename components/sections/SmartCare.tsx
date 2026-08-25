"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useTranslations } from "next-intl";
import ActionButton from "@/components/common/ActionButton";

function SmartCare() {
  const t = useTranslations("home.smartCare");

  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-32">
      <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-white bg-[radial-gradient(circle_at_20%_45%,rgba(153,246,228,0.4),transparent_32%),linear-gradient(115deg,#d8f5f3_0%,#f9fffe_55%,#e5f7ea_100%)] px-5 py-12 shadow-[0_24px_55px_rgba(15,85,95,0.12)] sm:px-10 lg:max-w-7xl lg:px-20 lg:py-20">
        <div className="pointer-events-none absolute -left-16 top-8 size-48 rounded-full border border-[var(--Primary)]/10" />
        <div className="pointer-events-none absolute -right-14 -bottom-20 size-64 rounded-full bg-[var(--Secondary)]/10 blur-3xl" />

        <div
          dir="ltr"
          id="how-it-works"
          className="relative scroll-mt-24 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto flex min-h-[290px] w-full max-w-md items-center justify-center"
          >
            <div className="absolute h-64 w-64 rounded-full border border-dashed border-[var(--Primary)]/25" />
            <Image
              src="/cover/midcal_record-removebg-preview.png"
              alt={t("phoneAlt")}
              width={620}
              height={620}
              className="relative z-10 w-[85%] max-w-[540px] drop-shadow-[18px_25px_20px_rgba(0,77,87,0.25)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            dir="rtl"
            className="text-center lg:text-right"
          >
            <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--Primary)] shadow-sm">
              <BrainCircuit className="size-6" />
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[var(--TextMain)] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-600 sm:text-base lg:mr-0">
              {t("description")}
            </p>
            <div className="mt-6 grid gap-3 text-right sm:grid-cols-3">
              {["insight", "followUp", "reminders"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/80 bg-white/65 px-3 py-3 text-xs font-bold text-slate-700 shadow-sm"
                >
                  {t(`highlights.${item}`)}
                </div>
              ))}
            </div>
            <div className="mt-7 flex justify-center lg:justify-start">
              <ActionButton href="#how-it-works">{t("action")}</ActionButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SmartCare;
