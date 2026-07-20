/**
 * Services Overview Page — 1st Chicago Accounting
 * Design: Editorial advisory layout. Navy/cream/charcoal. Cyan used sparingly.
 * Differentiates core advisory services from compliance services visually.
 */
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

import { ArrowRight } from "lucide-react";

const coreServices = [
  {
    number: "01",
    title: "Tax Planning",
    href: "/tax-planning",
    tagline: "Year-round strategy, not year-end scramble.",
    description: "Most CPAs file your taxes. Brad plans them. Year-round tax strategy that identifies opportunities before year-end decisions are locked in, including entity structure reviews, retirement planning, and estimated tax management.",
    highlight: "Multiple tax plans per year",
  },
  {
    number: "02",
    title: "CFO Services",
    href: "/cfo-services",
    tagline: "Fortune 500 thinking for small business owners.",
    description: "Weekly financial dashboards, KPI tracking, cash flow management, and budget reviews. These are the same financial disciplines that large organizations use, scaled to fit a small business. Brad's background at Sara Lee Corporation informs every engagement.",
    highlight: "Weekly financial dashboards",
  },
  {
    number: "03",
    title: "Business Accounting",
    href: "/business-accounting",
    tagline: "Clarity on what is actually happening in your business.",
    description: "Accurate monthly financial statements, cash flow reporting, and financial analysis that give you better visibility into your business performance. This is real financial intelligence, not just compliance.",
    highlight: "Monthly financial statements",
  },
];

const complianceServices = [
  {
    title: "Tax Preparation",
    href: "/tax-preparation",
    description: "Business and personal tax returns prepared accurately and on time, connected to your year-round tax plan. S-Corp, LLC, and partnership filings handled correctly.",
  },
  {
    title: "Payroll",
    href: "/payroll",
    description: "Accurate payroll processing, tax filings, direct deposit, and year-end W-2 and 1099 preparation. Dependable and organized.",
  },
  {
    title: "Bookkeeping",
    href: "/bookkeeping",
    description: "Clean, organized books every month. Bank reconciliation, expense categorization, and QuickBooks support. The foundation for everything else.",
  },
];

export default function Services() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, oklch(0.66 0.16 218), transparent 60%)" }} />
        <div className="container relative z-10">
          <p className="section-label text-[oklch(0.66_0.16_218)] mb-3">What We Offer</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Financial Services Built Around Your Business
          </h1>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: "oklch(0.66 0.16 218)" }} />
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Every service offered by 1st Chicago Accounting is designed to reduce tax stress, improve financial clarity, and help small business owners build more profitable companies.
          </p>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-xs mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Advisory Services</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Where Strategy Meets Execution
            </h2>
            <div className="w-8 h-0.5 mt-3" style={{ backgroundColor: "oklch(0.22 0.06 250)" }} />
          </div>

          <div className="space-y-0">
            {coreServices.map((service, i) => (
              <div
                key={service.href}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${i < coreServices.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {/* Number */}
                <div className="lg:col-span-1 pt-10 pb-2 lg:pb-10 pr-0 lg:pr-6">
                  <span className="text-4xl font-bold" style={{ color: "oklch(0.9 0.005 250)", fontFamily: "'Playfair Display', serif" }}>
                    {service.number}
                  </span>
                </div>
                {/* Content */}
                <div className="lg:col-span-7 py-6 lg:py-10 lg:pr-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 italic mb-4">{service.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[oklch(0.66_0.16_218)] transition-colors duration-150">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
                {/* Highlight + CTA */}
                <div className="lg:col-span-4 py-6 lg:py-10 lg:pl-8 lg:border-l border-gray-100 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Includes</p>
                    <p className="text-sm font-medium text-gray-700">{service.highlight}</p>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border-2 transition-all duration-200" style={{ borderColor: "oklch(0.22 0.06 250)", color: "oklch(0.22 0.06 250)" }}>
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section style={{ backgroundColor: "oklch(0.97 0.008 80)" }} className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-xs mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Compliance Services</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Foundation Every Business Needs
            </h2>
            <div className="w-8 h-0.5 mt-3" style={{ backgroundColor: "oklch(0.22 0.06 250)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceServices.map((service) => (
              <div
                key={service.href}
                className="bg-white rounded-xl p-7 border border-gray-100 flex flex-col"
                style={{ boxShadow: "0 1px 4px oklch(0 0 0 / 0.04)" }}
              >
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[oklch(0.66_0.16_218)] transition-colors duration-150">
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brad Advisory Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
            <img
              src="/manus-storage/brad_headshot_cd18b67a.png"
              alt="Brad Filmanowicz, CPA, MBA, EA"
              className="w-28 h-28 rounded-full object-cover object-top shrink-0 border-4 border-white"
              style={{ boxShadow: "0 4px 20px oklch(0 0 0 / 0.12)" }}
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Your Advisor</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Brad Filmanowicz, CPA, MBA, EA</h3>
              <p className="text-sm text-gray-500 mb-3">Small Business Advisor since 1997 &bull; Chicago & Orland Park, IL</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Every service at 1st Chicago Accounting is delivered by Brad personally, not a junior associate. Brad has over 28 years of experience as a CPA, MBA, and Enrolled Agent, with a background in Fortune 500 financial management at Sara Lee Corporation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CPA", "MBA", "EA", "QuickBooks ProAdvisor", "Practicing Since 1997"].map((c) => (
                  <span key={c} className="credential-badge text-xs">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "oklch(0.22 0.06 250)" }} className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "oklch(0.66 0.16 218)" }}>Get Started</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Talk About Your Business
              </h2>
              <p className="text-white/65 mt-3 max-w-lg">
                Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA. Serving small business owners in Chicago, Orland Park, and across the country.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">Schedule a Consultation</Link>
              <a href="tel:7084284980" className="btn-outline-white px-8 py-3.5 text-base">708-428-4980</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
