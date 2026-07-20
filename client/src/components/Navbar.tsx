/**
 * Navbar — 1st Chicago Accounting
 * Design: Transparent over hero, transitions to white/95 with backdrop blur on scroll.
 * Services dropdown + Service Locations dropdown. Scroll-to-top on every navigation.
 * Brand colors: cyan #2BACE2, navy #0F2240
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { label: "Tax Planning", href: "/tax-planning" },
  { label: "Business Accounting", href: "/business-accounting" },
  { label: "Tax Preparation", href: "/tax-preparation" },
  { label: "Payroll", href: "/payroll" },
  { label: "CFO Services", href: "/cfo-services" },
  { label: "Bookkeeping", href: "/bookkeeping" },
];

const locations = [
  { label: "Chicago", href: "/locations/chicago" },
  { label: "Orland Park", href: "/locations/orland-park" },
  { label: "Tinley Park", href: "/locations/tinley-park" },
  { label: "Oak Forest", href: "/locations/oak-forest" },
  { label: "Palos Heights", href: "/locations/palos-heights" },
  { label: "Palos Park", href: "/locations/palos-park" },
  { label: "Homer Glen", href: "/locations/homer-glen" },
  { label: "Mokena", href: "/locations/mokena" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus and scroll to top on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    scrollToTop();
  }, [location]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-gray-800" : "text-white";

  const dropdownLinkClass = "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[oklch(0.66_0.16_218)] transition-colors duration-150";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex items-center shrink-0">
            <img
              src="/manus-storage/logo_transparent_156fdccb.png"
              alt="1st Chicago Accounting"
              className="h-12 md:h-14 w-auto transition-all duration-300"
              style={{ filter: scrolled || !isHome ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              onClick={scrollToTop}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)] ${location === "/" ? "text-[oklch(0.66_0.16_218)]" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={scrollToTop}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)] ${location === "/about" ? "text-[oklch(0.66_0.16_218)]" : ""}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)]`}
              >
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                  <Link href="/services" onClick={scrollToTop} className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:bg-gray-50 border-b border-gray-100 mb-1">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={scrollToTop} className={dropdownLinkClass}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Locations Dropdown */}
            <div className="relative" ref={locationsRef}>
              <button
                onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)]`}
              >
                Service Locations
                <ChevronDown size={13} className={`transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                  {locations.map((l) => (
                    <Link key={l.href} href={l.href} onClick={scrollToTop} className={dropdownLinkClass}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={scrollToTop}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)] ${location === "/contact" ? "text-[oklch(0.66_0.16_218)]" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7084284980"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 ${textColor} hover:text-[oklch(0.66_0.16_218)]`}
            >
              <Phone size={14} />
              708-428-4980
            </a>
            <Link href="/contact" onClick={scrollToTop} className="btn-primary text-sm px-5 py-2.5">
              Schedule a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container py-4 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                className={`block px-3 py-2.5 text-sm font-medium rounded hover:bg-gray-50 ${location === link.href ? "text-[oklch(0.66_0.16_218)]" : "text-gray-800"}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-800 rounded hover:bg-gray-50"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/services" onClick={scrollToTop} className="block px-3 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:bg-gray-50">All Services</Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={scrollToTop} className="block px-3 py-2 text-sm text-gray-600 hover:text-[oklch(0.66_0.16_218)] rounded hover:bg-gray-50">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Locations */}
            <div>
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-800 rounded hover:bg-gray-50"
              >
                Service Locations
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileLocationsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {locations.map((l) => (
                    <Link key={l.href} href={l.href} onClick={scrollToTop} className="block px-3 py-2 text-sm text-gray-600 hover:text-[oklch(0.66_0.16_218)] rounded hover:bg-gray-50">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a href="tel:7084284980" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700">
                <Phone size={14} />
                708-428-4980
              </a>
              <Link href="/contact" onClick={scrollToTop} className="btn-primary w-full text-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
