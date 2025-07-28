import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

const RouteTransition = ({ children }) => {
  const location = useLocation();

  // Farklı route'lar için farklı animasyonlar
  const getAnimationVariant = (pathname) => {
    if (pathname.includes('/auth/login')) return 'rotate';
    if (pathname.includes('/auth/register')) return 'slide';
    if (pathname.includes('/login')) return 'rotate';
    if (pathname.includes('/register')) return 'slide';
    if (pathname.includes('/category')) return 'scale';
    return 'fade'; // default for home and others
  };

  const getPageVariants = (variant) => {
    const variants = {
      slide: {
        initial: { opacity: 0, x: 100, scale: 0.95 },
        in: { opacity: 1, x: 0, scale: 1 },
        out: { opacity: 0, x: -100, scale: 0.95 }
      },
      fade: {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
      },
      scale: {
        initial: { opacity: 0, scale: 0.9, y: 50 },
        in: { opacity: 1, scale: 1, y: 0 },
        out: { opacity: 0, scale: 1.1, y: -50 }
      },
      rotate: {
        initial: { opacity: 0, rotateY: 90, scale: 0.8 },
        in: { opacity: 1, rotateY: 0, scale: 1 },
        out: { opacity: 0, rotateY: -90, scale: 0.8 }
      }
    };
    return variants[variant] || variants.fade;
  };

  const variant = getAnimationVariant(location.pathname);
  const pageVariants = getPageVariants(variant);

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.5
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
        style={{
          backfaceVisibility: 'hidden',
          perspective: 1000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteTransition; 