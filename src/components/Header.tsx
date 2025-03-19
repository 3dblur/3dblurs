
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
          ? "py-3 bg-hackathon-dark/90 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-display font-medium text-white flex items-center"
        >
          <span className="text-hackathon-accent mr-1 font-bold">H</span>
          <span>ackathon</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-hackathon-light/80 hover:text-white transition-all duration-200 text-sm relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-hackathon-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
          <Button variant="terminal" size="sm">
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
                  className="text-lg text-hackathon-light/80 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="terminal" onClick={() => setIsMenuOpen(false)}>
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
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Judges", href: "#judges" }
];

export default Header;
