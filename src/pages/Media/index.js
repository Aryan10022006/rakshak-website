// DroneShowcase.jsx

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import './MediaGallery.css'
// DroneShowcase3DCarousel.jsx

const slides = [
  {
    title: "Rakshak-X UAV",
    image: "/images/rakshak-x.png",
    description:
      "Next-gen autonomous surveillance drone with advanced AI flight control.",
    features: [
      "AI Autonomy",
      "Stealth Mode",
      "Extended Flight Time",
      "Swarm Communication",
    ],
  },
  {
    title: "Drone Swarm Operation",
    image: "/images/drone-swarm.png",
    description:
      "Coordinated multi-UAV missions enabling high-area coverage and real-time data.",
    features: ["Swarm Intelligence", "Mesh Networking", "Real-time Telemetry"],
  },
  {
    title: "Ground Control Station",
    image: "/images/control-station.png",
    description:
      "Cutting-edge HUD with augmented reality overlays for precise UAV command.",
    features: ["AR HUD", "Gesture Controls", "Live 3D Mapping"],
  },
  {
    title: "Stealth Recon Drone",
    image: "/images/stealth-drone.png",
    description:
      "Low-noise UAV with advanced stealth coatings for covert operations.",
    features: ["Silent Propulsion", "Thermal Camouflage", "Encrypted Communication"],
  },
];

export default function DroneShowcase3DCarousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  function nextSlide() {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }

  // Calculate transform styles for each slide for 3D coverflow effect
  function getSlideStyle(index) {
    const offset = index - current;
    const absOffset = Math.abs(offset);
    const baseTranslateX = 60; // horizontal spacing

    // Center slide scaling and zIndex highest
    if (offset === 0) {
      return {
        transform: `translateX(0) translateZ(100px) scale(1.1)`,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
      };
    }

    // Left slides
    if (offset < 0) {
      return {
        transform: `translateX(${offset * baseTranslateX}px) rotateY(25deg) translateZ(${
          100 - absOffset * 50
        }px) scale(${1 - absOffset * 0.15})`,
        zIndex: 10 - absOffset,
        opacity: 0.7,
        pointerEvents: "none",
      };
    }

    // Right slides
    if (offset > 0) {
      return {
        transform: `translateX(${offset * baseTranslateX}px) rotateY(-25deg) translateZ(${
          100 - absOffset * 50
        }px) scale(${1 - absOffset * 0.15})`,
        zIndex: 10 - absOffset,
        opacity: 0.7,
        pointerEvents: "none",
      };
    }
  }

  return (
    <div className="carousel-3d-wrapper">
      <button
        className="nav-btn left"
        onClick={prevSlide}
        aria-label="Previous Slide"
        type="button"
      >
        ‹
      </button>
      <div className="carousel-3d-container" role="list">
        {slides.map((slide, i) => (
          <article
            key={i}
            className={`carousel-slide-3d ${i === current ? "active" : ""}`}
            style={getSlideStyle(i)}
            aria-hidden={i !== current}
            role="listitem"
          >
            <div className="slide-image-wrapper">
              <img src={slide.image} alt={slide.title} />
            </div>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <ul className="features-list-3d">
              {slide.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <button
        className="nav-btn right"
        onClick={nextSlide}
        aria-label="Next Slide"
        type="button"
      >
        ›
      </button>
    </div>
  );
}
