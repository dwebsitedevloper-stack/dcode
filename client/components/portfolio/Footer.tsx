import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Camera,
} from "lucide-react";
import { handleSmoothScroll } from "@/lib/scrollHelpers";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    href: "https://instagram.com/yourusername",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    href: "https://facebook.com/yourusername",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "X (Twitter)",
    href: "https://twitter.com/yourusername",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    label: "YouTube",
    href: "https://youtube.com/@yourusername",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Threads",
    href: "https://threads.net/@yourusername",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    label: "Snapchat",
    href: "https://snapchat.com/add/yourusername",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:hello@example.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-yellow-600/30 overflow-hidden">
      {/* Luxurious Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217, 179, 80) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Golden Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-600/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-amber-600/10 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="inline-block text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-300 transition-all duration-300"
              aria-label="Portfolio Home"
            >
              DCODE
            </a>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed font-light max-w-xs">
              Crafting distinguished digital experiences with elegance and
              precision.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-yellow-600 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Navigation
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm font-light"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-600 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-yellow-600/20 hover:border-yellow-600/60 transition-all duration-300 flex items-center justify-center overflow-hidden"
                  aria-label={social.label}
                  title={social.label}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 via-yellow-600/0 to-yellow-600/0 group-hover:from-yellow-600/10 group-hover:via-yellow-600/5 group-hover:to-yellow-600/10 transition-all duration-300"></div>

                  <span className="relative text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-600/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-600/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-600/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left font-light">
            © {currentYear} <span className="text-yellow-600/80">DCODE</span>.
            All rights reserved.
          </p>

          {/* Credit */}
          <p className="text-gray-500 text-sm flex items-center gap-2 font-light">
            Crafted with
            <Heart className="w-4 h-4 text-yellow-600 animate-pulse" />
            by <span className="text-yellow-600/80 font-medium">DCODE</span>
          </p>

          {/* Back to Top */}
          <button
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-600/10 to-yellow-600/5 border border-yellow-600/30 hover:border-yellow-600/60 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm font-medium"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <span className="group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </footer>
  );
}
