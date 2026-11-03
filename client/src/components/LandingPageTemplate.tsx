/**
 * LandingPageTemplate — one-offer page for Google Ads traffic.
 * Structure: Hero + form (above the fold) → Proof strip → What you get → How it works → Meet Brad
 *            → Book online → Reviews carousel → (optional free course) → FAQ → Final CTA.
 * Headline variants are picked with ?v=<key> so one page can match several ad groups.
 */
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Phone, ShieldCheck, Star } from "lucide-react";
import LandingLayout, { PhoneLink } from "./LandingLayout";
import Reveal from "./Reveal";
import ReviewsCarousel from "./ReviewsCarousel";
import {
  BOOKING_URL,
  COURSE_OFFER,
  GOOGLE_RATING,
  LP_FORM_ID,
  LP_FORM_NAME,
  PHONE_DISPLAY,
  trackEvent,
} from "@/lib/landing";

const NAVY = "oklch(0.18 0.06 250)";
const CYAN = "oklch(0.66 0.16 218)";
const CREAM = "oklch(0.97 0.008 80)";
const serif = { fontFamily: "'Playfair Display', serif" };

export interface HeadlineVariant {
  eyebrow: string;
  headline: string;
  subhead: string;
}

export interface LandingPageProps {
  pageTitle: string;
  /** "default" is required; other keys are selected with ?v=key. */
  variants: { default: HeadlineVariant } & Record<string, HeadlineVariant>;
  heroBullets: string[];
  urgency?: string;
  priceLine?: string | null;
  outcomesHeading: string;
  outcomes: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  finalHeadline: string;
  finalSubtext: string;
}

/** Everything in this strip is verified on Brad's own site. */
const PROOF: { icon: "star" | "shield" | "book"; text: ReactNode }[] = [
  {
    icon: "star",
    text: GOOGLE_RATING ? (
      <>
        <b className="text-gray-900">{GOOGLE_RATING.stars}</b> on Google <span className="text-gray-400">· {GOOGLE_RATING.count} reviews</span>
      </>
    ) : (
      "Google reviews"
    ),
  },
  { icon: "shield", text: "CPA since 1994" },
  { icon: "shield", text: "Enrolled Agent" },
  { icon: "shield", text: "MBA, Finance" },
  { icon: "shield", text: "Practicing since 1997" },
  {
    icon: "book",
    text: (
      <>
        Author of <em>Profits Driven</em>
      </>
    ),
  },
];

const BRAD_FACTS = [
  "CPA since 1994 and an Enrolled Agent, federally authorized to represent you before the IRS.",
  "MBA in Finance from Saint Xavier University.",
  "Fortune 500 financial management background, including Sara Lee Corporation.",
  "Advising small business owners since 1997, and the author of Profits Driven.",
];


function pickVariant(variants: LandingPageProps["variants"]): { key: string; v: HeadlineVariant } {
  const key = new URLSearchParams(window.location.search).get("v") ?? "default";
  return variants[key] ? { key, v: variants[key] } : { key: "default", v: variants.default };
}

function SectionHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ ...serif, textWrap: "balance" }}>
        {title}
      </h2>
      {lede && <p className="text-lg text-gray-600 mt-4 leading-relaxed">{lede}</p>}
    </div>
  );
}

export default function LandingPageTemplate(props: LandingPageProps) {
  const { key, v } = useMemo(() => pickVariant(props.variants), [props.variants]);

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
    trackEvent("lp_view", { lp_variant: key });
  }, [key]);

  // Always open at the top, once, instantly. (The calendar embed below is lazy-mounted so it
  // can no longer grab focus during load and drag the page down to itself.)
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    if (window.location.hash) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, []);

  // Mount the booking calendar only when the visitor gets near it, so it can't steal focus on load.
  const bookRef = useRef<HTMLElement>(null);
  const [showBooking, setShowBooking] = useState(false);
  useEffect(() => {
    const el = bookRef.current;
    if (!el || showBooking) return;
    if (!("IntersectionObserver" in window)) { setShowBooking(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setShowBooking(true); io.disconnect(); } },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showBooking]);

  return (
    <LandingLayout pageTitle={props.pageTitle}>
      {/* ── 1. HERO + FORM ── */}
      <section className="relative py-10 md:py-16" style={{ backgroundColor: NAVY }}>
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(ellipse at 20% 30%, ${CYAN}, transparent 55%)` }}
        />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="section-label mb-3" style={{ color: CYAN }}>{v.eyebrow}</p>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5" style={serif}>
              {v.headline}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">{v.subhead}</p>
            <ul className="space-y-3 mb-6">
              {props.heroBullets.map((b) => (
                <li key={b} className="flex gap-3 text-white/90">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: CYAN }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {props.priceLine && <p className="text-white font-semibold mb-4">{props.priceLine}</p>}
            {props.urgency && (
              <p className="inline-block text-sm text-white/90 border border-white/25 rounded px-3 py-2 mb-6">
                {props.urgency}
              </p>
            )}
            <div className="flex items-center gap-4">
              <img
                src="/manus-storage/brad_headshot_web.webp"
                alt="Brad Filmanowicz, CPA, MBA, EA"
                width={472}
                height={600}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-white/80"
              />
              <div>
                <p className="text-white font-semibold">Brad Filmanowicz, CPA, MBA, EA</p>
                <p className="text-white/60 text-sm">You meet with Brad himself.</p>
                {GOOGLE_RATING && (
                  <p className="flex items-center gap-1 text-sm text-white/80 mt-1">
                    <Star size={14} fill="currentColor" className="text-amber-400" />
                    {GOOGLE_RATING.stars} on Google ({GOOGLE_RATING.count} reviews)
                  </p>
                )}
              </div>
            </div>
          </div>

          <div id="get-started" className="lg:col-span-5 scroll-mt-4">
            <div className="bg-white rounded-xl shadow-xl p-5 md:p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-1" style={serif}>Book your free consultation</h2>
              <p className="text-sm text-gray-500 mb-4">Tell us a little about your business and Brad will be in touch.</p>
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
              <div className="border-t border-gray-100 pt-4 mt-2 text-sm text-gray-600 text-center space-y-1">
                <p>
                  Prefer to talk? Call{" "}
                  <PhoneLink location="form_card" className="font-semibold text-gray-900 underline" />
                </p>
                <p>
                  Or{" "}
                  <a href="#book" className="font-semibold underline" style={{ color: CYAN }}>
                    pick a time on Brad's calendar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROOF STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 py-5 text-sm text-gray-700">
            {PROOF.map((p, i) => (
              <li key={i} className="flex items-center gap-2 whitespace-nowrap">
                {p.icon === "star" && <Star size={16} fill="currentColor" className="text-amber-400 shrink-0" />}
                {p.icon === "shield" && <ShieldCheck size={16} className="shrink-0" style={{ color: CYAN }} />}
                {p.icon === "book" && <BookOpen size={16} className="shrink-0" style={{ color: CYAN }} />}
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. WHAT YOU GET ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="What you get" title={props.outcomesHeading} />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-6xl mx-auto">
            {props.outcomes.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 90}>
                <div className="flex gap-4">
                  <span
                    className="shrink-0 inline-grid place-items-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: "oklch(0.66 0.16 218 / 0.12)" }}
                  >
                    <CheckCircle2 size={20} style={{ color: CYAN }} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5">{o.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{o.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                <Reveal delay={i * 120} className="flex md:flex-col md:text-center gap-4 md:gap-0">
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

      {/* ── 5. MEET BRAD ── */}
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
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: CYAN }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href="#book" className="btn-primary px-7 py-3.5">Pick a time with Brad</a>
              <PhoneLink
                location="meet_brad"
                className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:underline"
                label={`or call ${PHONE_DISPLAY}`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. BOOK ONLINE ── */}
      <section id="book" ref={bookRef} className="py-16 md:py-24 scroll-mt-4" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Book online"
              title="Pick a time with Brad"
              lede="Free 1-on-1 consultation over Zoom. Book directly on his calendar."
            />
          </Reveal>
          <Reveal>
            <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {showBooking ? (
                <iframe
                  src={BOOKING_URL}
                  style={{ width: "100%", height: "760px", border: "none" }}
                  title="Schedule a consultation with Brad Filmanowicz"
                />
              ) : (
                <div style={{ height: "760px" }} aria-hidden="true" />
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
          </Reveal>
        </div>
      </section>

      {/* ── 7. REVIEWS (rotating library of real Google reviews) ── */}
      <ReviewsCarousel />

      {/* ── 8. FREE COURSE (off until the promo code arrives) ── */}
      {COURSE_OFFER.enabled && (
        <section className="py-14" style={{ backgroundColor: CREAM }}>
          <div className="container max-w-3xl text-center">
            <Reveal>
              <p className="section-label mb-3">Not ready to talk yet?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={serif}>{COURSE_OFFER.title}</h2>
              <p className="text-gray-600 mb-5">
                Learn the strategies Brad uses with his clients, at your own pace.
                {COURSE_OFFER.promoCode && <> Use code <b>{COURSE_OFFER.promoCode}</b> at checkout.</>}
              </p>
              <a
                href={COURSE_OFFER.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold underline"
                style={{ color: CYAN }}
                onClick={() => trackEvent("course_click", { click_location: "lp_course" })}
              >
                Get the free course <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 9. FAQ ── */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container max-w-3xl">
          <Reveal>
            <SectionHeader eyebrow="Common questions" title="Before you book" />
          </Reveal>
          <Reveal>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {props.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between items-start gap-4">
                    {f.q}
                    <span className="text-gray-400 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-3 pr-8">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="py-16 md:py-24 text-center" style={{ backgroundColor: NAVY }}>
        <div className="container max-w-2xl">
          <Reveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={serif}>{props.finalHeadline}</h2>
            <p className="text-white/75 text-lg mb-8">{props.finalSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#get-started" className="btn-primary px-8 py-4 text-base">Book a free consultation</a>
              <PhoneLink location="final_cta" className="btn-outline-white px-8 py-4 text-base" label={`Call ${PHONE_DISPLAY}`} />
            </div>
            <p className="flex items-center justify-center gap-2 text-white/50 text-sm mt-6">
              <Phone size={14} /> Calls go to Brad's office, not a call center.
            </p>
          </Reveal>
        </div>
      </section>
    </LandingLayout>
  );
}
