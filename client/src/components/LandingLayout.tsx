/**
 * LandingLayout — stripped-down wrapper for Google Ads landing pages.
 * No main navigation (fewer ways to leave), logo + phone header, sticky call/book bar on mobile.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA, setNoIndex, trackEvent } from "@/lib/landing";

interface LandingLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  /** Hide the sticky mobile bar (e.g. on the thank-you page). */
  hideMobileBar?: boolean;
}

export function PhoneLink({ className, label, location }: { className?: string; label?: string; location: string }) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={className}
      onClick={() => trackEvent("phone_click", { click_location: location })}
    >
      {label ?? PHONE_DISPLAY}
    </a>
  );
}

export default function LandingLayout({ children, pageTitle, hideMobileBar }: LandingLayoutProps) {
  useEffect(() => setNoIndex(pageTitle), [pageTitle]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <img
              src="/manus-storage/logo_transparent_156fdccb.png"
              alt="1st Chicago Accounting"
              className="h-11 md:h-14 w-auto"
            />
            <div className="flex items-center gap-2 text-right">
              <Phone size={16} className="text-[oklch(0.66_0.16_218)] hidden sm:block" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 leading-none mb-1 hidden sm:block">
                  Free consultation
                </p>
                <PhoneLink
                  location="header"
                  className="text-base md:text-lg font-bold text-gray-900 hover:text-[oklch(0.66_0.16_218)]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={`flex-1 ${hideMobileBar ? "" : "pb-20 md:pb-0"}`}>{children}</main>

      <footer className="py-8 text-center text-xs text-gray-500 border-t border-gray-100">
        <div className="container space-y-2">
          <p>1st Chicago Accounting, Inc. · {SERVICE_AREA}</p>
          <p>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </footer>

      {!hideMobileBar && (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 gap-px bg-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <PhoneLink
            location="mobile_bar"
            className="flex items-center justify-center gap-2 py-4 bg-white text-gray-900 font-semibold"
            label="Call Brad"
          />
          <a
            href="#get-started"
            className="flex items-center justify-center gap-2 py-4 text-white font-semibold"
            style={{ backgroundColor: "oklch(0.66 0.16 218)" }}
          >
            <CalendarCheck size={18} /> Free consult
          </a>
        </div>
      )}
    </div>
  );
}
