import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MobileServicesDropdownProps } from '../types';

const dropdownVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function MobileServicesDropdown({
  isOpen,
  onToggle,
  services,
  isActive,
  onServiceClick,
  href,
  label
}: MobileServicesDropdownProps) {
  const getServiceLink = (service: { href?: string; id: string }) => {
    // Use the service's href if it exists, otherwise fallback to services page anchor
    return service.href || `/services#${service.id}`;
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`
          w-full px-5 py-3 rounded-lg
          text-[15px] font-medium
          transition-all duration-300
          flex items-center justify-between
          ${isActive ? 
            'bg-gray-100 text-black transform translate-x-2' : 
            'text-gray-600 hover:bg-gray-50 hover:text-black'
          }
        `}
      >
        <span>{label}</span>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 ml-2 text-gray-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.2
                }}
              >
                <Link
                  href={getServiceLink(service)}
                  className="
                    block px-5 py-2.5 ml-4
                    text-[14px] text-gray-600
                    transition-all duration-200
                    hover:text-black hover:translate-x-1
                    border-l border-gray-200
                  "
                  onClick={onServiceClick}
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
