import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/cadastrosqrcode")({
  head: () => ({
    meta: [
      { title: "Kelly Belem — Let's stay in touch" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Leave your details and Kelly Belem will be in touch soon.",
      },
      { property: "og:title", content: "Kelly Belem — Let's stay in touch" },
      {
        property: "og:description",
        content: "Leave your details and Kelly Belem will be in touch soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: QrCodePage,
});

type Lang = "en" | "pt" | "es";

const translations = {
  en: {
    subtitle: "REAL ESTATE ADVISOR · KELLER WILLIAMS",
    title: "Let's stay in touch.",
    subtitle_form: "Leave your details and I'll be in touch soon.",
    name_placeholder: "Full name",
    email_placeholder: "E-mail",
    phone_placeholder: "Phone (with country code)",
    address_placeholder: "Address (optional)",
    submit: "Send",
    submitting: "Sending...",
    error: "Something went wrong. Please try again in a moment.",
    footer: "Your information is used only for contact by Kelly Belem.",
    wa_message: "Hello Kelly, I just filled out the form on your website.",
    invalid_name: "Please enter your full name.",
    invalid_email: "Please enter a valid e-mail.",
    invalid_phone: "Please enter a valid phone number.",
  },
  pt: {
    subtitle: "CORRETORA DE IMÓVEIS · KELLER WILLIAMS",
    title: "Vamos manter contato.",
    subtitle_form: "Deixe seus dados e eu falo com você em breve.",
    name_placeholder: "Nome completo",
    email_placeholder: "E-mail",
    phone_placeholder: "Telefone (com código do país)",
    address_placeholder: "Endereço (opcional)",
    submit: "Enviar",
    submitting: "Enviando...",
    error: "Algo deu errado. Tente novamente em instantes.",
    footer: "Seus dados são usados apenas para contato pela Kelly Belem.",
    wa_message: "Olá Kelly, acabei de preencher o cadastro no seu site.",
    invalid_name: "Informe seu nome completo.",
    invalid_email: "Informe um e-mail válido.",
    invalid_phone: "Informe um telefone válido.",
  },
  es: {
    subtitle: "ASESORA INMOBILIARIA · KELLER WILLIAMS",
    title: "Mantengamos el contacto.",
    subtitle_form: "Deje sus datos y me pondré en contacto pronto.",
    name_placeholder: "Nombre completo",
    email_placeholder: "Correo electrónico",
    phone_placeholder: "Teléfono (con código de país)",
    address_placeholder: "Dirección (opcional)",
    submit: "Enviar",
    submitting: "Enviando...",
    error: "Algo salió mal. Inténtelo de nuevo en un momento.",
    footer: "Sus datos son usados solo para contacto por Kelly Belem.",
    wa_message: "Hola Kelly, acabo de completar el formulario en su sitio.",
    invalid_name: "Ingrese su nombre completo.",
    invalid_email: "Ingrese un correo electrónico válido.",
    invalid_phone: "Ingrese un teléfono válido.",
  },
} as const;

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzbLpdXyPdwm87EU-mMj1MyWxgqpp53_edLBl8ySwAQpfUSjP6Biuh7qZGmY8BepqPV/exec";

const LANGS: Lang[] = ["en", "pt", "es"];

function isLang(v: string | null | undefined): v is Lang {
  return v === "en" || v === "pt" || v === "es";
}

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("kb_lang");
  if (isLang(stored)) return stored;
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("es")) return "es";
  return "en";
}

function track(fn: () => void) {
  try {
    fn();
  } catch {
    /* tracking must never break the form */
  }
}

function pushDataLayer(payload: Record<string, unknown>) {
  track(() => {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(payload);
  });
}

function fbq(...args: unknown[]) {
  track(() => {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    w.fbq?.(...args);
  });
}

function maskPhone(value: string) {
  const plus = value.trim().startsWith("+");
  const digits = value.replace(/\D/g, "").slice(0, 15);
  if (!digits) return plus ? "+" : "";
  const parts: string[] = [];
  if (digits.length <= 4) parts.push(digits);
  else {
    parts.push(digits.slice(0, digits.length > 11 ? 3 : 2));
    const rest = digits.slice(parts[0].length);
    parts.push(rest.slice(0, Math.max(rest.length - 4, 0)));
    parts.push(rest.slice(Math.max(rest.length - 4, 0)));
  }
  return `${plus ? "+" : ""}${parts.filter(Boolean).join(" ")}`;
}

const inputClass =
  "w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/60 py-3.5 outline-none transition-colors focus:border-[#C9A96E] focus-visible:border-[#C9A96E] text-[15px]";

function QrCodePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const viewFired = useRef(false);
  const t = translations[lang];

  useEffect(() => {
    const initial = detectLang();
    setLang(initial);
    if (!viewFired.current) {
      viewFired.current = true;
      fbq("track", "ViewContent", {
        content_name: "qrcode_page",
        content_category: initial,
      });
      pushDataLayer({
        event: "qrcode_page_view",
        page_name: "cadastros_qrcode",
        language: initial,
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function changeLang(next: Lang) {
    if (next === lang) return;
    pushDataLayer({
      event: "qrcode_language_switch",
      page_name: "cadastros_qrcode",
      language_from: lang,
      language_to: next,
    });
    window.localStorage.setItem("kb_lang", next);
    setLang(next);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const endereco = String(data.get("endereco") ?? "").trim();

    if (nome.length < 2) return setError(t.invalid_name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return setError(t.invalid_email);
    if (telefone.replace(/\D/g, "").length < 8) return setError(t.invalid_phone);

    setSending(true);

    // Open WhatsApp immediately (before await) to prevent popup/navigation blockers on mobile
    const waUrl = `https://wa.me/17869198370?text=${encodeURIComponent(t.wa_message)}`;
    window.open(waUrl, '_blank');

    try {
      const body = new URLSearchParams();
      body.append("NOME", nome);
      body.append("EMAIL", email);
      body.append("TELEFONE", telefone);
      body.append("ENDERECO", endereco);
      body.append("IDIOMA", lang.toUpperCase());

      // Use no-cors to avoid CORS errors from Google Apps Script
      await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body });

      fbq("track", "Lead", {
        content_name: "qrcode_form",
        content_category: lang,
      });
      pushDataLayer({
        event: "qrcode_lead_submit",
        form_name: "cadastros_qrcode",
        language: lang,
      });

      form.reset();
      setPhone("");
    } catch {
      setError(t.error);
    } finally {
      setSending(false);
    }
  }

  return (
    <main
      className="relative min-h-[100svh] w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/kelly-bg.jpg')" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.58) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-md flex-col px-6 py-5">
        <div className="flex justify-end gap-3 text-[11px] uppercase tracking-[0.15em]">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => changeLang(code)}
              aria-pressed={lang === code}
              className={`transition-colors ${lang === code ? "text-[#C9A96E]" : "text-white/60 hover:text-white"}`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <header className="mt-4 text-center">
          <h1
            className="text-[24px] leading-none tracking-[0.18em] text-white"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            KELLY BELEM
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A96E]">
            {t.subtitle}
          </p>
        </header>

        <section className="flex flex-1 flex-col justify-center py-6">
          <h2
            className="text-[22px] text-white"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {t.title}
          </h2>
          <p className="mt-1.5 text-[14px] leading-snug text-white/80">{t.subtitle_form}</p>

          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-1">
            <label htmlFor="qr-nome" className="sr-only">
              {t.name_placeholder}
            </label>
            <input
              id="qr-nome"
              name="nome"
              type="text"
              autoComplete="name"
              required
              placeholder={t.name_placeholder}
              className={inputClass}
            />

            <label htmlFor="qr-email" className="sr-only">
              {t.email_placeholder}
            </label>
            <input
              id="qr-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={t.email_placeholder}
              className={inputClass}
            />

            <label htmlFor="qr-telefone" className="sr-only">
              {t.phone_placeholder}
            </label>
            <input
              id="qr-telefone"
              name="telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              placeholder={t.phone_placeholder}
              className={inputClass}
            />

            <label htmlFor="qr-endereco" className="sr-only">
              {t.address_placeholder}
            </label>
            <input
              id="qr-endereco"
              name="endereco"
              type="text"
              autoComplete="street-address"
              placeholder={t.address_placeholder}
              className={inputClass}
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-[2px] bg-[#C9A96E] py-4 text-[14px] font-semibold uppercase tracking-[0.15em] text-[#0F1E2D] transition-opacity disabled:opacity-70"
            >
              {sending ? t.submitting : t.submit}
            </button>

            {error && (
              <p role="alert" className="pt-3 text-center text-[12px] text-[#C9A96E]">
                {error}
              </p>
            )}
          </form>
        </section>

        <footer className="pb-1 text-center text-[11px] text-white/60">{t.footer}</footer>
      </div>
    </main>
  );
}
