'use client';

import SesaBG from '../components/sesa_background';
import Navbar from '../components/navbar/index';
import Footer from '@/components/Footer';
import HomeContent from '@/components/home/HomeContent';
import InfoSection from '@/components/home/InfoSection';
import TextAnimation from '@/components/home/TextAnimation';
import Orb from '@/components/home/Orb';
import { useMotionValue } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback component for when WebGL fails
function FallbackComponent() {
  return (
    <div className="md:hidden flex flex-col items-center justify-center min-h-screen relative">
      <div className="w-64 h-64 mb-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse" />
      <TextAnimation 
        textX={useMotionValue(0)} 
        textOpacity={useMotionValue(1)} 
      />
    </div>
  );
}

function MobileHero() {
  const textX = useMotionValue(0);
  const textOpacity = useMotionValue(1);

  return (
    <div className="md:hidden flex flex-col items-center justify-center min-h-screen relative">
      <div className="w-64 h-64 mb-8">
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <Orb hue={270} hoverIntensity={0.3} forceHoverState={true} />
        </ErrorBoundary>
      </div>
      <TextAnimation 
        textX={textX} 
        textOpacity={textOpacity} 
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col relative">
      {/* Background */}
      <div className="absolute inset-0">
        <SesaBG />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Mobile Hero Section */}
      <MobileHero />

      {/* Desktop Content */}
      <div className="hidden md:block">
        <HomeContent />
        <InfoSection />
      </div>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}