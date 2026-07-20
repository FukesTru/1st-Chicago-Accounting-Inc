/**
 * PageLayout — wraps all pages with Navbar + Footer.
 * Runs a global IntersectionObserver that activates .fade-in, .fade-in-left, .fade-in-right
 * on every page so individual pages don't need to wire up their own observers.
 */
import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Small delay so the DOM is fully painted before we start observing
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        ".fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible)"
      );

      if (targets.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
