/**
 * Footer — 1st Chicago Accounting
 * Design: Deep navy background, white text, cyan accent links.
 * NO cyan CTA strip — removed per design review.
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const serviceLinks = [
  { label: "Tax Planning", href: "/tax-planning" },
  { label: "Business Accounting", href: "/business-accounting" },
  { label: "Tax Preparation", href: "/tax-preparation" },
  { label: "Payroll", href: "/payroll" },
  { label: "CFO Services", href: "/cfo-services" },
  { label: "Bookkeeping", href: "/bookkeeping" },
];

const locationLinks = [
  { label: "CPA in Chicago, IL", href: "/locations/chicago" },
  { label: "CPA in Orland Park, IL", href: "/locations/orland-park" },
  { label: "CPA in Tinley Park, IL", href: "/locations/tinley-park" },
  { label: "CPA in Oak Forest, IL", href: "/locations/oak-forest" },
  { label: "CPA in Palos Heights, IL", href: "/locations/palos-heights" },
  { label: "CPA in Homer Glen, IL", href: "/locations/homer-glen" },
  { label: "CPA in Mokena, IL", href: "/locations/mokena" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.06 250)" }} className="text-white">
      {/* Main Footer */}
      <div className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src="/manus-storage/logo_transparent_156fdccb.png"
                alt="1st Chicago Accounting"
                className="h-16 w-auto mb-5"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Tax planning, business accounting, and financial advisory services for small business owners in Chicago, Orland Park, and across the country.
              </p>
              <div className="space-y-2.5">
                <a href="tel:7084284980" className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors duration-150">
                  <Phone size={13} className="shrink-0" />
                  708-428-4980
                </a>
                <a href="tel:3128871040" className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors duration-150">
                  <Phone size={13} className="shrink-0" />
                  312-887-1040
                </a>
                <a href="mailto:brad@1stchicagoaccounting.com" className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors duration-150">
                  <Mail size={13} className="shrink-0" />
                  brad@1stchicagoaccounting.com
                </a>
              </div>
              <a
                href="https://www.facebook.com/1stchicagoaccounting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-white/50 hover:text-white/80 transition-colors duration-150"
              >
                <Facebook size={14} />
                Facebook
              </a>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Service Areas</h4>
              <ul className="space-y-2.5">
                {locationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Locations</h4>
              <div className="space-y-5">
                <div className="flex gap-2.5">
                  <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "oklch(0.66 0.16 218)" }} />
                  <div>
                    <p className="text-sm font-medium text-white">New Lenox Office</p>
                    <p className="text-sm text-white/60 mt-0.5">2522 Bluestone Bay Dr.<br />New Lenox, IL 60451</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "oklch(0.66 0.16 218)" }} />
                  <div>
                    <p className="text-sm font-medium text-white">Chicago Office</p>
                    <p className="text-sm text-white/60 mt-0.5">564 W Randolph St, 2nd Fl<br />Chicago, IL 60661</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/60">Monday through Friday, 9:00 AM to 5:00 PM</p>
                  <p className="text-sm text-white/60 mt-0.5">Remote clients accepted nationwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }} className="py-5">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} 1st Chicago Accounting, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">Home</Link>
              <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">About</Link>
              <Link href="/services" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">Services</Link>
              <Link href="/contact" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">Contact</Link>
              <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
