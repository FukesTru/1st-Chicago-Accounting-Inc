/**
 * Google Tag Manager loader. Does nothing until VITE_GTM_ID (e.g. GTM-XXXXXXX) is set
 * in the hosting environment, so merging this changes nothing on the live site by itself.
 * All Google Ads / GA4 tags are managed inside the GTM container, not in this code.
 */
export function loadGtm() {
  const id = import.meta.env.VITE_GTM_ID as string | undefined;
  if (!id || !/^GTM-[A-Z0-9]+$/.test(id)) return;

  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}
