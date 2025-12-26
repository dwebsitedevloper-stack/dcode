import {
  Video,
  Camera,
  TrendingUp,
  Users,
  Megaphone,
  BarChart,
  Sparkles,
  Target,
} from "lucide-react";

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "content",
    title: "Content Creation",
    description:
      "Creating engaging reels, shorts, and posts that grab attention",
    icon: <Video className="w-8 h-8" />,
  },
  {
    id: "branding",
    title: "Personal Branding",
    description:
      "Building a strong, recognizable personal brand on social media",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "videography",
    title: "Photography & Videography",
    description:
      "High-quality visuals optimized for Instagram, YouTube & TikTok",
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: "growth",
    title: "Audience Growth",
    description: "Organic strategies to grow followers and boost reach",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: "engagement",
    title: "Community Engagement",
    description:
      "Building loyal audiences through comments, DMs, and live sessions",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "collabs",
    title: "Brand Collaborations",
    description: "Partnering with brands for promotions and sponsored content",
    icon: <Megaphone className="w-8 h-8" />,
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    description: "Tracking insights to improve content and maximize engagement",
    icon: <BarChart className="w-8 h-8" />,
  },
  {
    id: "strategy",
    title: "Content Strategy",
    description:
      "Planning viral content aligned with trends and audience behavior",
    icon: <Target className="w-8 h-8" />,
  },
];

export default function ExpertiseGrid() {
  return (
    <section
      id="expertise"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Influencer Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping brands and audiences connect through impactful content
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold-glow"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
