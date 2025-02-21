'use client';

import SesaBG from '../components/sesa_background';
import Navbar from '../components/navbar/index';
import Footer from '@/components/Footer';
import HomeContent from '@/components/home/HomeContent';
import InfoSection from '@/components/home/InfoSection';
import TextAnimation from '@/components/home/TextAnimation';
import Orb from '@/components/home/Orb';
import { useMotionValue } from 'framer-motion';

function MobileHero() {
  const textX = useMotionValue(0);
  const textOpacity = useMotionValue(1);

  return (
    <div className="md:hidden flex flex-col items-center justify-center min-h-screen relative">
      <div className="w-64 h-64 mb-8">
        <Orb hue={270} hoverIntensity={0.3} forceHoverState={true} />
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