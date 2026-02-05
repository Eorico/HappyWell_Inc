import { useState, useEffect } from "react";
import { ChevronRight, Newspaper } from "lucide-react";
import landingPageBg from "@/assets/happyWellBg.png";

const topStories = [
  "Happy Well Management and Collection Services Inc. Present the Walk the Line Program",
  "Happy Well blessed the company's launch opening of its new office in Imus Cavite",
  "Happy Well go to schools to donate bags and school supplies to students",
];

const LandingPage = () => {
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
          src={landingPageBg}
          alt="Manila Water Watershed"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
          
          {/* Left Column: Headline + Top Stories + Slide Indicators */}
          <div className="flex flex-col items-center lg:items-start max-w-lg w-full">
            {/* Main Headline */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-6 sm:mb-8 text-center lg:text-left animate-fade-in">
              #HAPPYWELL.INC
            </h1>

            {/* Top Stories Box */}
            <div className="bg-foreground/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary-foreground/20 animate-slide-in-left w-full" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                <h2 className="font-heading font-bold text-sm sm:text-lg text-primary-foreground tracking-wide">
                  TOP STORIES
                </h2>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {topStories.map((story, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-2 group cursor-pointer">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-secondary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-primary-foreground/90 text-xs sm:text-sm md:text-base group-hover:text-secondary transition-colors">
                      {story}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 sm:w-12 bg-primary-foreground"
                      : "w-6 sm:w-8 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: optional empty space for layout or future content */}
          <div className="hidden lg:block flex-1" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-10 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-1 sm:pt-2">
          <div className="w-1 h-2 sm:h-3 bg-primary-foreground/70 rounded-full" />
        </div>
        <h1 className="mt-1 sm:mt-2 text-xs sm:text-sm opacity-80 text-white text-center">
          Scroll Down
        </h1>
      </div>
    </section>

  );
};

export default LandingPage;
