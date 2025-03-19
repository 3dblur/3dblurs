
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui-custom/Button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-hackathon-dark/80 backdrop-blur-lg border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-display font-bold text-white flex items-center"
        >
          <span className="text-hackathon-accent mr-1">H</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>a</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>c</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>k</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "250ms" }}>a</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>t</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "350ms" }}>h</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>o</span>
          <span className="animate-fade-in-up" style={{ animationDelay: "450ms" }}>n</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-hackathon-light/80 hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#prizes" className="text-hackathon-light/80 hover:text-white transition-colors duration-200">
            Prizes
          </a>
          <a href="#sponsors" className="text-hackathon-light/80 hover:text-white transition-colors duration-200">
            Sponsors
          </a>
          <a href="#judges" className="text-hackathon-light/80 hover:text-white transition-colors duration-200">
            Judges
          </a>
          <Button variant="outline" size="sm">
            Register
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-hackathon-dark/95 backdrop-blur-lg">
          <div className="container px-6 mx-auto h-full flex flex-col">
            <div className="flex justify-end py-6">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8 py-12">
              <a 
                href="#about" 
                className="text-xl text-hackathon-light/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#prizes" 
                className="text-xl text-hackathon-light/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Prizes
              </a>
              <a 
                href="#sponsors" 
                className="text-xl text-hackathon-light/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsors
              </a>
              <a 
                href="#judges" 
                className="text-xl text-hackathon-light/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Judges
              </a>
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                Register
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
