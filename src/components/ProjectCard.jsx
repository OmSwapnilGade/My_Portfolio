import { motion } from 'motion/react';
import GlassCard from './GlassCard';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden border-gradient hover-glow">
        {/* Project Header */}
        <div
          className="p-6 md:p-8 relative overflow-hidden"
          style={{
            background: project.gradient,
          }}
        >
          <div
            className="absolute inset-0 scan-grid"
            style={{ opacity: 0.15 }}
          />

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22d3ee' }}
              />

              <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted font-mono">
                Mission #{String(index + 1).padStart(2, '0')}
              </span>

              {project.featured && (
                <span
                  className="ml-2 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: 'rgba(34, 211, 238, 0.12)',
                    color: '#22d3ee',
                    border: '1px solid rgba(34, 211, 238, 0.2)',
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col flex-1 space-y-6 text-center">
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Mission Brief
            </h4>
            <p className="text-text-secondary leading-relaxed text-sm">
              {project.brief}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Objective
            </h4>
            <p className="text-text-secondary leading-relaxed text-sm">
              {project.objective}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-3">
              Tech Stack
            </h4>

            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inner-glass px-4 py-2 rounded-xl text-sm font-medium text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto pt-6 flex gap-4">
            <a
              href={project.repoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl text-sm font-semibold text-text-primary
                         transition-all duration-300 hover:-translate-y-0.5 inner-glass"
            >
              Repository
            </a>

            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl text-sm text-white font-semibold
                         transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                boxShadow: '0 4px 20px rgba(34, 211, 238, 0.2)',
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
