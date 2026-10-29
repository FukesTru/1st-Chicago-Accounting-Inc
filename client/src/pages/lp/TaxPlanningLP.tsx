/**
 * Google Ads landing page — C1 Tax Planning & Business Tax.
 * /lp/tax-planning          → tax planning ad group
 * /lp/tax-planning?v=prep   → business tax preparation ad group
 */
import LandingPageTemplate from "@/components/LandingPageTemplate";

export default function TaxPlanningLP() {
  return (
    <LandingPageTemplate
      pageTitle="Tax Planning for Business Owners | 1st Chicago Accounting"
      variants={{
        default: {
          eyebrow: "Tax planning for business owners",
          headline: "Pay Less Tax This Year, Legally, with a Plan Built Before December 31",
          subhead:
            "Proactive tax planning from Brad Filmanowicz, CPA, MBA, EA. Start with a free consultation on Zoom and see where your business may be overpaying.",
        },
        prep: {
          eyebrow: "Business tax preparation",
          headline: "Business Tax Returns Prepared by a CPA, with a Plan to Owe Less Next Year",
          subhead:
            "S corp, LLC and corporate returns prepared by Brad Filmanowicz, CPA, MBA, EA, alongside your personal return. Start with a free consultation.",
        },
      }}
      heroBullets={[
        "Free, no-obligation consultation with the CPA himself",
        "Entity, S corp, retirement and year-end strategies reviewed for your situation",
        "Business and personal returns handled together, year-round",
      ]}
      urgency="Most year-end tax moves only count if they're made before December 31."
      outcomesHeading="What tax planning can do for your business"
      outcomes={[
        {
          title: "The right entity structure",
          description:
            "Brad checks whether a sole proprietorship, LLC, S corp or C corp fits your income today, and what switching would save.",
        },
        {
          title: "Year-end moves before the deadline",
          description:
            "Timing of income and expenses, equipment purchases and other decisions that have to be made before the year closes.",
        },
        {
          title: "Retirement and benefit strategies",
          description:
            "Retirement contributions, health insurance and other benefits that can reduce taxable income when set up correctly.",
        },
        {
          title: "No surprises on estimates",
          description:
            "Quarterly estimated payments calculated and managed through the year so you avoid underpayment penalties.",
        },
        {
          title: "Every legitimate deduction",
          description:
            "Home office, vehicle, equipment and other business costs captured and documented properly.",
        },
        {
          title: "Representation if the IRS calls",
          description:
            "As an Enrolled Agent, Brad is federally authorized to represent you in an audit, notice or tax dispute.",
        },
      ]}
      steps={[
        {
          title: "Book a free consultation",
          description: "Use the form, pick a time on Brad's calendar, or call. It's a no-obligation conversation.",
        },
        {
          title: "Brad reviews your numbers",
          description:
            "On a Zoom call, Brad looks at last year's return and this year's numbers and points out where you may be overpaying.",
        },
        {
          title: "Get a plan you can act on",
          description: "If it's a fit, you get a tax plan and a clear quote for the work, with no pressure either way.",
        },
      ]}
      faqs={[
        {
          q: "What does the consultation cost?",
          a: "Nothing. The first consultation is free and there's no obligation to hire the firm afterward.",
        },
        {
          q: "Who do you work with?",
          a: "Small business owners, entrepreneurs and self-employed professionals, including their personal returns.",
        },
        {
          q: "Is it too late to plan for this year?",
          a: "Usually not. Many strategies can still be put in place before December 31, but the earlier you start, the more options you have.",
        },
        {
          q: "Do I need to come into an office?",
          a: "No. Consultations and ongoing work happen over Zoom, phone and email, so you can work with Brad from anywhere.",
        },
        {
          q: "How much does tax planning cost?",
          a: "It depends on how complex your business is. Brad will give you a clear quote after the consultation, before any work starts.",
        },
        {
          q: "What's the difference between tax planning and tax preparation?",
          a: "Preparation reports what already happened. Planning changes what happens, by making decisions before the year ends so you owe less.",
        },
      ]}
      finalHeadline="Ready to stop overpaying in taxes?"
      finalSubtext="Book a free consultation with Brad Filmanowicz, CPA, MBA, EA and find out what a plan could save you."
    />
  );
}
