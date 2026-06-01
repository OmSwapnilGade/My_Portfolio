import { motion } from 'motion/react';
import GlassCard from './GlassCard';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <GlassCard className="p-0 overflow-hidden group border-gradient">
        {/* Project Header */}
        <div
          className="p-7 md:p-9 relative overflow-hidden"
          style={{
            background: project.gradient,
          }}
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 scan-grid" style={{ opacity: 0.3 }} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted font-mono">
                Mission #{String(index + 1).padStart(2, '0')}
              </span>
              {project.featured && (
                <span
                  className="ml-auto text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: 'rgba(34, 211, 238, 0.15)',
                    color: '#3b82f6',
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-7 md:p-9 space-y-6">
          {/* Mission Brief */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Mission Brief
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">{project.brief}</p>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Objective
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">{project.objective}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="glass-subtle px-3.5 py-1.5 rounded-lg text-xs font-medium text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-3">
            <a
              href={project.repoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl text-sm font-semibold 
                         glass text-text-primary transition-all duration-300
                         hover:-translate-y-0.5"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.background = ''}
            >
              Repository
            </a>
            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl text-sm font-semibold text-white
                         transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                boxShadow: '0 4px 15px rgba(34, 211, 238, 0.2)',
              }}
            >
              Live Demo
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
