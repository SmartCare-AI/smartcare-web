import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function LocaleHome({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  return <div></div>;
}
