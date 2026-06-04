import { motion } from 'motion/react';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

const metadata = [
  { label: 'Status', value: 'Active Developer' },
  { label: 'Year', value: '2nd Year Engineering' },
  { label: 'Institute', value: 'VNIT Nagpur' },
  { label: 'Focus', value: 'Web Dev & Problem Solving' },
];

export default function AboutCard() {
  return (
    <SectionWrapper id="about" className="section-gradient-1">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // System Access Granted
        </span>

        <h2 className="text-heading gradient-text mt-3">
          Profile Unlocked
        </h2>
      </motion.div>

      {/* Bio Content — Center Justified */}
      <div className="text-center mb-12">
        <motion.p
          className="text-text-secondary leading-relaxed text-sm md:text-base mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Code, curiosity, and consistency define my journey. I'm a
          second-year engineering student passionate about building
          solutions that blend logic with creativity. My foundation
          in C++ and problem solving has shaped the way I approach
          challenges — breaking complex problems into structured
          solutions and learning through every iteration.
        </motion.p>

        <motion.p
          className="text-text-secondary leading-relaxed text-sm md:text-base mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Now, I'm channeling that problem-solving mindset into
          development. I enjoy transforming ideas into working
          solutions while constantly pushing myself to learn, build,
          and improve. Currently, I'm exploring web development and
          creating projects that combine logic, creativity, and
          real-world impact.
        </motion.p>

        <motion.p
          className="text-text-secondary leading-relaxed text-sm md:text-base mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I believe growth happens by building — one project, one
          bug, and one breakthrough at a time.
        </motion.p>

        {/* Quote */}
        <motion.div
          className="inline-block text-center py-4 px-8 rounded-xl"
          style={{
            background: 'rgba(34, 211, 238, 0.04)',
            border: '1px solid rgba(34, 211, 238, 0.12)',
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-text-primary font-medium italic text-sm md:text-base">
            "Every line of code I write is part of a larger mission:
            to keep learning, keep building, and create things that
            matter."
          </p>
        </motion.div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {metadata.map((item, i) => (
          <motion.div
            key={item.label}
            className="inner-glass rounded-xl px-4 py-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <p className="text-[10px] tracking-[0.15em] uppercase text-text-muted mb-2">
              {item.label}
            </p>

            <p className="text-sm font-medium text-text-primary">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <motion.span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: '#34d399' }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <span className="text-xs text-text-muted tracking-wide">
          Online & Available
        </span>
      </div>
    </SectionWrapper>
  );
}
