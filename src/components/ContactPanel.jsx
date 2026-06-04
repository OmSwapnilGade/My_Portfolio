import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

const contacts = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/OmSwapnilGade',
    handle: '@OmSwapnilGade',
    color: '#e2e8f0',
    description: 'Source code & repositories',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/om-swapnil-gade-09b708374',
    handle: 'Om Swapnil Gade',
    color: '#0A66C2',
    description: 'Professional network',
  },
  {
    name: 'Gmail',
    icon: HiOutlineMail,
    url: 'mailto:omswapnilgadevnit@gmail.com',
    handle: 'omswapnilgadevnit@gmail.com',
    color: '#EA4335',
    description: 'Direct communication',
  },
];

export default function ContactPanel() {
  return (
    <SectionWrapper id="contact" className="section-gradient-1">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Establish Connection
        </span>
        <h2 className="text-heading gradient-text mt-3">Secure Communication Channel</h2>
        <p className="text-center mb-12">
          Open a direct transmission line
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <a
                href={contact.url}
                target={contact.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="p-7 text-center border-gradient transmission-hover cursor-pointer group h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5
                                transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${contact.color}12`,
                      boxShadow: `0 0 0 1px ${contact.color}25`,
                    }}
                  >
                    <Icon className="text-2xl" style={{ color: contact.color }} />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{contact.name}</h3>
                  <p className="text-xs text-text-muted mb-4">{contact.description}</p>

                  {/* Handle */}
                  <p className="text-sm text-text-secondary font-medium break-all">{contact.handle}</p>

                  {/* Hover Indicator */}
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <span className="text-xs tracking-wider uppercase text-accent-cyan font-semibold">
                      Open Channel →
                    </span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-16 pt-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="text-xs tracking-[0.15em] text-text-muted uppercase">
          Designed & Built by Om Swapnil Gade
        </p>
        <p className="text-[10px] mt-2 tracking-wider" style={{ color: 'rgba(100, 116, 139, 0.5)' }}>
          © {new Date().getFullYear()} — All systems operational
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
