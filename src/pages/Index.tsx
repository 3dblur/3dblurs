
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import SponsorsSection from "@/components/SponsorsSection";
import JudgesSection from "@/components/JudgesSection";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import { Code, TerminalSquare } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    setIsLoaded(true);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Terminal boot sequence effect
  const [bootSequence, setBootSequence] = useState(0);
  
  useEffect(() => {
    if (!isLoaded) return;
    
    const bootTimer = setTimeout(() => {
      if (bootSequence < 100) {
        setBootSequence(prev => Math.min(prev + Math.floor(Math.random() * 10) + 5, 100));
      }
    }, 100);
    
    return () => clearTimeout(bootTimer);
  }, [bootSequence, isLoaded]);

  return (
    <>
      <Helmet>
        <title>The World's Largest Hackathon | Hackathon.dev</title>
        <meta name="description" content="Join the world's largest hackathon with over $1M in prizes. Virtual event for developers, designers, and innovators worldwide." />
        <meta property="og:title" content="The World's Largest Hackathon | Hackathon.dev" />
        <meta property="og:description" content="Join the world's largest hackathon with over $1M in prizes. Virtual event for developers, designers, and innovators worldwide." />
        <meta property="og:url" content="http://hackathon.dev" />
      </Helmet>
      
      {/* Sci-fi scan line effect */}
      <div className="scan-line" />
      
      {bootSequence < 100 ? (
        <div className="fixed inset-0 bg-hackathon-dark z-50 flex flex-col items-center justify-center p-8 bg-gradient-blue">
          <div className="terminal-text text-xl mb-4 flex items-center">
            <TerminalSquare className="mr-2 text-[#0077FF]" size={24} />
            HACKATHON.DEV OS v1.0.0
          </div>
          <div className="terminal-text text-sm mb-6">INITIALIZING SYSTEM...</div>
          <div className="w-full max-w-md bg-black/50 border border-[#0077FF]/30 p-1 rounded-sm mb-6">
            <div 
              className="h-2 bg-[#0077FF]/80 rounded-sm transition-all duration-300 ease-in-out"
              style={{ width: `${bootSequence}%` }}
            ></div>
          </div>
          <div className="flex flex-col gap-1 terminal-text text-xs w-full max-w-md opacity-70">
            <div>{'>'} Loading core systems... <span className="text-[#5AA6FF]">OK</span></div>
            <div>{'>'} Connecting to server... <span className="text-[#5AA6FF]">OK</span></div>
            <div>{'>'} Initializing UI components... <span className="text-[#5AA6FF]">OK</span></div>
            <div>{'>'} Loading content... {bootSequence < 100 ? <span className="cursor-blink">_</span> : <span className="text-[#5AA6FF]">OK</span>}</div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <StarryBackground />
          <Header />
          <main>
            <HeroSection />
            <PrizeSection />
            <SponsorsSection />
            <JudgesSection />
          </main>
          <Footer />
          
          {/* Grid decorations */}
          <div className="fixed top-0 left-0 w-full h-screen grid-lines pointer-events-none"></div>
          
          {/* Edge decorations */}
          <div className="fixed top-4 left-4 border-l-2 border-t-2 border-[#0077FF]/30 w-16 h-16 pointer-events-none"></div>
          <div className="fixed top-4 right-4 border-r-2 border-t-2 border-[#0077FF]/30 w-16 h-16 pointer-events-none"></div>
          <div className="fixed bottom-4 left-4 border-l-2 border-b-2 border-[#0077FF]/30 w-16 h-16 pointer-events-none"></div>
          <div className="fixed bottom-4 right-4 border-r-2 border-b-2 border-[#0077FF]/30 w-16 h-16 pointer-events-none"></div>
          
          {/* Tech stat indicators */}
          <div className="fixed bottom-8 left-8 font-mono text-[10px] text-[#0077FF]/70 pointer-events-none">
            <div className="mb-1">VERSION 1.0.0</div>
            <div className="mb-1">RUNTIME: {Math.floor(Math.random() * 1000)} MS</div>
            <div>STATUS: ONLINE</div>
          </div>
          
          <div className="fixed bottom-8 right-8 font-mono text-[10px] text-[#0077FF]/70 pointer-events-none text-right">
            <div className="mb-1">LAT: {(Math.random() * 90).toFixed(6)}° N</div>
            <div className="mb-1">LONG: {(Math.random() * 180).toFixed(6)}° E</div>
            <div>HACKATHON.DEV</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
