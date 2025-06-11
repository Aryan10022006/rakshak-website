import React from 'react';
import '../../styles/competitions.css';

function Competitions() {
  return (
    <div className="competitions-page">
      <div className="competitions-banner">
        <h1 className="competitions-title">Our Competitions</h1>
        <p className="competitions-subtitle">
          Join us in our journey through various competitions where we showcase our innovation and technical excellence.
        </p>
      </div>
      <div className="container">
        <div className="competitions-content">
          <h2>Coming Soon</h2>
          <p>We are currently preparing our competition details. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
}

export default Competitions; 