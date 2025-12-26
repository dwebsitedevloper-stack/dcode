import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import ExpertiseGrid from "@/components/portfolio/ExpertiseGrid";
import FeaturedWork from "@/components/portfolio/FeaturedWork";
import Testimonials from "@/components/portfolio/Testimonials";
import Achievements from "@/components/portfolio/Achievements";
import Services from "@/components/portfolio/Services";
import CTA from "@/components/portfolio/CTA";
import Footer from "@/components/portfolio/Footer";
import { scrollToHashOnMount } from "@/lib/scrollHelpers";

export default function Index() {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle hash-based navigation on mount (for deep linking)
    scrollToHashOnMount();

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Skip to content link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Expertise Section */}
        <ExpertiseGrid />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Achievements Section */}
        <Achievements />

        {/* Services Section */}
        <Services />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
