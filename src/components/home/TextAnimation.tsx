"use client";

import { motion, MotionValue } from 'framer-motion';
import Link from 'next/link';
import RotatingText from './RotatingText';
import BlurText from './BlurText';

interface TextAnimationProps {
  textX: MotionValue<number>;
  textOpacity: MotionValue<number>;
}

export default function TextAnimation({ textX, textOpacity }: TextAnimationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ x: textX, opacity: textOpacity }}
      transition={{ duration: 0.8 }}
      className="lg:order-1 space-y-8 sm:space-y-10 text-center lg:text-left px-4 sm:px-0"
    >
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-gray-800 tracking-tight transition-all duration-300">
          Software
        </h1>
        <RotatingText
          texts={['Entwicklung', 'Architektur', 'Factory', 'Forschung', 'Lösungen']}
          mainClassName="px-6 sm:px-8 md:px-10 bg-[#042A2B] text-white overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-lg shadow-lg min-w-[280px] sm:min-w-[350px] md:min-w-[400px] text-center text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <BlurText
        text="Wir lassen Software für Sie arbeiten."
        delay={200}
        animateBy="words" 
        direction="bottom"
        className="text-xxl sm:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
      />
      {/* <p className="text-xl sm:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
        Wir lassen Software für Sie arbeiten.
      </p> */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <Link 
          href="/contact"
          className="px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg sm:text-xl 2xl:text-2xl w-full sm:w-auto text-center"
        >
          Get Started
        </Link>
        <Link 
          href="/services"
          className="px-6 py-2.5 sm:py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-lg sm:text-xl 2xl:text-2xl w-full sm:w-auto text-center"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
} 