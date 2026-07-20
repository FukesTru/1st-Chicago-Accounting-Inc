import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function TaxPreparation() {
  return (
    <ServicePageTemplate
      title="Tax Preparation for Small Business Owners"
      subtitle="Organized, accurate tax preparation connected to your year-round tax plan and handled by a CPA, MBA, and Enrolled Agent."
      heroTagline="Tax Preparation"
      heroImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&q=80&auto=format&fit=crop"
      intro="Tax preparation is the process of accurately compiling your financial information and filing your tax returns on time. For small business owners, this includes business returns, personal returns, and any related filings for entities such as S-Corps, LLCs, or partnerships. At 1st Chicago Accounting, tax preparation is not treated as a standalone service. It is the culmination of a year-round tax planning process, which means that by the time your return is prepared, the strategies to reduce your tax liability have already been implemented. You are not discovering your tax bill at filing time. You already know what to expect."
      points={[
        { title: "Business Tax Returns", description: "Accurate preparation of business tax returns for sole proprietors, LLCs, S-Corps, C-Corps, and partnerships, filed on time and in compliance with current tax law." },
        { title: "Personal Tax Returns", description: "For business owner clients, personal tax returns are prepared in coordination with business filings to ensure consistency and accuracy across all returns." },
        { title: "S-Corp and LLC Filings", description: "Entity-specific filings handled correctly, including K-1 distributions, officer compensation reviews, and pass-through income reporting." },
        { title: "IRS Representation", description: "As an Enrolled Agent, Brad is federally authorized to represent clients before the IRS in the event of an audit, notice, or tax dispute." },
        { title: "Quarterly Estimated Taxes", description: "Estimated tax payments are calculated and managed throughout the year to avoid underpayment penalties and keep your tax position current." },
        { title: "Prior Year Returns", description: "If you have unfiled or amended returns from prior years, Brad can help you get current and address any outstanding IRS obligations." },
      ]}
      ctaHeadline="Tax Preparation That Goes Beyond Filing"
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss tax preparation connected to a year-round planning strategy."
      relatedServices={[
        { label: "Tax Planning", href: "/tax-planning" },
        { label: "Business Accounting", href: "/business-accounting" },
        { label: "Bookkeeping", href: "/bookkeeping" },
        { label: "CFO Services", href: "/cfo-services" },
      ]}
    />
  );
}
