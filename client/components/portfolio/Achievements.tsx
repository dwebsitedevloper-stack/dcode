import {
  Trophy,
  Users,
  Code,
  Zap,
  Award,
  Star,
  Target,
  Rocket,
  RefreshCw,
  AlertCircle,
  Crown,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Achievement {
  id: string;
  label: string;
  value: string;
  icon: string;
  description?: string;
}

// Replace this with your Google Apps Script Web App URL
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz2MKNmtMAtlQ4Gj2pD5IWvGtE--uqei5-mLm4FmFUHU7TNgNrHii86n2KdouW-kEg/exec?sheet=Achievements";

// Icon mapping
const ICON_MAP: Record<string, React.ReactNode> = {
  code: <Code className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  trophy: <Trophy className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  star: <Star className="w-8 h-8" />,
  target: <Target className="w-8 h-8" />,
  rocket: <Rocket className="w-8 h-8" />,
};

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAchievements = async () => {
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

      setAchievements(data.achievements || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load achievements",
      );
      console.error("Error fetching achievements:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <section
      id="achievements"
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-600/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-amber-600/20 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Ornate Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-600 to-yellow-600"></div>
            <Crown className="w-8 h-8 text-yellow-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-yellow-600 to-yellow-600"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent tracking-tight">
            Recognition & Achievements
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Distinguished milestones in the pursuit of excellence
          </p>

          {/* Elegant Refresh Button */}
          <button
            onClick={fetchAchievements}
            disabled={loading}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <RefreshCw
              className={`w-5 h-5 relative z-10 ${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
            />
            <span className="relative z-10">Refresh Stats</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-yellow-600/20 border-t-yellow-600 rounded-full animate-spin"></div>
            <p className="mt-6 text-gray-400 text-lg">
              Loading achievements...
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
                  Unable to Load Achievements
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

        {/* Stats Grid */}
        {!loading && !error && achievements.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="group relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-yellow-600/20 hover:border-yellow-600/60 p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/20 text-center overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 150}ms both`,
                }}
              >
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-tr-full"></div>

                {/* Golden Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600/0 via-yellow-600/5 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Background */}
                  <div className="mb-8 inline-flex p-5 rounded-2xl bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 text-yellow-500 group-hover:from-yellow-600 group-hover:to-yellow-500 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {ICON_MAP[achievement.icon.toLowerCase()] ||
                      ICON_MAP.trophy}
                  </div>

                  {/* Value */}
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                    {achievement.value}
                  </div>

                  {/* Label */}
                  <p className="text-xl font-bold text-gray-200 mb-3 tracking-wide">
                    {achievement.label}
                  </p>

                  {/* Description */}
                  {achievement.description && (
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {achievement.description}
                    </p>
                  )}

                  {/* Decorative Bottom Line */}
                  <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && achievements.length === 0 && (
          <div className="text-center py-20">
            <Crown className="w-16 h-16 text-yellow-600/50 mx-auto mb-6" />
            <p className="text-gray-400 text-lg font-light">
              No achievements recorded yet
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Add your milestones to the Google Sheet
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
