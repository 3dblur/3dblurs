
import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, Zap } from "lucide-react";
import Button from "./ui-custom/Button";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center"
    >
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-hackathon-accent bg-hackathon-accent/10 rounded-full">
              <Zap size={14} className="inline mr-1" /> The Future Starts Here
            </span>
          </div>
          
          <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            The World's Largest <br />
            <span className="text-gradient">Hackathon</span>
          </h1>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-lg md:text-xl text-hackathon-light/80 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators from around the globe to build, create, and push the boundaries of what's possible in technology.
          </p>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-sm md:text-base text-hackathon-light/80">
              <MapPin size={18} className="text-hackathon-accent mr-2" />
              <span>Virtual Event</span>
            </div>
            <div className="flex items-center text-sm md:text-base text-hackathon-light/80">
              <Calendar size={18} className="text-hackathon-accent mr-2" />
              <span>Date: TBD</span>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Register Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-hackathon-light/60 hover:text-white transition-colors duration-200">
          <span className="text-sm mb-2">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="currentColor" fillOpacity="0.6"/>
          </svg>
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-hackathon-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-hackathon-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
