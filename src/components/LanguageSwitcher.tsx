import { useI18n, type Lang } from "@/lib/i18n";

const FLAGS: { code: Lang; label: string; svg: string }[] = [
  {
    code: "en",
    label: "EN",
    // USA flag
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100">
      <rect width="190" height="100" fill="#B22234"/>
      <rect y="7.7" width="190" height="7.7" fill="#fff"/>
      <rect y="23.1" width="190" height="7.7" fill="#fff"/>
      <rect y="38.5" width="190" height="7.7" fill="#fff"/>
      <rect y="53.8" width="190" height="7.7" fill="#fff"/>
      <rect y="69.2" width="190" height="7.7" fill="#fff"/>
      <rect y="84.6" width="190" height="7.7" fill="#fff"/>
      <rect width="76" height="53.8" fill="#3C3B6E"/>
    </svg>`,
  },
  {
    code: "pt",
    label: "PT",
    // Brazil flag
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504">
      <rect width="720" height="504" fill="#009c3b"/>
      <polygon points="360,28 692,252 360,476 28,252" fill="#ffdf00"/>
      <circle cx="360" cy="252" r="108" fill="#002776"/>
      <path d="M252,222 a108,108 0 0,1 216,0" fill="none" stroke="#fff" stroke-width="18"/>
    </svg>`,
  },
  {
    code: "es",
    label: "ES",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">
      <rect width="3" height="2" fill="#c60b1e"/>
      <rect y=".5" width="3" height="1" fill="#ffc400"/>
    </svg>`,
  },
];

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useI18n();
  const base =
    tone === "light"
      ? "text-sand-light/70 hover:text-sand-light"
      : "text-foreground/60 hover:text-foreground";
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
            className={`flex items-center gap-1.5 transition ${lang === f.code ? active : base}`}
          >
            <span
              className="inline-block w-5 h-[14px] rounded-[2px] overflow-hidden shadow-sm"
              aria-hidden
              dangerouslySetInnerHTML={{ __html: f.svg }}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            <span className="hidden sm:inline">{f.label}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
