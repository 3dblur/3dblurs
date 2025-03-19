import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Code } from "lucide-react";

const CustomButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}> = ({ children, className = "", variant = "primary", onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <button
      className={`
        relative overflow-hidden font-mono
        px-6 py-2 rounded-md text-sm transition-all duration-300
        flex items-center justify-center
        ${variant === "primary" 
          ? "bg-[#0033AA] text-white border border-[#0077FF]" 
          : "bg-transparent text-white border border-[#0077FF]/50"}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Code brackets for tech appearance */}
      <span className="opacity-60 mr-2">&lt;&gt;</span>
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Shine effect */}
      <span 
        className={`
          absolute inset-0 w-full h-full 
          bg-gradient-to-r from-transparent via-white to-transparent 
          opacity-0 hover:opacity-20 
          transition-all duration-1000 
          transform ${isHovering ? "translate-x-full" : "-translate-x-full"} 
          pointer-events-none
        `}
      ></span>
      
      {/* Edge glow */}
      <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_15px_3px_rgba(0,119,255,0.4)]"></span>
      
      {/* Subtle outer glow */}
      <span className="absolute -inset-px rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#0077FF]/40 via-transparent to-[#0077FF]/40 blur-sm"></span>
      
      {/* Code bracket close */}
      <span className="opacity-60 ml-2">&lt;/&gt;</span>
    </button>
  );
};

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
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg shadow-[#0077FF]/10' : 'bg-transparent py-4'}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0033AA] to-[#0077FF] rounded-md transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-500"></div>
              <Code size={16} className="text-white relative z-10" />
              <div className="absolute inset-0 border border-[#0077FF]/50 rounded-md transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-[#0077FF]/20 rounded-md animate-pulse-slow"></div>
            </div>
            <div className="font-bold text-white text-lg tracking-widest font-mono">
              <span className="text-[#0077FF]">&lt;</span>
              H
              <span className="text-xs border-b border-[#0077FF] leading-none inline-block align-middle mx-0.5">ACK</span>
              ATHON
              <span className="text-[#0077FF]">/&gt;</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="text-white text-sm font-mono hover:text-[#0077FF] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <CustomButton 
              className="transition-transform hover:translate-y-[-2px] hover:scale-105 font-bold tracking-wide"
              variant="primary"
            >
              REGISTER
            </CustomButton>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#0077FF] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-[#0077FF]/20 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="text-white text-sm font-mono py-2 hover:text-[#0077FF] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2">
                <CustomButton 
                  className="w-full"
                  variant="primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  REGISTER
                </CustomButton>
              </div>
            </nav>
          </div>
        </div>
      )}
      
      {/* Add global styles for the pulse animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
      `}</style>
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

/*
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
          ? "py-3 bg-hackathon-dark/80 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl tracking-wider text-white flex items-center font-future"
        >
          <span className="text-hackathon-accent font-bold tracking-widest">H</span>
          <span>ackathon</span>
        </a>
        
        
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="font-mono text-hackathon-light/80 hover:text-white transition-all duration-200 text-sm relative group tracking-wide"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-hackathon-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <Button variant="cyber" size="sm">
            Register
          </Button>
        </nav>
        
        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      
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
                  className="font-mono text-lg text-hackathon-light/80 hover:text-white transition-colors duration-200 tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="cyber" onClick={() => setIsMenuOpen(false)}>
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

*/
