import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AuthPrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const buttonClasses =
    "inline-flex w-full items-center justify-center gap-2 rounded-[1.2rem] bg-[linear-gradient(135deg,#0ea5a6_0%,#0f766e_100%)] px-5 py-3.5 text-base font-bold text-white shadow-[0_16px_28px_rgba(15,118,110,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_rgba(15,118,110,0.32)]";

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
        <ArrowRight className="size-4" />
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClasses}>
      {children}
      <ArrowRight className="size-4" />
    </button>
  );
}
