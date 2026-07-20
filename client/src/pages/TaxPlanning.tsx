import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function TaxPlanning() {
  return (
    <ServicePageTemplate
      title="Tax Planning for Small Business Owners"
      subtitle="Proactive, year-round tax strategy designed to reduce your tax liability and help you plan ahead rather than simply filing on time."
      heroTagline="Tax Planning"
      heroImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80&auto=format&fit=crop"
      intro="Most small business owners work with a CPA who focuses on filing tax returns accurately and on time. That is a necessary service, but it is not the same as tax planning. By the time your return is filed, the decisions that determine how much you owe have already been made. Tax planning is the process of making those decisions strategically before year-end, so that you are not simply accepting your tax bill but actively working to reduce it. At 1st Chicago Accounting, tax planning is not a one-time conversation. It is a year-round process that includes reviewing your financials, modeling different scenarios, and identifying opportunities to legally reduce your tax liability throughout the year."
      points={[
        { title: "Year-Round Strategy", description: "Tax planning is not a once-a-year event. Brad reviews your financials throughout the year and prepares multiple tax plans to identify opportunities before year-end decisions are locked in." },
        { title: "Entity Structure Review", description: "The legal structure of your business has a significant impact on your tax liability. Brad evaluates whether your current structure as a sole proprietor, LLC, S-Corp, or C-Corp is optimal for your situation." },
        { title: "Retirement and Benefit Planning", description: "Retirement contributions, health insurance deductions, and other benefit structures can meaningfully reduce your taxable income. Brad identifies and implements these strategies as part of your tax plan." },
        { title: "Estimated Tax Management", description: "Poorly managed quarterly estimated tax payments can result in underpayment penalties. Brad helps you calculate and manage estimated payments throughout the year so there are no surprises." },
        { title: "Deduction Optimization", description: "Brad reviews your business expenses to ensure all legitimate deductions are captured and documented, including home office, vehicle, equipment, and other business-related costs." },
        { title: "Tax Law Updates", description: "Tax laws change frequently. Brad monitors legislative updates and proactively communicates how changes may affect your tax situation and planning strategy." },
      ]}
      ctaHeadline="Ready to Stop Overpaying in Taxes?"
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss a proactive tax planning strategy for your business."
      relatedServices={[
        { label: "Tax Preparation", href: "/tax-preparation" },
        { label: "Business Accounting", href: "/business-accounting" },
        { label: "CFO Services", href: "/cfo-services" },
        { label: "Bookkeeping", href: "/bookkeeping" },
      ]}
    />
  );
}
