
import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Zap, Code, Globe, Rocket } from "lucide-react";
import Button from "./ui-custom/Button";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "AWAITS YOUR CODE";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    if (typewriterText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullText.substring(0, typewriterText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    }
  }, [typewriterText]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen pt-36 pb-24 overflow-hidden flex flex-col justify-center"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="data-line mb-8">
              <Code size={14} className="inline mr-2" /> INNOVATORS PATH
            </div>
          </div>
          
          <div className="mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide text-white">
              WHICH WORLD
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide text-white">
              CALLS TO YOU?
            </h1>
          </div>
          
          <div className="screen-border p-8 inline-block max-w-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 my-6">
            <span></span>
            <h2 className="text-lg md:text-xl font-cinzel text-[#0077FF] mb-6">
              <span>FIND YOUR PATH TO A NEW FRONTIER</span>
            </h2>
            <p className="font-mono text-sm md:text-base text-white mb-6 leading-relaxed">
              The world's largest virtual hackathon with over $1M in prizes. Where innovation meets opportunity and every line of code can change the future.
            </p>
            <h3 className="font-mono text-sm md:text-base text-[#0077FF]">
              {typewriterText}<span className="cursor-blink text-[#0077FF]">_</span>
            </h3>
          </div>
          
          <div className="mt-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-wrap justify-center gap-8 mb-14">
            <div className="flex items-center text-sm md:text-base text-white font-mono">
              <MapPin size={18} className="text-[#0077FF] mr-2" />
              <span>VIRTUAL EVENT</span>
            </div>
            <div className="flex items-center text-sm md:text-base text-white font-mono">
              <Calendar size={18} className="text-[#0077FF] mr-2" />
              <span>DATE: TBD</span>
            </div>
            <div className="flex items-center text-sm md:text-base text-white font-mono">
              <Rocket size={18} className="text-[#0077FF] mr-2" />
              <span>PRIZES: $1M+</span>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-wrap justify-center gap-6 mt-12">
            <Button variant="terminal" size="lg">
              REGISTER NOW
            </Button>
            <Button variant="outline" size="lg">
              LEARN MORE
            </Button>
          </div>

          {/* Technical Information Card */}
          <div className="mt-28 mb-10 glass-panel p-6 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="text-left">
                <div className="font-mono text-xs text-[#0077FF] mb-1">STATS:</div>
                <div className="grid grid-cols-1 gap-y-4">
                  {leftStats.map((stat, index) => (
                    <div key={index} className="font-mono text-xs">
                      <div className="text-[#0077FF]/80">{stat.label}</div>
                      <div className="text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-left">
                <div className="font-mono text-xs text-[#0077FF] mb-1">METRICS:</div>
                <div className="grid grid-cols-1 gap-y-4">
                  {rightStats.map((stat, index) => (
                    <div key={index} className="font-mono text-xs">
                      <div className="text-[#0077FF]/80">{stat.label}</div>
                      <div className="text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="overflow-hidden rounded-full w-60 h-60 mx-auto relative border border-[#0077FF]/30">
              <img 
                src="/lovable-uploads/b1622559-709c-4847-a9dd-35b64fa8ce42.png" 
                alt="Earth" 
                className="w-full h-full object-cover"
              />
              
              {/* Radar scanning effect */}
              <div className="absolute inset-0 border-2 border-[#0077FF]/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-[#0077FF]/40 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border border-[#0077FF]/60 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/4 h-1/4 border border-[#0077FF]/80 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Data points around the globe */}
            <div className="absolute top-1/4 -left-2 text-[8px] font-mono text-[#0077FF]/70">DATA POINT A</div>
            <div className="absolute bottom-1/4 -right-2 text-[8px] font-mono text-[#0077FF]/70">DATA POINT B</div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8px] font-mono text-[#0077FF]/70">ORIGIN POINT</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-[#0077FF]/60 hover:text-[#0077FF] transition-colors duration-200">
          <span className="text-sm mb-2 font-mono">SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="currentColor" fillOpacity="0.6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

const leftStats = [
  { label: "LOCATION:", value: "VIRTUAL SPACE" },
  { label: "PRIZE POOL:", value: "$1,000,000+" },
  { label: "PARTICIPANTS:", value: "UNLIMITED" },
  { label: "DIFFICULTY:", value: "⬛⬛⬛⬛⬜" }
];

const rightStats = [
  { label: "INNOVATORS:", value: "10,000+" },
  { label: "CHALLENGES:", value: "50+" },
  { label: "SPONSORS:", value: "30+" },
  { label: "COMMITMENT:", value: "⬛⬛⬛⬜⬜" }
];

export default HeroSection;
