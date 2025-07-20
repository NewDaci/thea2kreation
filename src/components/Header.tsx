import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-hotel-navy">HotelFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-hotel-gray hover:text-hotel-navy transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-hotel-gray hover:text-hotel-navy transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-hotel-gray hover:text-hotel-navy transition-colors">
              About
            </a>
            <a href="#contact" className="text-hotel-gray hover:text-hotel-navy transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button variant="hero" size="lg">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-hotel-navy" />
            ) : (
              <Menu className="h-6 w-6 text-hotel-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-hotel-gray hover:text-hotel-navy transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-hotel-gray hover:text-hotel-navy transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-hotel-gray hover:text-hotel-navy transition-colors">
                About
              </a>
              <a href="#contact" className="text-hotel-gray hover:text-hotel-navy transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="hero">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;