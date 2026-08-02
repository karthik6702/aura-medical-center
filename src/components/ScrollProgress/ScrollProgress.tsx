import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import './ScrollProgress.css';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="scroll-progress-container">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
};
