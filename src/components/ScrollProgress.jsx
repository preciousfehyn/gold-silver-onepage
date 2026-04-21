import React from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-1 bg-amber-500 origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;
