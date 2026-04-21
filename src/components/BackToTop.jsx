import React from 'react';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-amber-500 text-white rounded-full p-3 shadow-lg z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </motion.button>
  );
};

export default BackToTop;
