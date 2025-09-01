import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A2</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">The A2 Kreations</h1>
                <p className="text-xs text-muted-foreground">Events & Hospitality</p>
              </div>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Our Services
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#career" className="text-foreground hover:text-primary transition-colors">
              Career
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91-9910566561</span>
            </div>
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="py-4 space-y-4">
              <a href="#home" className="block px-4 py-2 text-foreground hover:bg-muted">
                Home
              </a>
              <a href="#about" className="block px-4 py-2 text-foreground hover:bg-muted">
                About Us
              </a>
              <a href="#services" className="block px-4 py-2 text-foreground hover:bg-muted">
                Our Services
              </a>
              <a href="#gallery" className="block px-4 py-2 text-foreground hover:bg-muted">
                Gallery
              </a>
              <a href="#career" className="block px-4 py-2 text-foreground hover:bg-muted">
                Career
              </a>
              <a href="#contact" className="block px-4 py-2 text-foreground hover:bg-muted">
                Contact Us
              </a>
              <div className="px-4 py-2 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91-9910566561</span>
                </div>
                <Button variant="hero" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EventHeader;