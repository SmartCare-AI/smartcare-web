"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";

const faqKeys = ["records", "privacy", "doctors", "medications"] as const;

function FaqSection() {
  const { locale } = useParams<{ locale?: string }>();
  const t = useTranslations("home.platform");
  const [activeFaq, setActiveFaq] = useState<string | null>("records");
  const isRTL = locale === "ar";

  return (
    <section
      id="faq"
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:py-24"
    >
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
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-start sm:px-6"
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
  );
}

export default FaqSection;
