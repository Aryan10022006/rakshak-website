import React, { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import '../styles/HeroSection.css';

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
      
      <div className={`hero-content-main ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-logo-container">
          <img 
            src={`${process.env.PUBLIC_URL}/images/rakshak_logo.gif`}
            alt="Team Rakshak Logo" 
            className="hero-logo"
          />
        </div>
        
        <h1 className="hero-title">Team Rakshak – IIT Bombay</h1>
        <p className="hero-subtitle">Engineering drones to protect lives.</p>
        
        <Button 
          size="lg" 
          className="hero-cta-button"
          asChild
        >
          <a href="#join">Join Us</a>
        </Button>
      </div>

      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default HeroSection;