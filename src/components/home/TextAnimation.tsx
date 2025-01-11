import { motion, MotionValue } from 'framer-motion';
import Link from 'next/link';

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
      className="lg:order-1 space-y-4 sm:space-y-6 text-center lg:text-left px-4 sm:px-0"
    >
      <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-800 tracking-tight transition-all duration-300">
        Software Entwicklung
        <span className="block text-green-600 mt-2">Software Architectur</span>
      </h1>
      <p className="text-base sm:text-xl 2xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
        We supply software systems for your business.
      </p>
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
  );
} 