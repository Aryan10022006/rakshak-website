import React from 'react';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import VideoConsoleSection from '../../components/VideoSection';
import ProjectsSection from '../../components/ProjectsSection';
import TeamPage from '../../components/TeamPage';
import MediaGallery from '../../components/MediaGallery';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VideoConsoleSection />
      <ProjectsSection />
      <TeamPage />
      <MediaGallery />
    </>
  );
}

export default Home; 