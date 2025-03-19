
import React, { useRef, useEffect } from "react";
import { Users } from "lucide-react";

const SponsorsSection: React.FC = () => {
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

  // Placeholder sponsor logos - in a real app, these would be real images
  const sponsorPlaceholders = Array(8).fill(null);

  return (
    <section id="sponsors" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-hackathon-accent bg-hackathon-accent/10 rounded-full">
              <Users size={14} className="inline mr-1" /> Our Supporters
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Backed by Industry Leaders
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-hackathon-light/80 max-w-2xl mx-auto">
            Our prestigious partners and sponsors are committed to supporting the next generation of innovation.
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 mb-16">
          <h3 className="text-xl font-display font-medium mb-8 text-center">Platinum Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsorPlaceholders.slice(0, 4).map((_, index) => (
              <div
                key={`platinum-${index}`}
                className="aspect-[3/2] glass-panel flex items-center justify-center p-4"
              >
                <div className="w-full h-12 bg-white/5 rounded-md flex items-center justify-center text-white/40 font-mono text-sm">
                  SPONSOR LOGO
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <h3 className="text-xl font-display font-medium mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorPlaceholders.slice(0, 8).map((_, index) => (
              <div
                key={`gold-${index}`}
                className="aspect-[3/2] glass-panel flex items-center justify-center p-4"
              >
                <div className="w-full h-10 bg-white/5 rounded-md flex items-center justify-center text-white/40 font-mono text-sm">
                  SPONSOR LOGO
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 inline-block">
            <a href="#" className="text-hackathon-accent hover:text-hackathon-accent-light transition-colors duration-200 underline underline-offset-4">
              Become a sponsor
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-hackathon-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SponsorsSection;
