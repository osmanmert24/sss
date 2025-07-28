import { motion } from 'framer-motion';

const PageTransition = ({ children, variant = 'slide' }) => {
  // Slide animation (default)
  const slideVariants = {
    initial: {
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: -100,
      scale: 0.95,
    }
  };

  // Fade animation
  const fadeVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    }
  };

  // Scale animation
  const scaleVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      scale: 1.1,
      y: -50,
    }
  };

  // Rotation animation
  const rotateVariants = {
    initial: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
    },
    in: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      rotateY: -90,
      scale: 0.8,
    }
  };

  const getVariants = () => {
    switch (variant) {
      case 'fade': return fadeVariants;
      case 'scale': return scaleVariants;
      case 'rotate': return rotateVariants;
      default: return slideVariants;
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth motion
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={getVariants()}
      transition={pageTransition}
      className="w-full min-h-screen"
      style={{
        // Ensure smooth rendering
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 