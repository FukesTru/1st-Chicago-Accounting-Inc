/**
 * LandingPageTemplate — one-offer page for Google Ads traffic.
 * Structure: Hero + form (above the fold) → Credentials → Outcomes → How it works → Book online
 *            → Reviews → (optional free course) → FAQ → Final CTA.
 * Headline variants are picked with ?v=<key> so one page can match several ad groups.
 */
import { useEffect, useMemo } from "react";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import LandingLayout, { PhoneLink } from "./LandingLayout";
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

const CREDENTIALS = [
  { label: "CPA", detail: "Licensed since 1994" },
  { label: "EA", detail: "Can represent you before the IRS" },
  { label: "MBA", detail: "Finance, Saint Xavier University" },
  { label: "Since 1997", detail: "Advising small business owners" },
];

const REVIEWS = [
  {
    text: "1st Chicago Accounting has been doing our business and personal taxes for over 10 years. They also handle our quarterly filings and helped us set up our S-Corps and LLCs. I cannot recommend them highly enough.",
    years: "10+ year client",
  },
  {
    text: "I have worked with Brad and 1st Chicago Accounting for nearly 10 years. Brad has been extremely helpful with financial management, reporting, and tax planning. I have recommended 1st Chicago to many colleagues.",
    years: "10-year client",
  },
  {
    text: "Have been working with 1st Chicago Accounting for the last 4 years. They prepare our corporate and personal taxes. Highly recommended for tax planning, small business accounting, and personal returns.",
    years: "4-year client",
  },
];

function pickVariant(variants: LandingPageProps["variants"]): { key: string; v: HeadlineVariant } {
  const key = new URLSearchParams(window.location.search).get("v") ?? "default";
  return variants[key] ? { key, v: variants[key] } : { key: "default", v: variants.default };
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
                src="/manus-storage/brad_headshot_cd18b67a.png"
                alt="Brad Filmanowicz, CPA, MBA, EA"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-white/80"
              />
              <div>
                <p className="text-white font-semibold">Brad Filmanowicz, CPA, MBA, EA</p>
                <p className="text-white/60 text-sm">You meet with Brad himself, not a junior associate.</p>
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
              <p className="text-sm text-gray-500 mb-4">Tell us a little about your business. Brad will be in touch within one business day.</p>
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

      {/* ── 2. CREDENTIALS ── */}
      <section className="py-8 border-b border-gray-100">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {CREDENTIALS.map((c) => (
            <div key={c.label}>
              <p className="text-2xl font-bold text-gray-900" style={serif}>{c.label}</p>
              <p className="text-sm text-gray-500">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. OUTCOMES ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" style={serif}>
            {props.outcomesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.outcomes.map((o) => (
              <div key={o.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <CheckCircle2 size={22} className="mb-3" style={{ color: CYAN }} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{o.title}</h3>
                <p className="text-gray-600 leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" style={serif}>
            How it works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {props.steps.map((s, i) => (
              <li key={s.title} className="text-center">
                <span
                  className="inline-flex w-11 h-11 rounded-full items-center justify-center text-white font-bold mb-4"
                  style={{ backgroundColor: CYAN }}
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5. BOOK ONLINE ── */}
      <section id="book" className="py-16 md:py-20 scroll-mt-4" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={serif}>Pick a time with Brad</h2>
            <p className="text-gray-500">Free 1-on-1 consultation over Zoom. Book directly on his calendar.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-100 overflow-hidden">
            <iframe
              src={BOOKING_URL}
              style={{ width: "100%", height: "760px", border: "none" }}
              title="Schedule a consultation with Brad Filmanowicz"
              loading="lazy"
            />
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

      {/* ── 6. REVIEWS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" style={serif}>
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <figure key={r.years} className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: CREAM }}>
                <div className="flex gap-0.5 mb-3 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-4">"{r.text}"</blockquote>
                <figcaption className="text-sm text-gray-500">Verified client · {r.years}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FREE COURSE (off until the promo code arrives) ── */}
      {COURSE_OFFER.enabled && (
        <section className="py-12 border-y border-gray-100">
          <div className="container max-w-3xl text-center">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Not ready to talk yet?</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" style={serif}>{COURSE_OFFER.title}</h2>
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
          </div>
        </section>
      )}

      {/* ── 8. FAQ ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10" style={serif}>
            Common questions
          </h2>
          <div className="space-y-3">
            {props.faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-lg border border-gray-100 p-5">
                <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: NAVY }}>
        <div className="container max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={serif}>{props.finalHeadline}</h2>
          <p className="text-white/75 text-lg mb-8">{props.finalSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-started" className="btn-primary px-8 py-4 text-base">Book a free consultation</a>
            <PhoneLink location="final_cta" className="btn-outline-white px-8 py-4 text-base" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
