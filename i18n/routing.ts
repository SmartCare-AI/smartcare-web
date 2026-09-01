import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localePrefix: "always",
});

export const rtlLocales = new Set(["ar", "fa", "he", "ur"]);

export function getLocaleDirection(locale?: string | null) {
  return locale && rtlLocales.has(locale) ? "rtl" : "ltr";
}

export function getNextLocale(
  locales: readonly string[],
  locale?: string | null,
) {
  if (!locale) return routing.defaultLocale;

  const currentIndex = locales.indexOf(locale);

  if (currentIndex === -1) return routing.defaultLocale;

  return locales[(currentIndex + 1) % locales.length];
}

export type Locale = (typeof routing.locales)[number];
