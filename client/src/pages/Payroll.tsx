import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Payroll() {
  return (
    <ServicePageTemplate
      title="Payroll Services for Small Business Owners"
      subtitle="Accurate payroll processing and tax compliance for small businesses. Dependable, organized, and handled correctly so you can focus on running your business."
      heroTagline="Payroll"
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80&auto=format&fit=crop"
      intro="Payroll is one of the most time-sensitive and compliance-heavy responsibilities a small business owner faces. Payroll taxes must be calculated correctly, withheld accurately, and deposited on time. When they are not, penalties and interest begin to accumulate quickly. For many small business owners, payroll is a source of ongoing stress and administrative burden. At 1st Chicago Accounting, payroll is handled with the same attention to accuracy and compliance that applies to every other service the firm provides. You get dependable payroll processing, accurate tax filings, and the confidence that comes from knowing your employees are paid correctly and your payroll taxes are in good hands."
      points={[
        { title: "Weekly, Bi-Weekly, or Monthly Payroll", description: "Payroll processed on your preferred schedule, whether weekly, bi-weekly, semi-monthly, or monthly, with accurate calculations for all employees." },
        { title: "Payroll Tax Filings", description: "Federal and state payroll tax deposits and filings handled on time, including Form 941, FUTA, SUTA, and other required filings." },
        { title: "Direct Deposit Setup", description: "Employee direct deposit setup and management, ensuring your team is paid accurately and on time every pay period." },
        { title: "Year-End W-2 and 1099 Processing", description: "Year-end W-2 forms for employees and 1099 forms for contractors prepared and distributed accurately and on time." },
        { title: "New Hire Reporting", description: "New hire reporting to state agencies handled as required by law, keeping your business in compliance with employment regulations." },
        { title: "Payroll Records and Documentation", description: "Organized payroll records maintained for each pay period, supporting accurate accounting, tax planning, and audit readiness." },
      ]}
      ctaHeadline="Simplify Your Payroll Process"
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss payroll services for your small business."
      relatedServices={[
        { label: "Business Accounting", href: "/business-accounting" },
        { label: "Bookkeeping", href: "/bookkeeping" },
        { label: "Tax Planning", href: "/tax-planning" },
        { label: "Tax Preparation", href: "/tax-preparation" },
      ]}
    />
  );
}
