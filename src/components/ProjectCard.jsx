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
          className="p-8 md:p-10 relative overflow-hidden"
          style={{
            background: project.gradient,
          }}
        >
          <div
            className="absolute inset-0 scan-grid"
            style={{ opacity: 0.22 }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
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

            <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10 flex flex-col flex-1 space-y-7">
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Mission Brief
            </h4>
            <p className="text-text-secondary leading-relaxed">
              {project.brief}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
              Objective
            </h4>
            <p className="text-text-secondary leading-relaxed">
              {project.objective}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-3">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="glass-subtle px-4 py-2 rounded-xl text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto pt-8 flex gap-4">
            <a
              href={project.repoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl glass font-semibold hover-glow"
            >
              Repository
            </a>

            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-3 rounded-xl text-white font-semibold"
              style={{
                background:
                  'linear-gradient(135deg, #22d3ee, #3b82f6)',
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
