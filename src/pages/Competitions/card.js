import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./drone.css";

const CompetitionCard = ({ competition, index, active, onVisible }) => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isInView && onVisible) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <section ref={ref} className={styles.competitionSection}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={{
          opacity: active ? 1 : 0.7,
          x: 0,
          scale: active ? 1.05 : 1
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
      >
        <div className={styles.glassCard}>
          <div className={styles.competitionHeader}>
            <div className={styles.competitionNumber} style={{ color: competition.color }}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className={styles.competitionDate}>{competition.date}</div>
          </div>
          <h2 className={styles.competitionTitle} style={{ color: competition.color }}>
            {competition.title}
          </h2>
          <p className={styles.competitionDetails}>{competition.details}</p>
          <div className={styles.techStack}>
            {competition.tech.split("·").map((tech, i) => (
              <span key={i} className={styles.techBadge}>
                {tech.trim()}
              </span>
            ))}
          </div>
          {competition.image && (
            <img
              src={competition.image}
              alt={competition.title}
              className={styles.competitionImage}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CompetitionCard;
