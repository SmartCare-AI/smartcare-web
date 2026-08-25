"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  HeartHandshake,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

const doctorKeys = ["sara", "omar", "nour", "youssef", "mariam"] as const;
const testimonialKeys = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
] as const;
const partnerKeys = ["hospital", "labs", "pharmacy", "insurance"] as const;
const faqKeys = ["records", "privacy", "doctors", "medications"] as const;

function PlatformSections() {
  const t = useTranslations("home.platform");
  const [activeFaq, setActiveFaq] = useState<string | null>("records");

  return (
    <div className="overflow-hidden">
      <section id="doctors" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t("doctors.eyebrow")}
            title={t("doctors.title")}
            description={t("doctors.description")}
          />
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {doctorKeys.map((doctor, index) => (
              <motion.article
                key={doctor}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group min-w-[78%] snap-start rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-[0_12px_32px_rgba(15,85,95,0.08)] transition-shadow hover:shadow-[0_18px_38px_rgba(15,85,95,0.15)] sm:min-w-[43%] lg:min-w-[calc((100%-3.75rem)/4)]"
              >
                <Image
                  src={`/doctors/doctor${(index % 3) + 1}.jpg`}
                  alt={t(`doctors.${doctor}.name`)}
                  width={320}
                  height={320}
                  className="mx-auto aspect-square w-full rounded-2xl object-cover"
                />
                <h3 className="mt-5 text-lg font-bold text-[var(--TextMain)]">
                  {t(`doctors.${doctor}.name`)}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--Primary)]">
                  {t(`doctors.${doctor}.specialty`)}
                </p>
                <div className="mx-auto mt-4 flex w-fit items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                  <Star className="size-3.5 fill-current" />{" "}
                  {t(`doctors.${doctor}.rating`)}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {t(`doctors.${doctor}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#e8f8f7_0%,#f8fffe_60%,#edf8f3_100%)] px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
            description={t("testimonials.description")}
          />
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {testimonialKeys.map((testimonial, index) => (
              <motion.figure
                key={testimonial}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="min-w-[82%] snap-start rounded-3xl border border-white bg-white/85 p-6 shadow-sm sm:min-w-[46%] lg:min-w-[calc((100%-3.75rem)/4)]"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-7 text-slate-600">
                  “{t(`testimonials.${testimonial}.quote`)}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src={`/doctors/doctor${(index % 3) + 1}.jpg`}
                    alt=""
                    width={48}
                    height={48}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {t(`testimonials.${testimonial}.name`)}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t(`testimonials.${testimonial}.role`)}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-100 bg-white px-6 py-10 shadow-[0_12px_32px_rgba(15,85,95,0.07)] sm:px-10">
          <SectionHeading
            eyebrow={t("partners.eyebrow")}
            title={t("partners.title")}
            description={t("partners.description")}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partnerKeys.map((partner) => (
              <div
                key={partner}
                className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center"
              >
                <Image
                  src={`/hosbitals/${["images.jpg", "logo.png", "OurPartners_20230115111846.jpg", "OurPartners_20260120161936.jpg"][partnerKeys.indexOf(partner)]}`}
                  alt={t(`partners.${partner}`)}
                  width={110}
                  height={64}
                  className="mb-3 h-12 w-24 object-contain mix-blend-multiply"
                />
                <span className="text-sm font-bold text-slate-700">
                  {t(`partners.${partner}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="text-center lg:text-right">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--Primary)]/10 text-[var(--Primary)]">
              <HeartHandshake className="size-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[var(--TextMain)] sm:text-4xl">
              {t("faq.title")}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {t("faq.description")}
            </p>
          </div>
          <div className="space-y-3">
            {faqKeys.map((faq) => {
              const isOpen = activeFaq === faq;
              return (
                <div
                  key={faq}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right text-sm font-bold text-slate-800"
                  >
                    {t(`faq.${faq}.question`)}
                    <ChevronDown
                      className={`size-5 shrink-0 text-[var(--Primary)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-5 pb-5 text-sm leading-7 text-slate-600"
                      >
                        {t(`faq.${faq}.answer`)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="privacy" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[var(--TextMain)] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
          <div className="text-center lg:text-right">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <LockKeyhole className="size-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              {t("security.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              {t("security.description")}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["encryption", "control", "verified", "care"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <ShieldCheck className="size-5 text-emerald-300" />
                <p className="mt-3 text-sm font-bold">
                  {t(`security.${item}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 text-sm font-bold text-[var(--Primary)]">
        <Sparkles className="size-4" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--TextMain)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default PlatformSections;
