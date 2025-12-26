import { useState, useEffect } from "react";

interface ScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
}

/**
 * Hook to track which section is currently in view
 * Returns the ID of the active section for scroll spy functionality
 */
export const useScrollSpy = ({
  sectionIds,
  threshold = 0.3,
}: ScrollSpyOptions): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Create intersection observer to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting (visible)
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Use the first visible entry (topmost)
          const topEntry = visibleEntries.reduce((prev, current) => {
            return current.boundingClientRect.top < prev.boundingClientRect.top
              ? current
              : prev;
          });
          
          setActiveSection(topEntry.target.id);
        }
      },
      {
        threshold: threshold,
        rootMargin: "-50% 0px -50% 0px", // Track sections in the middle of viewport
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
};
