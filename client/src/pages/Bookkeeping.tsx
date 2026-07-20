import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Bookkeeping() {
  return (
    <ServicePageTemplate
      title="Bookkeeping for Small Business Owners"
      subtitle="Clean, organized books every month. A solid foundation for better accounting, tax planning, and smarter financial decisions."
      heroTagline="Bookkeeping"
      heroImage="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=80&auto=format&fit=crop"
      intro="Bookkeeping is the foundation of every other financial service a business needs. Without accurate, up-to-date books, tax planning is guesswork, financial reporting is unreliable, and business decisions are made without the information needed to make them well. At 1st Chicago Accounting, bookkeeping is handled with the same attention to accuracy and organization that the firm applies to every service it provides. Clean books are not just a compliance requirement. They are a business tool that gives small business owners better visibility into their finances and a stronger foundation for everything else."
      points={[
        { title: "Monthly Bookkeeping", description: "All transactions recorded, categorized, and reconciled every month so your books are always current and accurate." },
        { title: "Bank and Credit Card Reconciliation", description: "All bank and credit card accounts reconciled monthly to ensure your records match your actual financial activity." },
        { title: "Chart of Accounts Setup", description: "A properly structured chart of accounts ensures your financial data is organized in a way that supports accurate reporting and tax preparation." },
        { title: "QuickBooks Support", description: "As a Certified QuickBooks ProAdvisor, Brad can support clients who use QuickBooks, including setup, cleanup, and ongoing management." },
        { title: "Expense Categorization", description: "All business expenses properly categorized to ensure accurate financial reporting and maximum deductibility at tax time." },
        { title: "Tax-Ready Records", description: "Books maintained in a format that makes tax preparation faster, more accurate, and more strategic, reducing the time and cost of year-end tax work." },
      ]}
      ctaHeadline="Clean Books. Better Decisions."
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss bookkeeping services for your small business."
      relatedServices={[
        { label: "Business Accounting", href: "/business-accounting" },
        { label: "Tax Planning", href: "/tax-planning" },
        { label: "CFO Services", href: "/cfo-services" },
        { label: "Tax Preparation", href: "/tax-preparation" },
      ]}
    />
  );
}
