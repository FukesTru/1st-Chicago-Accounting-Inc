/**
 * Google Ads landing page — C2 Monthly Accounting & Bookkeeping.
 * /lp/monthly-accounting                 → monthly accounting / small business CPA ad group
 * /lp/monthly-accounting?v=bookkeeping   → bookkeeping ad group
 */
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { MONTHLY_STARTING_PRICE } from "@/lib/landing";

export default function MonthlyAccountingLP() {
  return (
    <LandingPageTemplate
      pageTitle="Monthly Accounting & Bookkeeping | 1st Chicago Accounting"
      variants={{
        default: {
          eyebrow: "Monthly accounting for small businesses",
          headline: "A CPA Who Keeps Your Books Right Every Month, Not Just at Tax Time",
          subhead:
            "Monthly accounting, bookkeeping and reporting from Brad Filmanowicz, CPA, MBA, EA, so you always know where your business stands. Start with a free consultation.",
        },
        bookkeeping: {
          eyebrow: "Bookkeeping services",
          headline: "Behind on Your Books? Get Caught Up, Then Stay Current Every Month",
          subhead:
            "Bookkeeping, cleanup and monthly reconciliation by a CPA and QuickBooks ProAdvisor. Start with a free consultation with Brad Filmanowicz, CPA, MBA, EA.",
        },
      }}
      heroBullets={[
        "Free, no-obligation consultation with the CPA himself",
        "Books reconciled and reports delivered every month",
        "Your bookkeeping, tax planning and tax return handled by the same CPA",
      ]}
      priceLine={MONTHLY_STARTING_PRICE ? `Monthly plans from ${MONTHLY_STARTING_PRICE}` : null}
      outcomesHeading="What you get every month"
      outcomes={[
        {
          title: "Books that are always current",
          description:
            "Every transaction recorded, categorized and reconciled each month, so nothing piles up before tax season.",
        },
        {
          title: "Reports you can actually use",
          description:
            "A monthly profit and loss and balance sheet, with Brad pointing out trends, concerns and opportunities.",
        },
        {
          title: "Catch-up and cleanup",
          description: "Months or years behind? Brad gets your books accurate first, then keeps them that way.",
        },
        {
          title: "QuickBooks expertise",
          description:
            "As a Certified QuickBooks ProAdvisor, Brad can set up, clean up and manage your QuickBooks file.",
        },
        {
          title: "Payroll when you need it",
          description: "Add payroll processing and filings so your accounting and payroll stay in one place.",
        },
        {
          title: "Tax-ready all year",
          description:
            "Clean books make tax planning and tax preparation faster and more accurate, with fewer surprises.",
        },
      ]}
      steps={[
        {
          title: "Book a free consultation",
          description: "Use the form, pick a time on Brad's calendar, or call. It's a no-obligation conversation.",
        },
        {
          title: "Brad looks at where your books are",
          description:
            "On a Zoom call, he reviews your current setup and what needs catching up, and answers your questions.",
        },
        {
          title: "Get a clear monthly plan",
          description: "If it's a fit, you get a plan and a clear quote for the work, with no pressure either way.",
        },
      ]}
      faqs={[
        {
          q: "What does the consultation cost?",
          a: "Nothing. The first consultation is free and there's no obligation to hire the firm afterward.",
        },
        {
          q: "I'm months behind. Can you still help?",
          a: "Yes. Catch-up and cleanup work is common. Brad gets the books accurate first, then moves you to a monthly routine.",
        },
        {
          q: "Do you work with QuickBooks?",
          a: "Yes. Brad is a Certified QuickBooks ProAdvisor and can work in your existing file or set one up.",
        },
        {
          q: "Can you also handle payroll and taxes?",
          a: "Yes. Payroll, tax planning and business and personal tax returns can all be handled by the same firm.",
        },
        {
          q: "Do I need to come into an office?",
          a: "No. Work happens over Zoom, phone, email and secure file sharing, so you can work with Brad from anywhere.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on transaction volume and how many accounts you have. Brad gives you a clear quote after the consultation.",
        },
      ]}
      finalHeadline="Get your books off your plate"
      finalSubtext="Book a free consultation with Brad Filmanowicz, CPA, MBA, EA and get a clear monthly plan for your business."
    />
  );
}
