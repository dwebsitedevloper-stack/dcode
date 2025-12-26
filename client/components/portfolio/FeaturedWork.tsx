import { useState, useEffect } from "react";
import {
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Crown,
  ExternalLink,
} from "lucide-react";

interface WorkItem {
  id: string;
  brand: string;
  industry: string;
  description: string;
  type: string;
  thumbnail: string;
  url: string;
}

// Replace this with your ACTUAL deployed Google Apps Script URL
// IMPORTANT: Include the ?sheet=FeaturedWork parameter
// Example: "https://script.google.com/macros/s/AKfycbx.../exec?sheet=FeaturedWork"
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz2MKNmtMAtlQ4Gj2pD5IWvGtE--uqei5-mLm4FmFUHU7TNgNrHii86n2KdouW-kEg/exec?sheet=FeaturedWork";

export default function FeaturedWork({ limit }: { limit?: number }) {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWorks = async (isRefresh = false) => {
    try {
      isRefresh ? setRefreshing(true) : setLoading(true);
      setError(null);

      const response = await fetch(GOOGLE_SHEET_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const allWorks = data.works || [];
      setWorks(limit ? allWorks.slice(0, limit) : allWorks);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load featured work",
      );
      console.error("Error fetching featured work:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-600/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-amber-600/20 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Ornate Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-yellow-600"></div>
            <Crown className="w-8 h-8 text-yellow-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-yellow-600 to-yellow-600"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent tracking-tight">
            Featured Work
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Distinguished collaborations and brand partnerships
          </p>

          {/* Elegant Refresh Button */}
          <button
            onClick={() => fetchWorks(true)}
            disabled={loading || refreshing}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <RefreshCw
              className={`w-5 h-5 relative z-10 ${refreshing ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
            />
            <span className="relative z-10">Refresh Collection</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-yellow-600/20 border-t-yellow-600 rounded-full animate-spin"></div>
            <p className="mt-6 text-gray-400 text-lg">
              Loading featured work...
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
                  Unable to Load Work
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

        {/* Featured Work Grid */}
        {!loading && !error && works.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <article
                key={work.id}
                className="group relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black rounded-3xl border border-yellow-600/20 hover:border-yellow-600/60 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 150}ms both`,
                }}
              >
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-bl-full"></div>

                {/* Golden Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600/0 via-yellow-600/5 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Thumbnail */}
                  {work.thumbnail ? (
                    <div className="w-full h-56 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center p-6 overflow-hidden">
                      <img
                        src={work.thumbnail}
                        alt={work.brand}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                      <div className="text-yellow-600/30 text-6xl font-serif">
                        ?
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      {work.brand}
                    </h3>

                    <p className="text-yellow-600/80 text-sm font-medium mb-4 uppercase tracking-wider">
                      {work.industry}
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed font-light line-clamp-3">
                      {work.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-yellow-600/20">
                      <span className="px-4 py-2 rounded-full bg-yellow-600/10 text-yellow-500 text-xs font-semibold uppercase tracking-wide">
                        {work.type}
                      </span>

                      {work.url && (
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors group/link"
                        >
                          <span className="text-sm font-medium">View</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && works.length === 0 && (
          <div className="text-center py-20">
            <Crown className="w-16 h-16 text-yellow-600/50 mx-auto mb-6" />
            <p className="text-gray-400 text-lg font-light">
              No featured work yet
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Add your portfolio pieces to the Google Sheet
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
      `}</style>
    </section>
  );
}
