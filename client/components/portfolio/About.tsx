import { ArrowRight } from "lucide-react";
import { handleSmoothScroll } from "@/lib/scrollHelpers";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image (swapped side) */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-gold-glow-lg">
              <img
                src="/hero.jpg"
                alt="Profile"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element moved to left */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl blur-2xl -z-10" />
          </div>

          {/* Content (swapped side) */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I create short-form videos and Reels that boost brand engagement.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I handle concept, production, and performance to grow reach.
            </p>

            <ul className="space-y-3">
              {[
                "Professional Presentation",
                "Mobile Responsive",
                "SEO Optimized",
                "High Performance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6" />
            <a
              href="#expertise"
              onClick={(e) => handleSmoothScroll(e, "expertise")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-gold-glow transition-all duration-300 group"
            >
              Explore My Skills
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
