import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';

// Random data generators
const hexStrings = [
  '0x7A3F', 'A1:B4:C8', 'SYS_2048', '0x992B', 
  'MEM_OK', '0xFF01', '0x1A2B', '0x3C4D',
  'NET_01', 'AUTH_99', '0x0000', 'SYS_INIT'
];
const statusIndicators = [
  'ONLINE', 'SECURE', 'AUTHORIZED', 
  'VERIFIED', 'ACTIVE', 'SYNCING', 'LINK_OK'
];

function FloatingText({ items, count, className }) {
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
    const newElements = Array.from({ length: count }).map((_, i) => ({
      id: i,
      text: items[Math.floor(Math.random() * items.length)],
      top: `${Math.random() * 90 + 5}%`,
      duration: Math.random() * 40 + 30,
      delay: Math.random() * -40,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: Math.random() * 0.05 + 0.09, 
    }));
    setElements(newElements);
  }, [count, items]);

  return (
    <>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute text-xs font-mono font-bold whitespace-nowrap pointer-events-none ${className}`}
          style={{ top: el.top }}
          initial={{ x: el.direction === 1 ? '-20vw' : '120vw', opacity: el.opacity }}
          animate={{ x: el.direction === 1 ? '120vw' : '-20vw' }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay,
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </>
  );
}

function BinaryStreams({ count }) {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const newStreams = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 40 + 30, // Very slow downward
      delay: Math.random() * -40,
      opacity: Math.random() * 0.04 + 0.08, // Increased by ~6%
      content: Array.from({ length: 15 }).map(() => (Math.random() > 0.5 ? '1' : '0')).join('\n'),
    }));
    setStreams(newStreams);
  }, [count]);

  return (
    <>
      {streams.map(stream => (
        <motion.div
          key={stream.id}
          className="absolute text-[10px] font-mono font-bold leading-none text-accent-cyan pointer-events-none whitespace-pre text-center"
          style={{ left: stream.left, opacity: stream.opacity }}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: stream.delay,
          }}
        >
          {stream.content}
        </motion.div>
      ))}
    </>
  );
}

function WireframeCubes({ count }) {
  const [cubes, setCubes] = useState([]);

  useEffect(() => {
    const newCubes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 90 + 5}%`,
      size: Math.random() * 30 + 20, // 20px to 50px
      durationX: Math.random() * 20 + 15,
      durationY: Math.random() * 20 + 15,
      moveDuration: Math.random() * 50 + 40,
      moveDelay: Math.random() * -50,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: Math.random() * 0.05 + 0.08,
    }));
    setCubes(newCubes);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1000px' }}>
      {cubes.map(cube => (
        <motion.div 
          key={cube.id} 
          className="absolute"
          style={{ top: cube.top, opacity: cube.opacity }}
          initial={{ x: cube.direction === 1 ? '-20vw' : '120vw' }}
          animate={{ x: cube.direction === 1 ? '120vw' : '-20vw' }}
          transition={{
            duration: cube.moveDuration,
            repeat: Infinity,
            ease: "linear",
            delay: cube.moveDelay,
          }}
        >
          <motion.div
            className="wireframe-cube"
            style={{ 
              width: cube.size, 
              height: cube.size,
              '--size': `${cube.size}px`
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              rotateX: { duration: cube.durationX, repeat: Infinity, ease: 'linear' },
              rotateY: { duration: cube.durationY, repeat: Infinity, ease: 'linear' },
            }}
          >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function ScanningBrackets() {
  const [brackets, setBrackets] = useState([]);

  useEffect(() => {
    // Generate random regions
    const newBrackets = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      width: Math.random() * 200 + 100,
      height: Math.random() * 150 + 80,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -10,
      opacity: Math.random() * 0.05 + 0.09,
    }));
    setBrackets(newBrackets);
  }, []);

  return (
    <>
      {brackets.map(b => (
        <motion.div
          key={b.id}
          className="absolute pointer-events-none border-accent-cyan"
          style={{
            left: b.left,
            top: b.top,
            width: b.width,
            height: b.height,
            opacity: b.opacity,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0, b.opacity, 0], scale: [0.95, 1, 0.95] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        >
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-inherit"></div>
          {/* Top Right Corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-inherit"></div>
          {/* Bottom Left Corner */}
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-inherit"></div>
          {/* Bottom Right Corner */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-inherit"></div>
        </motion.div>
      ))}
    </>
  );
}

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Existing Particle Background (Data Nodes) */}
      <ParticleBackground />

      {/* Holographic Grid Fragments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 cyber-grid opacity-10 pointer-events-none" />

      {/* Floating Elements */}
      <FloatingText items={hexStrings} count={12} className="text-accent-blue" />
      <FloatingText items={statusIndicators} count={8} className="text-accent-emerald" />
      
      {/* Binary Streams */}
      <BinaryStreams count={10} />

      {/* Wireframe Cubes */}
      <WireframeCubes count={6} />

      {/* Scanning Brackets */}
      <ScanningBrackets />
    </div>
  );
}
