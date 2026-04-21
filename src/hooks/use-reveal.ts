import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all `.reveal` elements on the page,
 * adding the `.on` class when they scroll into view.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
