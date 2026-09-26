import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 28,
  scale = 0.98,
  blur = false,
  className = '',
}) => {
  // Detect mobile & tablet devices (< 1024px) synchronously to prevent layout shifts or animation delays
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile & tablet: crisp, lightweight, instant GPU animations without heavy filter blur or sticky margins
  const effectiveDuration = isMobileOrTablet ? 0.35 : duration;
  const effectiveDistance = isMobileOrTablet ? 14 : distance;
  const effectiveDelay = isMobileOrTablet ? Math.min(delay, 0.08) : delay;
  const effectiveScale = isMobileOrTablet ? 1 : scale;
  const effectiveMargin = isMobileOrTablet ? '0px' : '0px 0px -30px 0px';

  const getInitial = () => {
    const base: {
      opacity: number;
      scale?: number;
      x?: number;
      y?: number;
    } = {
      opacity: 0,
      scale: effectiveScale,
    };

    switch (direction) {
      case 'up':
        base.y = effectiveDistance;
        break;
      case 'down':
        base.y = -effectiveDistance;
        break;
      case 'left':
        base.x = -effectiveDistance;
        break;
      case 'right':
        base.x = effectiveDistance;
        break;
      case 'none':
      default:
        break;
    }

    return base;
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.05, margin: effectiveMargin }}
      transition={{
        duration: effectiveDuration,
        delay: effectiveDelay,
        ease: isMobileOrTablet ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
