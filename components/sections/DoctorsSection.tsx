"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionHeading from "./SectionHeading";

const doctorKeys = ["sara", "omar", "nour", "youssef", "mariam"] as const;

function DoctorsSection() {
  const t = useTranslations("home.platform");

  return (
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
                    src={`/doctors/doctor${(index % 6) + 1}.jpg`}
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
  );
}

export default DoctorsSection;
