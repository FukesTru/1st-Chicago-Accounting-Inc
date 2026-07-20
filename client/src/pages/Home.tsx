/**
 * Home Page — 1st Chicago Accounting
 * Design: Deep Navy + Sky Cyan + Cream. Playfair Display headings, Inter body.
 * Sections: Hero, Trust Bar, Problem/Solution, Services, CFO Feature, About Brad,
 *           Reviews, Profits Driven Book, Why Different, FAQ, Final CTA.
 */
import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Phone, ArrowRight, ChevronDown, ChevronUp, CheckCircle2, TrendingUp, Shield, Users, BarChart3, BookOpen, Award } from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={22} />,
    title: "Tax Planning",
    description: "Proactive, year-round tax strategy designed to help small business owners reduce their tax liability and plan ahead, not just file on time.",
    href: "/tax-planning",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Business Accounting",
    description: "Accurate financial records and clear reporting that give you better visibility into your business performance and cash flow.",
    href: "/business-accounting",
  },
  {
    icon: <Shield size={22} />,
    title: "Tax Preparation",
    description: "Organized, accurate tax preparation for small business owners, connected to your year-round tax plan.",
    href: "/tax-preparation",
  },
  {
    icon: <Users size={22} />,
    title: "Payroll",
    description: "Accurate payroll processing and tax compliance for small businesses. Dependable, simple, and organized.",
    href: "/payroll",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "CFO Services",
    description: "Executive-level financial oversight for small business owners. Weekly dashboards, KPI tracking, cash flow management, and profit reviews.",
    href: "/cfo-services",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Bookkeeping",
    description: "Clean, organized books every month. A solid foundation for better accounting, tax planning, and smarter financial decisions.",
    href: "/bookkeeping",
  },
];

const reviews = [
  {
    text: "1st Chicago Accounting has been doing our business and personal taxes for over 10 years. They also handle our quarterly filings and helped us set up our S-Corps and LLCs. I cannot recommend them highly enough.",
    author: "Verified Client",
    years: "10+ year client",
  },
  {
    text: "I have worked with Brad and 1st Chicago Accounting for nearly 10 years. Brad has been extremely helpful with financial management, reporting, and tax planning. I have recommended 1st Chicago to many colleagues.",
    author: "Verified Client",
    years: "10-year client",
  },
  {
    text: "Have been working with 1st Chicago Accounting for the last 4 years. They prepare our corporate and personal taxes. Highly recommended for tax planning, small business accounting, and personal returns.",
    author: "Verified Client",
    years: "4-year client",
  },
];

const faqs = [
  {
    q: "Who does 1st Chicago Accounting work with?",
    a: "1st Chicago Accounting works exclusively with small business owners, entrepreneurs, and self-employed professionals. The firm does not focus on individual tax returns outside of its business clients.",
  },
  {
    q: "What makes Brad Filmanowicz different from other CPAs?",
    a: "Brad is a CPA, MBA, and Enrolled Agent with over 28 years of experience as a small business advisor. His background includes Fortune 500 financial management at Sara Lee Corporation, which he applies to help small business owners think more strategically about their finances.",
  },
  {
    q: "Does 1st Chicago Accounting offer remote services?",
    a: "Yes. While the firm has offices in Chicago and Orland Park, IL, it also serves clients remotely across the United States.",
  },
  {
    q: "What is the difference between tax planning and tax preparation?",
    a: "Tax preparation is the process of filing your tax returns accurately and on time. Tax planning is a proactive, year-round strategy that identifies opportunities to reduce your tax liability before year-end decisions are made. Both are important, but tax planning is where most business owners find the greatest long-term value.",
  },
  {
    q: "What are CFO Services?",
    a: "CFO Services give small business owners the same type of financial guidance that large companies receive from a full-time Chief Financial Officer. This includes dashboards, KPI tracking, cash flow management, budget reviews, and profit and loss analysis, without the cost of hiring a full-time executive.",
  },
  {
    q: "How do I get started?",
    a: "The best way to get started is to schedule a consultation. You can reach Brad by phone at 708-428-4980 or by submitting the contact form on this website.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/manus-storage/hero_bg_defa8d81.jpg')`,
            opacity: 0.3,
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, oklch(0.16 0.07 250) 45%, oklch(0.22 0.06 250 / 0.55) 100%)" }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="fade-in">
              <div className="flex items-center gap-3 mb-6">
                {["CPA", "MBA", "EA", "Since 1997"].map((c) => (
                  <span key={c} className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: "oklch(1 0 0 / 0.12)", color: "oklch(1 0 0 / 0.9)", border: "1px solid oklch(1 0 0 / 0.2)" }}>{c}</span>
                ))}
              </div>
              <h1
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stop Overpaying the IRS.
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Led by Brad Filmanowicz, CPA, MBA, EA, 1st Chicago Accounting helps small business owners reduce tax stress, improve cash flow, understand their numbers, and build more profitable companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                  Schedule a Consultation
                </Link>
                <a href="tel:7084284980" className="btn-outline-white px-8 py-4 text-base flex items-center gap-2">
                  <Phone size={16} />
                  708-428-4980
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Tax planning-first approach",
                  "CFO-level guidance",
                  "Chicago & Orland Park",
                  "Remote clients accepted",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-white/65">
                    <CheckCircle2 size={13} className="text-[oklch(0.66_0.16_218)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Brad's photo */}
            <div className="hidden lg:flex justify-end fade-in-right delay-200">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-2xl opacity-20"
                  style={{ background: "radial-gradient(circle, oklch(0.66 0.16 218), transparent 70%)" }}
                />
                <img
                  src="/manus-storage/brad_headshot_cd18b67a.png"
                  alt="Brad Filmanowicz, CPA, MBA, EA — 1st Chicago Accounting"
                  className="relative z-10 w-80 xl:w-96 rounded-2xl object-cover object-top"
                  style={{ boxShadow: "0 24px 64px oklch(0 0 0 / 0.4)" }}
                />
                {/* Name badge — sits flush below the photo */}
                <div
                  className="relative z-20 mt-3 bg-white rounded-xl px-4 py-3 w-full"
                  style={{ boxShadow: "0 8px 24px oklch(0 0 0 / 0.15)" }}
                >
                  <p className="text-xs text-gray-500 font-medium">Brad Filmanowicz</p>
                  <p className="text-sm font-bold text-gray-900">CPA, MBA, EA</p>
                  <p className="text-xs text-gray-500">Practicing since 1997</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center divide-x divide-gray-200">
            {[
              { label: "CPA", sub: "Certified Public Accountant" },
              { label: "MBA", sub: "Master of Finance" },
              { label: "EA", sub: "Enrolled Agent" },
              { label: "28+", sub: "Years of Experience" },
              { label: "Chicago & Orland Park", sub: "Two Office Locations" },
              { label: "Nationwide", sub: "Remote Clients Accepted" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center px-4 md:px-6 py-2 text-center">
                <span className="text-sm font-bold text-gray-900">{item.label}</span>
                <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / SOLUTION ===== */}
      <section style={{ backgroundColor: "oklch(0.97 0.008 80)" }} className="py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="fade-in-left">
              <p className="section-label mb-2">The Problem</p>
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Most Small Business Owners Pay More in Taxes Than They Should
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The majority of small business owners work with a CPA who is focused on filing returns, not on helping them plan ahead. By the time tax season arrives, the opportunities to reduce your tax liability have already passed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond taxes, many business owners lack clear visibility into their own numbers. They know their revenue, but they are not sure where the money is going, why cash flow feels tight, or how to make their business more profitable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That is the gap 1st Chicago Accounting is built to fill.
              </p>
            </div>
            <div className="space-y-4 fade-in-right delay-200">
              {[
                { title: "Proactive Tax Planning", desc: "Year-round strategy designed to identify tax-saving opportunities well before year-end, not after the fact." },
                { title: "Financial Clarity", desc: "Accurate books and clear reporting so you always know where your business stands." },
                { title: "CFO-Level Guidance", desc: "Executive-level financial thinking applied to small business, without the overhead of a full-time CFO." },
                { title: "Small Business Focus", desc: "Every service is built for small business owners. No individual tax return overflow and no divided attention during busy season." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-gray-100 flex gap-4">
                  <div className="w-1 rounded-full shrink-0" style={{ backgroundColor: "oklch(0.66 0.16 218)" }} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 fade-in">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Services Built for Small Business Owners
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ backgroundColor: "oklch(0.22 0.06 250)" }} />
            </div>
            <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-gray-900 flex items-center gap-1.5 shrink-0 transition-colors duration-150">
              View all services <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className={`service-card group flex flex-col fade-in delay-${Math.min(i * 100 + 100, 500)}`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-white transition-colors duration-200"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-gray-500 group-hover:text-[oklch(0.66_0.16_218)] transition-colors duration-150">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CFO FEATURE ===== */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, oklch(0.66 0.16 218), transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="fade-in-left">
              <p className="section-label text-[oklch(0.66_0.16_218)] mb-2">Featured Service</p>
              <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: "oklch(0.66 0.16 218)" }} />
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fortune 500 Financial Thinking, Simplified for Small Business Owners
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Most small business owners do not have a team of financial analysts reviewing their numbers every week. With 1st Chicago Accounting's CFO Services, you get that same level of financial oversight without the cost of a full-time executive.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Brad draws on his experience at Fortune 500 companies, including Sara Lee Corporation, to help small business owners understand their KPIs, manage cash flow, build budgets, and make better decisions throughout the year.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Weekly Dashboards", "KPI Tracking", "Cash Flow Management", "Budget Reviews", "P&L Analysis", "Variance Analysis"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/75">
                    <CheckCircle2 size={13} className="text-[oklch(0.66_0.16_218)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/cfo-services" className="btn-primary px-7 py-3">
                Learn About CFO Services
              </Link>
            </div>
            <div
              className="rounded-2xl overflow-hidden fade-in-right delay-200"
              style={{ boxShadow: "0 24px 64px oklch(0 0 0 / 0.3)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop"
                alt="1st Chicago Accounting — Financial advisory office"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT BRAD ===== */}
      <section style={{ backgroundColor: "oklch(0.97 0.008 80)" }} className="py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative fade-in-left">
              <img
                src="/manus-storage/brad_headshot_cd18b67a.png"
                alt="Brad Filmanowicz, CPA, MBA, EA"
                className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl object-cover object-top"
                style={{ boxShadow: "0 16px 48px oklch(0 0 0 / 0.12)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-4 hidden lg:block"
                style={{ boxShadow: "0 8px 24px oklch(0 0 0 / 0.1)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award size={14} className="text-[oklch(0.66_0.16_218)]" />
                  <span className="text-xs font-semibold text-gray-700">Author</span>
                </div>
                <p className="text-sm font-bold text-gray-900">Profits Driven</p>
                <p className="text-xs text-gray-500">Brad Filmanowicz, CPA, MBA, EA</p>
              </div>
            </div>
            <div className="fade-in-right delay-200">
              <p className="section-label mb-2">Meet Your Advisor</p>
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Brad Filmanowicz, CPA, MBA, EA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brad Filmanowicz has been a tax accountant and small business advisor since 1997. He earned his CPA in 1994 and a Master's Degree in Finance from Saint Xavier University in 1997.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before starting his own firm, Brad worked as an Accounting Manager for Telular Corporation, a Financial Planning Accountant for Sara Lee Corporation, and a Controller for Moran Industries. His time at Sara Lee taught him how large organizations use financial data to drive better decisions. He now applies that same discipline to every small business client he works with.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Brad is also the author of <em>Profits Driven</em>, a book designed to help business owners become more profit-driven instead of only sales-driven.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {["CPA", "MBA", "EA", "QuickBooks ProAdvisor", "Intuit Authorized Affiliate"].map((c) => (
                  <span key={c} className="credential-badge">{c}</span>
                ))}
              </div>
              <Link href="/about" className="btn-navy px-7 py-3">
                Learn More About Brad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <p className="section-label mb-2">Client Feedback</p>
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col fade-in delay-${(i + 1) * 100}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" viewBox="0 0 20 20" fill="oklch(0.72 0.09 70)">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">"{review.text}"</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DIFFERENT ===== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 fade-in">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Why 1st Chicago Accounting</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                More Than a Tax Preparer. A Financial Partner for Your Business.
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ backgroundColor: "oklch(0.22 0.06 250)" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Small Business Exclusive", desc: "The firm works only with small business owners. There is no individual tax return overflow, which means you receive full attention during tax season and throughout the year." },
              { title: "Proactive Tax Planning", desc: "Tax planning happens year-round, not just in April. Multiple tax plans are prepared throughout the year to identify opportunities well before the year closes." },
              { title: "CPA, MBA, and EA Credentials", desc: "Brad holds three professional designations: CPA, MBA, and Enrolled Agent. Together, they give clients access to a broader range of financial and tax expertise than most local firms can offer." },
              { title: "Fortune 500 Experience", desc: "Brad's background at Sara Lee Corporation and other large organizations gives him a practical understanding of how institutional financial thinking can be applied to small business challenges." },
              { title: "CFO-Level Guidance", desc: "Small business owners get access to dashboards, KPI tracking, cash flow management, and financial reporting, all without the cost of hiring a full-time CFO." },
              { title: "Author of Profits Driven", desc: "Brad is the author of Profits Driven, a book that reflects his commitment to helping small business owners think more strategically about their finances." },
            ].map((item, i) => (
              <div key={item.title} className={`p-6 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-white fade-in delay-${Math.min(i * 100 + 100, 500)}`} style={{ boxShadow: "0 1px 4px oklch(0 0 0 / 0.04)" }}>
                <div className="w-6 h-0.5 mb-3" style={{ backgroundColor: "oklch(0.22 0.06 250)" }} />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ backgroundColor: "oklch(0.97 0.008 80)" }} className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <p className="section-label mb-2">Common Questions</p>
              <div className="section-divider mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                  style={{ boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={16} className="shrink-0 text-[oklch(0.66_0.16_218)]" />
                    ) : (
                      <ChevronDown size={16} className="shrink-0 text-gray-400" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{ backgroundColor: "oklch(0.22 0.06 250)" }} className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "oklch(0.66 0.16 218)" }}>Take the Next Step</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Build a More Profitable Business?
              </h2>
              <p className="text-white/65 mt-3 max-w-xl">
                Serving Chicago, Orland Park, and small business owners across the United States.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
                Schedule a Consultation
              </Link>
              <a href="tel:7084284980" className="btn-outline-white px-8 py-3.5 text-base flex items-center gap-2">
                <Phone size={16} />
                708-428-4980
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
