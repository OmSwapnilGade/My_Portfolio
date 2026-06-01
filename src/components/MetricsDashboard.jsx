import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

const profiles = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    color: '#FFA116',
    url: '#',
    description: 'Problem solving & DSA practice',
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    color: '#5B4638',
    url: '#',
    description: 'Competitive programming contests',
  },
  {
    name: 'Codolio',
    icon: null,
    color: '#818cf8',
    url: '#',
    description: 'Coding portfolio & analytics',
  },
];

export default function MetricsDashboard() {
  return (
    <SectionWrapper id="metrics" className="section-gradient-2">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Performance Analytics
        </span>
        <h2 className="text-heading gradient-text mt-3">Problem-Solving Database</h2>
        <p className="text-text-secondary mt-4 max-w-md mx-auto text-base">
          Competitive programming profiles and practice metrics
        </p>
      </motion.div>

      {/* Profile Cards */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {profiles.map((profile, i) => {
          const Icon = profile.icon;
          return (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <GlassCard className="p-7 text-center border-gradient group">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5
                              transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${profile.color}15`,
                    boxShadow: `0 0 0 1px ${profile.color}25`,
                  }}
                >
                  {Icon ? (
                    <Icon className="text-2xl" style={{ color: profile.color }} />
                  ) : (
                    <span
                      className="text-xl font-bold"
                      style={{ color: profile.color }}
                    >
                      Co
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-text-primary mb-1">{profile.name}</h3>
                <p className="text-xs text-text-muted mb-6">{profile.description}</p>

                {/* Profile Button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                             inner-glass text-text-primary transition-all duration-300
                             hover:-translate-y-0.5"
                >
                  View Profile
                  <HiOutlineExternalLink className="text-sm" style={{ opacity: 0.5 }} />
                </a>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
