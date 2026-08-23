import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function LocaleHome({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations();
  const alternateLocale = locale === "en" ? "ar" : "en";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
      <header className="flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-xl font-semibold tracking-tight"
        >
          {t("common.brand")}
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link
            href={`/${alternateLocale}`}
            className="rounded-md border px-3 py-2 transition-colors hover:bg-black/5"
          >
            {t("common.language")}
          </Link>
          <Link
            href={`/${locale}/login`}
            className="rounded-md bg-[#003366] px-4 py-2 text-white transition-colors hover:bg-[#00284f]"
          >
            {t("common.signIn")}
          </Link>
        </nav>
      </header>

      <section className="grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#0D9488]">
            {t("home.eyebrow")}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#003366] sm:text-7xl">
            {t("home.title")}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            {t("home.description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/signup`}
              className="rounded-md bg-[#003366] px-5 py-3 font-medium text-white transition-colors hover:bg-[#00284f]"
            >
              {t("common.getStarted")}
            </Link>
            <Link
              href={`/${locale}/doctor`}
              className="rounded-md border border-slate-300 px-5 py-3 font-medium text-[#003366] transition-colors hover:bg-white"
            >
              {t("home.doctor")}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <article className="border-l-4 border-[#0D9488] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#003366]">
              {t("home.patient")}
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              {t("home.patientDescription")}
            </p>
          </article>
          <article className="border-l-4 border-[#F59E0B] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#003366]">
              {t("home.doctor")}
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              {t("home.doctorDescription")}
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-5 text-sm text-slate-500">
        {t("home.disclaimer")}
      </footer>
    </main>
  );
}
