import { Mail, LockKeyhole } from "lucide-react";

import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthPrimaryButton } from "@/components/auth/AuthPrimaryButton";

export default async function LoginPage({
  params,
}: PageProps<"/[locale]/auth/login">) {
  const { locale } = await params;
  const isRTL = locale === "ar";

  return (
    <AuthShell
      locale={locale}
      mode="login"
      title={isRTL ? "تسجيل الدخول" : "Sign in"}
      subtitle={
        isRTL
          ? "تابع رحلتك الصحية عبر حسابك الشخصي وادخل إلى لوحة التحكم."
          : "Continue your care journey and access your health dashboard."
      }
      footerText={isRTL ? "ليس لديك حساب؟" : "Don’t have an account?"}
      footerLink="register"
      footerLinkLabel={isRTL ? "إنشاء حساب" : "Create one"}
      helper={
        isRTL
          ? "جميع بياناتك محمية، ولا يتم مشاركتها عبر حسابات أخرى."
          : "Your information is protected and kept private under secure access."
      }
    >
      <form className="space-y-4">
        <AuthInput
          label={isRTL ? "البريد الإلكتروني" : "Email"}
          type="email"
          placeholder={isRTL ? "example@email.com" : "example@email.com"}
          icon={<Mail className="size-4" />}
        />

        <AuthInput
          label={isRTL ? "كلمة المرور" : "Password"}
          type="password"
          placeholder={isRTL ? "••••••••" : "••••••••"}
          icon={<LockKeyhole className="size-4" />}
        />

        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="size-4 rounded border-slate-300"
            />
            {isRTL ? "تذكرني" : "Remember me"}
          </label>

          <a
            href={`/${locale}/auth/forgot-password`}
            className="font-medium text-[var(--Primary)] hover:underline"
          >
            {isRTL ? "نسيت كلمة المرور؟" : "Forgot password?"}
          </a>
        </div>

        <div className="pt-2">
          <AuthPrimaryButton href={`/${locale}`}>
            {isRTL ? "تسجيل الدخول" : "Sign in"}
          </AuthPrimaryButton>
        </div>
      </form>
    </AuthShell>
  );
}
