import React from 'react';
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Team Lead',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'Software Engineer',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Mike Johnson',
    role: 'Hardware Engineer',
    linkedin: 'https://linkedin.com/in/mikejohnson',
  },
];

const TeamSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="display-4 text-center mb-5 text-primary">Our Team</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <Card className="h-100 p-4 text-center shadow-sm hover-shadow-lg transition">
                <h3 className="h4 mb-2 text-primary">{member.name}</h3>
                <p className="text-muted mb-3">{member.role}</p>
                <div className="team-info opacity-0 transition-opacity">
                  <Button variant="link" asChild>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .hover-shadow-lg {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-shadow-lg:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
          }
          .hover-shadow-lg:hover .team-info {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default TeamSection; 