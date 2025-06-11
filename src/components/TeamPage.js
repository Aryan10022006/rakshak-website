import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamLead from "./TeamLead";
import "./team.css";

const subsystems = [
  { id: "allteamlead", name: "All Team Lead" },
  { id: "avionics", name: "Avionics" },
  { id: "aerod", name: "Aerodynamics" },
  { id: "software", name: "Software" },
  { id: "business", name: "Business" },
];

const teamImages = [
  { url: "/images/team_24-25.jpg", caption: "Team Rakshak 2024‑25", description: "Meet our passionate team dedicated to innovation" },
  // ... other slides
];

function TeamPage() {
  const [selectedSubsystem, setSelectedSubsystem] = useState("allteamlead");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const interval = setInterval(() =>
      setActiveSlide(prev => (prev + 1) % teamImages.length),
    5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showParticles) return;
    const canvas = document.createElement("canvas");
    // ... particle init omitted for brevity; same as yours ...
    return () => canvas.remove();
  }, [showParticles]);

  const changeSubsystem = (id) => {
    setSelectedSubsystem(id);
    setTimeout(() => {
      const section = document.getElementById("team-leads");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <motion.section className="team-page-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="container">
        <motion.h2 className="team-title">Our Team</motion.h2>
        
        {/* Carousel */}
        <div className="team-carousel">
          <div className="team-carousel-inner" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {teamImages.map((img, i) => (
              <div key={i} className="team-carousel-slide">
                <img src={img.url} alt={img.caption} className="team-image" />
                <div className="team-image-caption">
                  <h3>{img.caption}</h3><p>{img.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={() => setActiveSlide((activeSlide - 1 + teamImages.length) % teamImages.length)}>←</button>
          <button className="carousel-control next" onClick={() => setActiveSlide((activeSlide + 1) % teamImages.length)}>→</button>
        </div>

        {/* Subsystem selector */}
        <div className="subsystem-container">
          {subsystems.map((sub) => (
            <span key={sub.id}
              className={`subsystem-label ${selectedSubsystem === sub.id ? "active" : ""}`}
              onClick={() => changeSubsystem(sub.id)}
              tabIndex="0"
            >
              {sub.name}
            </span>
          ))}
        </div>

        {/* Team leads */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedSubsystem} id="team-leads" className="team-lead-section"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
            <TeamLead selectedSubsystem={selectedSubsystem} />
          </motion.div>
        </AnimatePresence>
      </div>
      {showParticles && <div className="particle-background" />}
    </motion.section>
  );
}

export default TeamPage;
