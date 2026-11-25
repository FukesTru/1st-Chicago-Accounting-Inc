/**
 * Google Ads landing page — C1 Tax Planning & Business Tax (booking-first layout, 2026-11-25).
 * /lp/tax-planning          → tax planning ad group
 * /lp/tax-planning?v=prep   → business tax preparation ad group
 * /lp/tax-planning?v=cpa    → local CPA ad group ("cpa near me", "cpa chicago")
 * Same headline on every version; only the small label above it changes.
 */
import BookingFirstTemplate from "@/components/BookingFirstTemplate";

export default function TaxPlanningLP() {
  return (
    <BookingFirstTemplate
      pageTitle="Tax Planning for Business Owners | 1st Chicago Accounting"
      eyebrows={{
        default: "Tax planning for business owners",
        prep: "Business tax preparation",
        cpa: "CPA for small business owners",
      }}
      headline="Give Me 15 Minutes. I'll Show You Where $30,000 Is Hiding."
      stats={[
        { value: "$35,000", label: "Typical first-year savings for Brad's tax planning clients", shortLabel: "Typical first-year savings" },
        { value: "$200,000", label: "Saved in the first year by some clients", shortLabel: "Saved by some clients" },
        {
          value: "3-to-1",
          label: "Return on what your plan costs, or the plan is free",
          shortLabel: "Return, or it's free",
          highlight: true,
        },
      ]}
      calendarPush="Book your time now. Only 4 spots left this year."
      footnote="Savings depend on your income, business and situation. Your free consultation shows what applies to you."
      steps={[
        {
          title: "Book a free consultation",
          description: "Pick a time on Brad's calendar, call, or leave your number. It's a no-obligation conversation.",
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
      finalHeadline="Ready to find your $30,000?"
      finalSubtext="Give Brad 15 minutes. Typical first-year savings are $35,000, and if your plan doesn't return 3-to-1 on what it costs, it's free."
      finalButton="Book my free 15 minutes"
    />
  );
}
