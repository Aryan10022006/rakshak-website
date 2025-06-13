import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import ImageCarousel from './pages/Media';
import Planes from './pages/Planes';
import TacticalDroneShowcase from './components/tacticaldroneshowcase';
import Competitions from './pages/Competitions';
import Contact from './pages/Contact';
import Subsystem from './pages/subsystems/subsystem'; 

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Navbar />
      <div className="App">
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drone" element={<TacticalDroneShowcase />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subsystems" element={<Subsystem />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
