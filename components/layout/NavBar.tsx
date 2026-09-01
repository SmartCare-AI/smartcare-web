"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { NAVIGATION_LINKS } from "@/types/navLinks";
import ActionButton from "@/components/common/ActionButton";
import { getNextLocale, routing } from "@/i18n/routing";

function NavBar() {
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLocale = () => {
    const nextLocale = getNextLocale(routing.locales, locale);
    const pathWithoutLocale =
      pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "/";
    router.push(`/${nextLocale}${pathWithoutLocale}`);
  };

  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    return href === "#hero" ? currentPath === "/" : false;
  };

  return (
    // First motion.nav for the entire navbar with initial, animate, and transition props
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-7xl rounded-lg lg:rounded-full md:rounded-4xl border border-slate-100 bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-6"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href={`/${locale}`}
          className="shrink-0 "
          aria-label={t("common.brand")}
        >
          <Image
            src="/Logo/Logo.png"
            alt={t("common.brand")}
            width={144}
            height={48}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>
        {/* Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAVIGATION_LINKS.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05, duration: 0.35 }}
            >
              <Link
                href={`/${locale}${item.href}`}
                className={`relative whitespace-nowrap text-md font-semibold transition-colors ${isActive(item.href) ? "text-[var(--Primary)]" : "text-slate-700 hover:text-[var(--Primary)]"}`}
              >
                {t(`common.${item.labelKey}`)}
                {isActive(item.href) ? (
                  <span className="absolute -bottom-3 right-0 left-0 h-0.5 rounded-full bg-[var(--Primary)]" />
                ) : null}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Language Switcher and Action Buttons */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={switchLocale}
            className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[var(--Primary)]"
            aria-label={t("common.languageLabel")}
          >
            <Languages className="size-4" aria-hidden="true" />
            <span>{t("common.language")}</span>
          </button>
          <ActionButton href={`/${locale}/auth/login`} variant="outline">
            {t("common.signIn")}
          </ActionButton>
          <ActionButton href={`/${locale}/auth/register`}>
            {t("common.getStarted")}
          </ActionButton>
        </div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex size-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-50 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-4 px-2 pb-2 pt-5">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-semibold text-slate-700 hover:text-[var(--Primary)]"
                >
                  {t(`common.${item.labelKey}`)}
                </Link>
              ))}
              <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={switchLocale}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-xs font-semibold"
                >
                  <Languages className="size-4" />
                  {t("common.language")}
                </button>
                <ActionButton href={`/${locale}/auth/login`} variant="outline">
                  {t("common.signIn")}
                </ActionButton>
                <ActionButton href={`/${locale}/auth/register`}>
                  {t("common.getStarted")}
                </ActionButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
