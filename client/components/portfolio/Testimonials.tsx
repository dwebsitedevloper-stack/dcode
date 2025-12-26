import { Star, RefreshCw, AlertCircle, Crown } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Replace this with your Google Apps Script Web App URL
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzq3V0lt44ZEzHqQSyXVGtunZ1kVDUHZgf6rm95jI3k3BN0N1Oq9Vel0Je5foh9WTt3/exec?sheet=Testimonials";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SHEET_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setTestimonials(data.testimonials || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load testimonials",
      );
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Luxurious Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217, 179, 80) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Golden Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-yellow-600/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-amber-600/20 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Ornate Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-yellow-600"></div>
            <Crown className="w-8 h-8 text-yellow-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-yellow-600 to-yellow-600"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent tracking-tight">
            Distinguished Testimonials
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            The words of excellence from our esteemed clientele and
            collaborators
          </p>

          {/* Elegant Refresh Button */}
          <button
            onClick={fetchTestimonials}
            disabled={loading}
            className="mt-10 group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <RefreshCw
              className={`w-5 h-5 relative z-10 ${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
            />
            <span className="relative z-10">Refresh Collection</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-yellow-600/20 border-t-yellow-600 rounded-full animate-spin"></div>
            <p className="mt-6 text-gray-400 text-lg">
              Curating testimonials...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-950/50 to-red-900/30 border border-red-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-300 mb-2 text-lg">
                  Unable to Load Testimonials
                </h3>
                <p className="text-red-200/80 text-sm leading-relaxed">
                  {error}
                </p>
                <p className="text-red-300/60 text-xs mt-3 italic">
                  Ensure your Google Apps Script URL is properly configured
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black rounded-3xl p-10 border border-yellow-600/20 hover:border-yellow-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/20 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 150}ms both`,
                }}
              >
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-tr-full"></div>

                {/* Golden Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600/0 via-yellow-600/5 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Luxury Rating */}
                  <div className="flex gap-1.5 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-500 text-yellow-500 drop-shadow-lg"
                        style={{
                          animation: `starPulse 2s ease-in-out ${i * 0.1}s infinite`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Elegant Quote Mark */}
                  <div className="text-6xl text-yellow-600/30 font-serif leading-none mb-4">
                    "
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-200 text-lg mb-8 leading-relaxed font-light italic">
                    {testimonial.content}
                  </p>

                  {/* Distinguished Author Section */}
                  <div className="flex items-center gap-5 pt-6 border-t border-yellow-600/20">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 blur-md opacity-50"></div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-yellow-600/50 shadow-xl"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm font-light">
                        {testimonial.role}
                      </div>
                      <div className="text-yellow-600/70 text-xs font-medium tracking-wider mt-1">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Elegant Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-20">
            <Crown className="w-16 h-16 text-yellow-600/50 mx-auto mb-6" />
            <p className="text-gray-400 text-lg font-light">
              No testimonials in the collection yet
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Add distinguished reviews to your Google Sheet
            </p>
          </div>
        )}
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
        
        @keyframes starPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 2px rgba(234, 179, 8, 0.5));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.8));
          }
        }
      `}</style>
    </section>
  );
}
