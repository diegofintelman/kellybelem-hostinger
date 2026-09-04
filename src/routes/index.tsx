import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import kellyImg from "@/assets/kelly.jpg";
import kellyAward1 from "@/assets/kelly-award-1.jpg";
import kellyAward2 from "@/assets/kelly-award-2.jpg";
import kellyTestimonialsBg from "@/assets/kelly-testimonials-bg.jpg";
import heroFacade from "@/assets/hero-facade.webp";
import c1 from "@/assets/cottage-1.webp";
import c1a from "@/assets/cottage1-a.jpg";
import c2 from "@/assets/cottage-2.webp";
import c2a from "@/assets/cottage2-a.jpg";
import c2b from "@/assets/cottage2-b.jpg";
import c2c from "@/assets/cottage2-c.jpg";
import c2d from "@/assets/cottage2-d.jpg";
import c3 from "@/assets/cottage-3.webp";
import c3a from "@/assets/cottage3-a.jpg";
import c3b from "@/assets/cottage3-b.jpg";
import c3c from "@/assets/cottage3-c.jpg";
import c3d from "@/assets/cottage3-d.jpg";
import c4 from "@/assets/cottage-4.webp";
import c4a from "@/assets/cottage4-a.jpg";
import c4b from "@/assets/cottage4-b.jpg";
import c4c from "@/assets/cottage4-c.jpg";
import c4d from "@/assets/cottage4-d.jpg";
import bungalow from "@/assets/bungalow.webp";
import ruina from "@/assets/ruina.webp";
import c5a from "@/assets/cottage5-a.jpg";
import c5b from "@/assets/cottage5-b.jpg";
import c5c from "@/assets/cottage5-c.jpg";
import c5d from "@/assets/cottage5-d.jpg";
import c5e from "@/assets/cottage5-e.jpg";
import rA from "@/assets/ruina-a.jpg";
import rB from "@/assets/ruina-b.jpg";
import rC from "@/assets/ruina-c.jpg";
import rD from "@/assets/ruina-d.jpg";
import rE from "@/assets/ruina-e.jpg";
import rF from "@/assets/ruina-f.jpg";
import rG from "@/assets/ruina-g.jpg";
import rH from "@/assets/ruina-h.jpg";
import rI from "@/assets/ruina-i.jpg";
import rJ from "@/assets/ruina-j.jpg";
import historyBg from "@/assets/history-bg.webp";
import taxBg from "@/assets/tax-bg.jpg";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Coral Rock Village · 1301 Milan Ave, Coral Gables · US$ 3,200,000" },
      { name: "description", content: "A historic 1929 estate in Coral Gables. Five oolitic coral stone cottages on a full city block. Local Historic Landmark. Represented by Kelly Belem · Keller Williams." },
      { property: "og:title", content: "The Coral Rock Village · Coral Gables" },
      { property: "og:description", content: "An entire block. Five cottages. First time on the market in two decades." },
      { property: "og:image", content: heroFacade },
    ],
  }),
  component: () => (
    <I18nProvider>
      <Index />
    </I18nProvider>
  ),
});

const COTTAGE_IMAGES: Record<string, string> = {
  madrid: heroFacade, c1, c2, c3, c4, c5: c5a, bungalow, ruina,
};
const COTTAGE_GALLERIES: Record<string, string[]> = {
  c1: [c1a],
  c2: [c2a, c2b, c2c, c2d],
  c3: [c3a, c3b, c3c, c3d],
  c4: [c4a, c4b, c4c, c4d],
  c5: [c5a, c5b, c5c, c5d, c5e],
  ruina: [ruina, rA, rB, rC, rD, rE, rF, rG, rH, rI, rJ],
};

function Index() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const waUrl = `https://wa.me/17869198370?text=${encodeURIComponent(t.contact.waMsg)}`;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/20 border-b border-border/30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-1 md:py-1.5 flex items-center justify-between gap-3">
          <a href="#top" className="font-display text-[0.6rem] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase leading-tight max-w-[55%] md:max-w-none">The Coral Rock Village</a>
          <nav className="hidden md:flex gap-8 text-[0.65rem] uppercase tracking-[0.22em] text-foreground">
            <a href="#historia" className="hover:text-terracotta transition">{t.nav.history}</a>
            <a href="#propriedade" className="hover:text-terracotta transition">{t.nav.property}</a>
            <a href="#investimento" className="hover:text-terracotta transition">{t.nav.investment}</a>
            <a href="#kelly" className="hover:text-terracotta transition">{t.nav.kelly}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher tone="dark" />
            <a href="#contato" onClick={scrollToContact} className="hidden md:inline-block text-[0.65rem] uppercase tracking-[0.22em] bg-terracotta text-primary-foreground px-5 py-2 hover:bg-terracotta-dark transition">{t.nav.cta}</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline preload="metadata" poster={heroFacade}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/80" />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 md:pb-28 text-sand-light">
          <div className="flex items-center gap-3 mb-6 text-[0.7rem] tracking-[0.32em] uppercase">
            <span className="w-10 h-px bg-gold" />
            <span>{t.hero.location}</span>
            <span className="text-gold">·</span>
            <span>{t.hero.price}</span>
          </div>
          <h1 className="font-display font-medium text-[2.4rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-5xl">
            {t.hero.h1a}<br />{t.hero.h1b}<br />
            <span className="font-italic-serif text-gold">{t.hero.h1c}</span>
          </h1>
          <p className="font-italic-serif text-xl md:text-2xl mt-6 text-sand opacity-90 max-w-3xl">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <a href="#contato" onClick={scrollToContact} className="bg-terracotta hover:bg-terracotta-dark transition text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.28em]">
              {t.hero.ctaPrimary}
            </a>
            <a href="#historia" className="text-xs uppercase tracking-[0.28em] border-b border-gold pb-1 hover:text-gold transition">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-sand-light/20 bg-navy/40 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex justify-between text-[0.65rem] tracking-[0.3em] uppercase text-sand-light/80">
            <span>{t.hero.rail1}</span>
            <span className="hidden md:inline">{t.hero.rail2}</span>
            <span>{t.hero.rail3}</span>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-ink text-sand-light py-5 md:py-6 overflow-hidden">
        <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-6 md:gap-16 px-4 md:px-12 text-[0.55rem] md:text-xs tracking-[0.25em] md:tracking-[0.4em] uppercase opacity-80 justify-center items-center">
          <span>Reuters</span><span className="text-gold text-[0.5rem] md:text-xs">◆</span>
          <span>Associated Press</span><span className="text-gold text-[0.5rem] md:text-xs">◆</span>
          <span>HGTV</span><span className="text-gold text-[0.5rem] md:text-xs">◆</span>
          <span>Art Basel</span><span className="text-gold text-[0.5rem] md:text-xs">◆</span>
          <span className="text-center">Coral Gables Historic Preservation Board</span>
        </div>
      </section>

      {/* HISTORY */}
      <section id="historia" className="relative py-24 md:py-36 bg-sand-light overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${historyBg})` }} />
        <div aria-hidden className="absolute inset-0" style={{
          background: "linear-gradient(to right, var(--sand-light) 0%, color-mix(in oklab, var(--sand-light) 92%, transparent) 35%, color-mix(in oklab, var(--sand-light) 70%, transparent) 65%, color-mix(in oklab, var(--sand-light) 55%, transparent) 100%)",
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow"><span className="rule" />{t.history.eyebrow}</p>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
              {t.history.h2a}<br />{t.history.h2b}<br />{t.history.h2c}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-[1.05rem] leading-[1.8] text-foreground/85">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-terracotta">
              {t.history.p1}
            </p>
            <p>{t.history.p2}</p>
          </div>
        </div>
      </section>

      {/* PROPERTY GALLERY */}
      <section id="propriedade" className="py-24 md:py-32 bg-sand">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow">{t.property.eyebrow}</p>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.05]">
              {t.property.h2a}<br />{t.property.h2b}<br />
              <span className="font-italic-serif text-terracotta">{t.property.h2c}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {t.cottages.map((c, i) => (
              <article
                key={c.id}
                className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                {COTTAGE_GALLERIES[c.id] ? (
                  <CottageCarousel images={COTTAGE_GALLERIES[c.id]} alt={c.name} />
                ) : (
                  <div className="overflow-hidden bg-sand-dark aspect-[4/5]">
                    <img src={COTTAGE_IMAGES[c.id]} alt={c.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  </div>
                )}
                <div>
                  <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-foreground/15 pb-3">
                    <h3 className="font-display text-2xl md:text-3xl">{c.name}</h3>
                    <span className="eyebrow text-foreground/60">{c.meta}</span>
                  </div>
                  <p className="mt-4 text-[0.98rem] leading-[1.75] text-foreground/80 font-serif text-lg">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TAX */}
      <section className="relative py-24 md:py-32 bg-ink text-sand-light overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover opacity-35"
          style={{ backgroundImage: `url(${taxBg})`, backgroundPosition: "right center" }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--ink) 0%, var(--ink) 35%, color-mix(in oklab, var(--ink) 75%, transparent) 70%, color-mix(in oklab, var(--ink) 60%, transparent) 100%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="mb-10 md:mb-14">
            <p className="eyebrow text-gold"><span className="rule" />{t.tax.eyebrow}</p>
            <h2 className="mt-6 text-3xl md:text-5xl leading-[1.05] text-sand-light">
              {t.tax.h2a}<br />{t.tax.h2b}
            </h2>
            <p className="font-italic-serif text-xl md:text-2xl text-gold mt-4">{t.tax.sub}</p>
          </div>
          <div className="space-y-5 text-sand/85 leading-[1.85] text-[0.98rem] md:text-[1.05rem] max-w-3xl">
            {t.tax.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-12 max-w-3xl crystal-glass crystal-glass--dark p-5 md:p-7">
            <p className="text-[0.77rem] md:text-[0.77rem] text-sand/75 leading-relaxed">{t.tax.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investimento" className="py-16 md:py-32 bg-sand-light">
        <div className="max-w-[1100px] mx-auto px-5 md:px-12">
          <div className="mb-8 md:mb-12">
            <p className="eyebrow">{t.invest.eyebrow}</p>
            <h2 className="mt-4 md:mt-6 text-3xl md:text-5xl leading-[1.1]">
              <span className="font-italic-serif text-terracotta">{t.invest.h2a}</span> {t.invest.h2b}
            </h2>
          </div>
          <div className="space-y-5 text-foreground/80 leading-[1.85] text-[0.98rem] md:text-[1.05rem] max-w-3xl">
            {t.invest.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-12 max-w-3xl crystal-glass crystal-glass--light p-5 md:p-7">
            <p className="text-[0.77rem] md:text-[0.77rem] text-foreground/70 leading-relaxed">{t.invest.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* KELLY */}
      <section id="kelly" className="py-16 md:py-24 bg-sand">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <KellyPhotoCarousel images={[kellyImg, kellyAward1, kellyAward2]} />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow"><span className="rule" />{t.kelly.eyebrow}</p>
            <h2 className="mt-6 text-5xl md:text-6xl">{t.kelly.name}</h2>
            <p className="font-italic-serif text-xl md:text-2xl text-terracotta mt-3">{t.kelly.sub}</p>
            <div className="mt-8 space-y-5 text-foreground/80 leading-[1.8] text-[1rem]">
              <p>{t.kelly.p1}</p>
              <p>{t.kelly.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS CAROUSEL */}
      <ReviewsCarousel />

      {/* PRICE TOWER + CONTACT */}
      <section id="contato" className="py-14 md:py-32 bg-navy text-sand-light">
        <div className="max-w-[1100px] mx-auto px-3 md:px-12">
          <div className="hidden md:block text-center mb-12">
            <p className="eyebrow text-gold">{t.contact.eyebrow}</p>
          </div>
          <div className="border border-gold/30 p-5 md:p-16 bg-navy/50 backdrop-blur">
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-4xl tracking-[0.18em] md:tracking-[0.2em] uppercase">{t.contact.title}</h3>
              <p className="text-sand/70 mt-2 tracking-[0.18em] md:tracking-[0.2em] text-[0.65rem] md:text-xs uppercase">{t.contact.address}</p>
              <div className="my-7 md:my-10">
                <div className="font-display text-gold text-4xl md:text-7xl">{t.contact.price}</div>
              </div>
              <div className="w-16 h-px bg-gold/50 mx-auto" />
            </div>

            <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-8 md:gap-10">
              <div className="flex flex-col">
                <p className="eyebrow text-gold mb-5">{t.contact.included}</p>
                <ul className="space-y-3 text-sand/85 text-[0.95rem] leading-relaxed">
                  {t.contact.bullets.map(li => (
                    <li key={li} className="flex gap-3"><span className="text-gold mt-1">◆</span><span>{li}</span></li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <p className="eyebrow text-gold mb-4">Follow</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/kellybelem.miami"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 flex items-center justify-center border border-gold/40 text-gold/80 hover:text-gold hover:border-gold transition"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578532545271"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 flex items-center justify-center border border-gold/40 text-gold/80 hover:text-gold hover:border-gold transition"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1v2.2H8v3h2.5V21h3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (sending) return;
                  setSending(true);
                  const fd = new FormData(e.currentTarget);
                  try {
                    await fetch(
                      "https://script.google.com/macros/s/AKfycbzbLpdXyPdwm87EU-mMj1MyWxgqpp53_edLBl8ySwAQpfUSjP6Biuh7qZGmY8BepqPV/exec",
                      { method: "POST", mode: "no-cors", body: fd }
                    );
                  } catch {}
                  setForm({ name: "", email: "", phone: "" });
                  setSending(false);
                  setSent(true);
                  window.open(waUrl, "_blank");
                }}
                className="space-y-7"
              >
                <p className="eyebrow text-gold">{t.contact.formTitle}</p>
                {[
                  { k: "name" as const, n: "nome", label: t.contact.fields.name, type: "text" },
                  { k: "email" as const, n: "email", label: t.contact.fields.email, type: "email" },
                  { k: "phone" as const, n: "telefone", label: t.contact.fields.phone, type: "tel" },
                ].map(f => (
                  <div key={f.k}>
                    <label className="block text-[0.65rem] uppercase tracking-[0.25em] text-sand/60 mb-2">{f.label}</label>
                    <input
                      required type={f.type} name={f.n}
                      value={form[f.k]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-sand/30 focus:border-gold focus:outline-none py-2 text-sand-light"
                    />
                  </div>
                ))}
                <button type="submit" disabled={sending} className="w-full mt-4 bg-terracotta hover:bg-terracotta-dark transition text-primary-foreground py-4 text-xs uppercase tracking-[0.3em] disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? "Sending..." : t.contact.submit}
                </button>
                {sent && (
                  <p className="text-center text-[0.8rem] text-gold/90 pt-1">
                    Thank you! Your message has been sent.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-sand/70 py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 items-center justify-between text-xs tracking-[0.22em] uppercase">
          <div className="font-display text-sand text-base tracking-[0.3em]">The Coral Rock Village</div>
          <div className="flex items-center gap-6">
            <span>Kelly Belem · Keller Williams Realty</span>
            <LanguageSwitcher tone="light" />
          </div>
          <div>{t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}

function ReviewsCarousel() {
  const { t } = useI18n();
  const items = t.reviews.items;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx(i => (i + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  return (
    <section className="relative py-24 md:py-32 bg-sand-light overflow-hidden isolate">
      {/* Background portrait — right to left fade on desktop, subtle on mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${kellyTestimonialsBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "auto 110%",
          opacity: 0.32,
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 80%)",
        }}
      />
      {/* Soft sand wash to keep contrast harmonious */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to left, var(--sand-light) 0%, color-mix(in oklab, var(--sand-light) 85%, transparent) 55%, transparent 100%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">{t.reviews.eyebrow}</p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            {t.reviews.h2a} <span className="font-italic-serif text-terracotta">{t.reviews.h2b}</span>.
          </h2>
        </div>

        {/* Desktop: 3 cards static */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} active />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-[600ms] will-change-transform"
              style={{
                transform: `translateX(calc(50% - ${idx * 360}px - 170px))`,
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {items.map((r, i) => (
                <div key={r.name} className="shrink-0 w-[340px] mx-[10px]">
                  <ReviewCard review={r} active={i === idx} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-terracotta" : "w-1.5 bg-foreground/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, active }: { review: { name: string; ctx: string; quote: string }; active: boolean }) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  return (
    <div
      className="bg-white rounded-lg p-4 transition-all duration-500"
      style={{
        boxShadow: active ? "0 6px 18px rgba(0,0,0,0.10)" : "0 1px 3px rgba(0,0,0,0.08)",
        transform: active ? "scale(1)" : "scale(0.95)",
        opacity: active ? 1 : 0.6,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[0.78rem] font-semibold"
          style={{ background: "var(--sand)", color: "var(--navy)" }}
        >
          {initial}
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-semibold leading-tight" style={{ color: "#202124" }}>{review.name}</div>
          <div className="text-[11px] leading-tight mt-0.5" style={{ color: "#5F6368" }}>{review.ctx}</div>
        </div>
      </div>
      <div className="flex gap-[2px] mt-3" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden>
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 19.771l-7.336 3.395 1.402-8.168L.132 9.211l8.2-1.193z" />
          </svg>
        ))}
        <span className="ml-2 text-[11px]" style={{ color: "#5F6368" }}>Google</span>
      </div>
      <p className="mt-3 text-[13px] leading-[1.5]" style={{ color: "#202124" }}>{review.quote}</p>
    </div>
  );
}

function CottageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [paused, images.length]);

  const multi = images.length > 1;

  return (
    <div
      className="relative overflow-hidden bg-sand-dark aspect-[4/5]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
        />
      ))}
      {multi && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-navy/40 hover:bg-navy/70 text-sand-light backdrop-blur-sm transition opacity-80 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-navy/40 hover:bg-navy/70 text-sand-light backdrop-blur-sm transition opacity-80 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1 rounded-full transition-all ${i === idx ? "w-6 bg-sand-light" : "w-1 bg-sand-light/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function KellyPhotoCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 1500);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-sand-dark">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Kelly Belem"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
