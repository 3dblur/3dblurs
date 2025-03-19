
import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import SponsorsSection from "@/components/SponsorsSection";
import JudgesSection from "@/components/JudgesSection";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import { Code, TerminalSquare } from "lucide-react";

// Sample code snippets for the loading screen
const codeSnippets = [
  "import { hackathon } from '@cosmos/innovation';",
  "function initializeHackathon() {",
  "  const participants = await cosmos.connect();",
  "  const challenges = await cosmos.fetchChallenges();",
  "  return { participants, challenges };",
  "}",
  "async function distributeRewards(winners) {",
  "  const prizes = calculatePrizeDistribution(winners);",
  "  await cosmos.transferRewards(winners, prizes);",
  "  console.log('Rewards distributed successfully');",
  "}",
  "export class Solution {",
  "  constructor(participant, challenge) {",
  "    this.participant = participant;",
  "    this.challenge = challenge;",
  "    this.timestamp = Date.now();",
  "  }",
  "  async submit() {",
  "    return await cosmos.submitSolution(this);",
  "  }",
  "}",
  "cosmos.on('connect', () => {",
  "  console.log('Connected to Hackathon network');",
  "});",
  "// Initializing virtual environments",
  "// Setting up distributed computation nodes",
  "// Establishing secure connections",
  "// Loading challenge parameters"
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
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

  // Code animation for loading screen
  const addCodeLine = useCallback(() => {
    if (codeLines.length < codeSnippets.length) {
      setCodeLines(prev => [...prev, codeSnippets[prev.length]]);
    }
  }, [codeLines.length]);

  // Terminal boot sequence effect
  useEffect(() => {
    if (!isLoaded) return;
    
    const bootTimer = setTimeout(() => {
      if (bootSequence < 100) {
        const increment = Math.min(Math.floor(Math.random() * 8) + 3, 100 - bootSequence);
        setBootSequence(prev => prev + increment);
        
        // Add a new code line every few percent
        if (bootSequence % 8 === 0 || bootSequence % 9 === 0) {
          addCodeLine();
        }
      }
    }, 160);
    
    return () => clearTimeout(bootTimer);
  }, [bootSequence, isLoaded, addCodeLine]);

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
          <div className="max-w-md w-full mx-auto">
            <div className="terminal-text text-xl mb-8 flex items-center justify-center">
              <TerminalSquare className="mr-3 text-[#0077FF]" size={24} />
              <span className="text-white font-display tracking-wider">HACKATHON.DEV OS</span>
            </div>
            
            <div className="terminal-text text-sm mb-6 text-center">INITIALIZING SYSTEM...</div>
            
            <div className="w-full bg-black/30 border border-[#0077FF]/30 p-1.5 rounded-sm mb-6 overflow-hidden">
              <div 
                className="h-1.5 loader-progress rounded-sm transition-all duration-300 ease-in-out"
                style={{ width: `${bootSequence}%` }}
              ></div>
            </div>
            
            <div className="code-animation mb-8 max-h-60 overflow-y-auto scrollbar-none bg-black/20 rounded-sm border border-[#0077FF]/20">
              {codeLines.map((line, index) => (
                <div 
                  key={index} 
                  className="code-line" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {line.includes('import') || line.includes('function') || line.includes('class') || line.includes('const') ? 
                    <span className="loader-highlight">{line}</span> : line
                  }
                </div>
              ))}
              <div className="code-line cursor-blink">_</div>
            </div>
            
            <div className="flex flex-col gap-1.5 terminal-text text-xs w-full opacity-80 mb-10">
              <div className="flex">
                <span className="w-5 text-[#0077FF] mr-2">{'>'}</span> 
                <span className="w-40">Loading core systems</span>
                <span className="text-[#5AA6FF]">OK</span>
              </div>
              <div className="flex">
                <span className="w-5 text-[#0077FF] mr-2">{'>'}</span> 
                <span className="w-40">Connecting to server</span>
                <span className="text-[#5AA6FF]">OK</span>
              </div>
              <div className="flex">
                <span className="w-5 text-[#0077FF] mr-2">{'>'}</span> 
                <span className="w-40">Initializing UI components</span>
                <span className="text-[#5AA6FF]">OK</span>
              </div>
              <div className="flex">
                <span className="w-5 text-[#0077FF] mr-2">{'>'}</span> 
                <span className="w-40">Loading content</span>
                {bootSequence < 100 ? <span className="cursor-blink">_</span> : <span className="text-[#5AA6FF]">OK</span>}
              </div>
            </div>
            
            <div className="text-center text-[#0077FF] text-xs font-mono">
              {Math.floor(bootSequence)}% COMPLETE
            </div>
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
          
          {/* Grid decorations with reduced opacity - placed behind content */}
          <div className="fixed top-0 left-0 w-full h-screen grid-lines pointer-events-none z-[-1] opacity-30"></div>
          
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
