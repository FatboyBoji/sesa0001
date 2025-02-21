import { motion, MotionValue } from 'framer-motion';
import SesaIcon from '../icons/sesalogoComb';

interface LogoAnimationProps {
  logoX: MotionValue<number>;
  logoOpacity: MotionValue<number>;
}

export default function LogoAnimation({ logoX, logoOpacity }: LogoAnimationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ x: logoX, opacity: logoOpacity }}
      transition={{ duration: 0.8 }}
      className="lg:order-2 w-full flex justify-center items-center mb-8 lg:mb-0"
    >
      <div className="w-[85%] sm:w-full max-w-md 2xl:max-w-2xl transition-all pt-56 duration-300">
        <SesaIcon className="w-full h-full text-gray-800" />
      </div>
    </motion.div>
  );
} 