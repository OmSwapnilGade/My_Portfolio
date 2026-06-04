import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'Hotel Management System',
    brief:
      'A structured software system designed to streamline hotel operations through record management and file-based persistence.',
    objective: 'Strengthen foundational programming and system design concepts.',
    techStack: ['C', 'File Handling'],
    repoUrl: '#',
    demoUrl: '#',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(59,130,246,0.04) 100%)',
  },
  {
    title: 'CitySync',
    brief:
      'An intelligent civic issue reporting platform designed to bridge communication between citizens and authorities.',
    objective: 'Build a real-world problem-solving solution during a hackathon.',
    techStack: ['Coming Soon'],
    repoUrl: '#',
    demoUrl: '#',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(59,130,246,0.04) 100%)',
  },
];

export default function MissionArchive() {
  return (
    <SectionWrapper id="projects" className="section-gradient-1">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Project Database
        </span>
        <h2 className="text-heading gradient-text mt-3">Mission Archive</h2>
        <p className="text-center mb-12">
          Projects built, lessons learned, solutions deployed
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
