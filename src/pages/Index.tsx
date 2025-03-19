
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import SponsorsSection from "@/components/SponsorsSection";
import JudgesSection from "@/components/JudgesSection";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";

const Index = () => {
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
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>The World's Largest Hackathon | Hackathon.dev</title>
        <meta name="description" content="Join the world's largest hackathon with over $1M in prizes. Virtual event for developers, designers, and innovators worldwide." />
        <meta property="og:title" content="The World's Largest Hackathon | Hackathon.dev" />
        <meta property="og:description" content="Join the world's largest hackathon with over $1M in prizes. Virtual event for developers, designers, and innovators worldwide." />
        <meta property="og:url" content="http://hackathon.dev" />
      </Helmet>
      
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
      </div>
    </>
  );
};

export default Index;
