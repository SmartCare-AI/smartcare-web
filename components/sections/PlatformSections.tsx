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
  CheckCircle2,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      {/* ==================== DOCTORS ==================== */}
      <section id="doctors" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t("doctors.eyebrow")}
            title={t("doctors.title")}
            description={t("doctors.description")}
          />

          <div className="relative mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="!pb-12"
            >
              {doctorKeys.map((doctor, index) => (
                <SwiperSlide key={doctor}>
                  <motion.article
                    initial={{
                      opacity: 0,
                      y: 22,
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
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-[0_12px_32px_rgba(15,85,95,0.08)] transition-shadow hover:shadow-[0_18px_38px_rgba(15,85,95,0.15)]"
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
                      <Star className="size-3.5 fill-current" />
                      {t(`doctors.${doctor}.rating`)}
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {t(`doctors.${doctor}.description`)}
                    </p>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="bg-[linear-gradient(120deg,#e8f8f7_0%,#f8fffe_60%,#edf8f3_100%)] px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
            description={t("testimonials.description")}
          />

          <div className="relative mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="!pb-12"
            >
              {testimonialKeys.map((testimonial, index) => (
                <SwiperSlide key={testimonial}>
                  <motion.figure
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="h-full rounded-3xl border border-white bg-white/85 p-6 shadow-sm"
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
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

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* FAQ Heading */}
          <div className="text-center">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--Primary)]/10 text-[var(--Primary)]">
              <HeartHandshake className="size-6" />
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[var(--TextMain)] sm:text-4xl">
              {t("faq.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {t("faq.description")}
            </p>
          </div>

          {/* Questions */}
          <div className="mt-10 space-y-3">
            {faqKeys.map((faq, index) => {
              const isOpen = activeFaq === faq;

              return (
                <motion.div
                  key={faq}
                  initial={{
                    opacity: 0,
                    y: 12,
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
                    delay: index * 0.06,
                  }}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[var(--Primary)]/20 shadow-[0_12px_30px_rgba(15,85,95,0.07)]"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-right sm:px-6"
                  >
                    <span className="text-sm font-bold text-slate-800 sm:text-base">
                      {t(`faq.${faq}.question`)}
                    </span>

                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--Primary)] text-white"
                          : "bg-[var(--Primary)]/10 text-[var(--Primary)]"
                      }`}
                    >
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                          <p className="text-sm leading-7 text-slate-600">
                            {t(`faq.${faq}.answer`)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SECURITY ==================== */}
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
