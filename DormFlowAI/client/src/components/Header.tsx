import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Users } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Ubuntu Marketplace</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#solution" className="text-foreground hover:text-primary transition-colors" data-testid="link-solution">
              Solution
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors" data-testid="link-benefits">
              Benefits
            </a>
            <a href="#target" className="text-foreground hover:text-primary transition-colors" data-testid="link-target">
              Who We Serve
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors" data-testid="link-contact">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button data-testid="button-join-now">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log('Mobile menu toggled');
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#solution"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="mobile-link-solution"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solution
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="mobile-link-benefits"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#target"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="mobile-link-target"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Serve
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="mobile-link-contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full" data-testid="mobile-button-join-now">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}