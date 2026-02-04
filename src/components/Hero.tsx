import { useState, useEffect } from "react";
import { ChevronRight, Newspaper } from "lucide-react";
import heroImage from "@/assets/hero-watershed.jpg";

const topStories = [
  "Manila Water switches to 100% Renewable Energy Retail Supply, marks first in the Philippine water sector",
  "Manila Water's sewer line relocation in Quezon City nears completion to support Metro Manila Subway Project",
  "La Mesa Ecopark celebrates landmark environmental achievements in 2025",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Manila Water Watershed"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 animate-fade-in">
            Unwavering@28
          </h1>

          {/* Top Stories Box */}
          <div className="bg-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-6 h-6 text-primary-foreground" />
              <h2 className="font-heading font-bold text-lg text-primary-foreground tracking-wide">TOP STORIES</h2>
            </div>
            <ul className="space-y-3">
              {topStories.map((story, index) => (
                <li key={index} className="flex items-start gap-2 group cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-primary-foreground/90 text-sm md:text-base group-hover:text-secondary transition-colors">
                    {story}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-12 bg-primary-foreground"
                    : "w-8 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
