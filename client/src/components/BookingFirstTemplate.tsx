/**
 * BookingFirstTemplate — booking-first Google Ads landing page (Griff's layout, 2026-11-25).
 * Order: navy savings top ($30K headline + 3 savings blocks + "4 spots" line) → animated arrows
 *        → Brad's calendar (#book) → reviews → how it works → Meet Brad (call first)
 *        → short call-back form (#get-started) → final CTA.
 * No white header bar and no intro curtain. Headline is the same on every variant; the small
 * label above it still changes with ?v=<key> so it matches the ad group.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Phone, Star } from "lucide-react";
import LandingLayout, { PhoneLink } from "./LandingLayout";
import Reveal from "./Reveal";
import ReviewsCarousel from "./ReviewsCarousel";
import { BOOKING_URL, GOOGLE_RATING, LP_FORM_ID, LP_FORM_NAME, PHONE_DISPLAY, trackEvent } from "@/lib/landing";

const NAVY = "oklch(0.18 0.06 250)";
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
  /** Line that replaces Brad's quote and points down to the calendar. */
  calendarPush: string;
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

/** Three stacked chevrons that ripple downward toward the calendar. */
function DownArrows() {
  return (
    <a
      href="#book"
      aria-label="Jump to Brad's calendar"
      className="lp-arrows mx-auto mt-4 md:mt-8 flex flex-col items-center"
      onClick={() => trackEvent("cta_click", { click_location: "hero_arrows" })}
    >
      {[0, 1, 2].map((i) => (
        <svg key={i} className="lp-arrows__chev" style={{ animationDelay: `${i * 180}ms` }} width="40" height="20" viewBox="0 0 34 18" fill="none" aria-hidden="true">
          <path d="M3 3l14 12L31 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </a>
  );
}

export default function BookingFirstTemplate(props: BookingFirstProps) {
  const { key, eyebrow } = useMemo(() => pickEyebrow(props.eyebrows), [props.eyebrows]);

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

  // The calendar sits near the top now, so it mounts as soon as it's close to the screen
  // (no scroll needed). A short guard undoes the page jump OnceHub can cause when it focuses itself.
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
    <LandingLayout pageTitle={props.pageTitle} hideHeader intro={false} bookHref="#book">
      {/* ── 1. NAVY TOP: $30K headline + savings blocks + push to calendar ── */}
      <section className="relative overflow-hidden pt-7 pb-5 md:pt-16 md:pb-10 text-white" style={{ backgroundColor: NAVY }}>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(ellipse at 50% -10%, ${CYAN}, transparent 60%)` }}
        />
        <div className="container relative z-10 max-w-5xl text-center">
          <p className="section-label mb-3" style={{ color: CYAN }}>{eyebrow}</p>
          <h1
            className="text-white text-[2rem] leading-[1.12] sm:text-5xl md:text-6xl font-bold mx-auto max-w-4xl"
            style={{ ...serif, textWrap: "balance" }}
          >
            {props.headline}
          </h1>
          {GOOGLE_RATING && (
            <p className="mt-3 md:mt-4 flex items-center justify-center gap-1.5 text-sm text-white/80">
              <span className="flex text-amber-400" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </span>
              {GOOGLE_RATING.stars} on Google · {GOOGLE_RATING.count} reviews
            </p>
          )}

          <ul className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-5 md:mt-10">
            {props.stats.map((b) => (
              <li
                key={b.value}
                className="rounded-xl md:rounded-2xl border px-2 py-3 sm:px-4 md:px-6 md:py-9"
                style={{
                  borderColor: b.highlight ? GOLD : "rgb(255 255 255 / 0.15)",
                  backgroundColor: b.highlight ? "oklch(0.82 0.14 85 / 0.1)" : "rgb(255 255 255 / 0.05)",
                }}
              >
                <p
                  className="text-[1.35rem] sm:text-4xl md:text-6xl font-bold leading-none mb-1.5 md:mb-3"
                  style={{ ...serif, color: b.highlight ? GOLD : "white" }}
                >
                  {b.value}
                </p>
                <p className="text-[11px] leading-snug sm:text-sm md:text-base md:leading-relaxed" style={{ color: b.highlight ? GOLD : "rgb(255 255 255 / 0.8)" }}>
                  <span className="sm:hidden">{b.shortLabel}</span>
                  <span className="hidden sm:inline">{b.label}</span>
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-5 md:mt-10 text-[1.4rem] sm:text-3xl md:text-4xl font-bold leading-snug" style={{ ...serif, textWrap: "balance" }}>
            {props.calendarPush}
          </p>
          <a
            href="#book"
            className="mt-4 md:mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-900/30 transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: CYAN }}
            onClick={() => trackEvent("cta_click", { click_location: "hero" })}
          >
            Book my free 15 minutes <ArrowRight size={18} />
          </a>
          <DownArrows />
        </div>
      </section>

      {/* ── 2. BRAD'S CALENDAR ── */}
      <section id="book" className="pt-5 pb-12 md:pt-12 md:pb-20 scroll-mt-2" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900" style={serif}>Pick a time with Brad</h2>
            <p className="text-gray-600 mt-2">Free 15-minute call over Zoom or phone. No cost, no obligation.</p>
          </div>
          <div
            ref={calendarBoxRef}
            className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden ring-1 ring-black/5"
          >
            {showBooking ? (
              <iframe
                ref={calendarRef}
                src={BOOKING_URL}
                style={{ width: "100%", height: "760px", border: "none" }}
                title="Schedule a consultation with Brad Filmanowicz"
                onLoad={() => setCalendarLoadedAt(Date.now())}
              />
            ) : (
              <div style={{ height: "760px" }} className="grid place-items-center text-gray-400 text-sm">
                Loading Brad's calendar…
              </div>
            )}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Calendar not loading?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
              style={{ color: CYAN }}
              onClick={() => trackEvent("booking_link_click", { click_location: "book_section" })}
            >
              Open the booking page
            </a>
          </p>
        </div>
      </section>

      {/* ── 3. REVIEWS ── */}
      <ReviewsCarousel />

      {/* ── 4. HOW IT WORKS ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: CREAM }}>
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
                    className="relative z-10 inline-grid place-items-center w-12 h-12 shrink-0 rounded-full text-white font-bold text-lg md:mb-5 ring-4"
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

      {/* ── 5. MEET BRAD (pushes the call) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
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
                onClick={() => trackEvent("cta_click", { click_location: "meet_brad_book" })}
              >
                Or pick a time online
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. SHORT FORM (call-back request) ── */}
      <section id="get-started" className="py-14 md:py-20 scroll-mt-2" style={{ backgroundColor: CREAM }}>
        <div className="container max-w-xl">
          <div className="bg-white rounded-xl shadow-xl p-5 md:p-7">
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
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: NAVY }}>
        <div className="container max-w-2xl">
          <Reveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={serif}>{props.finalHeadline}</h2>
            <p className="text-white/75 text-lg mb-8">{props.finalSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book"
                className="btn-primary px-8 py-4 text-base"
                onClick={() => trackEvent("cta_click", { click_location: "final_cta" })}
              >
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
    </LandingLayout>
  );
}
