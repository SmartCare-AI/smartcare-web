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

const testimonialKeys = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
] as const;

function TestimonialsSection() {
  const t = useTranslations("home.platform");

  return (
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
                  className="flex h-56 flex-col rounded-3xl border border-white bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className="size-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    &ldquo;{t(`testimonials.${testimonial}.quote`)}&rdquo;
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    <Image
                      src={`/pepole/pep${(index % 6) + 1}.jpg`}
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
  );
}

export default TestimonialsSection;
