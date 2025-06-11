import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Complete loading after text animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="loading-screen"
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
          <svg className="loading-text" viewBox="0 0 1200 200">
            {Array.from("RAKSHAK").map((letter, index) => (
              <motion.text
                key={index}
                x={150 + index * 130}
                y="150"
                className="text-path"
                initial={{ 
                  fillOpacity: 0, 
                  strokeDasharray: 500,
                  strokeDashoffset: 500
                }}
                animate={{
                  fillOpacity: 1,
                  strokeDashoffset: 0,
                  transition: {
                    fillOpacity: { 
                      delay: 2 + index * 0.1, 
                      duration: 1 
                    },
                    strokeDashoffset: { 
                      delay: index * 0.2, 
                      duration: 2, 
                      ease: "easeOut" 
                    }
                  }
                }}
              >
                {letter}
              </motion.text>
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;