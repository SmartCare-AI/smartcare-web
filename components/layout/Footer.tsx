"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { NAVIGATION_LINKS } from "@/types/navLinks";

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

function StoreBadge({
  href,
  label,
  store,
  icon,
}: {
  href: string;
  label: string;
  store: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-w-[155px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--Primary)] hover:shadow-md"
      aria-label={`${label} ${store}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-start leading-tight">
        <span className="block text-[10px] text-slate-500">{label}</span>
        <span className="block text-sm font-semibold">{store}</span>
      </span>
    </a>
  );
}

function Footer() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();

  return (
    <footer id="contact">
      <div className="mx-auto w-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        <div className="px-6 pb-7 pt-12 lg:px-10 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-12 border-b border-slate-100 pb-12 lg:grid-cols-[1.2fr_1fr_1fr_1.35fr]"
          >
            <div className="max-w-xs">
              <Link href={`/${locale}`} aria-label={t("footer.brand")}>
                <Image
                  src="/Logo/Logo.png"
                  alt={t("footer.brand")}
                  width={144}
                  height={48}
                  className="h-12 w-auto rounded-md bg-white object-contain px-2"
                />
              </Link>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {t("footer.description")}
              </p>
              <div className="mt-6 flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[var(--Primary)] hover:bg-[var(--Primary)] hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {t("footer.quickLinks")}
              </h2>
              <nav className="mt-5 flex flex-col items-start gap-3">
                {NAVIGATION_LINKS.slice(0, 5).map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href === "/" ? "" : item.href}`}
                    className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-[var(--Primary)]"
                  >
                    {t(`footer.links.${item.labelKey.replace("nav.", "")}`)}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100 rtl:-rotate-90" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {t("footer.platform")}
              </h2>
              <nav className="mt-5 flex flex-col items-start gap-3">
                <Link
                  href={`/${locale}/patient`}
                  className="text-sm text-slate-500 transition-colors hover:text-[var(--Primary)]"
                >
                  {t("footer.patient")}
                </Link>
                <Link
                  href={`/${locale}/doctor`}
                  className="text-sm text-slate-500 transition-colors hover:text-[var(--Primary)]"
                >
                  {t("footer.doctor")}
                </Link>
                <Link
                  href={`/${locale}/caregiver`}
                  className="text-sm text-slate-500 transition-colors hover:text-[var(--Primary)]"
                >
                  {t("footer.caregiver")}
                </Link>
                <Link
                  href={`/${locale}/emergency`}
                  className="text-sm text-slate-500 transition-colors hover:text-[var(--Primary)]"
                >
                  {t("footer.emergency")}
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {t("footer.downloadTitle")}
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
                {t("footer.downloadDescription")}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <StoreBadge
                  href="#"
                  label={t("footer.downloadOn")}
                  store="App Store"
                  icon={<FaApple />}
                />
                <StoreBadge
                  href="#"
                  label={t("footer.getItOn")}
                  store="Google Play"
                  icon={<FaGooglePlay />}
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
            <div className="flex gap-5">
              <Link
                href="#"
                className="transition-colors hover:text-[var(--Primary)]"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-[var(--Primary)]"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
