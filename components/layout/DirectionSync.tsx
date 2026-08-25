"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";

export default function DirectionSync() {
  const { locale } = useParams<{ locale: string }>();

  useLayoutEffect(() => {
    const direction = locale === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [locale]);

  return null;
}
