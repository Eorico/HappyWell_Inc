import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "ABOUT US", href: "/#about" },
  { label: "CUSTOMERS", href: "/customers" },
  { label: "NEWS", href: "/news" },
  { label: "BUSINESS UNITS", href: "/business-units" },
  { label: "SUSTAINABILITY", href: "/sustainability" },
  { label: "CORPORATE PARTNERS", href: "/corporate-partners" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
];

import happWellLogo from '@/assets/happyWell.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md" 
        : "bg-white/20 backdrop-blur-lg border border-white/30"
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#19a556] flex items-center justify-center">
                 <img 
                  src={happWellLogo} 
                  alt="happy well logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary tracking-tight">HAPPY WELL INC.</span>
              <span className="text-xs text-muted-foreground tracking-widest">CARE IN EVERY DROP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-heading font-semibold text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu - Sheet sliding from left */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="xl:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-[280px] sm:w-[320px] p-0 border-none"
              style={{ backgroundColor: 'hsl(200 25% 20%)' }}
            >
              {/* Side Nav Header with Logo */}
              <div className="p-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                     <img src={happWellLogo} alt="Happy Well Logo" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-base text-white tracking-tight">HAPPY WELL</span>
                    <span className="text-[10px] text-white/60 tracking-widest">CARE IN EVERY DROP</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links - matching Manila Water style */}
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center px-5 py-3.5 text-sm font-heading font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 relative overflow-hidden group"
                      style={{
                        animation: `slideInLeft 0.3s ease-out ${index * 0.05}s both`,
                      }}
                    >
                      <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-2">
                        {item.label}
                      </span>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* Footer section */}
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10">
                <div className="space-y-2">
                  <p className="text-xs text-white/50 font-heading">
                    CAVITE HOTLINE: {"(046)402-6759 / (046)546-9175"} MANILA HOTLINE: {"(02)8519-4490"}
                  </p>
                  <p className="text-xs text-white/50">info@happywell.com.ph</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Add keyframe animation for slide in */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
