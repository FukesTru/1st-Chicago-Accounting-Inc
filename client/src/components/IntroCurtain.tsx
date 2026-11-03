/**
 * IntroCurtain — one-time navy curtain for the Google Ads landing pages.
 * The page renders underneath immediately; the curtain is purely visual:
 *   logo rises into the centre (0.65s) → short hold → curtain and logo lift away (0.7s).
 * Plays once per browser session, never for reduced-motion users.
 */
import { useEffect, useState } from "react";

const SEEN_KEY = "lp_intro_seen";
const LOGO_MS = 950; // logo in + hold
const LIFT_MS = 700;

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
    const lift = window.setTimeout(() => setPhase("lift"), LOGO_MS);
    const done = window.setTimeout(() => setPhase("done"), LOGO_MS + LIFT_MS);
    return () => {
      window.clearTimeout(lift);
      window.clearTimeout(done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`lp-curtain${phase === "lift" ? " lp-curtain--lift" : ""}`} aria-hidden="true">
      <img src="/manus-storage/logo_transparent_156fdccb.png" alt="" className="lp-curtain__logo" width={516} height={211} />
    </div>
  );
}
