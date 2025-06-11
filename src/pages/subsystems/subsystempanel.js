import React, { useEffect, useState } from "react";
import "./subsystempanel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const droneImage = "/images/drone.jpg";
const droneDiagram = "/images/subsystem_drone_diagram.png"; // Placeholder for your drone diagram PNG

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

  return (
    <div className={`panel-overlay ${slideClass} ${exitClass}`}>
      {/* Panel Banner */}
      <div className="panel-banner">
        <button className="panel-back-button" onClick={onClose}>
          <i className="bi bi-arrow-left"></i> Back
        </button>
        <h1 className="panel-title">{data.name || "AVIONICS SUBSYSTEM"}</h1>
      </div>

      {/* Diagram Section */}
      <div className="panel-diagram-section">
        <div className="diagram-text-content">
          <h2 className="diagram-subsystem-title">{data.name || "AVIONICS SUBSYSTEM"}</h2>
          <p className="diagram-description">{data.description || "The brain of our drone, managing the flight control, navigation, communication, and power systems with high efficiency and reliability."}</p>

          <h3 className="diagram-features-title">FEATURES</h3>
          <ul className="diagram-features-list">
            <li>Real-time sensor data processing</li>
            <li>Redundant safety mechanisms</li>
            <li>Custom flight control algorithms</li>
          </ul>

          <h3 className="diagram-specs-title">SPECIFICATIONS</h3>
          <ul className="diagram-specs-list">
            <li><span className="spec-label">CPU</span> ARM Cortex-A53</li>
            <li><span className="spec-label">OS</span> Real-time Linux</li>
            <li><span className="spec-label">POWER</span> 15W peak, 5W nominal</li>
          </ul>
        </div>

        <div className="diagram-image-container">
          <img src={droneDiagram} alt="Drone Subsystem Diagram" className="drone-diagram-image" />
        </div>
      </div>
    </div>
  );
}

export default SubsystemPanel;
