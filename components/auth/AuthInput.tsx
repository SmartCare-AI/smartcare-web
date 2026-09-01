import { cn } from "@/lib/utils";

export function AuthInput({
  label,
  type = "text",
  placeholder,
  icon,
  endAdornment,
}: {
  label: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
  endAdornment?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-semibold text-slate-700">
        {label}
      </span>
      <div
        className={cn(
          "flex items-center gap-3 rounded-[1.2rem] border border-slate-200 bg-[#f8faf9] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-200 focus-within:border-[#10b8a8] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(16,184,168,0.08)]",
        )}
      >
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border-0 bg-transparent text-base text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
        {endAdornment}
      </div>
    </label>
  );
}
