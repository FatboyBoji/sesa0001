"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SesaBG from '../components/sesa_background';
import SesaIcon from '../components/icons/sesalogoComb';
import Navbar from '../components/navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // animation for the logo and text in the main body.
  // logo goes right, text goes left
  const logoX = useTransform(scrollY, [0, 300], [0, 100]); 
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textX = useTransform(scrollY, [0, 300], [0, -100]); 
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col relative" ref={containerRef}>
      {/* My Costumized Background ------------ Waterprint SESA Style -------------------------------------- */}
      <div className="absolute inset-0">
        <SesaBG />
      </div>

      {/* My Navbar */}
      <Navbar />

      {/*--------------------------------------------- Main body ---------------------------------------------*/}
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 mt-16">
        <div className="max-w-[90rem] mx-auto"> 
          <div className="min-h-[80vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Logo - Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ x: logoX, opacity: logoOpacity }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 w-full flex justify-center items-center mb-8 lg:mb-0"
            >
              <div className="w-[85%] sm:w-full max-w-md 2xl:max-w-2xl transition-all duration-300">
                <SesaIcon className="w-full h-full text-gray-800" />
              </div>
            </motion.div>

            {/* sesa..Text - Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ x: textX, opacity: textOpacity }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 space-y-4 sm:space-y-6 text-center lg:text-left px-4 sm:px-0"
            >
              {/* Sesa ausgeschrieben */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-800 tracking-tight transition-all duration-300">
                Software Entwicklung
                <span className="block text-green-600 mt-2">Software Architectur</span>
              </h1>
              <p className="text-base sm:text-xl 2xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We supply software systems for your business.
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className="px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-base sm:text-lg 2xl:text-xl w-full sm:w-auto text-center"
                >
                  Get Started
                </Link>
                <Link 
                  href="/services"
                  className="px-6 py-2.5 sm:py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-base sm:text-lg 2xl:text-xl w-full sm:w-auto text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* eventueller content unten in blocks ? */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24 px-4 sm:px-0"
          >
            {/* each card has a title and a description  --- demo content */}
            {[
              { title: 'Expertise', desc: 'lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .' },
              { title: 'work', desc: 'solutions for modern challenges.' },
              { title: 'Results', desc: 'Measurable outcomes and sustainable growth.' }
            ].map((card, index) => (
              <div key={index} className="bg-white p-8 2xl:p-12 rounded-2xl shadow-lg">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 2xl:text-lg">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* My Footer */}
      <Footer />
    </div>
  );
}