"use client";

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LogoAnimation from './LogoAnimation';
import TextAnimation from './TextAnimation';
import CardsGrid from './CardsGrid';

export default function HomeContent() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const logoX = useTransform(scrollY, [0, 300], [0, 100]); 
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textX = useTransform(scrollY, [0, 300], [0, -100]); 
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 mt-16">
      <div className="max-w-[90rem] mx-auto"> 
        <div className="min-h-[80vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <LogoAnimation logoX={logoX} logoOpacity={logoOpacity} />
          <TextAnimation textX={textX} textOpacity={textOpacity} />
        </div>

        <CardsGrid />
      </div>
    </main>
  );
}