"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import SectionHeading from "./SectionHeading";

const partnerKeys = ["hospital", "labs", "pharmacy", "insurance"] as const;

function PartnersSection() {
  const t = useTranslations("home.platform");

  return (
    <section
      id="partners"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--Primary)]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("partners.eyebrow")}
          title={t("partners.title")}
          description={t("partners.description")}
        />

        {/* Partners */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {partnerKeys.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{
                opacity: 0,
                y: 18,
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
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,85,95,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--Primary)]/20 hover:shadow-[0_18px_40px_rgba(15,85,95,0.10)]"
            >
              {/* Hover glow */}
              <div className="absolute inset-x-8 top-0 h-20 rounded-full bg-[var(--Primary)]/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-16 w-28 items-center justify-center">
                <Image
                  src={`/hosbitals/${
                    [
                      "images.jpg",
                      "logo.png",
                      "OurPartners_20230115111846.jpg",
                      "OurPartners_20260120161936.jpg",
                    ][index]
                  }`}
                  alt={t(`partners.${partner}`)}
                  width={140}
                  height={80}
                  className="h-14 w-24 object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

              <span className="relative mt-4 text-center text-sm font-bold text-slate-700 transition-colors group-hover:text-[var(--Primary)]">
                {t(`partners.${partner}`)}
              </span>

              <div className="mt-2 h-1 w-0 rounded-full bg-[var(--Primary)] transition-all duration-300 group-hover:w-8" />
            </motion.div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-medium text-slate-500 sm:text-sm">
          <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
          <span>{t("partners.trust")}</span>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
