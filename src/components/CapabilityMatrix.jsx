import { motion } from 'motion/react';
import {
  SiC, SiCplusplus, SiPython,
  SiHtml5, SiCss, SiJavascript,
  SiGit, SiGithub,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

const categories = [
  {
    title: 'Programming Languages',
    description: 'Core foundation',
    skills: [
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Learning & building',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'Development environment',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#e2e8f0' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
    ],
  },
];

export default function CapabilityMatrix() {
  return (
    <SectionWrapper id="skills" className="section-gradient-2">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Technical Analysis
        </span>
        <h2 className="text-heading gradient-text mt-3">Capability Matrix</h2>
        <p className="text-center mb-12">
          Technologies and tools powering the development workflow
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.15, duration: 0.5 }}
          >
            {/* Category Header */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
              <p className="text-xs tracking-wide text-text-muted mt-1 uppercase">
                {category.description}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              {category.skills.map((skill, skillIdx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.15 + skillIdx * 0.1, duration: 0.4 }}
                  >
                    <GlassCard className="p-4 flex items-center gap-4 group cursor-default">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
                                    group-hover:scale-110"
                        style={{
                          background: `${skill.color}15`,
                          boxShadow: `0 0 0 1px ${skill.color}25`,
                        }}
                      >
                        <Icon
                          className="text-xl transition-all duration-300"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary text-sm">{skill.name}</p>
                      </div>
                      {/* Hover indicator */}
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: skill.color,
                            boxShadow: `0 0 8px ${skill.color}60`,
                          }}
                        />
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
