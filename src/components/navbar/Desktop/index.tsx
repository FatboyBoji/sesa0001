import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { NavbarProps } from '../types';
import Logo from '../logo';
import NavLinks from './nav_links';

const services = [
    { name: "ID Generator", id: "id-generator" },
    { name: "Javadoc Repository", id: "javadoc-repository" },
    { name: "Test Service 2", id: "test-service-2" },
    { name: "Nitora", id: "nitora" }
];

export default function DesktopNavbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [showFullNav, setShowFullNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(pathname.startsWith('/services'));
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setShowFullNav(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setShowFullNav(true);
    }
  }, [isHomePage]);

  const shouldShowFullNav = !isHomePage || showFullNav || isHovered;

  return (
    <>
      {/* Background - Only for homepage */}
      {isHomePage && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldShowFullNav ? 1 : 0 }}
          className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100 hidden md:block"
        >
          <div className="max-w-10xl mx-auto py-9 px-6 md:px-10">
            <div className="flex items-center justify-between" />
          </div>
        </motion.nav>
      )}

      {/* Main Navbar */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-40 
          transition-all duration-300
          py-4 px-6 md:px-10
          ${!isHomePage ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' : ''}
          ${className}
          hidden md:block
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-10xl mx-auto flex items-center justify-between relative">
          <motion.div
            initial={isHomePage ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: shouldShowFullNav ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-32 md:w-40 h-10 md:h-10"
          >
            <Logo />
          </motion.div>

          <NavLinks />
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[80px] hidden md:block" />
    </>
  );
}
