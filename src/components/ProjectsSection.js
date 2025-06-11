import React from 'react';
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const projects = [
  {
    name: 'Project Alpha',
    year: '2023',
    description: 'A drone designed for rapid disaster response and search-and-rescue operations.',
  },
  {
    name: 'Project Beta',
    year: '2022',
    description: 'An autonomous UAV system for aerial mapping and surveillance.',
  },
  {
    name: 'Project Gamma',
    year: '2021',
    description: 'A lightweight drone prototype for environmental monitoring.',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="display-4 text-center mb-5 text-primary">Our Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <Card className="h-100 p-4 shadow-sm hover-shadow-lg transition">
                <h3 className="h4 mb-2 text-primary">{project.name}</h3>
                <p className="text-muted mb-2">{project.year}</p>
                <p className="mb-4">{project.description}</p>
                <Button variant="outline" className="w-100">
                  Learn More
                </Button>
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
        `}
      </style>
    </section>
  );
};

export default ProjectsSection; 