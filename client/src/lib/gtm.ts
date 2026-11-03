/**
 * Google Tag Manager loader for 1stchicagoaccounting.com.
 * Container GTM-5BDM9JSN (account "1st Chicago Accounting", created 2026-10-29).
 * VITE_GTM_ID in the hosting environment overrides the default; set it to "off" to disable.
 * All Google Ads / GA4 tags are managed inside the GTM container, not in this code.
 */
const DEFAULT_GTM_ID = "GTM-5BDM9JSN";

export function loadGtm() {
  const override = import.meta.env.VITE_GTM_ID as string | undefined;
  if (override === "off") return;
  const id = override && /^GTM-[A-Z0-9]+$/.test(override) ? override : DEFAULT_GTM_ID;

  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}
