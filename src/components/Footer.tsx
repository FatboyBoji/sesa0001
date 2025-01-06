"use client";

import { motion } from 'framer-motion';
import SesaIcon from '../components/icons/sesalogoComb';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        bg-gray-800 text-white py-4 px-6 w-full
        transition-all duration-300 ease-in-out
        relative z-10
        ${className}
      `}
    >
      <div className="max-w-10xl mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="w-24 h-5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <SesaIcon className="text-white w-full h-full" />
          </motion.div>
          <motion.p 
            className="text-sm text-center md:text-right text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © tjk sesa exclusive information service, 2024.06/ 2.8
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 