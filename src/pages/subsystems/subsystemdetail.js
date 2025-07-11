import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import SubsystemPanel from "./subsystempanel.js";
import "./subsystem.css";
import "./subsystempanel.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const subsystemDetails = [
  {
    name: "Business",
    description:
      "The Business subsystem manages sponsorships, marketing, and outreach, ensuring Rakshak's financial stability and brand recognition.",
    images: ["/images/business1.jpg", "/images/business2.jpg", "/images/business3.jpg"],
  },
  {
    name: "Software",
    description:
      "The Software subsystem develops cutting-edge algorithms for simulation, automation, and vehicle control, ensuring high performance and safety.",
    images: ["/images/software1.jpg", "/images/software2.jpg", "/images/software3.jpg"],
  },
  {
    name: "Avionics",
    description:
      "Avionics focuses on the electronic systems used in aerospace and automotive applications, handling navigation, communication, and control systems.",
    images: ["/images/avionics1.jpg", "/images/avionics2.jpg", "/images/avionics3.jpg"],
  },
  {
    name: "Aerodynamics",
    description:
      "The Aerodynamics subsystem optimizes airflow, reduces drag, and ensures maximum efficiency, improving vehicle stability and performance.",
    images: ["/images/aerodynamics1.jpg", "/images/aerodynamics2.jpg", "/images/aerodynamics3.jpg"],
  },
];

function SubsystemDetails({ refs }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeSubsystem, setActiveSubsystem] = useState(null);
  const [slideDirection, setSlideDirection] = useState("right");
  const isAnimating = useRef(false); // Track animation state
  const viewMoreRefs = useRef({}); // For tracking each button's ref
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Debounce function to prevent rapid clicks
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      if (!isAnimating.current) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
          isAnimating.current = false;
        }, wait);
        isAnimating.current = true;
      }
    };
  };

  // Open panel and set URL query param
  const openPanel = debounce((subsystem, direction) => {
    setActiveSubsystem(subsystem);
    setSlideDirection(direction);
    setPanelOpen(true);
    setSearchParams({ subsystem: subsystem.name.toLowerCase() });
  }, 400); // Match animation duration

  // Close panel
  const closePanel = () => {
    setPanelOpen(false);
    setSearchParams({}); // Remove query param
  };

  // Handle query param changes
  useEffect(() => {
    if (isAnimating.current) return; // Skip if animating

    const param = searchParams.get("subsystem");
    if (param) {
      const found = subsystemDetails.find((s) => s.name.toLowerCase() === param);
      if (found) {
        const index = subsystemDetails.indexOf(found);
        setActiveSubsystem(found);
        setSlideDirection(index % 2 === 0 ? "right" : "left"); // Respect original direction
        setPanelOpen(true);
      }
    } else {
      setPanelOpen(false);
    }
  }, [searchParams]);

  return (
    <div className="subsystem-details-section">
      <div className="particle-background"></div>
      <div className="section-separator"></div>

      {subsystemDetails.map((subsystem, index) => {
        const key = subsystem.name.toLowerCase();
        if (!viewMoreRefs.current[key]) {
          viewMoreRefs.current[key] = React.createRef();
        }

        return (
          <div
            key={index}
            ref={refs[subsystem.name.toLowerCase()]}
            className={`subsystem-details-block ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="subsystem-text">
              <h2 className="subsystem-details-name">{subsystem.name}</h2>
              <p className="subsystem-details-text">{subsystem.description}</p>
              <button
                ref={viewMoreRefs.current[key]}
                className="view-more-btn"
                onClick={() => openPanel(subsystem, index % 2 === 0 ? "right" : "left")}
              >
                View More →
              </button>
            </div>

            <div className="subsystem-carousel-container">
              <Carousel interval={3000} fade>
                {subsystem.images.map((image, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <img
                      src={image}
                      alt={`${subsystem.name} ${imgIndex + 1}`}
                      className="subsystem-carousel-image"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        );
      })}

      <SubsystemPanel
        isOpen={panelOpen}
        onClose={closePanel}
        data={activeSubsystem}
        position={slideDirection}
      />
    </div>
  );
}

export default SubsystemDetails;