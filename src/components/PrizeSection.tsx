
import React, { useRef, useEffect } from "react";
import { Trophy, Gift, Code, Zap } from "lucide-react";

interface PrizeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  amount: string;
  delay: number;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ icon, title, description, amount, delay }) => {
  return (
    <div 
      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 glass-panel p-6 md:p-8 flex flex-col h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-hackathon-accent/20 flex items-center justify-center text-hackathon-accent">
          {icon}
        </div>
        <div className="text-xl md:text-2xl font-display font-bold text-white">{amount}</div>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-hackathon-light/70 flex-grow">{description}</p>
    </div>
  );
};

const PrizeSection: React.FC = () => {
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
    <section id="prizes" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-hackathon-accent bg-hackathon-accent/10 rounded-full">
              Over $1M in Prizes
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Incredible Rewards Await
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-hackathon-light/80 max-w-2xl mx-auto">
            Push the boundaries of innovation and compete for substantial prizes across multiple categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PrizeCard 
            icon={<Trophy size={24} />}
            title="Grand Prize"
            description="For the most innovative and impactful overall project that demonstrates exceptional technical achievement."
            amount="$500,000"
            delay={300}
          />
          <PrizeCard 
            icon={<Code size={24} />}
            title="Technical Excellence"
            description="For the project with the most impressive technical implementation and robust architecture."
            amount="$250,000"
            delay={400}
          />
          <PrizeCard 
            icon={<Zap size={24} />}
            title="Innovation Award"
            description="For the most creative and forward-thinking solution that addresses a unique problem."
            amount="$150,000"
            delay={500}
          />
          <PrizeCard 
            icon={<Gift size={24} />}
            title="Community Impact"
            description="For the project with the greatest potential to create positive social or environmental change."
            amount="$100,000"
            delay={600}
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 glass-panel inline-block px-6 py-4 mx-auto">
            <p className="text-hackathon-light/80">
              Additional prizes include mentorship opportunities, accelerator program entries, and partnership deals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-hackathon-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PrizeSection;
