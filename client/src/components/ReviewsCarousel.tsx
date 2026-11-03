/**
 * ReviewsCarousel — rotating library of Brad's real Google reviews.
 * Shows 1 / 2 / 3 cards per page by viewport width, advances every 6 s, pauses on hover, focus or
 * while a card is expanded, and never auto-advances for people who prefer reduced motion.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "./Reveal";
import { GOOGLE_LISTING_URL, GOOGLE_REVIEWS, type GoogleReview } from "@/data/googleReviews";
import { GOOGLE_RATING, trackEvent } from "@/lib/landing";

const NAVY = "oklch(0.18 0.06 250)";
const CYAN = "oklch(0.66 0.16 218)";
const serif = { fontFamily: "'Playfair Display', serif" };
const AUTO_MS = 6000;
const CLAMP_WORDS = 45;

function getPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function usePerPage() {
  const [perPage, setPerPage] = useState(getPerPage);
  useEffect(() => {
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return perPage;
}

export function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star key={j} size={size} fill="currentColor" />
      ))}
    </div>
  );
}

function ReviewCard({ r, expanded, onToggle }: { r: GoogleReview; expanded: boolean; onToggle: () => void }) {
  const words = r.text.split(/\s+/);
  const long = words.length > CLAMP_WORDS;
  const shown = long && !expanded ? `${words.slice(0, CLAMP_WORDS).join(" ")}…` : r.text;
  return (
    <figure className="h-full flex flex-col bg-white rounded-xl p-6 shadow-lg">
      <Stars />
      <blockquote className="text-gray-700 leading-relaxed mt-3 flex-1">“{shown}”</blockquote>
      {long && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="self-start mt-2 text-sm font-semibold underline"
          style={{ color: CYAN }}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-gray-900">{r.name}</span>
        <span className="flex items-center gap-1.5 text-gray-500 whitespace-nowrap">
          <GoogleG size={14} /> Google review
        </span>
      </figcaption>
    </figure>
  );
}

export default function ReviewsCarousel() {
  const perPage = usePerPage();
  const pages = Math.max(1, Math.ceil(GOOGLE_REVIEWS.length / perPage));
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const reduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const go = useCallback(
    (dir: 1 | -1) => setPage((p) => (p + dir + pages) % pages),
    [pages],
  );

  const visible = GOOGLE_REVIEWS.slice(page * perPage, page * perPage + perPage);
  const anyExpanded = visible.some((r) => expanded.has(r.name));
  const paused = hover || anyExpanded || reduced || pages < 2;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  const toggle = (name: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  const count = GOOGLE_RATING?.count ?? GOOGLE_REVIEWS.length;
  const stars = GOOGLE_RATING?.stars ?? "5.0";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: NAVY }} aria-labelledby="reviews-heading">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(ellipse at 85% 15%, ${CYAN}, transparent 55%)` }}
      />
      <div className="container relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10 md:mb-12">
            <div>
              <p className="section-label mb-3" style={{ color: CYAN }}>Client reviews</p>
              <h2 id="reviews-heading" className="text-white text-3xl md:text-4xl font-bold leading-tight" style={serif}>
                What Brad's clients say
              </h2>
              <div className="flex items-center gap-4 mt-5">
                <span className="text-white text-5xl md:text-6xl font-bold leading-none" style={serif}>{stars}</span>
                <div>
                  <Stars size={20} />
                  <p className="flex items-center gap-1.5 text-white/75 text-sm mt-1.5">
                    <GoogleG size={16} /> Based on {count} Google reviews
                  </p>
                </div>
              </div>
            </div>
            <a
              href={GOOGLE_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white px-6 py-3 self-start md:self-auto"
              onClick={() => trackEvent("google_reviews_click", { click_location: "reviews" })}
            >
              Read all {count} on Google
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client reviews"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocusCapture={() => setHover(true)}
            onBlurCapture={() => setHover(false)}
          >
            <div key={page} className="lp-review-track grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((r) => (
                <ReviewCard key={r.name} r={r} expanded={expanded.has(r.name)} onToggle={() => toggle(r.name)} />
              ))}
            </div>

            <div className="flex items-center justify-between gap-6 mt-8">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous reviews"
                  className="inline-grid place-items-center w-11 h-11 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next reviews"
                  className="inline-grid place-items-center w-11 h-11 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              {pages <= 12 ? (
                <div className="flex flex-wrap justify-end gap-2">
                  {Array.from({ length: pages }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPage(i)}
                      aria-label={`Go to reviews page ${i + 1}`}
                      aria-current={i === page ? "true" : undefined}
                      className="w-2.5 h-2.5 rounded-full transition-colors"
                      style={{ backgroundColor: i === page ? CYAN : "rgba(255,255,255,0.3)" }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-white/60 text-sm tabular-nums">
                  {page + 1} / {pages}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
