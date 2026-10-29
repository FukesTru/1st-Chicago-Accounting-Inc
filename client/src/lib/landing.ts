/**
 * Google Ads landing page settings — one place to fill in the blanks.
 * Anything marked BLANK is waiting on Brad; the pages work without it.
 */

export const PHONE_DISPLAY = "708-428-4980";
export const PHONE_TEL = "7084284980";

export const BOOKING_URL = "https://go.oncehub.com/BradFilmanowicz";

// GoHighLevel form shown on the landing pages. Currently the existing website form.
// Swap in the new qualifying form's ID once it's built in GHL (its "on submit" must redirect to /thank-you).
export const LP_FORM_ID = "ncooGQAgnji9RqUdJ9an";
export const LP_FORM_NAME = "Website Form (Brad Chicago Accounting)";

// Shown as "City, ST" only until Brad confirms whether 2522 Bluestone Bay Dr is an office or his home.
export const SERVICE_AREA = "New Lenox, IL · Serving the Chicago area and remote clients on Zoom";

// Public Google Business Profile figures (checked 2026-10-28). Set to null to hide the badge.
export const GOOGLE_RATING: { stars: string; count: number } | null = { stars: "4.8", count: 34 };

// BLANK: a "plans from $X/month" line, only if Brad agrees to show a starting price.
export const MONTHLY_STARTING_PRICE: string | null = null;

// BLANK: free Teachable course offer. Stays hidden until Brad sends the promo code that makes it free.
export const COURSE_OFFER = {
  enabled: false,
  title: "Free Tax Planning Course",
  url: "https://brad-s-school19.teachable.com/purchase?product_id=6835675",
  promoCode: "",
};

/** Push an event to Google Tag Manager's dataLayer (no-op until GTM is installed). */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

/** Ad landing pages shouldn't compete with the SEO pages in search results. */
export function setNoIndex(title: string) {
  document.title = title;
  let tag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "robots";
    document.head.appendChild(tag);
  }
  tag.content = "noindex, follow";
  return () => {
    tag?.remove();
    document.title = "1st Chicago Accounting | CPA, Tax Planning & CFO Services for Small Business";
  };
}
