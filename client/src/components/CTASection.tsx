/**
 * CTASection — Full-width navy CTA block used mid-page and at bottom of pages.
 * Design: Deep navy background, white text, cyan-bordered secondary button.
 */
import { Link } from "wouter";
import { Phone } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
}

export default function CTASection({
  headline = "Ready to Build a More Profitable Business?",
  subtext = "Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA. Serving Chicago, Orland Park, and small business owners nationwide.",
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section style={{ backgroundColor: "oklch(0.22 0.06 250)" }} className="py-16 md:py-20">
      <div className="container text-center">
        <p className="section-label text-[oklch(0.66_0.16_218)] mb-3">{showPhone ? "Get Started" : "Take the Next Step"}</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          {headline}
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-primary px-8 py-3.5 text-base">
            {primaryLabel}
          </Link>
          {showPhone && (
            <a
              href="tel:7084284980"
              className="btn-outline-white px-8 py-3.5 text-base flex items-center gap-2"
            >
              <Phone size={16} />
              Call 708-428-4980
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
