import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getLocaleDirection, routing } from "@/i18n/routing";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import DirectionSync from "@/components/layout/DirectionSync";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const isRTL = getLocaleDirection(locale) === "rtl";

  const common = await getTranslations({ locale, namespace: "common" });
  const home = await getTranslations({ locale, namespace: "home" });

  const brand = common("brand");
  const title = String(home.raw("title")).replace(/<[^>]+>/g, "");
  const description = home("description");

  const keywords = isRTL
    ? [
        "شفاء",
        "رعاية صحية ذكية",
        "منصة طبية",
        "ملف طبي",
        "أدوية",
        "دعم سريري",
        "ذكاء اصطناعي طبي",
      ]
    : [
        "SHIFAA",
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
      locale: isRTL ? "ar_EG" : "en_US",
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

  return (
    <NextIntlClientProvider>
      <DirectionSync />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
