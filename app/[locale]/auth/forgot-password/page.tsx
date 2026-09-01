import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthPrimaryButton } from "@/components/auth/AuthPrimaryButton";

export default async function ForgotPasswordPage({
  params,
}: PageProps<"/[locale]/auth/forgot-password">) {
  const { locale } = await params;
  const isRTL = locale === "ar";

  return (
    <AuthShell
      locale={locale}
      mode="forgot"
      title={isRTL ? "استعادة الحساب" : "Forgot password"}
      subtitle={
        isRTL
          ? "أدخل بريدك الإلكتروني وسنرسل لك تعليمات إعادة تعيين كلمة المرور."
          : "Enter your email address and we’ll send reset instructions to help you get back in."
      }
      footerText={isRTL ? "تذكرت كلمة المرور؟" : "Remembered your password?"}
      footerLink="login"
      footerLinkLabel={isRTL ? "تسجيل الدخول" : "Sign in"}
    >
      <form className="space-y-4">
        <AuthInput
          label={isRTL ? "البريد الإلكتروني" : "Email address"}
          type="email"
          placeholder={isRTL ? "example@email.com" : "example@email.com"}
          icon={<Mail className="size-4" />}
        />

        <div className="pt-2">
          <AuthPrimaryButton href={`/${locale}/auth/login`}>
            {isRTL ? "إرسال التعليمات" : "Send instructions"}
          </AuthPrimaryButton>
        </div>

        <Link
          href={`/${locale}/auth/login`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[var(--Primary)]"
        >
          <ArrowLeft className="size-4" />
          {isRTL ? "العودة إلى تسجيل الدخول" : "Back to sign in"}
        </Link>
      </form>
    </AuthShell>
  );
}
