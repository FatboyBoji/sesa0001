import { motion, AnimatePresence } from 'framer-motion';
import { SidebarProps } from '../types';
import Logo from '../logo';
import { navigationConfig } from '../config';
import Link from 'next/link';
import ServicesDropdown from './services_dropdown';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const isLinkActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleDropdownToggle = (href: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [href]: !prev[href]
    }));
  };

  // Sort items by order
  const sortedNavItems = [...navigationConfig].sort((a, b) => a.order - b.order);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="
              fixed top-0 left-0 h-full w-screen
              bg-white shadow-lg z-[61] md:hidden
              flex flex-col
            "
          >
            {/* Header with Logo and Close Button */}
            <div className="sticky top-0 bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
              <div className="w-24">
                <Logo />
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-2.5 rounded-full
                  bg-black hover:bg-gray-900
                  text-white
                  transition-colors duration-200
                  shadow-lg hover:shadow-xl
                "
                aria-label="Close menu"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </div>

            {/* Content Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Navigation Items */}
              <div className="flex-grow overflow-y-auto px-6 py-6">
                <ul className="space-y-4">
                  {sortedNavItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      {item.type === 'dropdown' ? (
                        <ServicesDropdown
                          isOpen={openDropdowns[item.href] || false}
                          onToggle={() => handleDropdownToggle(item.href)}
                          services={item.dropdownItems || []}
                          isActive={isLinkActive(item.href)}
                          onServiceClick={onClose}
                          href={item.href}
                          label={item.label}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          className={`
                            block px-5 py-3 rounded-lg
                            text-[15px] font-medium
                            transition-all duration-300
                            ${isLinkActive(item.href) ? 
                              'bg-gray-100 text-black transform translate-x-2' : 
                              'text-gray-600 hover:bg-gray-50 hover:text-black'
                            }
                          `}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto border-t border-gray-100"
              >
                <div className="p-6 bg-gradient-to-t from-gray-50/80 to-white/40">
                  <div className="flex items-center justify-end">
                    <span className="text-xs text-gray-500 font-medium">v0000</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}