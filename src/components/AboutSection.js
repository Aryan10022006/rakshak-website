import React from 'react';
import { FaProjectDiagram, FaUsers, FaAward } from 'react-icons/fa';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">ABOUT US</h2>
          <p className="about-paragraph">
            Team Rakshak is a student UAV team at IIT Bombay dedicated to engineering drones for disaster relief and aerospace innovation. Through rigorous research, innovative design, and collaborative development, we create solutions that make a real impact.
          </p>
          <p className="about-paragraph">
            Our team comprises some of IIT Bombay's brightest minds in aerospace, electronics, and software engineering. Members are selected through a rigorous process and contribute significantly to the field of autonomous aerial vehicles.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            src="/images/team_24-25.jpg"
            alt="Team Rakshak"
            className="about-image"
          />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div className="stat-number">50+</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-card">
          <FaAward className="stat-icon" />
          <div className="stat-number">5+</div>
          <div className="stat-label">Awards</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
