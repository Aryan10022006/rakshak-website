import React from "react";
import "./subsystem.css";

const subsystemDetails = [
  {
    id: "business",
    name: "Business",
    icon: "📊",
    description: "The Business subsystem focuses on strategy, sponsorships, and branding to ensure the team's success.",
    image: "/images/business.jpg",
  },
  {
    id: "avionics",
    name: "Avionics",
    icon: "⚡",
    description: "Avionics is responsible for the electronic systems, sensors, and communications for Rakshak.",
    image: "/images/avionics.jpg",
  },
  {
    id: "software",
    name: "Software",
    icon: "💻",
    description: "Our Software team develops the essential control systems and autonomous technologies.",
    image: "/images/software.jpg",
  },
  {
    id: "aerodynamics",
    name: "Aerodynamics",
    icon: "✈️",
    description: "The Aerodynamics team optimizes the vehicle's performance with cutting-edge simulations.",
    image: "/images/aerodynamics.jpg",
  },
];

function SubsystemSection() {
  return (
    <div className="subsystem-sections">
      {subsystemDetails.map((subsystem) => (
        <div key={subsystem.id} id={subsystem.id} className="subsystem-detail">
          <h2 className="detail-title">
            {subsystem.icon} {subsystem.name}
          </h2>
          <p className="detail-description">{subsystem.description}</p>
          {subsystem.image ? (
            <img src={subsystem.image} alt={subsystem.name} className="detail-image" />
          ) : (
            <div className="image-placeholder">No Image Available</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SubsystemSection;
