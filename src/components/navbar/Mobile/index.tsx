import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { NavbarProps } from '../types';
import Logo from '../logo';
import MenuButton from './menu_button';
import Sidebar from './sidebard';

export default function MobileNavbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);
  const isHomePage = pathname === '/';

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        py-4 px-6
        ${!isHomePage || showFullNav ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' : ''}
        ${className}
        md:hidden
      `}>
        <div className="max-w-10xl mx-auto flex items-center justify-between relative">
          <motion.div
            initial={isHomePage ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: isHomePage ? (showFullNav ? 1 : 0) : 1 }}
            className={`
              relative z-10 w-32 h-10
              ${isHomePage ? 'hidden' : ''}
              ${showFullNav ? '!block' : ''}
            `}
          >
            <Logo />
          </motion.div>

          <MenuButton 
            isOpen={isSidebarOpen}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={isHomePage && !showFullNav ? 'ml-auto' : ''}
          />
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Spacer */}
      <div className={`md:hidden ${isHomePage ? 'h-[60px]' : 'h-[72px]'}`} />
    </>
  );
}
