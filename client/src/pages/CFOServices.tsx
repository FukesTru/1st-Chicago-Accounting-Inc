import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CFOServices() {
  return (
    <ServicePageTemplate
      title="CFO Services for Small Business Owners"
      subtitle="Executive-level financial oversight for small business owners. Dashboards, KPI tracking, cash flow management, and profit reviews, without the cost of a full-time CFO."
      heroTagline="CFO Services"
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop"
      intro="Most small business owners do not have a Chief Financial Officer. They have a CPA who files their taxes and, if they are fortunate, a bookkeeper who keeps their records organized. But they do not have someone reviewing their financial performance every week, tracking key metrics, managing cash flow proactively, and helping them make better decisions with their numbers. That is the gap CFO Services fills. Brad Filmanowicz draws on his experience at Fortune 500 companies, including Sara Lee Corporation, to help small business owners apply the same level of financial discipline and oversight that large organizations use, scaled to fit the needs and budget of a small business."
      points={[
        { title: "Weekly Financial Dashboards", description: "A simple, clear dashboard delivered regularly so you always know where your business stands. Revenue, expenses, cash position, and key metrics at a glance." },
        { title: "KPI Tracking and Analysis", description: "Identification and tracking of the key performance indicators most relevant to your business. KPIs are reviewed regularly to identify trends, opportunities, and concerns." },
        { title: "Cash Flow Management", description: "Proactive cash flow monitoring and forecasting so you can anticipate shortfalls, plan for growth, and make better decisions about spending, hiring, and investment." },
        { title: "Budget and Variance Reviews", description: "Monthly budget reviews that compare actual performance to projections, helping you understand where your business is performing as expected and where adjustments are needed." },
        { title: "Profit and Loss Analysis", description: "Regular P&L reviews that go beyond the numbers, identifying which products, services, or customers are most profitable and where margin improvement opportunities exist." },
        { title: "Strategic Financial Guidance", description: "Ongoing advisory conversations about business decisions that have financial implications, including pricing, hiring, equipment purchases, expansion, and more." },
      ]}
      ctaHeadline="Get CFO-Level Guidance for Your Business"
      ctaSubtext="Schedule a consultation with Brad Filmanowicz, CPA, MBA, EA to discuss how CFO Services can improve your financial clarity and profitability."
      relatedServices={[
        { label: "Tax Planning", href: "/tax-planning" },
        { label: "Business Accounting", href: "/business-accounting" },
        { label: "Bookkeeping", href: "/bookkeeping" },
        { label: "Tax Preparation", href: "/tax-preparation" },
      ]}
    />
  );
}
