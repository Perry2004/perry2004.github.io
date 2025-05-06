import { useState, useEffect } from "react";

/**
 * Custom hook to track the currently active anchor in mobile layout based on scroll position.
 * @param anchors - The list of anchors to track.
 * @returns The currently active anchor.
 */
export function useMobileActiveAnchor(anchors: string[]) {
  const [activeAnchor, setActiveAnchor] = useState<string>(
    anchors[0] || "home",
  );

  useEffect(() => {
    const checkActiveSection = () => {
      const sectionElements = anchors.map((anchor) =>
        document.getElementById(anchor),
      );

      const validSections = sectionElements.filter(
        (el): el is HTMLElement => el !== null,
      );

      if (validSections.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = validSections.length - 1; i >= 0; i--) {
        const section = validSections[i];
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          setActiveAnchor(anchors[sectionElements.indexOf(section)]);
          return;
        }
      }

      // Default to the first anchor if no section is in view
      setActiveAnchor(anchors[0]);
    };

    checkActiveSection();

    window.addEventListener("scroll", checkActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, [anchors]);

  return activeAnchor;
}
