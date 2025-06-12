import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel; 