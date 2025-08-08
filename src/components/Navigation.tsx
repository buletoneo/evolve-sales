import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent hover-scale cursor-pointer tracking-tight">
                INVENZO
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-spring px-3 py-2 text-sm font-medium story-link"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-foreground hover:text-primary transition-spring px-3 py-2 text-sm font-medium story-link"
              >
                Why Choose Us
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-spring px-3 py-2 text-sm font-medium story-link"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-spring px-3 py-2 text-sm font-medium story-link"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="button-hover">Sign In</Button>
            <Button variant="hero" className="button-hover hover:shadow-glow">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Why Choose Us
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-border flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="hero" className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;