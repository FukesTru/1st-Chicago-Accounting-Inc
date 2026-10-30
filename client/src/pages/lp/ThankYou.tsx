/**
 * /thank-you — every landing page form redirects here (set in the GHL form's "on submit").
 * GTM fires the Google Ads "Form lead" conversion on this page view / the generate_lead event.
 * /booked — target for OnceHub's after-booking redirect, once Brad grants OnceHub access.
 */
import { useEffect } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import LandingLayout, { PhoneLink } from "@/components/LandingLayout";
import { BOOKING_URL, COURSE_OFFER, trackEvent } from "@/lib/landing";

const CYAN = "oklch(0.66 0.16 218)";
const serif = { fontFamily: "'Playfair Display', serif" };

function ConfirmationPage({ kind }: { kind: "lead" | "booked" }) {
  useEffect(() => {
    trackEvent(kind === "lead" ? "generate_lead" : "consult_booked");
  }, [kind]);

  const booked = kind === "booked";

  return (
    <LandingLayout pageTitle={booked ? "Consultation Booked | 1st Chicago Accounting" : "Thank You | 1st Chicago Accounting"} hideMobileBar>
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl text-center">
          <CheckCircle2 size={56} className="mx-auto mb-6" style={{ color: CYAN }} />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={serif}>
            {booked ? "Your consultation is booked" : "Thanks, your request is in"}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            {booked
              ? "You'll get a confirmation email with the Zoom details. Brad looks forward to speaking with you."
              : "Brad will be in touch within one business day, usually by email. Want to skip the back-and-forth? Pick a time on his calendar now."}
          </p>

          {!booked && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base mb-6"
              onClick={() => trackEvent("booking_link_click", { click_location: "thank_you" })}
            >
              <CalendarCheck size={18} /> Book your free Zoom consultation
            </a>
          )}

          <p className="text-gray-600">
            Questions in the meantime? Call <PhoneLink location="thank_you" className="font-semibold text-gray-900 underline" />.
          </p>

          <div className="mt-12 text-left rounded-xl border border-gray-100 p-6" style={{ backgroundColor: "oklch(0.97 0.008 80)" }}>
            <h2 className="font-bold text-gray-900 mb-3">To make the most of your consultation, have handy:</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Last year's business and personal tax returns</li>
              <li>• This year's profit and loss, or a rough idea of revenue and expenses</li>
              <li>• Any IRS or state letters you've received</li>
            </ul>
          </div>

          {COURSE_OFFER.enabled && (
            <p className="mt-10 text-gray-600">
              While you wait:{" "}
              <a
                href={COURSE_OFFER.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
                style={{ color: CYAN }}
                onClick={() => trackEvent("course_click", { click_location: "thank_you" })}
              >
                take Brad's {COURSE_OFFER.title.toLowerCase()}
              </a>
              {COURSE_OFFER.promoCode && <> (code <b>{COURSE_OFFER.promoCode}</b>)</>}.
            </p>
          )}
        </div>
      </section>
    </LandingLayout>
  );
}

export function ThankYou() {
  return <ConfirmationPage kind="lead" />;
}

export function Booked() {
  return <ConfirmationPage kind="booked" />;
}
