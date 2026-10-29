import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Core pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// Service pages
import TaxPlanning from "./pages/TaxPlanning";
import BusinessAccounting from "./pages/BusinessAccounting";
import TaxPreparation from "./pages/TaxPreparation";
import Payroll from "./pages/Payroll";
import CFOServices from "./pages/CFOServices";
import Bookkeeping from "./pages/Bookkeeping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Google Ads landing pages (noindex, no main nav)
import TaxPlanningLP from "./pages/lp/TaxPlanningLP";
import MonthlyAccountingLP from "./pages/lp/MonthlyAccountingLP";
import { ThankYou, Booked } from "./pages/lp/ThankYou";

// Location / SEO pages — 8 approved cities
import Chicago from "./pages/locations/Chicago";
import OrlandPark from "./pages/locations/OrlandPark";
import TinleyPark from "./pages/locations/TinleyPark";
import OakForest from "./pages/locations/OakForest";
import PalosHeights from "./pages/locations/PalosHeights";
import PalosPark from "./pages/locations/PalosPark";
import HomerGlen from "./pages/locations/HomerGlen";
import Mokena from "./pages/locations/Mokena";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Core */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        {/* Service pages */}
        <Route path="/tax-planning" component={TaxPlanning} />
        <Route path="/business-accounting" component={BusinessAccounting} />
        <Route path="/tax-preparation" component={TaxPreparation} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/cfo-services" component={CFOServices} />
        <Route path="/bookkeeping" component={Bookkeeping} />

        {/* Location / SEO pages — 8 approved cities */}
        <Route path="/locations/chicago" component={Chicago} />
        <Route path="/locations/orland-park" component={OrlandPark} />
        <Route path="/locations/tinley-park" component={TinleyPark} />
        <Route path="/locations/oak-forest" component={OakForest} />
        <Route path="/locations/palos-heights" component={PalosHeights} />
        <Route path="/locations/palos-park" component={PalosPark} />
        <Route path="/locations/homer-glen" component={HomerGlen} />
        <Route path="/locations/mokena" component={Mokena} />

        {/* Google Ads landing pages */}
        <Route path="/lp/tax-planning" component={TaxPlanningLP} />
        <Route path="/lp/monthly-accounting" component={MonthlyAccountingLP} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/booked" component={Booked} />

        {/* Legal pages */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
