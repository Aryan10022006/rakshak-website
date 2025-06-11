import React from "react";
import { motion } from "framer-motion";
import "./team.css";

const teamLeadsData = {
  allteamlead: [
    {
      name: "Jahnvee Tailor",
      role: "Team Captain",
      image: "/images/2425Lead1.jpg",
      email: "jahnvee@teamrakshak.com",
      description: "Leading Team Rakshak with innovation and excellence.",
      linkedin: "https://linkedin.com/in/jahnvee",
    },
    {
      name: "Jahnvee Tailor",
      role: "Team Captain",
      image: "/images/2425Lead1.jpg",
      email: "jahnvee@teamrakshak.com",
      description: "Leading Team Rakshak with innovation and excellence.",
      linkedin: "https://linkedin.com/in/jahnvee",
    }
    // ... (other leads)
  ],
  // ... subsystem-specific leads
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function TeamLead({ selectedSubsystem }) {
  const leads = teamLeadsData[selectedSubsystem] || [];
  return (
    <motion.div
      className="team-grid"
      variants={containerVariants}
      initial="hidden"
      animate={leads.length > 0 ? "show" : undefined}
    >
      {leads.length > 0 ? (
        leads.map((lead) => (
          <motion.div
            key={lead.email}
            className="flip-card"
            variants={cardVariants}
          >
            <div className="flip-card-inner" tabIndex="0">
              <div className="flip-card-front" aria-hidden="false">
                <img src={lead.image} alt={lead.name} />
                <div className="front-content">
                  <h3>{lead.name}</h3>
                  <p className="role">{lead.role}</p>
                </div>
              </div>
              <div className="flip-card-back" aria-hidden="true">
                <h3>{lead.name}</h3>
                <p className="role">{lead.role}</p>
                <p className="description">{lead.description}</p>
                <div className="contact-links">
                  <a href={`mailto:${lead.email}`} className="email-link">📩 Email</a>
                  <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">🔗 LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.p
          className="no-team"
          variants={cardVariants}
        >
          Team members for this division will be updated soon.
        </motion.p>
      )}
    </motion.div>
  );
}

export default TeamLead;
