import { useState, useCallback } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ScanHero from './components/ScanHero';
import Navbar from './components/Navbar';
import AboutCard from './components/AboutCard';
import CapabilityMatrix from './components/CapabilityMatrix';
import MissionArchive from './components/MissionArchive';
import MetricsDashboard from './components/MetricsDashboard';
import AcademicPanel from './components/AcademicPanel';
import CommunitySection from './components/CommunitySection';
import ContactPanel from './components/ContactPanel';

export default function App() {
  const [scanComplete, setScanComplete] = useState(false);

  const handleScanComplete = useCallback(() => {
    setScanComplete(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-bg-primary overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar visible={scanComplete} />

      {/* Background Gradient Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(34, 211, 238, 0.03)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'rgba(59, 130, 246, 0.03)' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'rgba(167, 139, 250, 0.02)' }}
        />
      </div>

      {/* Main Content */}
      <main className="relative w-full" style={{ zIndex: 1 }}>
        {/* Hero / Scan */}
        <ScanHero onScanComplete={handleScanComplete} />

        {/* Dashboard Sections */}
        {scanComplete && (
          <>
            <AboutCard />
            <CapabilityMatrix />
            <MissionArchive />
            <MetricsDashboard />
            <AcademicPanel />
            <CommunitySection />
            <ContactPanel />
          </>
        )}
      </main>
    </div>
  );
}
