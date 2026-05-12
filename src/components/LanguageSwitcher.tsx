import { useI18n, type Lang } from "@/lib/i18n";

const FLAGS: { code: Lang; label: string; svg: string }[] = [
  {
    code: "en",
    label: "EN",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
      <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
      <clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
      <g clip-path="url(#a)">
        <path d="M0 0v30h60V0z" fill="#012169"/>
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/>
        <path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/>
        <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
        <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
      </g>
    </svg>`,
  },
  {
    code: "pt",
    label: "PT",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
      <rect width="900" height="600" fill="#006600"/>
      <rect width="360" height="600" fill="#FF0000"/>
      <circle cx="360" cy="300" r="120" fill="#FFD700"/>
      <circle cx="360" cy="300" r="105" fill="#003399"/>
      <circle cx="360" cy="300" r="70" fill="#fff"/>
      <circle cx="360" cy="300" r="55" fill="#003399"/>
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
