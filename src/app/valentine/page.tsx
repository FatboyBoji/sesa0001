"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { LampContainer } from "@/components/Valentine/lamp";
import Image from "next/image";
import Link from "next/link";
import { CharacterSticker } from "@/components/Valentine/CharacterSticker";

export default function ValentineLampDemo() {
  const [showValentineQuestion, setShowValentineQuestion] = useState(false);
  const [theme, setTheme] = useState<'espeon' | 'kuromi'>('espeon');
  const lampRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const pageRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContinue = async () => {
    // Start the lamp animation
    await controls.start({ 
      scale: [1, 1.5, 2, 3],
      width: ["30rem", "40rem", "50rem", "100rem"],
      y: [0, -50, -100, "-100vh"],
      transition: {
        duration: 1.5,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut"
      }
    });

    // Smooth scroll to the valentine question
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });
    }

    // Show the valentine question after a slight delay
    setTimeout(() => {
      setShowValentineQuestion(true);
    }, 800);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'espeon' ? 'kuromi' : 'espeon');
  };

  const gradientStyle = theme === 'espeon' 
    ? 'bg-gradient-to-b from-pink-50 via-pink-50 to-purple-900'
    : 'bg-gradient-to-b from-purple-900 via-purple-900 to-slate-900';

  return (
    <div ref={pageRef} className={`min-h-[200vh] ${gradientStyle} transition-all duration-500`}>
      {/* Home Arrow */}
      <Link href="/">
        <motion.div 
          className="fixed top-6 left-6 z-50 cursor-pointer"
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`p-3 rounded-full ${theme === 'espeon' ? 'bg-pink-100 text-pink-500' : 'bg-purple-800 text-purple-200'} shadow-lg`}>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
          </div>
        </motion.div>
      </Link>

      {/* Character Stickers */}
      <CharacterSticker 
        character="espeon"
        position="left"
        onClick={theme === 'kuromi' ? handleThemeToggle : undefined}
      />
      <CharacterSticker 
        character="kuromi"
        position="right"
        onClick={theme === 'espeon' ? handleThemeToggle : undefined}
      />

      <div className="h-screen">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-50"
          >
            <h2 className={`text-3xl font-semibold ${theme === 'espeon' ? 'text-pink-400' : 'text-purple-300'}`}>
              To the most amazing person
            </h2>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mt-6 cursor-pointer text-lg ${theme === 'espeon' ? 'text-pink-500' : 'text-purple-400'} hover:scale-110 transition-transform`}
              onClick={handleContinue}
            >
              ↓ Continue
            </motion.div>
          </motion.div>

          <motion.div
            ref={lampRef}
            animate={controls}
            initial={{ scale: 1, y: 0, width: "30rem" }}
            className="lamp-animation"
          />
        </LampContainer>
      </div>

      <div ref={questionRef} className="h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            className="absolute top-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${theme === 'espeon' ? 'text-pink-300' : 'text-purple-400'}`}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: windowSize.width ? Math.random() * windowSize.width : 0,
                  y: windowSize.height ? Math.random() * windowSize.height : 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [null, Math.random() * -100],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ♥
              </motion.div>
            ))}
          </motion.div>
          
          <h2 className={`text-4xl font-bold ${theme === 'espeon' ? 'text-pink-500' : 'text-purple-300'} mb-8 text-center`}>
            Will you be my Valentine?
          </h2>
          <div className="flex gap-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 text-white rounded-lg shadow-lg ${
                theme === 'espeon' 
                  ? 'bg-pink-500 hover:bg-pink-600' 
                  : 'bg-purple-500 hover:bg-purple-600'
              }`}
            >
              Yes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 text-white rounded-lg shadow-lg ${
                theme === 'espeon'
                  ? 'bg-pink-300 hover:bg-pink-400'
                  : 'bg-purple-700 hover:bg-purple-800'
              }`}
            >
              No
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
