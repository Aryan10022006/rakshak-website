import React, { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import '../styles/HeroSection.css';
import { Target, Cpu, Zap } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                           url(${process.env.PUBLIC_URL}/images/back-drone.jpg)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      <div className="hero-content-main">
        <div className="hero-left-content">
          <div className="brand-text">
          <h5 style={{color: '#7f7c7c'}}>#Welcome To</h5>
            <h1 className="team-text">TEAM</h1>
            <h1 className="rakshak-text">RAKSHAK</h1>
            <h2 style={{fontSize: "3rem",color:"#3cabf4",fontWeight:'800'}}>IIT BOMBAY</h2>
          </div>
          
          <div className="feature-icons">
            <div className="feature-item">
              <Target className="feature-icon" />
              <span className="feature-text">Precision Control</span>
            </div>
            <div className="feature-item">
              <Cpu className="feature-icon" />
              <span className="feature-text">AI-Powered</span>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" />
              <span className="feature-text">Advanced Systems</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="hero-cta-button"
            asChild
          >
            <a href="#join">Join Us</a>
          </Button>
        </div>

        <div className="targeting-scope">
          <img 
            src={`${process.env.PUBLIC_URL}/images/gun_scope.png`} /* Replace with your actual PNG path */
            alt="Targeting Scope"
            className="gun-scope-png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;