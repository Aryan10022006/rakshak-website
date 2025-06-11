import React, { useEffect, useState } from "react";
import "./subsystempanel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const droneImage = "/images/drone.jpg";

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
      {/* Hero / Banner */}
      <div className="banner-section text-center py-5">
        <button className="btn btn-outline-light back-button" onClick={onClose}>
          <i className="bi bi-arrow-left me-2"></i> Back to Subsystems
        </button>
        <h1 className="display-5 fw-bold">{data.name || "Subsystem"}</h1>
      </div>

      {/* Particle Background Layer */}
      <div className="particle-icon-background"></div>

      {/* Content */}
      <div className="container panel-content py-5 position-relative">
        {/* Hero Image */}
        <div className="hero-image mb-4">
          <img
            src={data.images?.[0] || "/images/sandy.jpg"}
            alt="Hero"
            className="img-fluid rounded shadow"
          />
        </div>
<div className="flex-section">
        {/* Description */}
        <section className="info-card">
          <h2><i className="bi bi-info-circle me-2"></i>Description</h2>
          <p>{data.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
        </section>

        {/* Capabilities */}
        <section className="info-card">
          <h2><i className="bi bi-lightning-charge-fill me-2"></i>Capabilities</h2>
          <ul className="list-unstyled">
            {(data.features || ["Autonomous Navigation", "Obstacle Detection"]).map((feature, idx) => (
              <li key={idx}>
                <i className="bi bi-check-circle-fill text-success me-2"></i>{feature}
              </li>
            ))}
          </ul>
        </section>
</div>
        {/* Gallery */}
        <section className="info-card">
          <h2><i className="bi bi-images me-2"></i>Gallery</h2>
          <div className="row g-3">
            {(data.images || [droneImage, droneImage]).map((img, idx) => (
              <div key={idx} className="col-md-4 col-sm-6">
                <div className="gallery-image rounded shadow-sm">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="info-card">
          <h2><i className="bi bi-gear-wide-connected me-2"></i>Technical Specifications</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-primary">Hardware</h5>
              <ul className="list-unstyled">
                {(data.hardware || ["GPS", "IMU"]).map((item, idx) => (
                  <li key={idx}><i className="bi bi-cpu me-2"></i>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary">Software</h5>
              <ul className="list-unstyled">
                {(data.software || ["Firmware", "Path Planning"]).map((item, idx) => (
                  <li key={idx}><i className="bi bi-code-slash me-2"></i>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Undo Button */}
        <div className="text-center my-4">
          <button className="btn btn-outline-secondary px-4 py-2" onClick={onClose}>
            <i className="bi bi-arrow-counterclockwise me-2"></i>Undo
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubsystemPanel;
