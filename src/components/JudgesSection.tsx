
import React, { useRef, useEffect } from "react";

interface JudgeCardProps {
  name: string;
  title: string;
  bio: string;
  delay: number;
}

const JudgeCard: React.FC<JudgeCardProps> = ({ name, title, bio, delay }) => {
  return (
    <div 
      className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 glass-panel p-6 flex flex-col h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 w-24 h-24 mx-auto rounded-full overflow-hidden bg-white/5 flex items-center justify-center text-white/40 font-mono text-sm">
        PHOTO
      </div>
      <h3 className="text-xl font-display font-bold mb-1 text-center">{name}</h3>
      <p className="text-hackathon-accent mb-4 text-center">{title}</p>
      <p className="text-hackathon-light/70 text-sm text-center">{bio}</p>
    </div>
  );
};

const JudgesSection: React.FC = () => {
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

  const judges = [
    {
      name: "Alex Chen",
      title: "CTO, TechVision",
      bio: "Former lead engineer at Google with over 15 years of experience in machine learning and AI technologies."
    },
    {
      name: "Samantha Williams",
      title: "Founding Partner, Quantum VC",
      bio: "Early-stage investor focused on deep tech startups with 20+ successful exits in her portfolio."
    },
    {
      name: "Dr. Marcus Reid",
      title: "Head of Innovation, FutureLabs",
      bio: "PhD in Computer Science with multiple patents and publications in quantum computing."
    },
    {
      name: "Priya Sharma",
      title: "Founder & CEO, NexGen",
      bio: "Serial entrepreneur who has built and sold three tech companies in the last decade."
    }
  ];

  return (
    <section id="judges" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-hackathon-accent bg-hackathon-accent/10 rounded-full">
              Expert Panel
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Meet Our Judges
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-hackathon-light/80 max-w-2xl mx-auto">
            Our distinguished panel of industry experts will evaluate submissions based on innovation, technical complexity, design, and potential impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge, index) => (
            <JudgeCard 
              key={index}
              name={judge.name}
              title={judge.title}
              bio={judge.bio}
              delay={300 + index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 glass-panel inline-block px-6 py-4 mx-auto">
            <p className="text-hackathon-light/80">
              Additional judges will be announced closer to the event date.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-hackathon-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default JudgesSection;
