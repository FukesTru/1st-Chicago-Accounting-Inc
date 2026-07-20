import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element and all its .fade-in children
    const targets = el.querySelectorAll(".fade-in");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("fade-in")) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
