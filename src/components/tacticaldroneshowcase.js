import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './done.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/images/sandy.jpg',
  '/images/ares.jpg',
  '/images/image.jpg',
  '/images/sae-plane.jpg',
];

const DroneWaveParallax = () => {
  const containerRef = useRef();
  const wrappersRef = useRef([]);

  useEffect(() => {
    const wrappers = wrappersRef.current;

    // Wave scatter stage
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: '+=200%',
        scrub: 1,
        pin: true,
      }
    });

    wrappers.forEach((el, i) => {
      const offset = (i - wrappers.length / 2) * 200;
      tl.fromTo(el, {
        x: offset + Math.random() * 100 - 50,
        y: -200 + Math.random() * 150,
        z: -200 + Math.random() * 200,
        opacity: 0,
        rotationX: 30 + Math.random() * 20,
        rotationY: -20 + Math.random() * 40
      }, {
        x: (i - wrappers.length / 2) * 300,
        y: 0,
        z: 0,
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 1
      }, 0);
    });

    // Horizontal scroll stage
    tl.to(wrappers, {
      x: (_, i) => `-${(images.length - 1) * 300}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=50%',
        end: '+=200%',
        scrub: 1,
      }
    }, '-=0.5');

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="wave-gallery" ref={containerRef}>
      <h2>Mission Data Gallery</h2>
      <div className="wave-wrapper">
        {images.map((src, i) => (
          <div key={i}
               className="wave-item"
               ref={el => wrappersRef.current[i] = el}>
            <img src={src} alt={`Drone ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DroneWaveParallax;
