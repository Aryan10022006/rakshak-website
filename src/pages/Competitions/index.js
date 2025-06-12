import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Sky, Cloud, useScroll } from "@react-three/drei";
import { motion } from "framer-motion";
import DroneModel from "./dronemodel";
import CompetitionCard from "./card";
import styles from "./drone.css";

// Example competition data
const competitions = [
  {
    id: 1,
    title: "World Drone Prix 2023",
    color: "#2ecc71",
    details: "Secured 1st place in autonomous navigation challenge with real-time obstacle avoidance.",
    tech: "React Three Fiber · TensorFlow.js · WebGL",
    date: "March 2023",
    image: "/images/competition-1.png"
  },
  {
    id: 2,
    title: "AI Flight Challenge 2024",
    color: "#f39c12",
    details: "Developed real-time multi-object tracking for drone racing.",
    tech: "Three.js · WebRTC · Node.js",
    date: "June 2024",
    image: "/images/competition-2.png"
  }
];

const DroneJourneyPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef();

  return (
    <div className={styles.droneJourneyRoot}>
      {/* 3D Canvas */}
      <div className={styles.canvasWrapper}>
        <Canvas>
          <color attach="background" args={["#050505"]} />
          <ambientLight intensity={0.3} color="#1c9cf5" />
          <pointLight position={[10, 10, 10]} color="#1c9cf5" intensity={0.8} />
          <directionalLight position={[-5, 5, 5]} color="#2ecc71" intensity={0.4} />
          <ScrollControls pages={competitions.length + 1} damping={0.2}>
            <DroneModel activeSection={activeSection} />
            <Sky sunPosition={[100, 20, 100]} />
            <Cloud position={[-4, -2, -25]} opacity={0.4} />
            <Cloud position={[4, -1, -30]} opacity={0.3} />
          </ScrollControls>
        </Canvas>
      </div>

      {/* Overlay Scroll Content */}
      <div className={styles.scrollContent} ref={scrollRef}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.glassCard}
          >
            <h1 className={styles.title}>UAV Competition Journey</h1>
            <p className={styles.subtitle}>
              Exploring the future of autonomous flight through cutting-edge technology and innovation.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>React Three Fiber</span>
              <span className={styles.badge}>WebGL</span>
              <span className={styles.badge}>AI Integration</span>
            </div>
          </motion.div>
        </section>
        {/* Competition Sections */}
        {competitions.map((competition, index) => (
          <CompetitionCard
            key={competition.id}
            competition={competition}
            index={index}
            active={activeSection === index + 1}
            onVisible={() => setActiveSection(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default DroneJourneyPage;
