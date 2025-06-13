import React, { useEffect, useState } from "react";
import "./subsystempanel.css";

const droneBanner = "/images/drone_banner.jpg"; // Placeholder for banner image
const droneDiagram = "/images/subsystem_drone_diagram.png"; // Existing diagram

function SubsystemPanel({ isOpen, onClose, data, position }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    const handlePopState = (event) => {
      if (isOpen) {
        event.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      window.history.pushState({ subsystemOpen: true }, "", window.location.pathname);
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && shouldRender) {
      setAnimatingOut(true);
      setTimeout(() => {
        setShouldRender(false);
        setAnimatingOut(false);
        const anchor = document.getElementById("view-more-anchor");
        if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        window.history.replaceState({}, "", window.location.pathname);
      }, 400);
    }
  }, [isOpen]);

  if (!shouldRender || !data) return null;

  const slideClass = position === "left" ? "slide-left" : "slide-right";
  const exitClass = animatingOut
    ? position === "left"
      ? "slide-out-left"
      : "slide-out-right"
    : "";

  // Sample projects data (replace with actual data from `data.projects` if available)
  const projects = [
    { id: 1, title: "Autonomous Navigation", description: "Developed advanced algorithms for obstacle avoidance.", image: "/images/project1.jpg" },
    { id: 2, title: "Real-Time Communication", description: "Implemented low-latency data transmission systems.", image: "/images/project2.jpg" },
    { id: 3, title: "Power Optimization", description: "Enhanced battery efficiency for extended flight times.", image: "/images/project3.jpg" },
  ];

  return (
    <div className={`panel-overlay ${slideClass} ${exitClass}`}>
      {/* Particle Background */}
      <div className="particle-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s` }} />
        ))}
      </div>

      {/* Banner Section */}
      <div className="panel-banner bg-primary text-white">
        <button className="panel-back-button btn btn-outline-light" onClick={onClose}>
          <i className="bi bi-arrow-left me-2"></i>Back
        </button>
        <h1 className="panel-title">{data.name || "AVIONICS SUBSYSTEM"}</h1>
      </div>

      {/* Hero Banner Image */}
      <div className="hero-banner">
        <img src={droneBanner} alt="Subsystem Banner" className="hero-banner-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="panel-content container">
        {/* Description Section */}
        <div className="content-section">
          <h2 className="section-title text-primary">Overview</h2>
          <div className="card bg-light shadow-sm">
            <div className="card-body">
              <p className="section-description text-muted">
                {data.description || "The brain of our drone, managing flight control, navigation, communication, and power systems with high efficiency and reliability."}
              </p>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="content-section row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h3 className="card-title mb-0">Features</h3>
              </div>
              <div className="card-body">
                <ul className="info-list list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-fresh-green me-2"></i>Real-time sensor data processing</li>
                  <li><i className="bi bi-check-circle-fill text-fresh-green me-2"></i>Redundant safety mechanisms</li>
                  <li><i className="bi bi-check-circle-fill text-fresh-green me-2"></i>Custom flight control algorithms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h3 className="card-title mb-0">Specifications</h3>
              </div>
              <div className="card-body">
                <ul className="info-list list-unstyled">
                  <li><span className="spec-label fw-bold">CPU</span> ARM Cortex-A53</li>
                  <li><span className="spec-label fw-bold">OS</span> Real-time Linux</li>
                  <li><span className="spec-label fw-bold">POWER</span> 15W peak, 5W nominal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects & Works */}
        <div className="content-section">
          <h2 className="section-title text-primary">Projects & Works</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-4">
                <div className="card project-card h-100 shadow-sm">
                  <img src={project.image} alt={project.title} className="card-img-top project-image" />
                  <div className="card-body">
                    <h3 className="project-title card-title text-primary">{project.title}</h3>
                    <p className="project-description card-text text-muted">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubsystemPanel;