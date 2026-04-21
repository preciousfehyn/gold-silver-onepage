import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute bg-amber-500 rounded-full opacity-50 float pulse"
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
      }}
      animate={{
        y: [0, Math.random() * 50 - 25, 0],
        x: [0, Math.random() * 50 - 25, 0],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles}
    </div>
  );
};

export default Particles;
