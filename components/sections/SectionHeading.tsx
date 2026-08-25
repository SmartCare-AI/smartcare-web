"use client";

import { Sparkles } from "lucide-react";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 text-sm font-bold text-[var(--Primary)]">
        <Sparkles className="size-4" />
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[var(--TextMain)] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
