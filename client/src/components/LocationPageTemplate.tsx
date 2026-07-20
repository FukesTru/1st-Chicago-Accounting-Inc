/**
 * LocationPageTemplate — reusable layout for all 8 SEO city pages.
 * Structure: Dark hero → Why Brad in [City] → Services card grid → Brad trust block → Also Serving strip → Dark CTA
 * Colors: Deep navy, Cyan accent (oklch 0.66 0.16 218), Cream bg (oklch 0.97 0.008 80)
 */
import { useEffect } from "react";
import { Link } from "wouter";
import PageLayout from "./PageLayout";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

const allServices = [
  {
    label: "Tax Planning",
    href: "/tax-planning",
    desc: "Year-round strategy to reduce your tax burden before year-end decisions are locked in.",
  },
  {
    label: "Business Accounting",
    href: "/business-accounting",
    desc: "Accurate financial statements and reporting that give you a clear picture of your business.",
  },
  {
    label: "Tax Preparation",
    href: "/tax-preparation",
    desc: "Precise, compliant tax filing for individuals, small businesses, and corporations.",
  },
  {
    label: "Payroll Services",
    href: "/payroll",
    desc: "Reliable payroll processing that keeps your team paid and your business compliant.",
  },
  {
    label: "CFO Services",
    href: "/cfo-services",
    desc: "Executive-level financial guidance and oversight, applied to your small business.",
  },
  {
    label: "Bookkeeping",
    href: "/bookkeeping",
    desc: "Clean, organized books maintained monthly so you always know where you stand.",
  },
];

const otherCities = [
  { label: "Chicago", href: "/locations/chicago" },
  { label: "Orland Park", href: "/locations/orland-park" },
  { label: "Tinley Park", href: "/locations/tinley-park" },
  { label: "Oak Forest", href: "/locations/oak-forest" },
  { label: "Palos Heights", href: "/locations/palos-heights" },
  { label: "Palos Park", href: "/locations/palos-park" },
  { label: "Homer Glen", href: "/locations/homer-glen" },
  { label: "Mokena", href: "/locations/mokena" },
];

interface LocationPageTemplateProps {
  city: string;
  state?: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whyBrad: string;
  servicesFocus?: string;
}

export default function LocationPageTemplate({
  city,
  state = "IL",
  heroTitle,
  heroSubtitle,
  intro,
  whyBrad,
  servicesFocus,
}: LocationPageTemplateProps) {
  const currentPath = `/locations/${city.toLowerCase().replace(/\s+/g, "-")}`;
  const otherCitiesFiltered = otherCities.filter((c) => c.href !== currentPath);

  useEffect(() => {
    document.title = `CPA in ${city}, ${state} | 1st Chicago Accounting`;
    return () => {
      document.title = "1st Chicago Accounting | CPA, Tax Planning & Business Accounting";
    };
  }, [city, state]);

  return (
    <PageLayout>
      {/* ── 1. HERO ── */}
      <section
        className="relative pt-32 pb-24 md:pt-44 md:pb-32"
        style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 40%, oklch(0.66 0.16 218), transparent 55%)",
          }}
        />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 fade-in">
            <MapPin size={14} style={{ color: "oklch(0.66 0.16 218)" }} />
            <p
              className="section-label"
              style={{ color: "oklch(0.66 0.16 218)" }}
            >
              Serving {city}, {state}
            </p>
          </div>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CPA in {city}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 fade-in delay-200">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Schedule a Consultation
            </Link>
            <a
              href="tel:7084284980"
              className="btn-outline-white px-8 py-4 text-base"
            >
              Call 708-428-4980
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHY BRAD IN [CITY] ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <div className="fade-in-left">
              <p className="section-label mb-3">Why 1st Chicago Accounting</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Trusted CPA Services for {city} Residents &amp; Businesses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{intro}</p>
              {servicesFocus && (
                <p className="text-gray-600 leading-relaxed">{servicesFocus}</p>
              )}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "CPA, MBA, and EA: Triple-Credentialed Advisor",
                  "Practicing in the Chicago area since 1997",
                  "Former Fortune 500 financial analyst",
                  "In-person and remote consultations available",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: "oklch(0.66 0.16 218)" }}
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden fade-in-right delay-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.06 250), oklch(0.24 0.07 250))",
                boxShadow: "0 8px 40px oklch(0 0 0 / 0.15)",
              }}
            >
              <img
                src="/manus-storage/brad_headshot_cd18b67a.png"
                alt="Brad Filmanowicz, CPA, MBA, EA"
                className="w-full object-cover object-top"
                style={{ height: "320px" }}
              />
              <div className="p-7">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "oklch(0.66 0.16 218)" }}
                >
                  Your {city} CPA
                </p>
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Brad Filmanowicz
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  CPA, MBA, EA &bull; Practicing since 1997
                </p>
                <p className="text-white/75 text-sm leading-relaxed">{whyBrad}</p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold"
                  style={{ color: "oklch(0.66 0.16 218)" }}
                >
                  Learn more about Brad <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES CARD GRID ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.97 0.008 80)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label mb-3 fade-in">
              Our Services in {city}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 fade-in delay-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {allServices.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group bg-white rounded-xl p-7 border border-gray-100 hover:border-[oklch(0.66_0.16_218)] hover:-translate-y-1 transition-all duration-200 fade-in delay-${Math.min(i * 80 + 100, 500)}`}
                style={{ boxShadow: "0 2px 12px oklch(0 0 0 / 0.05)" }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[oklch(0.66_0.16_218)] transition-colors duration-150">
                  {s.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.66 0.16 218)" }}
                >
                  Learn More <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CREDENTIALS + ALSO SERVING (combined) ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
            {[
              "CPA: Certified Public Accountant",
              "MBA: Master of Finance",
              "EA: Enrolled Agent",
              "Practicing Since 1997",
              "Chicago & Orland Park, IL",
              "Remote Clients Nationwide",
            ].map((c) => (
              <span key={c} className="credential-badge text-xs">
                {c}
              </span>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 text-center">
              Also Serving
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {otherCitiesFiltered.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-[oklch(0.66_0.16_218)] hover:text-[oklch(0.66_0.16_218)] transition-all duration-150"
                >
                  <MapPin size={11} />
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
      >
        <div className="container text-center max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 fade-in"
            style={{ color: "oklch(0.66 0.16 218)" }}
          >
            Get Started
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-5 fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Looking for a CPA in {city}?
          </h2>
          <p className="text-white/65 mb-10 leading-relaxed fade-in delay-200">
            1st Chicago Accounting serves {city} and the surrounding southwest
            suburbs. Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA.
            In-person and virtual appointments are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Schedule a Consultation
            </Link>
            <a
              href="tel:7084284980"
              className="btn-outline-white px-8 py-4 text-base"
            >
              708-428-4980
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
