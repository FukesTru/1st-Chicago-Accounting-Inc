/**
 * About Page — Brad Filmanowicz, CPA, MBA, EA
 * Structure: Dark centered hero → Two-column founder section → Core Values → Career Timeline → Philosophy → Dark CTA
 * Colors: Deep navy (oklch 0.18 0.06 250), Cyan (oklch 0.66 0.16 218), Cream (oklch 0.97 0.008 80)
 */
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, BookOpen, Briefcase, GraduationCap, CheckCircle2, ShieldCheck } from "lucide-react";

export default function About() {
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
          <p
            className="section-label mb-4 fade-in"
            style={{ color: "oklch(0.66 0.16 218)" }}
          >
            Our Story
          </p>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Brad Filmanowicz, CPA, MBA, EA
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 fade-in delay-200">
            Tax accountant, small business advisor, and author of{" "}
            <em>Profits Driven</em>. Serving Chicago and Orland Park, IL since
            1997.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Consultation
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

      {/* ── 2. FOUNDER SECTION ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
            {/* Left: Photo + credential badges */}
            <div className="fade-in-left">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 16px 48px oklch(0 0 0 / 0.12)" }}
              >
                <img
                  src="/manus-storage/brad_headshot_cd18b67a.png"
                  alt="Brad Filmanowicz, CPA, MBA, EA — 1st Chicago Accounting"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "480px" }}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "CPA",
                  "MBA",
                  "EA",
                  "QuickBooks ProAdvisor",
                  "Intuit Authorized Affiliate",
                ].map((c) => (
                  <span key={c} className="credential-badge">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Bio + credential list + CTA */}
            <div className="fade-in-right delay-200">
              <p className="section-label mb-3">Background</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A CPA Who Thinks Like a CFO
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brad Filmanowicz has been a tax accountant and small business
                advisor since 1997. He earned his CPA in 1994 and completed a
                Master's Degree in Finance from Saint Xavier University in 1997.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before founding 1st Chicago Accounting, Brad built his financial
                expertise in the corporate world. He served as Accounting Manager
                at Telular Corporation, Financial Planning Accountant at Sara Lee
                Corporation, and Controller at Moran Industries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                  These experiences gave Brad a deep understanding of how large
                organizations manage their finances. He now applies that same
                knowledge to help small business owners think more strategically
                about their own numbers.
              </p>

              {/* Credential bullet list */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Certified Public Accountant (CPA), State of Illinois",
                  "Master of Business Administration (MBA) in Finance",
                  "Enrolled Agent (EA), authorized to represent clients before the IRS",
                  "Certified QuickBooks ProAdvisor",
                  "Practicing since 1997, with over 28 years of experience",
                  "Author of Profits Driven",
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

              <Link href="/contact" className="btn-primary px-7 py-3.5">
                Schedule a Consultation with Brad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE VALUES ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.97 0.008 80)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label mb-3 fade-in">What Guides Us</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 fade-in delay-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <ShieldCheck size={22} />,
                title: "Integrity",
                  desc: "We operate with complete transparency and honesty. Every recommendation we make is in your best interest, full stop.",
              },
              {
                icon: <Award size={22} />,
                title: "Expertise",
                  desc: "Backed by 28 years of experience, Fortune 500 training, and three professional credentials, we bring a depth of knowledge that goes well beyond standard tax preparation.",
              },
              {
                icon: <Briefcase size={22} />,
                title: "Partnership",
                  desc: "We are not a once-a-year tax preparer. We are a year-round financial partner who helps you make better decisions with your money throughout the year.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`bg-white rounded-xl p-8 border border-gray-100 text-center fade-in delay-${i * 100 + 100}`}
                style={{ boxShadow: "0 2px 12px oklch(0 0 0 / 0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 text-white"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-bold text-gray-900 text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CAREER TIMELINE ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 fade-in">
              <p className="section-label mb-3">Career History</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Professional Background
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <Briefcase size={16} />,
                  period: "1997 – Present",
                  title: "Founder & Principal CPA",
                  org: "1st Chicago Accounting, Inc.",
                  desc: "Founded and operates a small business-focused accounting firm serving clients in Chicago, Orland Park, and nationwide. Specializes in tax planning, business accounting, CFO services, and bookkeeping.",
                },
                {
                  icon: <Briefcase size={16} />,
                  period: "Prior to 1997",
                  title: "Accounting Manager",
                  org: "Telular Corporation (Publicly Traded)",
                  desc: "Managed accounting operations for a publicly traded technology company, building experience in financial reporting, compliance, and corporate accounting standards.",
                },
                {
                  icon: <Briefcase size={16} />,
                  period: "Prior to 1997",
                  title: "Financial Planning Accountant",
                  org: "Sara Lee Corporation",
                  desc: "Worked in financial planning and analysis at one of the largest consumer goods companies in the United States. This experience shaped Brad's approach to applying disciplined financial thinking to smaller organizations.",
                },
                {
                  icon: <Briefcase size={16} />,
                  period: "Prior to 1997",
                  title: "Controller",
                  org: "Moran Industries",
                  desc: "Served as Controller, overseeing financial operations, reporting, and accounting management.",
                },
                {
                  icon: <GraduationCap size={16} />,
                  period: "1997",
                  title: "Master of Business Administration (MBA), Finance",
                  org: "Saint Xavier University, Chicago, IL",
                  desc: "Completed a graduate degree in Finance, deepening his expertise in financial analysis, corporate finance, and business strategy.",
                },
                {
                  icon: <Award size={16} />,
                  period: "1994",
                  title: "CPA License Earned",
                  org: "State of Illinois",
                  desc: "Earned the Certified Public Accountant designation, establishing the foundation for a career in professional accounting and tax advisory services.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 fade-in delay-100">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                    >
                      {item.icon}
                    </div>
                    {i < 5 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{
                          backgroundColor: "oklch(0.22 0.06 250 / 0.15)",
                        }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      {item.period}
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-0.5">
                      {item.title}
                    </h4>
                    <p
                      className="text-sm font-medium mb-2"
                      style={{ color: "oklch(0.66 0.16 218)" }}
                    >
                      {item.org}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PHILOSOPHY ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.97 0.008 80)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="fade-in-left">
              <p className="section-label mb-3">Philosophy</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Brad Focuses on Small Business Owners
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                After years of working inside large corporations, Brad saw
                firsthand how Fortune 500 companies use financial data to make
                better decisions, reduce waste, and improve profitability. He
                also saw how rarely those same tools were applied at the small
                business level.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most small business owners are excellent at their trade. But they
                often lack the financial infrastructure to understand what is
                actually happening inside their business. They know their
                revenue. They do not always know why they are not more
                profitable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Brad built 1st Chicago Accounting to change that. Every service
                the firm offers is designed to give small business owners the
                financial clarity and strategic guidance they need to build more
                profitable, sustainable companies.
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5">
                Schedule a Consultation
              </Link>
            </div>
            <div className="fade-in-right delay-200">
              <div
                className="rounded-2xl overflow-hidden mb-5"
                style={{ boxShadow: "0 16px 48px oklch(0 0 0 / 0.1)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80&auto=format&fit=crop"
                  alt="Small business financial advisory"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div
                className="p-6 rounded-xl border border-gray-200"
                style={{ backgroundColor: "white" }}
              >
                <p
                  className="text-base font-semibold text-gray-900 mb-2 italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Sales are vanity. Profits are sanity."
                </p>
                <p className="text-xs text-gray-500">
                  Brad Filmanowicz, CPA, MBA, EA, Author of{" "}
                  <em>Profits Driven</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BRAD'S BOOK ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Section header — centered above both columns */}
            <div className="mb-12 fade-in text-center">
              <p className="section-label mb-3">Brad's Book</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Profits Driven
              </h2>
              <p
                className="text-base italic"
                style={{ color: "oklch(0.66 0.16 218)" }}
              >
                "Sales are vanity. Profits are sanity."
              </p>
            </div>

            {/* Two-column: video left, copy right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Responsive YouTube embed */}
              <div
                className="fade-in-left w-full rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px oklch(0 0 0 / 0.14)" }}
              >
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/8JJJFYN_xM4"
                    title="Brad Filmanowicz discusses Profits Driven"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="fade-in-right delay-200">
                <p className="text-gray-600 leading-relaxed mb-4">
                  In this video, Brad Filmanowicz walks through the core ideas behind his book, <em>Profits Driven</em>, and explains why most small business owners are focused on the wrong number.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The book is written for business owners who want to understand their finances without becoming accountants. Brad covers how to read simple financial reports, identify where profit is being lost, and make smarter decisions using numbers you already have.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The goal is straightforward: help small business owners build more profitable companies, in as little as 10 minutes a week.
                </p>
                <Link href="/contact" className="btn-primary px-7 py-3.5">
                  Work With Brad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PROFESSIONAL DESIGNATIONS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <p className="section-label mb-3">Credentials</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional Designations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "CPA: Certified Public Accountant",
                  desc: "Licensed since 1994. The CPA designation is the gold standard in professional accounting, requiring rigorous examination and a commitment to ongoing continuing education.",
                icon: <Award size={20} />,
              },
              {
                title: "MBA: Master of Finance",
                desc: "Completed at Saint Xavier University in 1997. Provides deep expertise in financial analysis, corporate finance, and business strategy.",
                icon: <GraduationCap size={20} />,
              },
              {
                title: "EA: Enrolled Agent",
                  desc: "Federally authorized to represent taxpayers before the IRS. This designation is particularly valuable for clients facing audits, tax disputes, or complex IRS matters.",
                icon: <ShieldCheck size={20} />,
              },
              {
                title: "Certified QuickBooks ProAdvisor",
                  desc: "Certified in QuickBooks accounting software, allowing the firm to support clients who rely on QuickBooks for their bookkeeping and accounting.",
                icon: <BookOpen size={20} />,
              },
              {
                title: "Intuit Authorized Affiliate",
                  desc: "Authorized affiliate of Intuit, the maker of TurboTax and QuickBooks, reflecting a long-standing relationship with the industry's most widely used financial tools.",
                icon: <Award size={20} />,
              },
              {
                title: "Author of Profits Driven",
                  desc: "Brad is the author of Profits Driven, a book written to help small business owners become more financially aware and more intentional about building profitable companies.",
                icon: <BookOpen size={20} />,
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl p-6 border border-gray-100 fade-in delay-${Math.min(i * 80 + 100, 500)}`}
                style={{
                  backgroundColor: "oklch(0.97 0.008 80)",
                  boxShadow: "0 1px 4px oklch(0 0 0 / 0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Work With Brad
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-5 fade-in delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-white/65 mb-10 leading-relaxed fade-in delay-200">
            Let us show you what personalized, professional accounting looks
            like. Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA.
            Serving Chicago, Orland Park, and small business owners nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Free Consultation
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
