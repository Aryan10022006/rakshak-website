import React from 'react';
import '../styles/AboutSection.css';

const About = () => {
  const stats = [
    {
      number: '10+',
      label: 'Years of Experience'
    },
    {
      number: '50+',
      label: 'Team Members'
    },
    {
      number: '20+',
      label: 'Awards Won'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="about-title">About Team Rakshak</h1>
            <p className="about-text">
              Team Rakshak is a student-led organization at IIT Bombay dedicated to developing
              innovative drone technology for defense applications. Our team combines expertise
              in aeronautics, electronics, and software to create cutting-edge solutions.
            </p>
            <p className="about-text">
              Founded in 2013, we have consistently pushed the boundaries of what's possible
              in unmanned aerial systems, participating in various national and international
              competitions and collaborating with industry leaders.
            </p>
          </div>
          <img 
            src="/images/about/team.jpg" 
            alt="Team Rakshak" 
            className="about-image"
          />
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 