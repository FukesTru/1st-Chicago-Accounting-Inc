import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BusinessAccounting() {
  return (
    <ServicePageTemplate
      title="Business Accounting for Small Business Owners"
      subtitle="Accurate financial records and clear reporting that give you better visibility into your business performance, cash flow, and profitability."
      heroTagline="Business Accounting"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop"
      intro="Accurate accounting is the foundation of every other financial decision you make as a business owner. Without clean, organized financial records, tax planning is guesswork, cash flow management is reactive, and business decisions are made without the information needed to make them well. At 1st Chicago Accounting, business accounting is not just about keeping the books in order. It is about giving small business owners the financial clarity they need to understand what is happening inside their business and make better decisions as a result."
      points={[
        { title: "Monthly Financial Statements", description: "Receive accurate income statements, balance sheets, and cash flow statements every month, giving you a clear picture of your business performance." },
        { title: "Cash Flow Reporting", description: "Understand where your cash is coming from and where it is going. Cash flow reporting helps you anticipate shortfalls and plan for growth." },
        { title: "Accounts Payable and Receivable", description: "Organized tracking of what you owe and what you are owed, so nothing falls through the cracks and your cash position stays accurate." },
        { title: "Financial Analysis and Review", description: "Beyond the numbers themselves, Brad reviews your financials to identify trends, flag concerns, and highlight opportunities for improvement." },
        { title: "Tax-Ready Records", description: "When your accounting is handled properly throughout the year, tax preparation becomes faster, more accurate, and more strategic." },
        { title: "QuickBooks Support", description: "As a Certified QuickBooks ProAdvisor, Brad can support clients who use QuickBooks for their accounting and help ensure the system is set up and used correctly." },
      ]}
      ctaHeadline="Get Clear on Your Business Finances"
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss how accurate accounting can improve your financial clarity and decision-making."
      relatedServices={[
        { label: "Tax Planning", href: "/tax-planning" },
        { label: "Bookkeeping", href: "/bookkeeping" },
        { label: "CFO Services", href: "/cfo-services" },
        { label: "Tax Preparation", href: "/tax-preparation" },
      ]}
    />
  );
}
