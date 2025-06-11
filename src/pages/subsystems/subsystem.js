import React, { useRef } from "react";
import SubsystemGrid from "./subsystemgrid";
import "./subsystem.css"; 
import SubsystemDetails from "./subsystemdetail"; 

function Subsystem() {
  const businessRef = useRef(null);
  const softwareRef = useRef(null);
  const avionicsRef = useRef(null);
  const aerodynamicsRef = useRef(null);

  const refs = {
    business: businessRef,
    software: softwareRef,
    avionics: avionicsRef,
    aerodynamics: aerodynamicsRef
  };

  const scrollToSection = (subsystemName) => {
    console.log('Attempting to scroll to:', subsystemName);
    const targetRef = refs[subsystemName.toLowerCase()];
    console.log('Resolved targetRef:', targetRef);
    if (targetRef && targetRef.current) {
      console.log('targetRef.current exists!', targetRef.current);
      const offset = 80; // Adjust based on your header height
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('targetRef.current is null or undefined for', subsystemName, targetRef);
    }
  };

  return (
    <div className="subsystem-page">
      {/* Hero Section */}
      <div className="subsystem-banner">
        <h1 className="subsystem-title">Exploring the Core Subsystems of Rakshak</h1>
        <p className="subsystem-subtitle">
          Each subsystem is a vital component in our journey towards engineering innovation and excellence.
        </p>
      </div>

      {/* Subsystem Grid */}
      <SubsystemGrid onSubsystemClick={scrollToSection} />

      {/* Subsystem Sections */}
      <SubsystemDetails refs={refs} />
    </div>
  );
}

export default Subsystem;
