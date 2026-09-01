"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";

import { getLocaleDirection } from "@/i18n/routing";

export default function DirectionSync() {
  const { locale } = useParams<{ locale: string }>();

  useLayoutEffect(() => {
    const direction = getLocaleDirection(locale);

    document.documentElement.lang = locale || "ar";
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [locale]);

  return null;
}
