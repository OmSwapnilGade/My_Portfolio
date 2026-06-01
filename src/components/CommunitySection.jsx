import { motion } from 'motion/react';
import { SiAcm } from 'react-icons/si';
import { HiOutlineTrophy } from 'react-icons/hi2';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

export default function CommunitySection() {
  return (
    <SectionWrapper id="community" className="section-gradient-2">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Network & Credentials
        </span>
        <h2 className="text-heading gradient-text mt-3">Community & Certifications</h2>
        <p className="text-text-secondary mt-4 max-w-md mx-auto text-base">
          Professional networks and recognized achievements
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-7 border-gradient group h-full text-center">
            <div
              className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5
                          group-hover:scale-110 transition-transform duration-300"
              style={{
                background: 'rgba(59, 130, 246, 0.12)',
                boxShadow: '0 0 0 1px rgba(59,130,246,0.25)',
              }}
            >
              <SiAcm className="text-2xl text-accent-blue" />
            </div>

            <h3 className="text-sm font-semibold text-text-muted mb-2 tracking-wide uppercase">
              Community
            </h3>

            <h4 className="font-semibold text-text-primary text-lg mb-1">
              VNIT ACM Student Chapter
            </h4>
            <p className="text-sm text-text-muted mb-5">Technical Club</p>

            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34d399' }} />
              <span className="text-xs text-text-muted">Active Member</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <GlassCard className="p-7 border-gradient group h-full text-center">
            <div
              className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5
                          group-hover:scale-110 transition-transform duration-300"
              style={{
                background: 'rgba(167, 139, 250, 0.12)',
                boxShadow: '0 0 0 1px rgba(167,139,250,0.25)',
              }}
            >
              <HiOutlineTrophy className="text-2xl text-accent-lavender" />
            </div>

            <h3 className="text-sm font-semibold text-text-muted mb-2 tracking-wide uppercase">
              Certifications
            </h3>

            <h4 className="font-semibold text-text-primary text-lg mb-1">
              Axis Hackathon 2026
            </h4>
            <p className="text-sm text-text-muted mb-5">Hackathon Participant</p>

            <div className="inner-glass rounded-xl px-4 py-3.5">
              <p className="text-xs text-text-secondary">
                Certificate will be updated soon.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
