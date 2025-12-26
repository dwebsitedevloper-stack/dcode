// src/lib/scrollHelpers.ts
import React from "react";

/**
 * Smooth scroll to a section by ID
 * Uses native scroll behavior and provides JS fallback
 */
export const smoothScrollToId = (id: string) => {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;

  // Use native smooth scroll where available
  try {
    // Temporarily set html scroll-behavior to smooth to cover browsers without scrollIntoView smooth support
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    // Restore previous value after animation (timeout tuned to typical duration)
    window.setTimeout(() => {
      html.style.scrollBehavior = prev;
    }, 800);
  } catch {
    // Fallback: instant scroll
    element.scrollIntoView(true);
  }

  // Accessibility: move focus to the target heading/section
  // Ensure the element can receive focus temporarily
  const prevTabIndex = element.getAttribute("tabindex");
  element.setAttribute("tabindex", "-1");
  (element as HTMLElement).focus({ preventScroll: true });

  // Restore tabindex after a short delay
  window.setTimeout(() => {
    if (prevTabIndex === null) {
      element.removeAttribute("tabindex");
    } else {
      element.setAttribute("tabindex", prevTabIndex);
    }
  }, 1000);
};

/**
 * Prevent default link behavior and smooth scroll
 *
 * Accepts events from anchors, buttons, or any clickable element:
 * React.MouseEvent<HTMLElement>
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLElement>,
  id: string,
) => {
  // Prevent default navigation for anchors; safe for buttons too
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  // Perform scroll
  smoothScrollToId(id);

  // Update browser history for deep linking support without adding duplicate entries
  if (typeof window !== "undefined" && window.history && window.location) {
    const hash = `#${id}`;
    if (window.location.hash !== hash) {
      // replaceState avoids creating a new history entry each click
      window.history.replaceState(null, "", hash);
    }
  }
};

/**
 * Check if we have a hash in the URL and scroll to it on mount
 * Call this from a top-level effect (e.g., in App.tsx useEffect)
 */
export const scrollToHashOnMount = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  // Wait for the DOM to be ready; requestAnimationFrame is a lightweight option
  requestAnimationFrame(() => {
    smoothScrollToId(hash);
  });
};
