import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaGallery.css';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
];

const MediaGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Auto-scroll every 5 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]); // Removed currentIndex dependency to avoid conflicts

  // Handle swipe gestures
  const handleSwipe = (e) => {
    const { deltaX } = e;
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
  };

  const handleNext = () => {
    console.log('Next button clicked, currentIndex:', currentIndex);
    setDirection(1);
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      console.log('New index (Next):', newIndex);
      return newIndex;
    });
  };

  const handlePrev = () => {
    console.log('Prev button clicked, currentIndex:', currentIndex);
    setDirection(-1);
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      console.log('New index (Prev):', newIndex);
      return newIndex;
    });
  };

  return (
    <section
      className="media-gallery-section py-4 position-relative"
      aria-labelledby="gallery-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Title */}
      <motion.h2
  id="gallery-title"
  className="display-3 fw-bold text-center mb-4 gradient-text"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  Rakshak Rewind: Glimpses from the Frontlines
</motion.h2>


      {/* Carousel */}
      <div className="container px-3">
        <motion.div
          className="d-flex justify-content-center align-items-center carousel-container"
          ref={carouselRef}
          onPanEnd={(_, info) => handleSwipe(info)}
        >
          <AnimatePresence initial={false} custom={direction}>
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + images.length) % images.length;
              const isCenter = offset === 0;
              const isNeighbor = Math.abs(offset) === 1;

              return (
                <motion.div
                  key={index}
                  className="position-absolute d-flex justify-content-center align-items-center"
                  custom={direction}
                  initial={{
                    x: offset * 350,
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                  }}
                  animate={{
                    x: offset * 350,
                    scale: isCenter ? 1 : isNeighbor ? 0.85 : 0.75,
                    opacity: isCenter ? 1 : isNeighbor ? 0.7 : 0.5,
                    filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                  }}
                  exit={{
                    x: offset * 350 + (direction > 0 ? -350 : 350),
                    scale: 0.75,
                    opacity: 0,
                    filter: 'blur(2px)',
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ zIndex: isCenter ? 10 : isNeighbor ? 5 : 1 }}
                >
                  <div
                    className={`image-frame rounded overflow-hidden ${
                      isCenter ? 'frame-highlight' : ''
                    }`}
                  >
                    <img
                      src={images[index]}
                      alt={`Gallery image ${index + 1}`}
                      className="w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                    {/* Futuristic frame overlay */}
                    <div className="futuristic-frame position-absolute top-0 start-0 w-100 h-100" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="nav-button nav-button-prev position-absolute top-50 translate-middle-y"
          aria-label="Previous image"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="nav-button nav-button-next position-absolute top-50 translate-middle-y"
          aria-label="Next image"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default MediaGallery;