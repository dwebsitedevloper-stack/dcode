import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import Navigation from "./Navigation";
import { handleSmoothScroll } from "@/lib/scrollHelpers";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const src = "/myvideo.mp4";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    v.playsInline = true;
    const tryPlay = async () => {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryPlay();
  }, [isMuted]);

  const togglePlayPause = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const next = !isMuted;
    setIsMuted(next);
    v.muted = next;
    if (!next) {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-3 px-4 sm:px-6 lg:px-8
        bg-[radial-gradient(circle_at_top,_#1a1a1a_0%,_#000_55%)]"
      >
        <div className="container mx-auto max-w-5xl">
          <div
            className={`mx-auto text-center transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Hero Badge */}
            <div className="mb-6 inline-block">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                border border-yellow-500/40
                bg-black/60 backdrop-blur
                text-yellow-400 text-sm font-medium
                shadow-[0_0_20px_rgba(234,179,8,0.15)]"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Welcome to my portfolio
              </span>
            </div>

            {/* Video */}
            <div className="relative mx-auto w-full max-w-4xl mb-8 sm:mb-12 md:mb-10">
              {/* Golden Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 rounded-2xl blur-3xl pointer-events-none" />

              <div
                className="relative rounded-2xl overflow-hidden touch-manipulation
                aspect-[4/5] sm:aspect-video max-h-[60vh] md:max-h-[70vh]
                cursor-pointer mx-auto"
                onClick={togglePlayPause}
                role="button"
                aria-label="Toggle video play"
              >
                {/* Border */}
                <div className="absolute -inset-1 rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-yellow-500/40 ring-1 ring-yellow-400/20" />
                </div>

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover relative z-10"
                  src={src}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  onCanPlay={() => setIsLoaded(true)}
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Controls */}
                <div className="absolute left-4 bottom-4 z-30 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="bg-black/70 backdrop-blur-sm border border-yellow-500/30
                    text-yellow-400 px-3 py-2 rounded-md flex items-center gap-2
                    hover:scale-105 transition-transform"
                  >
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                    <span className="text-sm hidden sm:inline">
                      {isPlaying ? "Pause" : "Play"}
                    </span>
                  </button>

                  <button
                    onClick={(e) => toggleMute(e)}
                    className="bg-black/70 backdrop-blur-sm border border-yellow-500/30
                    text-yellow-400 px-3 py-2 rounded-md flex items-center gap-2
                    hover:scale-105 transition-transform"
                  >
                    {isMuted ? "🔇" : "🔊"}
                    <span className="text-sm hidden sm:inline">
                      {isMuted ? "Unmute" : "Mute"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-zinc-100">
              Crafting Digital
              <span
                className="block mt-2 text-transparent bg-clip-text 
  bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500
  drop-shadow-[0_2px_20px_rgba(234,179,8,0.45)]"
              >
                Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed
tracking-wide"
            >
              I create{" "}
              <span className="text-yellow-400 font-semibold">
                scroll-stopping content
              </span>{" "}
              and
              <span className="text-yellow-400 font-semibold">
                {" "}
                high-impact digital experiences
              </span>
              . Let’s grow your brand and turn attention into
              <span className="text-yellow-400 font-semibold"> influence</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300
                text-black rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]
                transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400
                rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Scroll */}
            <div className="flex justify-center">
              <button
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="animate-bounce p-2 rounded-full hover:bg-yellow-400/10"
              >
                <ArrowDown className="w-6 h-6 text-yellow-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Ambient Gold Blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl -z-10" />
      </section>
    </div>
  );
}
