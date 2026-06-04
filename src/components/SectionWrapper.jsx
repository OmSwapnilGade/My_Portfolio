import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function SectionWrapper({
  children,
  id,
  className = '',
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-60px',
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full py-10 md:py-14 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Distinct glass card container for each section */}
        <div className="section-glass-card">
          {children}
        </div>
      </div>
    </motion.section>
  );
}