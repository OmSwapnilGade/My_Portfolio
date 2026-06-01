import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full py-24 md:py-32 px-6 sm:px-8 lg:px-12 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
}
