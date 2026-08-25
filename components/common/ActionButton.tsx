import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function ActionButton({
  href,
  children,
  variant = "primary",
  className,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--Primary)]",
        variant === "primary"
          ? "bg-[var(--Primary)] text-white shadow-[0_8px_20px_rgba(0,168,150,0.2)] hover:bg-[var(--Primary2)]"
          : "border border-slate-200 bg-white text-slate-800 hover:border-[var(--Primary)] hover:text-[var(--Primary)]",
        className,
      )}
    >
      {children}
      {variant === "primary" ? (
        <ArrowLeft
          className="size-4 rtl:rotate-0 ltr:rotate-180"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
