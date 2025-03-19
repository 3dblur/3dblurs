
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
          ? "py-3 bg-hackathon-dark/95 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl tracking-wider text-white flex items-center"
        >
          <span className="text-hackathon-accent font-bold tracking-widest">H</span>
          <span>ackathon</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-hackathon-light/80 hover:text-white transition-all duration-200 text-sm relative group"
            >
              <span className="tracking-wider">{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-hackathon-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <Button variant="terminal" size="sm" className="glow-button">
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
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-lg text-hackathon-light/80 hover:text-white transition-colors duration-200 tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="terminal" onClick={() => setIsMenuOpen(false)} className="glow-button">
                Register
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PRIZES", href: "#prizes" },
  { label: "SPONSORS", href: "#sponsors" },
  { label: "JUDGES", href: "#judges" }
];

export default Header;
