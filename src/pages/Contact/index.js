import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import './Contact.css';

// Placeholder for hover audio ping, remember to provide the actual file
const pingSound = new Audio('/audio/ping.mp3');

function ContactUs() {
  const [introComplete, setIntroComplete] = useState(false);
  const buttonRef = useRef(null);
  const formInputRefs = useRef([]);
  const socialLinkRefs = useRef([]);

  // Function for hover audio pings
  const playPing = () => {
    pingSound.currentTime = 0; // Rewind to start
    pingSound.play().catch(e => console.error("Error playing audio:", e));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simplified ripple effect for the button (CSS handles most of it now)
  const createRipple = (event) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple-effect");

    button.appendChild(circle);

    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  };

  return (
    <div className="contact-page-command-center">
      {!introComplete && (
        <div className="intro-animation-overlay">
          <p className="intro-text">
            <i className="bi bi-arrow-repeat"></i> CONNECTING TO RAKSHAK HQ...
          </p>
          <p className="intro-text fade-in-delay">
            <i className="bi bi-check-circle"></i> CHANNEL OPENED. YOU MAY NOW TRANSMIT.
          </p>
        </div>
      )}

      {introComplete && (
        <div className="main-content-fade-in">
          <h1 className="page-title-command">
            <img src="/images/rakshak_drone_icon.png" alt="Rakshak Drone" className="drone-logo" /> CONTACT US
          </h1>

          <div className="command-center-grid">
            {/* Left Panel: Contact Form */}
            <Card className="contact-form-terminal">
              <div className="form-terminal-layout">
                <div className="form-group-terminal">
                  <label htmlFor="name">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="" 
                    className="input-terminal" 
                    ref={el => formInputRefs.current[0] = el} 
                    onMouseEnter={playPing} 
                  />
                </div>
                <div className="form-group-terminal">
                  <label htmlFor="email">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="" 
                    className="input-terminal" 
                    ref={el => formInputRefs.current[1] = el} 
                    onMouseEnter={playPing} 
                  />
                </div>
                <div className="form-group-terminal">
                  <label htmlFor="message">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="" 
                    rows={6} 
                    className="input-terminal textarea-terminal" 
                    ref={el => formInputRefs.current[2] = el} 
                    onMouseEnter={playPing} 
                  />
                </div>
                <div className="form-group-terminal">
                  <label htmlFor="purpose">
                    Purpose
                  </label>
                  <Input 
                    id="purpose" 
                    placeholder="" 
                    className="input-terminal" 
                    ref={el => formInputRefs.current[3] = el} 
                    onMouseEnter={playPing} 
                  />
                </div>
                
                <Button 
                  className="button-terminal" 
                  ref={buttonRef} 
                  onClick={createRipple} 
                  onMouseEnter={playPing}
                >
                  SEND
                </Button>
              </div>
            </Card>

            {/* Right Panel: Contact Information */}
            <div className="static-content-panel">
              <h2 className="panel-heading">
                CONTACT INFORMATION
              </h2>
              <div className="quick-contact-channels">
                <Card className="contact-channel-card" onMouseEnter={playPing}>
                  <i className="bi bi-envelope-fill channel-icon"></i>
                  <div>
                    <span>team.rakshak@iitb.ac.in</span>
                  </div>
                </Card>
                <Card className="contact-channel-card" onMouseEnter={playPing}>
                  <i className="bi bi-geo-alt-fill channel-icon"></i>
                  <div>
                    <span>IIT Bombay, Powai, Mumbai 400076</span>
                  </div>
                </Card>
                <Card className="contact-channel-card" onMouseEnter={playPing}>
                  <i className="bi bi-twitter channel-icon"></i>
                  <div>
                    <span>twitter team.rakshak</span>
                  </div>
                </Card>
                <Card className="contact-channel-card" onMouseEnter={playPing}>
                  <i className="bi bi-linkedin channel-icon"></i>
                  <div>
                    <span>in team.rakshak</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Remove AI Chat section for now to match image */}
          {/* <div className="rakshak-ai-chat">
            <div className="ai-avatar">
              <i className="bi bi-cpu"></i>
            </div>
            <p className="ai-status">
              <i className="bi bi-circle-fill"></i> RAKSHAK-AI Online
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ContactUs;
