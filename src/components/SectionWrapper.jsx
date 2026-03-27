// src/components/SectionWrapper.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Layout wrapper for every section.
 * Provides consistent padding, max-width, and fade-in-up animation on scroll.
 */
const SectionWrapper = ({ id, children, className = '', title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id={id} className={`section-padding ${className}`} ref={ref}>
      <motion.div
        className="container-max"
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        style={{ willChange: 'opacity, transform' }}
      >
        {/* Optional section title */}
        {(title || subtitle) && (
          <motion.div variants={item} className="text-center mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export { SectionWrapper };
// Also export the item variant for child components to use
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default SectionWrapper;
