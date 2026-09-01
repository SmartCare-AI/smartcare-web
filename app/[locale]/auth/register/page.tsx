import { Mail, LockKeyhole, UserRound, Phone } from "lucide-react";

import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthPrimaryButton } from "@/components/auth/AuthPrimaryButton";

export default async function RegisterPage({
  params,
}: PageProps<"/[locale]/auth/register">) {
  const { locale } = await params;
  const isRTL = locale === "ar";

  return (
    <AuthShell
      locale={locale}
      mode="register"
      title={isRTL ? "إنشاء حساب" : "Create account"}
      subtitle={
        isRTL
          ? "ابدأ رحلتك الصحية الآن مع ملفك الرقمي وملفك الشخصي الآمن."
          : "Start your health journey with a secure digital profile and personalized care access."
      }
      footerText={isRTL ? "لديك حساب بالفعل؟" : "Already have an account?"}
      footerLink="login"
      footerLinkLabel={isRTL ? "تسجيل الدخول" : "Sign in"}
      helper={
        isRTL
          ? "سيساعدك هذا الحساب في متابعة ملفاتك، أدويةك، ومواعيدك بسهولة."
          : "Your account will help you manage records, medication, and care updates in one place."
      }
    >
      <form className="space-y-4">
        <AuthInput
          label={isRTL ? "الاسم الكامل" : "Full name"}
          type="text"
          placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
          icon={<UserRound className="size-4" />}
        />

        <AuthInput
          label={isRTL ? "البريد الإلكتروني" : "Email"}
          type="email"
          placeholder={isRTL ? "example@email.com" : "example@email.com"}
          icon={<Mail className="size-4" />}
        />

        <AuthInput
          label={isRTL ? "رقم الهاتف" : "Phone number"}
          type="tel"
          placeholder={isRTL ? "+966 500 000 000" : "+966 500 000 000"}
          icon={<Phone className="size-4" />}
        />

        <AuthInput
          label={isRTL ? "كلمة المرور" : "Password"}
          type="password"
          placeholder={isRTL ? "••••••••" : "••••••••"}
          icon={<LockKeyhole className="size-4" />}
        />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-500">
          {isRTL
            ? "بإنشاء الحساب أنت توافق على الشروط وسياسة الخصوصية."
            : "By creating an account, you agree to the terms and privacy policy."}
        </div>

        <div className="pt-2">
          <AuthPrimaryButton href={`/${locale}`}>
            {isRTL ? "إنشاء الحساب" : "Create account"}
          </AuthPrimaryButton>
        </div>
      </form>
    </AuthShell>
  );
}
