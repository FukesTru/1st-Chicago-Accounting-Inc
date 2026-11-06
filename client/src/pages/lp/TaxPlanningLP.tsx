/**
 * Google Ads landing page — C1 Tax Planning & Business Tax.
 * /lp/tax-planning          → tax planning ad group
 * /lp/tax-planning?v=prep   → business tax preparation ad group
 * /lp/tax-planning?v=cpa    → local CPA ad group ("cpa near me", "cpa chicago")
 */
import LandingPageTemplate from "@/components/LandingPageTemplate";

export default function TaxPlanningLP() {
  return (
    <LandingPageTemplate
      pageTitle="Tax Planning for Business Owners | 1st Chicago Accounting"
      variants={{
        default: {
          eyebrow: "Tax planning for business owners",
          headline: "Give Me 15 Minutes. I'll Show You Where $30,000 Is Hiding.",
          subhead:
            "Brad's tax planning clients typically save $35,000 in the first year, some as much as $200,000. If your plan doesn't return 3-to-1 on what it costs, it's free.",
        },
        prep: {
          eyebrow: "Business tax preparation",
          headline: "File Your Business Return the Right Way, Then Plan Ahead for Next Year",
          subhead:
            "Brad's tax planning clients typically save $35,000 in the first year, some as much as $200,000. If your plan doesn't return 3-to-1 on what it costs, it's free.",
        },
        cpa: {
          eyebrow: "CPA for small business owners",
          headline: "A Chicago CPA Who Plans Ahead, Not One Who Just Files",
          subhead:
            "Brad's tax planning clients typically save $35,000 in the first year, some as much as $200,000. If your plan doesn't return 3-to-1 on what it costs, it's free.",
        },
      }}
      heroBullets={[
        "Free, no-obligation consultation with the CPA himself",
        "Entity, S corp, retirement and year-end strategies reviewed for your situation",
        "Business and personal returns handled together, year-round",
      ]}
      benefits={{
        stats: [
          { value: "$35,000", label: "Typical first-year savings for Brad's tax planning clients" },
          { value: "$200,000", label: "Saved in the first year by some clients" },
          { value: "3-to-1", label: "Return on what your plan costs, or the plan is free", highlight: true },
        ],
        quote: "Give me 15 minutes and I'll show you where $30,000 is hiding.",
        footnote: "Savings depend on your income, business and situation. Your free consultation shows what applies to you.",
      }}
      showCourseOffer
      heroStats={[
        { value: "$35K", label: "Typical first-year savings" },
        { value: "$200K", label: "Saved by some clients" },
        { value: "3-to-1", label: "Return, or it's free", highlight: true },
      ]}
      formTitle="Book your free 15-minute savings review"
      formSubtitle="Tell us a little about your business and Brad will show you where the savings are."
      finalButton="Book my free 15 minutes"
      urgency="Most year-end tax moves only count if they're made before December 31."
      outcomesHeading="What tax planning can do for your business"
      outcomes={[
        {
          title: "The right entity structure",
          description:
            "Brad checks whether a sole proprietorship, LLC, S corp or C corp fits your income today, and whether switching makes sense.",
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
            "On a Zoom call, Brad looks at last year's return and this year's numbers and walks through which strategies still apply before year-end.",
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
          a: "Preparation reports what already happened. Planning changes what happens, by making decisions before the year ends instead of reporting them after.",
        },
      ]}
      finalHeadline="Ready to find your $30,000?"
      finalSubtext="Give Brad 15 minutes. Typical first-year savings are $35,000, and if your plan doesn't return 3-to-1 on what it costs, it's free."
    />
  );
}
