import React, { useEffect, useRef, useState, useMemo } from 'react';
import '../styles/plane.css';

const planesData = [
  {
    year: '2018',
    name: 'Rakshak Falcon',
    description:
      'Our first prototype UAV focused on basic autonomous flight and stability in varying weather conditions.',
    image: '/images/sae-plane.jpg', // Using an actual image
  },
  {
    year: '2019',
    name: 'Rakshak Hawk',
    description:
      'Improved design with better aerodynamics and extended flight time for longer missions.',
    image: '/images/skywalker-800x533.jpg', // Using an actual image
  },
  {
    year: '2020',
    name: 'Rakshak Eagle',
    description:
      'Equipped with advanced sensors for search and rescue operations, integrating obstacle avoidance.',
    image: '/images/back-drone.jpg', // Using an actual image
  },
  {
    year: '2021',
    name: 'Rakshak Vulture',
    description:
      'Heavy-lift UAV capable of carrying payloads for disaster relief and medical supply drops.',
    image: '/images/Ares.jpg', // Using an actual image
  },
  {
    year: '2022',
    name: 'Rakshak Condor',
    description:
      'High-endurance UAV with satellite connectivity for real-time remote monitoring and control.',
    image: '/images/team_24-25.jpg', // Using an actual image
  },
  // Add more planes as needed...
];

const PlaneTimeline = () => {
  const containerRef = useRef(null);
  const fillLineRef = useRef(null);
  const timelineLineWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionsRef = useRef([]);
  const dotsRef = useRef([]);

  const heroIcons = [
    {
      icon: "fa-solid fa-rocket",
      title: "Innovation",
      description: "Pushing boundaries in UAV technology"
    },
    {
      icon: "fa-solid fa-microchip",
      title: "Technology",
      description: "Advanced systems and solutions"
    },
    {
      icon: "fa-solid fa-users",
      title: "Teamwork",
      description: "Collaborative excellence"
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Research",
      description: "Continuous development"
    },
    {
      icon: "fa-solid fa-trophy",
      title: "Excellence",
      description: "Award-winning achievements"
    }
  ];

  const allSections = useMemo(() => [
    {
      year: '2015',
      name: 'Rakshak Genesis',
      description: 'The beginning of our journey, where the vision for Rakshak UAVs was born. Our team came together with a shared passion for aerial innovation and a commitment to excellence.',
      isHero: true
    },
    ...planesData
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !fillLineRef.current || !timelineLineWrapperRef.current) return;

      const timelineLineWrapper = timelineLineWrapperRef.current;
      const fillLine = fillLineRef.current;

      const timelineLineWrapperRect = timelineLineWrapper.getBoundingClientRect();
      const timelineLineWrapperHeight = timelineLineWrapperRect.height;
      const timelineLineWrapperTop = timelineLineWrapperRect.top;

      let newActiveIndex = -1;
      let currentFillHeight = 0;

      const viewportCenter = window.innerHeight / 2;
      let minDistanceToCenter = Infinity;

      // Get the last section's position
      const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
      const lastSectionRect = lastSection?.getBoundingClientRect();
      const lastSectionBottom = lastSectionRect?.bottom || 0;
      const footerHeight = 100; // Approximate footer height

      // Find the active section and calculate progress
      sectionsRef.current.forEach((section, i) => {
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const sectionTop = sectionRect.top;
          const sectionCenter = sectionRect.top + sectionRect.height / 2;

          // Check if section is active (center is near viewport center)
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (distance < minDistanceToCenter) {
            minDistanceToCenter = distance;
            newActiveIndex = i;
          }

          // Update dot position
          if (dotsRef.current[i]) {
            const dot = dotsRef.current[i];
            const dotTop = sectionTop - timelineLineWrapperTop;
            
            // Calculate progress within the section with padding
            const sectionHeight = sectionRect.height;
            const padding = 100; // Padding to prevent intersection
            const adjustedHeight = sectionHeight - (padding * 2);
            
            let sectionProgress = Math.min(
              1,
              Math.max(
                0,
                (viewportCenter - (sectionTop + padding)) / adjustedHeight
              )
            );

            // Ensure progress stays within bounds
            sectionProgress = Math.max(0, Math.min(1, sectionProgress));

            // Update dot position based on section progress with padding
            const dotPosition = dotTop + padding + (adjustedHeight * sectionProgress);
            dot.style.top = `${dotPosition}px`;

            // Update active state
            if (i === newActiveIndex) {
              dot.classList.add('active');
              // Only update fill height if we're not at the last section
              if (i < allSections.length - 1) {
                currentFillHeight = dotPosition;
              } else {
                // For the last section, stop the fill at the dot's position
                currentFillHeight = Math.min(dotPosition, timelineLineWrapperHeight);
              }
            } else {
              dot.classList.remove('active');
            }
          }
        }
      });

      // Update fill line height
      fillLine.style.height = `${currentFillHeight}px`;
      setActiveIndex(newActiveIndex);

      // Hide timeline if we're near the footer
      if (lastSectionBottom < footerHeight) {
        timelineLineWrapper.style.opacity = '0';
      } else {
        timelineLineWrapper.style.opacity = '1';
      }
    };

    // Initial setup of dot positions
    const setupDotPositions = () => {
      sectionsRef.current.forEach((section, i) => {
        if (section && dotsRef.current[i]) {
          const sectionRect = section.getBoundingClientRect();
          const dot = dotsRef.current[i];
          const dotTop = sectionRect.top - timelineLineWrapperRef.current.getBoundingClientRect().top;
          dot.style.top = `${dotTop}px`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial call to set positions on component mount
    setupDotPositions();
    handleScroll();

    // Store refs in variables for cleanup
    const currentContainerRef = containerRef.current;

    // Re-run handleScroll if the container's dimensions change
    const resizeObserver = new ResizeObserver(() => {
      setupDotPositions();
      handleScroll();
    });
    if (currentContainerRef) {
      resizeObserver.observe(currentContainerRef);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (currentContainerRef) {
        resizeObserver.unobserve(currentContainerRef);
      }
    };
  }, [allSections]);

  return (
    <>
      <section className="timeline-section">
        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-content-container">
            {allSections.map((section, i) => (
              <div
                key={section.year}
                className="timeline-section-content"
                ref={(el) => (sectionsRef.current[i] = el)}
              >
                {section.isHero ? (
                  <div className="hero-content">
                    <h1 className="hero-title">Our Journey Through Innovation</h1>
                    <p className="hero-subtitle">
                      From our first prototype to our latest advancements, explore the evolution of our UAV technology
                      and the milestones that shaped our journey in aerial innovation.
                    </p>
                    <div className="hero-planes">
                      {heroIcons.map((item, i) => (
                        <div key={i} className="hero-plane">
                          <i className={item.icon}></i>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <article
                    className={`timeline-item ${i === activeIndex ? 'active' : ''}`}
                    data-year={section.year}
                    tabIndex={0}
                    aria-label={`Plane ${section.name} from year ${section.year}`}
                  >
                    <h3>{section.name} ({section.year})</h3>
                    <p>{section.description}</p>
                    {section.image && (
                      <img src={section.image} alt={section.name} />
                    )}
                  </article>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-line-wrapper" ref={timelineLineWrapperRef}>
          <div className="timeline-line-fill" ref={fillLineRef}></div>
          <div className="timeline-dots">
            {allSections.map((section, i) => (
              <div
                key={section.year}
                className={`timeline-dot${i === activeIndex ? ' active' : ''}`}
                ref={(el) => (dotsRef.current[i] = el)}
              >
                <span className="timeline-year">{section.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaneTimeline;
