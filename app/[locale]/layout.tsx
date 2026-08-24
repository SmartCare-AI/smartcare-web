import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const common = await getTranslations({ locale, namespace: "common" });
  const home = await getTranslations({ locale, namespace: "home" });

  const brand = common("brand");
  const title = home("title");
  const description = home("description");

  const keywords = isArabic
    ? [
        "شفاء AI",
        "رعاية صحية ذكية",
        "منصة طبية",
        "ملف طبي",
        "أدوية",
        "دعم سريري",
        "ذكاء اصطناعي طبي",
      ]
    : [
        "SHIFAA AI",
        "intelligent healthcare",
        "healthcare platform",
        "medical records",
        "medications",
        "clinical support",
        "medical AI assistant",
      ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: `${title} | ${brand}`,
      description,
      type: "website",
      siteName: brand,
      locale: isArabic ? "ar_EG" : "en_US",
      url: `/${locale}`,
      images: [
        {
          url: "/cover/iphone_cover.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${brand}`,
      description,
      images: ["/cover/iphone_cover.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
