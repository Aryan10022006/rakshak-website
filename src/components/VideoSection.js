import React from 'react';
import '../styles/VideoSection.css';

const VideoConsoleSection = () => {
  return (
    <section className="console-section">
      <h2 className="console-heading">MISSION FEED – LIVE</h2>
      
      <div className="console-frame">
        <div className="radar-sweep"></div>

        <video
          className="console-video"
          src="/images/Ares UAV Promo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="console-overlay-text">ARES UAV SYSTEM ACTIVE</div>
      </div>

      <p className="console-caption">
        Autonomous Reconnaissance Engagement System in action – captured directly from mission feed.
      </p>
    </section>
  );
};

export default VideoConsoleSection;
