/**
 * IntroCurtain — one-time navy curtain for the Google Ads landing pages.
 * The page renders underneath immediately; the curtain is purely visual:
 *   logo rises into the centre → short hold → curtain and logo lift away.
 * While the curtain is up the page can't be scrolled, so the visitor never lands halfway down the page
 * (or triggers the calendar to load) before they've seen the top.
 * Plays once per browser session, never for reduced-motion users.
 */
import { useEffect, useState } from "react";

const SEEN_KEY = "lp_intro_seen";
const LOGO_MS = 750; // logo in + hold
const LIFT_MS = 600;
const SCROLL_KEYS = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Spacebar"]);

function shouldPlay(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (window.sessionStorage.getItem(SEEN_KEY)) return false;
  } catch {
    /* storage blocked: play once anyway */
  }
  return true;
}

export default function IntroCurtain() {
  const [phase, setPhase] = useState<"logo" | "lift" | "done">(() => (shouldPlay() ? "logo" : "done"));

  useEffect(() => {
    if (phase !== "logo") return;
    try {
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }

    // Hold the page still (at the top) until the curtain starts lifting.
    window.scrollTo(0, 0);
    const block = (e: Event) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) e.preventDefault();
    };
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", blockKeys);
    const unlock = () => {
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKeys);
    };

    const lift = window.setTimeout(() => {
      unlock();
      setPhase("lift");
    }, LOGO_MS);
    const done = window.setTimeout(() => setPhase("done"), LOGO_MS + LIFT_MS);
    return () => {
      unlock();
      window.clearTimeout(lift);
      window.clearTimeout(done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`lp-curtain${phase === "lift" ? " lp-curtain--lift" : ""}`} aria-hidden="true">
      <img
        src="/manus-storage/logo_transparent_156fdccb.png"
        alt=""
        className="lp-curtain__logo"
        width={516}
        height={211}
        decoding="sync"
        fetchPriority="high"
      />
    </div>
  );
}
