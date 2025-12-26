import { Check, Zap, Code, Palette, Sparkles, Crown, Star } from "lucide-react";
import { handleSmoothScroll } from "@/lib/scrollHelpers";

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  highlighted?: boolean;
}

const SERVICES: Service[] = [
  {
    id: "1",
    name: "Influencer Marketing & Brand Promotion",
    description:
      "High-impact influencer campaigns that boost brand awareness, build trust, and drive real engagement through authentic content",
    icon: <Crown className="w-8 h-8" />,
    highlighted: true,
    features: [
      "Brand Advertising & Sponsored Promotions",
      "Instagram Reels & Short-form Video Creation",
      "Story Promotions with Swipe-up / CTA Links",
      "Product Placement & Brand Mentions",
      "Feature in High-engagement Videos",
      "Audience Trust & Community-driven Reach",
    ],
  },
  {
    id: "2",
    name: "Audience Growth & Engagement Strategy",
    description:
      "Curated strategies to grow followers, increase engagement, and convert audiences into loyal customers for brands",
    icon: <Star className="w-8 h-8" />,
    highlighted: true,
    features: [
      "Targeted Audience Building",
      "Content Calendar & Posting Strategy",
      "Interactive Stories & Polls",
      "Trend Analysis & Viral Content Creation",
      "Community Management & Engagement",
      "Performance Tracking & Analytics Reports",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Luxury Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
            <Sparkles className="text-yellow-600" size={24} />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Bespoke design, development, and influencer services crafted for
            brands and creators who demand excellence
          </p>
        </div>

        {/* Services Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-500 ${
                  service.highlighted
                    ? "bg-gradient-to-r from-yellow-600/30 to-amber-600/30 group-hover:blur-3xl"
                    : "bg-gradient-to-r from-yellow-600/10 to-amber-600/10 group-hover:from-yellow-600/20 group-hover:to-amber-600/20"
                }`}
              ></div>

              {/* Card */}
              <div
                className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden transition-all duration-500 ${
                  service.highlighted
                    ? "border-2 border-yellow-600/50 shadow-2xl shadow-yellow-600/20"
                    : "border border-yellow-600/20 hover:border-yellow-600/40"
                }`}
              >
                {/* Highlighted Badge */}
                {service.highlighted && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-black text-xs font-bold px-6 py-2 rounded-bl-2xl rounded-tr-3xl shadow-lg flex items-center gap-2">
                      <Crown size={14} />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Decorative Corner Element */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-br-full"></div>

                <div className="relative p-10">
                  {/* Icon with luxury styling */}
                  <div
                    className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 ${
                      service.highlighted
                        ? "bg-gradient-to-br from-yellow-600 to-amber-600 text-black shadow-lg shadow-yellow-600/30"
                        : "bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-600 border border-yellow-600/30"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Service Name */}
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent mb-8"></div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-0.5">
                          <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      service.highlighted
                        ? "bg-gradient-to-r from-yellow-600 to-amber-600 text-black hover:from-yellow-500 hover:to-amber-500 shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50 hover:scale-[1.02]"
                        : "bg-black border-2 border-yellow-600/50 text-yellow-600 hover:bg-yellow-600 hover:text-black hover:scale-[1.02]"
                    }`}
                  >
                    <Sparkles size={18} />
                    Work With Us
                  </a>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-600/5 to-transparent rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
