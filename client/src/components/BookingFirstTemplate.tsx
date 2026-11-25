/**
 * BookingFirstTemplate — booking-first Google Ads landing page (Griff's layout, 2026-11-25).
 * Three colour zones:
 *   DARK  → navy top ($30K headline, savings blocks, "4 spots" line, button, glow beam + arrows)
 *           flowing into Brad's calendar (#book), which glows like a spotlight.
 *   LIGHT → reviews → how it works → Meet Brad (call first).
 *   DARK  → call-back form (#get-started) → final CTA.
 * Entrance: a short navy logo curtain, then the headline fades up word by word, the savings blocks
 * pop in and the dollar figures count up. Everything is static for reduced-motion visitors.
 * Headline is the same on every ?v= variant; only the small label above it changes.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Phone, Star } from "lucide-react";
import LandingLayout, { PhoneLink } from "./LandingLayout";
import Reveal from "./Reveal";
import ReviewsCarousel from "./ReviewsCarousel";
import { introWillPlay } from "./IntroCurtain";
import { BOOKING_URL, GOOGLE_RATING, LP_FORM_ID, LP_FORM_NAME, PHONE_DISPLAY, trackEvent } from "@/lib/landing";

const NAVY = "oklch(0.18 0.06 250)";
const NAVY_DEEP = "oklch(0.15 0.05 252)";
const CYAN = "oklch(0.66 0.16 218)";
const GOLD = "oklch(0.82 0.14 85)";
const CREAM = "oklch(0.97 0.008 80)";
const serif = { fontFamily: "'Playfair Display', serif" };

export interface BookingFirstProps {
  pageTitle: string;
  /** Small label above the headline, picked with ?v=key ("default" required). */
  eyebrows: { default: string } & Record<string, string>;
  headline: string;
  /** shortLabel is shown on phones, where the three blocks sit side by side. */
  stats: { value: string; label: string; shortLabel: string; highlight?: boolean }[];
  /** Line under the savings blocks that points down to the calendar; `highlight` is shown in gold. */
  calendarPush: { lead: string; highlight: string };
  ctaButton: string;
  footnote?: string;
  steps: { title: string; description: string }[];
  finalHeadline: string;
  finalSubtext: string;
  finalButton: string;
}

const BRAD_FACTS = [
  "CPA since 1994 and an Enrolled Agent, federally authorized to represent you before the IRS.",
  "MBA in Finance from Saint Xavier University.",
  "Fortune 500 financial management background, including Sara Lee Corporation.",
  "Advising small business owners since 1997, and the author of Profits Driven.",
];

function pickEyebrow(eyebrows: BookingFirstProps["eyebrows"]) {
  const key = new URLSearchParams(window.location.search).get("v") ?? "default";
  return eyebrows[key] ? { key, eyebrow: eyebrows[key] } : { key: "default", eyebrow: eyebrows.default };
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Smooth-scroll to Brad's calendar (keeps the URL clean). */
function goToCalendar(e: React.MouseEvent, location: string) {
  e.preventDefault();
  trackEvent("cta_click", { click_location: location });
  document.getElementById("book")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

/** "$35,000" counts up from $0 once `delay` ms have passed. Non-numeric values ("3-to-1") are shown as is. */
function CountUp({ value, delay }: { value: string; delay: number }) {
  const m = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const target = m ? Number(m[2].replace(/,/g, "")) : 0;
  const [n, setN] = useState(() => (m && !prefersReducedMotion() ? 0 : target));
  useEffect(() => {
    if (!m || prefersReducedMotion()) return;
    let raf = 0;
    const DURATION = 1300;
    const startAt = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - startAt) / DURATION));
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, delay]);
  if (!m) return <>{value}</>;
  // The final value is laid out invisibly to reserve the exact width, and the counting number sits
  // on top of it, so the box never changes size (no jumping or re-wrapping on phones).
  return (
    <span className="relative inline-block whitespace-nowrap" aria-label={value}>
      <span className="invisible" aria-hidden="true">{value}</span>
      <span className="absolute inset-0 text-center" aria-hidden="true">
        {m[1]}
        {n.toLocaleString("en-US")}
        {m[3]}
      </span>
    </span>
  );
}

function SectionHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ ...serif, textWrap: "balance" }}>
        {title}
      </h2>
      {lede && <p className="text-lg text-gray-600 mt-3 leading-relaxed">{lede}</p>}
    </div>
  );
}

/** Glowing beam that flows down from the button, then three rippling chevrons. */
function LeadDown() {
  return (
    <a
      href="#book"
      aria-label="Jump to Brad's calendar"
      className="lp-leaddown mx-auto mt-5 md:mt-7 flex flex-col items-center"
      onClick={(e) => goToCalendar(e, "hero_arrows")}
    >
      <span className="lp-beam" aria-hidden="true" />
      <span className="lp-arrows flex flex-col items-center -mt-1">
        {[0, 1, 2].map((i) => (
          <svg key={i} className="lp-arrows__chev" style={{ animationDelay: `${i * 180}ms` }} width="40" height="20" viewBox="0 0 34 18" fill="none" aria-hidden="true">
            <path d="M3 3l14 12L31 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ))}
      </span>
    </a>
  );
}

export default function BookingFirstTemplate(props: BookingFirstProps) {
  const { key, eyebrow } = useMemo(() => pickEyebrow(props.eyebrows), [props.eyebrows]);
  // Start the hero animations after the curtain lifts (it plays once per visit).
  const [base] = useState(() => (introWillPlay() ? 650 : 120));
  const words = props.headline.split(" ");
  const afterHeadline = base + words.length * 70 + 200;
  const at = (ms: number) => ({ ["--d" as string]: `${ms}ms` }) as React.CSSProperties;

  // LeadConnector form embed script (resizes the iframe and passes ad attribution to GHL)
  useEffect(() => {
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    trackEvent("lp_view", { lp_variant: key, lp_layout: "booking_first" });
  }, [key]);

  // Always open at the top, once, instantly (unless the link has a #hash).
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    if (window.location.hash) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, []);

  // The calendar sits near the top, so it mounts as soon as it's close to the screen (no scroll
  // needed). A short guard undoes the page jump OnceHub can cause when it focuses itself.
  const [showBooking, setShowBooking] = useState(false);
  const [calendarLoadedAt, setCalendarLoadedAt] = useState(0);
  const calendarRef = useRef<HTMLIFrameElement>(null);
  const calendarBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = calendarBoxRef.current;
    if (!el || showBooking) return;
    if (!("IntersectionObserver" in window)) { setShowBooking(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setShowBooking(true); io.disconnect(); } },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showBooking]);

  useEffect(() => {
    if (!showBooking) return;
    const start = calendarLoadedAt || Date.now();
    const GUARD_MS = 10_000;
    let lastY = window.scrollY;
    let lastInput = 0;
    let touching = false;
    let touchEndedAt = 0;
    const mark = () => { lastInput = Date.now(); };
    const onTouchStart = () => { touching = true; mark(); };
    const onTouchEnd = () => { touching = false; touchEndedAt = Date.now(); };
    const visitorIsScrolling = () => {
      const now = Date.now();
      return touching || now - lastInput < 600 || now - touchEndedAt < 2000;
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (
        Date.now() - start < GUARD_MS &&
        !visitorIsScrolling() &&
        document.activeElement === calendarRef.current &&
        Math.abs(y - lastY) > 80
      ) {
        calendarRef.current?.blur();
        window.scrollTo({ top: lastY, behavior: "instant" as ScrollBehavior });
        return;
      }
      lastY = y;
    };
    const inputs: (keyof WindowEventMap)[] = ["wheel", "keydown", "mousedown", "pointerdown"];
    inputs.forEach((t) => window.addEventListener(t, mark, { passive: true }));
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    const remove = () => {
      inputs.forEach((t) => window.removeEventListener(t, mark));
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
    const stop = window.setTimeout(remove, Math.max(0, start + GUARD_MS - Date.now()) + 6_000);
    return () => {
      window.clearTimeout(stop);
      remove();
    };
  }, [showBooking, calendarLoadedAt]);

  return (
    <LandingLayout pageTitle={props.pageTitle} hideHeader introFast introLight bookHref="#book">
      {/* ════════ ZONE 1 · DARK: hero flowing into the calendar ════════ */}
      <div
        className="relative overflow-hidden text-white"
        style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 62%, ${NAVY} 100%)` }}
      >
        <div aria-hidden="true" className="lp-aurora pointer-events-none absolute inset-0" />

        {/* ── Hero ── */}
        <section className="relative z-10 pt-8 pb-4 md:pt-16 md:pb-8">
          <div className="container max-w-5xl text-center">
            <p className="lp-enter section-label mb-3" style={{ ...at(base), color: CYAN }}>{eyebrow}</p>
            <h1
              className="text-white text-[2rem] leading-[1.12] sm:text-5xl md:text-6xl font-bold mx-auto max-w-4xl"
              style={{ ...serif, textWrap: "balance" }}
              aria-label={props.headline}
            >
              {words.map((w, i) => (
                <span key={i}>
                  <span aria-hidden="true" className="lp-word" style={at(base + i * 70)}>{w}</span>
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            {GOOGLE_RATING && (
              <p className="lp-enter mt-3 md:mt-4 flex items-center justify-center gap-1.5 text-sm text-white/80" style={at(afterHeadline)}>
                <span className="flex text-amber-400" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </span>
                {GOOGLE_RATING.stars} on Google · {GOOGLE_RATING.count} reviews
              </p>
            )}

            <ul className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-5 md:mt-10">
              {props.stats.map((b, i) => (
                <li
                  key={b.value}
                  className={`lp-pop rounded-xl md:rounded-2xl border px-2 py-3 sm:px-4 md:px-6 md:py-9 backdrop-blur-sm${b.highlight ? " lp-gold-glow" : ""}`}
                  style={{
                    ...at(afterHeadline + 150 + i * 160),
                    borderColor: b.highlight ? GOLD : "rgb(255 255 255 / 0.15)",
                    backgroundColor: b.highlight ? "oklch(0.82 0.14 85 / 0.1)" : "rgb(255 255 255 / 0.05)",
                  }}
                >
                  <p
                    className="text-[1.35rem] sm:text-4xl md:text-6xl font-bold leading-none mb-1.5 md:mb-3 tabular-nums"
                    style={{ ...serif, color: b.highlight ? GOLD : "white" }}
                  >
                    <CountUp value={b.value} delay={afterHeadline + 150 + i * 160} />
                  </p>
                  <p className="text-[11px] leading-snug sm:text-sm md:text-base md:leading-relaxed" style={{ color: b.highlight ? GOLD : "rgb(255 255 255 / 0.8)" }}>
                    <span className="sm:hidden">{b.shortLabel}</span>
                    <span className="hidden sm:inline">{b.label}</span>
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="lp-enter mt-6 md:mt-10 text-[1.4rem] sm:text-3xl md:text-4xl font-bold leading-snug"
              style={{ ...serif, textWrap: "balance", ...at(afterHeadline + 700) }}
            >
              {props.calendarPush.lead}{" "}
              <span className="whitespace-nowrap sm:whitespace-normal" style={{ color: GOLD }}>{props.calendarPush.highlight}</span>
            </p>
            <a
              href="#book"
              className="lp-enter lp-cta mt-4 md:mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 md:px-9 md:py-4 font-semibold md:text-lg text-white"
              style={{ ...at(afterHeadline + 850), backgroundColor: CYAN }}
              onClick={(e) => goToCalendar(e, "hero")}
            >
              {props.ctaButton} <ArrowRight size={18} />
            </a>
            <div className="lp-enter" style={at(afterHeadline + 1000)}>
              <LeadDown />
            </div>
          </div>
        </section>

        {/* ── Brad's calendar (spotlight) ── */}
        <section id="book" className="relative z-10 pt-3 pb-24 md:pt-6 md:pb-32 scroll-mt-2">
          <div className="container">
            <div className="text-center mb-4 md:mb-7">
              <h2 className="text-2xl md:text-4xl font-bold text-white" style={serif}>Pick a time with Brad</h2>
              <p className="text-white/70 mt-2">Free 15-minute call over Zoom or phone. No cost, no obligation.</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div aria-hidden="true" className="lp-spotlight-halo" />
              <div ref={calendarBoxRef} className="lp-spotlight relative bg-white rounded-2xl overflow-hidden">
                {showBooking ? (
                  <iframe
                    ref={calendarRef}
                    src={BOOKING_URL}
                    style={{ width: "100%", height: "760px", border: "none", display: "block" }}
                    title="Schedule a consultation with Brad Filmanowicz"
                    onLoad={() => setCalendarLoadedAt(Date.now())}
                  />
                ) : (
                  <div style={{ height: "760px" }} className="grid place-items-center text-gray-400 text-sm">
                    Loading Brad's calendar…
                  </div>
                )}
              </div>
            </div>
            <p className="text-center text-sm text-white/60 mt-5">
              Calendar not loading?{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline text-white"
                onClick={() => trackEvent("booking_link_click", { click_location: "book_section" })}
              >
                Open the booking page
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* ════════ ZONE 2 · LIGHT: reviews → how it works → Meet Brad ════════ */}
      <div
        className="lp-arc relative z-10 -mt-12 md:-mt-16"
        style={{ background: `linear-gradient(180deg, ${CREAM} 0%, ${CREAM} 55%, #ffffff 75%, #ffffff 100%)` }}
      >
        <ReviewsCarousel light />

        <section className="pt-4 pb-16 md:pt-6 md:pb-24">
          <div className="container max-w-5xl">
            <Reveal>
              <SectionHeader eyebrow="How it works" title="Three steps, no pressure" />
            </Reveal>
            <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <span aria-hidden="true" className="hidden md:block absolute top-6 left-[17%] right-[17%] h-px bg-gray-300" />
              {props.steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <Reveal delay={i * 120} className="flex md:flex-col md:items-center md:text-center gap-4 md:gap-0">
                    <span
                      className="relative z-10 inline-grid place-items-center w-12 h-12 shrink-0 rounded-full text-white font-bold text-lg md:mb-5 ring-4 shadow-md shadow-cyan-900/20"
                      style={{ backgroundColor: CYAN, ["--tw-ring-color" as string]: CREAM }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1.5">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{s.description}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pt-6 pb-28 md:pt-10 md:pb-36">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <img
                  src="/manus-storage/brad_headshot_web.webp"
                  alt="Brad Filmanowicz, CPA, MBA, EA"
                  width={472}
                  height={600}
                  loading="lazy"
                  className="w-full rounded-2xl object-cover object-top shadow-lg"
                  style={{ aspectRatio: "4 / 5" }}
                />
                <img
                  src="/manus-storage/book_mockup_web.jpg"
                  alt="Profits Driven, the book by Brad Filmanowicz"
                  width={899}
                  height={1350}
                  loading="lazy"
                  className="absolute -bottom-6 -right-4 sm:-right-8 w-24 sm:w-32 rounded-md shadow-2xl ring-4 ring-white rotate-3"
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <p className="section-label mb-3">Who you'll be working with</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={serif}>
                Meet Brad Filmanowicz, CPA, MBA, EA
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Brad runs 1st Chicago Accounting from New Lenox, Illinois, and works exclusively with small business owners.
                Every consultation and every plan is with him directly.
              </p>
              <ul className="space-y-3 mb-8">
                {BRAD_FACTS.map((f) => (
                  <li key={f} className="flex gap-3 text-gray-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke={CYAN} strokeWidth="2" />
                      <path d="M8 12.5l2.5 2.5L16 9.5" stroke={CYAN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <PhoneLink
                  location="meet_brad"
                  className="btn-primary px-7 py-3.5 text-base gap-2"
                  label={`Call Brad: ${PHONE_DISPLAY}`}
                />
                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  onClick={(e) => goToCalendar(e, "meet_brad_book")}
                >
                  Or pick a time online
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* ════════ ZONE 3 · DARK: call-back form → final CTA ════════ */}
      <div
        className="lp-arc relative z-20 -mt-12 md:-mt-16 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
      >
        <div aria-hidden="true" className="lp-aurora lp-aurora--low pointer-events-none absolute inset-0" />
        <section id="get-started" className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-16 scroll-mt-2">
          <div className="container max-w-xl">
              <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-7 ring-1 ring-white/10">
                <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center" style={serif}>Rather Brad call you?</h2>
                <p className="text-sm text-gray-500 mb-4 text-center">Leave your number and Brad will call you back.</p>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/form/${LP_FORM_ID}`}
                  style={{ width: "100%", height: "620px", border: "none", borderRadius: "8px" }}
                  id={`inline-${LP_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={LP_FORM_NAME}
                  data-height="542"
                  data-layout-iframe-id={`inline-${LP_FORM_ID}`}
                  data-form-id={LP_FORM_ID}
                  title={LP_FORM_NAME}
                />
              </div>
          </div>
        </section>

        <section className="relative z-10 pt-6 pb-16 md:pt-10 md:pb-24 text-center">
          <div className="container max-w-2xl">
            <Reveal>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={serif}>{props.finalHeadline}</h2>
              <p className="text-white/75 text-lg mb-8">{props.finalSubtext}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#book" className="btn-primary px-8 py-4 text-base" onClick={(e) => goToCalendar(e, "final_cta")}>
                  {props.finalButton}
                </a>
                <PhoneLink location="final_cta" className="btn-outline-white px-8 py-4 text-base" label={`Call ${PHONE_DISPLAY}`} />
              </div>
              <p className="flex items-center justify-center gap-2 text-white/50 text-sm mt-6">
                <Phone size={14} /> Calls go to Brad's office, not a call center.
              </p>
              {props.footnote && <p className="mt-6 text-xs text-white/40 max-w-xl mx-auto">{props.footnote}</p>}
            </Reveal>
          </div>
        </section>
      </div>
    </LandingLayout>
  );
}
