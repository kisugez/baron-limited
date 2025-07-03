"use client";
import { useEffect } from "react";

export function useScrollReveal(selector = ".scroll-reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            entry.target.classList.remove("out");
          } else {
            entry.target.classList.remove("revealed");
            entry.target.classList.add("out");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
