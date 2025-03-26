"use client"

import { useState, useEffect } from "react";
import { Button } from "../ui-custom/Button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold text-foreground">
              clean<span className="text-primary">kanvas</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <Button variant="outline" size="default">
              Sign In
            </Button>
            <Button>Try for Free</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="size-6" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="size-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 h-full">
            <a
              href="#features"
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-4 pt-4 w-full max-w-[200px]">
              <Button variant="outline" size="lg" className="w-full">
                Sign In
              </Button>
              <Button size="lg" className="w-full">
                Try for Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;