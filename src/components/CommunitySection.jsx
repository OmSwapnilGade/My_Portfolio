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
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Network & Credentials
        </span>
        <h2 className="text-heading gradient-text mt-3">Community & Certifications</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-text-primary mb-5 tracking-wide uppercase">
            Community
          </h3>
          <GlassCard className="p-7 border-gradient group">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.2)',
                }}
              >
                <SiAcm className="text-2xl text-accent-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">VNIT ACM Student Chapter</h4>
                <p className="text-sm text-text-muted">Technical Club</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
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
          <h3 className="text-sm font-semibold text-text-primary mb-5 tracking-wide uppercase">
            Certifications
          </h3>
          <GlassCard className="p-7 border-gradient group">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'rgba(167, 139, 250, 0.1)',
                  boxShadow: '0 0 0 1px rgba(167,139,250,0.2)',
                }}
              >
                <HiOutlineTrophy className="text-2xl text-accent-lavender" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Axis Hackathon 2026</h4>
                <p className="text-sm text-text-muted">Hackathon Participant</p>
              </div>
            </div>
            <div className="mt-5 glass-subtle rounded-xl px-4 py-3.5">
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
