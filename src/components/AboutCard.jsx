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
        className="text-center mb-16"
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

      <GlassCard
        className="w-full p-10 md:p-14 border-gradient"
        hover={false}
      >
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
          {/* Main Bio */}
          <div className="space-y-6 pr-8 lg:pr-12">
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Code, curiosity, and consistency define my journey. I’m a
              second-year engineering student passionate about building
              solutions that blend logic with creativity. My foundation
              in C++ and problem solving has shaped the way I approach
              challenges — breaking complex problems into structured
              solutions and learning through every iteration.
            </p>

            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Now, I’m channeling that problem-solving mindset into
              development. I enjoy transforming ideas into working
              solutions while constantly pushing myself to learn, build,
              and improve. Currently, I’m exploring web development and
              creating projects that combine logic, creativity, and
              real-world impact.
            </p>

            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              I believe growth happens by building — one project, one
              bug, and one breakthrough at a time.
            </p>

            <p
              className="text-text-primary font-medium italic mt-8 pl-5"
              style={{
                borderLeft: '2px solid rgba(34, 211, 238, 0.4)',
              }}
            >
              Every line of code I write is part of a larger mission:
              to keep learning, keep building, and create things that
              matter.
            </p>
          </div>

          {/* Metadata Panel */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-text-muted font-semibold mb-5">
              Profile Metadata
            </h3>

            {metadata.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-subtle rounded-xl px-4 py-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <p className="text-[10px] tracking-[0.15em] uppercase text-text-muted mb-1">
                  {item.label}
                </p>

                <p className="text-sm font-medium text-text-primary">
                  {item.value}
                </p>
              </motion.div>
            ))}

            {/* Status Indicator */}
            <div className="flex items-center gap-2 pt-4">
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-green-400"
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
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
