import { useState, useEffect } from "react";

/**
 * Custom hook to track the currently active anchor in a list of anchors.
 * @param anchors - The list of anchors to track.
 * @description This hook is based on ReactFullpage's behavior of adding the "active" class to the currently active section.
 * @returns The currently active anchor.
 */
export function useActiveAnchor(anchors: string[]) {
  const [activeAnchor, setActiveAnchor] = useState<string>(
    anchors[0] || "home",
  );

  useEffect(() => {
    const checkActiveSection = () => {
      const activeSection = document.querySelector(".section.active");
      if (!activeSection) return;

      const sections = Array.from(document.querySelectorAll(".section"));
      const activeIndex = sections.indexOf(activeSection);

      if (activeIndex >= 0 && activeIndex < anchors.length) {
        setActiveAnchor(anchors[activeIndex]);
      }
    };

    // Initial check
    checkActiveSection();

    // Watch for class changes using MutationObserver
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          checkActiveSection();
          break;
        }
      }
    });

    // Observe all section elements
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>
      observer.observe(section, { attributes: true }),
    );

    // Backup scroll event listener
    window.addEventListener("scroll", checkActiveSection, { passive: true });

    // Handle ReactFullpage integration
    const windowWithFullpage = window as {
      fullpage?: { afterLoad?: () => void };
    };
    if (windowWithFullpage.fullpage) {
      windowWithFullpage.fullpage.afterLoad = checkActiveSection;
    }

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, [anchors]);

  return activeAnchor;
}
