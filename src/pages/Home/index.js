import React from 'react';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import VideoConsoleSection from '../../components/VideoSection';
import ProjectsSection from '../../components/ProjectsSection';
import TeamPage from '../../components/TeamPage';
import DroneShowcase from '../Media/index.js';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VideoConsoleSection />
      <ProjectsSection />
      <TeamPage />
      <DroneShowcase />
    </>
  );
}

export default Home; 