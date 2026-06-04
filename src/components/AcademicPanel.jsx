import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { HiAcademicCap } from 'react-icons/hi';
import GlassCard from './GlassCard';
import SectionWrapper from './SectionWrapper';

const academics = [
  {
    title: '10th Board',
    institution: 'The Lexicon International School',
    board: 'CBSE',
    metric: '98',
    metricSuffix: '%',
    metricLabel: 'Percentage',
    color: '#22d3ee',
  },
  {
    title: '12th Board',
    institution: 'HEM Gurukool School',
    board: 'CBSE',
    metric: '96',
    metricSuffix: '%',
    metricLabel: 'Percentage',
    color: '#3b82f6',
  },
  {
    title: 'Engineering',
    institution: 'Visvesvaraya National Institute of Technology, Nagpur',
    board: null,
    metric: '9.12',
    metricSuffix: '',
    metricLabel: 'CGPA',
    subtitle: 'Second-Year Engineering Student',
    color: '#a78bfa',
  },
];

function AnimatedNumber({ value, suffix, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(value);
    const isDecimal = value.includes('.');
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplayVal(target);
        clearInterval(timer);
      } else {
        setDisplayVal(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold stat-glow"
      style={{ color }}
    >
      {displayVal}
      <span className="text-xl md:text-2xl font-semibold">{suffix}</span>
    </span>
  );
}

export default function AcademicPanel() {
  return (
    <SectionWrapper id="academics" className="section-gradient-1">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-semibold">
          // Academic Records
        </span>
        <h2 className="text-heading gradient-text mt-3">Academic Database</h2>
        <p className="text-center mb-12">
          Educational journey and academic achievements
        </p>
      </motion.div>

      {/* Academic Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {academics.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <GlassCard className="p-7 md:p-9 text-center border-gradient h-full flex flex-col">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-6"
                style={{
                  background: `${item.color}15`,
                  boxShadow: `0 0 0 1px ${item.color}25`,
                }}
              >
                <HiAcademicCap className="text-xl" style={{ color: item.color }} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h3>
              {item.board && (
                <span className="text-xs tracking-wide text-text-muted uppercase">{item.board}</span>
              )}

              {/* Animated Metric */}
              <div className="my-8 flex-1 flex items-center justify-center">
                <AnimatedNumber value={item.metric} suffix={item.metricSuffix} color={item.color} />
              </div>

              {/* Label */}
              <p className="text-xs tracking-[0.15em] uppercase text-text-muted font-semibold mb-3">
                {item.metricLabel}
              </p>

              {/* Institution */}
              <div className="inner-glass rounded-xl px-4 py-3.5 mt-auto">
                <p className="text-xs text-text-secondary leading-relaxed">{item.institution}</p>
                {item.subtitle && (
                  <p className="text-[10px] mt-1 font-medium" style={{ color: '#60a5fa' }}>
                    {item.subtitle}
                  </p>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
