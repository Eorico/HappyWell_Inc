import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "ABOUT US", href: "#about" },
  { label: "CUSTOMERS", href: "#customers" },
  { label: "NEWS", href: "#news" },
  { label: "BUSINESS UNITS", href: "#business" },
  { label: "SUSTAINABILITY", href: "#sustainability" },
  { label: "INVESTORS", href: "#investors" },
  { label: "CORPORATE GOVERNANCE", href: "#governance" },
  { label: "CAREERS", href: "#careers" },
  { label: "VENDORS", href: "#vendors" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                  <ellipse cx="12" cy="15" rx="3" ry="4" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary tracking-tight">MANILA WATER</span>
              <span className="text-xs text-muted-foreground tracking-widest">CARE IN EVERY DROP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-xs font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-heading font-semibold text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
