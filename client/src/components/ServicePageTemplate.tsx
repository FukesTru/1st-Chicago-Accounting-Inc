/**
 * ServicePageTemplate — reusable layout for all 6 service detail pages.
 * Structure: Dark hero → Full-width image → Centered overview → Benefits grid → Brad trust → Related → Dark CTA
 * Colors: Deep navy (#0d1b35 approx), Cyan accent (oklch 0.66 0.16 218), Cream bg (oklch 0.97 0.008 80)
 */
import { Link } from "wouter";
import PageLayout from "./PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicePoint {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroTagline: string;
  intro: string;
  introExtra?: string;
  points: ServicePoint[];
  heroImage?: string;
  ctaHeadline?: string;
  ctaSubtext?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedServices?: { label: string; href: string }[];
}

const DEFAULT_HERO_IMAGE = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop";

export default function ServicePageTemplate({
  title,
  subtitle,
  heroTagline,
  intro,
  introExtra,
  points,
  heroImage,
  ctaHeadline,
  ctaSubtext,
  relatedServices,
}: ServicePageTemplateProps) {
  const imgSrc = heroImage || DEFAULT_HERO_IMAGE;

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
              "radial-gradient(ellipse at 75% 40%, oklch(0.66 0.16 218), transparent 55%)",
          }}
        />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <p
            className="section-label mb-4 fade-in"
            style={{ color: "oklch(0.66 0.16 218)" }}
          >
            {heroTagline}
          </p>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 fade-in delay-200">
            {subtitle}
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

      {/* ── 3. OVERVIEW ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="section-label mb-3 fade-in">Overview</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Provide
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5 fade-in delay-200 text-center">
            {intro}
          </p>
          {introExtra && (
            <p className="text-gray-600 text-lg leading-relaxed fade-in delay-300 text-center">
              {introExtra}
            </p>
          )}
        </div>
      </section>

      {/* ── 4. BENEFITS GRID ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.97 0.008 80)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label mb-3 fade-in">Why It Matters</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 fade-in delay-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {points.map((point, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-7 border border-gray-100 hover:border-[oklch(0.66_0.16_218)] hover:-translate-y-1 transition-all duration-200 fade-in delay-${Math.min(i * 100 + 100, 500)}`}
                style={{ boxShadow: "0 2px 12px oklch(0 0 0 / 0.05)" }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5"
                    style={{ color: "oklch(0.66 0.16 218)" }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BRAD TRUST BLOCK ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden fade-in"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.18 0.06 250) 0%, oklch(0.22 0.07 250) 100%)",
              boxShadow: "0 8px 40px oklch(0 0 0 / 0.18)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-0">
              <div className="md:w-64 shrink-0">
                <img
                  src="/manus-storage/brad_headshot_cd18b67a.png"
                  alt="Brad Filmanowicz, CPA, MBA, EA"
                  className="w-full h-64 md:h-full object-cover object-top"
                  style={{ minHeight: "260px" }}
                />
              </div>
              <div className="p-8 md:p-10">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.66 0.16 218)" }}
                >
                  Your Advisor
                </p>
                <h3
                  className="text-white text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Brad Filmanowicz
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  CPA, MBA, EA &bull; Practicing since 1997 &bull; Author of{" "}
                  <em>Profits Driven</em>
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Brad has been a tax accountant and small business advisor
                  since 1997. He holds a CPA, MBA, and Enrolled Agent
                  designation, and his background includes financial management
                  roles at Fortune 500 companies including Sara Lee Corporation.
                  He works exclusively with small business owners who want
                  better financial clarity, lower taxes, and more profitable
                  companies.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-150"
                  style={{
                    backgroundColor: "oklch(0.66 0.16 218)",
                    color: "oklch(0.18 0.06 250)",
                  }}
                >
                  Meet Brad <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RELATED SERVICES ── */}
      {relatedServices && relatedServices.length > 0 && (
        <section
          className="py-12"
          style={{ backgroundColor: "oklch(0.97 0.008 80)" }}
        >
          <div className="container text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[oklch(0.66_0.16_218)] hover:text-[oklch(0.66_0.16_218)] transition-all duration-150"
                >
                  {s.label} <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. FINAL CTA ── */}
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
            {ctaHeadline || "Ready to Get Started?"}
          </h2>
          <p className="text-white/65 mb-10 leading-relaxed fade-in delay-200">
            {ctaSubtext ||
              "Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA. Serving small business owners in Chicago, Orland Park, and across the country."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-base"
            >
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
