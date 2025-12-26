import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { handleSmoothScroll } from "@/lib/scrollHelpers";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const sectionIds = SECTIONS.map((s) => s.id);

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy({ sectionIds });

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  handleSmoothScroll(e, "home");
                  closeMobileMenu();
                }}
                className="flex items-center gap-3 text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                aria-label="Portfolio Home"
              >
                {/* Logo with Golden Border */}
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.4)] bg-black">
                  <img
                    src="/logo.png"
                    alt="DCODE Logo"
                    className="w-6 h-6 object-contain"
                  />
                </span>

                {/* Brand Name */}
                {/* <span>DCODE</span> */}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative group ${
                    activeSection === section.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                  aria-current={
                    activeSection === section.id ? "page" : undefined
                  }
                >
                  {section.label}
                  {/* Active indicator */}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-t" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border animate-slide-up">
              <div className="space-y-1 pt-4">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      handleSmoothScroll(e, section.id);
                      closeMobileMenu();
                    }}
                    className={`block px-4 py-2 rounded-md text-base font-medium transition-all ${
                      activeSection === section.id
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                    aria-current={
                      activeSection === section.id ? "page" : undefined
                    }
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add spacing to account for fixed navbar */}
      <div className="h-8" />
    </>
  );
}
