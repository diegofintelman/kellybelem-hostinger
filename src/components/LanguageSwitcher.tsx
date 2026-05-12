import { useI18n, type Lang } from "@/lib/i18n";

const FLAGS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useI18n();
  const base = tone === "light" ? "text-sand-light/70 hover:text-sand-light" : "text-foreground/60 hover:text-foreground";
  const active = tone === "light" ? "text-gold" : "text-terracotta";

  return (
    <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase">
      {FLAGS.map((f, i) => (
        <span key={f.code} className="flex items-center gap-2">
          {i > 0 && <span className={`opacity-30 ${base}`}>·</span>}
          <button
            type="button"
            onClick={() => setLang(f.code)}
            aria-label={`Switch language to ${f.label}`}
            className={`flex items-center gap-1 transition ${lang === f.code ? active : base}`}
          >
            <span className="text-base leading-none" aria-hidden>{f.flag}</span>
            <span className="hidden sm:inline">{f.label}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
