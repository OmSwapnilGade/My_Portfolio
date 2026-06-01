import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const scanSteps = [
  { text: 'Initializing system...', delay: 0 },
  { text: 'Loading developer modules...', delay: 600 },
  { text: 'Scanning developer profile...', delay: 1200 },
  { text: 'Analyzing capabilities...', delay: 2200 },
  { text: 'Identity Detected', delay: 3200 },
  { text: 'Profile Authenticated', delay: 4000 },
];

const descriptorTags = ['Student', 'Frontend Developer', 'Problem Solver', 'Competitive Programmer'];

export default function ScanHero({ onScanComplete }) {
  const [phase, setPhase] = useState('scanning'); // 'scanning' | 'revealed'
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // Step progression
    scanSteps.forEach((step, i) => {
      setTimeout(() => setCurrentStep(i), step.delay);
    });

    // Complete scan
    const completeTimer = setTimeout(() => {
      setPhase('revealed');
      onScanComplete?.();
      setTimeout(() => setShowContent(true), 400);
    }, 4800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onScanComplete]);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scan Grid Overlay */}
      <AnimatePresence>
        {phase === 'scanning' && (
          <motion.div
            className="absolute inset-0 scan-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      {/* Scan Line */}
      <AnimatePresence>
        {phase === 'scanning' && (
          <motion.div
            className="absolute left-0 right-0 h-[2px] z-10"
            style={{
              background: 'linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #22d3ee, transparent)',
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
            }}
            initial={{ top: '0%' }}
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Scanner Container */}
      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {phase === 'scanning' ? (
            <motion.div
              key="scanner"
              className="flex flex-col items-center gap-10"
              exit={{
                scale: 1.1,
                opacity: 0,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              {/* Circular Scanner */}
              <div className="relative w-44 h-44 md:w-56 md:h-56">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '2px solid rgba(34, 211, 238, 0.4)' }}
                  animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Middle Ring */}
                <motion.div
                  className="absolute inset-3 rounded-full"
                  style={{ border: '1px solid rgba(59, 130, 246, 0.3)' }}
                  animate={{ scale: [1, 0.95, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
                {/* Inner Scanner */}
                <motion.div
                  className="absolute inset-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)',
                    border: '1px solid rgba(34,211,238,0.25)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Scan Indicator */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2"
                    style={{
                      background: 'linear-gradient(to bottom, #22d3ee, transparent)',
                    }}
                  />
                </motion.div>
                {/* Center Dot */}
                <motion.div
                  className="absolute inset-0 m-auto w-3 h-3 rounded-full"
                  style={{ background: 'rgba(34, 211, 238, 0.8)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Corner Brackets */}
                {[
                  'top-0 left-0 border-t-2 border-l-2',
                  'top-0 right-0 border-t-2 border-r-2',
                  'bottom-0 left-0 border-b-2 border-l-2',
                  'bottom-0 right-0 border-b-2 border-r-2',
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} w-6 h-6 rounded-sm`}
                    style={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.9, 0.4] }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                  />
                ))}
              </div>

              {/* Status Text */}
              <motion.div className="space-y-4">
                <motion.p
                  key={currentStep}
                  className="text-sm md:text-base tracking-[0.2em] uppercase font-medium"
                  style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {scanSteps[currentStep]?.text}
                </motion.p>

                {/* Progress Bar */}
                <div
                  className="w-64 md:w-80 h-1 rounded-full overflow-hidden mx-auto"
                  style={{ background: 'rgba(255, 255, 255, 0.06)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.4)',
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                {/* Progress Percentage */}
                <p className="text-xs tracking-[0.3em] font-mono" style={{ color: 'rgba(100, 116, 139, 0.8)' }}>
                  {progress}%
                </p>
              </motion.div>

              {/* Data Indicators */}
              <div className="flex gap-8 text-[10px] tracking-[0.15em] uppercase font-mono"
                style={{ color: 'rgba(100, 116, 139, 0.7)' }}
              >
                {['SYS:ACTIVE', 'NET:SECURE', 'DB:SYNCED'].map((label, i) => (
                  <motion.span
                    key={label}
                    className="flex items-center gap-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 2, repeat: Infinity }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: 'rgba(34, 211, 238, 0.7)' }}
                    />
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hero-content"
              className="flex flex-col items-center gap-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* System Status Badge */}
              <motion.div
                className="glass-subtle px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                  style={{ background: '#34d399' }}
                />
                System Online — Profile Verified
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-display gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Developer Identity: Detected
              </motion.h1>

              {/* Name */}
              <motion.p
                className="text-subheading"
                style={{ color: 'rgba(148, 163, 184, 0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Om Swapnil Gade
              </motion.p>

              {/* Descriptor Tags */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mt-2"
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {descriptorTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="glass-subtle px-5 py-2.5 rounded-full text-sm font-medium
                               transition-all duration-300"
                    style={{
                      color: '#e2e8f0',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={showContent ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      borderColor: 'rgba(34, 211, 238, 0.3)',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <a
                  href="#projects"
                  className="px-9 py-4 rounded-2xl text-sm font-semibold tracking-wide text-white
                             transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                    boxShadow: '0 4px 25px rgba(34, 211, 238, 0.3)',
                  }}
                >
                  Access Mission Archive
                </a>
                <a
                  href="#skills"
                  className="glass px-9 py-4 rounded-2xl text-sm font-semibold tracking-wide
                             transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: '#e2e8f0',
                    borderColor: 'rgba(255,255,255,0.12)',
                  }}
                >
                  Open Capability Matrix
                </a>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
                  style={{ border: '2px solid rgba(148, 163, 184, 0.2)' }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-2 rounded-full"
                    style={{ background: 'rgba(34, 211, 238, 0.7)' }}
                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Gradient Orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(34, 211, 238, 0.06)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(59, 130, 246, 0.06)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(167, 139, 250, 0.04)' }}
      />
    </section>
  );
}
