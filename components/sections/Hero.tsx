"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock3,
  FileHeart,
  HeartPulse,
  Pill,
  ScanHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import ActionButton from "@/components/common/ActionButton";

function Hero() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations("home");
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_52%_44%,rgba(167,243,240,0.7),transparent_27%),linear-gradient(180deg,#fbfefd_0%,#e8f8f7_100%)] px-4 pb-28 pt-10 sm:px-6 sm:pt-14 lg:pb-36 lg:pt-16">
      <div className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-[var(--Accent)]/10 blur-3xl" />
      <Image
        src="/cover/green-floating-leaves-flying-leaves-green-leaf-dancing-on-transparent-background-file-png.png"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute -right-20 -top-8 z-0 w-44 rotate-[-14deg] opacity-80 mix-blend-multiply sm:-right-10 sm:w-64"
        aria-hidden="true"
      />
      <Image
        src="/cover/green-floating-leaves-flying-leaves-green-leaf-dancing-on-transparent-background-file-png.png"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute -bottom-20 -left-16 z-0 w-44 rotate-[150deg] opacity-72 mix-blend-multiply sm:-left-8 sm:w-64"
        aria-hidden="true"
      />

      <div
        dir="ltr"
        className="relative mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1fr_1fr] lg:gap-4"
      >
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="relative z-10 order-1 mx-auto max-w-md py-4 text-center lg:col-start-3 lg:mx-0 lg:text-right"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--Primary)]/15 bg-white px-4 py-2 text-xs font-bold text-[var(--Primary)] shadow-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            {t("eyebrow")}
          </div>
          <h1 className="max-w-lg text-4xl font-bold leading-[1.18] tracking-tight text-[var(--TextMain)] sm:text-5xl lg:text-[3.35rem]">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="relative mx-1 inline-block text-[var(--Primary)] after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-[var(--Secondary)]/70 after:content-['']">
                  {chunks}
                </span>
              ),
              accent: (chunks) => (
                <span className="relative mx-1 inline-block text-[var(--Accent)] before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-[88%] before:-translate-x-1/2 before:rounded-full before:bg-[var(--Accent)]/25 before:content-['']">
                  {chunks}
                </span>
              ),
            })}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-end ltr:lg:justify-start">
            <ActionButton href={`/${locale}/auth/register`}>
              {t("primaryAction")}
            </ActionButton>
            <ActionButton href={`/${locale}/how-it-works`} variant="outline">
              {t("secondaryAction")}
              <ArrowLeft
                className="size-4 rtl:rotate-0 ltr:rotate-180"
                aria-hidden="true"
              />
            </ActionButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 lg:justify-end ltr:lg:justify-start">
            <ShieldCheck
              className="size-4 text-[var(--Primary)]"
              aria-hidden="true"
            />
            {t("trustNote")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative order-2 flex min-h-[290px] items-center justify-center sm:min-h-[360px] lg:col-start-1 lg:order-none lg:min-h-[440px]"
        >
          <div className="absolute inset-6 rounded-full bg-white/60 blur-3xl" />
          <Image
            src="/cover/Screenshot_2026-08-25_151138-removebg-preview.png"
            alt={t("logoAlt")}
            width={500}
            height={500}
            className="relative z-10 w-[72%] max-w-[330px] drop-shadow-[0_24px_22px_rgba(0,100,110,0.28)]"
            priority
          />

          {[
            {
              label: t("floatingDoctor"),
              icon: <HeartPulse className="size-5" />,
              className: "left-[calc(50%-36px)] top-0 sm:left-[calc(50%-41px)]",
            },
            {
              label: t("floatingCare"),
              icon: <ShieldCheck className="size-5" />,
              className: "right-0 top-12 sm:right-[-8px]",
            },
            {
              label: t("floatingRecords"),
              icon: <FileHeart className="size-5" />,
              className: "bottom-5 left-0 sm:left-[-8px]",
            },
            {
              label: t("floatingMedication"),
              icon: <Pill className="size-5" />,
              className: "bottom-8 right-0 hidden sm:flex sm:right-[-8px]",
            },
            {
              label: t("floatingFollowup"),
              icon: <Clock3 className="size-5" />,
              className: "left-0 top-12 hidden lg:flex lg:left-[-8px]",
            },
            {
              label: t("floatingVitals"),
              icon: <ScanHeart className="size-5" />,
              className: "bottom-0 left-[calc(50%-41px)] hidden lg:flex",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute z-30 flex size-[72px] flex-col items-center justify-center gap-1 rounded-full border border-white/90 bg-white/90 px-1 text-center text-[9px] font-bold leading-3 text-slate-700 shadow-[0_14px_30px_rgba(0,100,110,0.2)] backdrop-blur-sm sm:size-[82px] sm:text-[10px] ${item.className}`}
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-[var(--Primary)]/10 text-[var(--Primary)]">
                {item.icon}
              </span>
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
