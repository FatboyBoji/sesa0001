"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SesaIcon from './icons/sesalogoComb';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);
  const isHomePage = pathname === '/';

  // Only add scroll listener on home page
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setShowFullNav(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Always show full nav on other pages
      setShowFullNav(true); 
    }
  }, [isHomePage]);

  const services = [
    "Javadoc Repository",
    "Test Service 2",
    "Nitora"
  ];

  // Helper function to check if a link is active
  const isLinkActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Background - Only for homepage */}
      {isHomePage && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: showFullNav ? 1 : 0 }}
          className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100 hidden md:block"
        >
          <div className="max-w-10xl mx-auto py-9 px-6 md:px-10">
            <div className="flex items-center justify-between" />
          </div>
        </motion.nav>
      )}

      {/* Desktop Navbar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-40 
        transition-all duration-300
        py-4 px-6 md:px-10
        ${!isHomePage ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' : ''}
        ${className}
        hidden md:block
      `}>
        <div className="max-w-10xl mx-auto flex items-center justify-between relative">
          {/* Logo - Hidden on mobile homepage until scroll */}
          <motion.div
            initial={isHomePage ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: isHomePage ? (showFullNav ? 1 : 0) : 1 }}
            className={`
              relative z-10 w-32 md:w-40 h-10 md:h-10
              ${isHomePage ? 'hidden md:block' : ''}
              ${showFullNav ? '!block' : ''}
            `}
          >
            <Link href="/">
              <SesaIcon className="text-black w-full h-full" />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Always hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8 relative z-[101]">
            {['/', '/about'].map((path, index) => {
              const linkNames = ['Home', 'About'];
              const isActive = isLinkActive(path);

              return (
                <li key={index}>
                  <Link
                    href={path}
                    className={`
                      px-4 py-2 rounded-full
                      text-base font-medium
                      transition-all duration-300
                      ${isActive ? 
                        'bg-black text-white shadow-md transform scale-105' : 
                        'text-gray-600 hover:bg-gray-100 hover:text-black'
                      }
                    `}
                  >
                    {linkNames[index]}
                  </Link>
                </li>
              );
            })}

            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                href="/services"
                className={`
                  px-4 py-2 rounded-full
                  text-base font-medium
                  transition-all duration-300
                  flex items-center gap-2
                  ${isLinkActive('/services') ? 
                    'bg-black text-white shadow-md transform scale-105' : 
                    'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }
                `}
              >
                Services
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Services Dropdown Menu */}
              <div className={`
                absolute left-0 top-[calc(100%+0.5rem)]
                w-64 
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                rounded-lg shadow-lg
                border border-gray-100
                z-[102]
                ${isLinkActive('/services') ? 
                  'bg-gray-900 border-gray-800' : 
                  'bg-white'
                }
              `}>
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`
                        block px-4 py-2.5
                        text-sm
                        transition-colors
                        ${isLinkActive('/services') ?
                          'text-gray-300 hover:bg-gray-800 hover:text-white' :
                          'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                        }
                      `}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/contact"
                className={`
                  px-4 py-2 rounded-full
                  text-base font-medium
                  transition-all duration-300
                  ${isLinkActive('/contact') ? 
                    'bg-black text-white shadow-md transform scale-105' : 
                    'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }
                `}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={`
              md:hidden p-2 relative z-10
              ${isHomePage && !showFullNav ? 'ml-auto' : ''}
            `}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 relative flex items-center justify-center">
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'rotate-45' : 'translate-y-[-8px]'}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? '-rotate-45' : 'translate-y-[8px]'}
              `}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navbar - Added background transition */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        py-4 px-6
        ${!isHomePage || showFullNav ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' : ''}
        ${className}
        md:hidden
      `}>
        <div className="max-w-10xl mx-auto flex items-center justify-between relative">
          {/* Logo - Hidden on mobile homepage until scroll */}
          <motion.div
            initial={isHomePage ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: isHomePage ? (showFullNav ? 1 : 0) : 1 }}
            className={`
              relative z-10 w-32 h-10
              ${isHomePage ? 'hidden' : ''}
              ${showFullNav ? '!block' : ''}
            `}
          >
            <Link href="/">
              <SesaIcon className="text-black w-full h-full" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={`
              p-2 relative z-10
              ${isHomePage && !showFullNav ? 'ml-auto' : ''}
            `}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 relative flex items-center justify-center">
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'rotate-45' : 'translate-y-[-8px]'}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800 absolute
                transition-all duration-300 ease-in-out
                ${isSidebarOpen ? '-rotate-45' : 'translate-y-[8px]'}
              `}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Spacer div - Adjust height for mobile homepage */}
      <div className={`
        md:h-[80px]
        ${isHomePage ? 'h-[60px]' : 'h-[72px]'}
      `} />

      {/* Mobile Sidebar */}
      <div 
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden
          transition-opacity duration-300 overflow-x-hidden
          ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={handleOverlayClick}
      >
        <div className={`
          fixed top-0 left-0 h-full w-72
          bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}>
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content Container with Flex */}
          <div className="flex flex-col h-full">
            {/* Mobile Navigation Items */}
            <div className="flex-grow overflow-y-auto p-6 pt-16">
              <ul className="space-y-2">
                {['/', '/about'].map((path, index) => {
                  const linkNames = ['Home', 'About'];
                  const isActive = isLinkActive(path);

                  return (
                    <li key={index}>
                      <Link
                        href={path}
                        className={`
                          block px-4 py-2.5 rounded-lg
                          transition-all duration-300
                          ${isActive ? 
                            'bg-gray-100 text-black font-medium transform translate-x-2' : 
                            'text-gray-600 hover:bg-gray-50 hover:text-black'
                          }
                        `}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {linkNames[index]}
                      </Link>
                    </li>
                  );
                })}

                {/* Mobile Services Section */}
                <li>
                  <div className="px-4 py-2.5 text-gray-700">
                    <Link 
                      href="/services"
                      className={`block mb-2 ${isLinkActive('/services') ? 'font-medium text-black' : ''}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      Services
                    </Link>
                    <ul className="ml-4 border-l border-gray-200 space-y-1">
                      {services.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={`
                      block px-4 py-2.5 rounded-lg
                      transition-all duration-300
                      ${isLinkActive('/contact') ? 
                        'bg-gray-100 text-black font-medium transform translate-x-2' : 
                        'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo Section - Fixed at Bottom */}
            <div className="mt-auto border-t border-gray-100">
              <div className="p-6 bg-gradient-to-t from-gray-50/80 to-white/40">
                <div className="flex items-center justify-between">
                  <div className="w-24">
                    <Link 
                      href="/" 
                      onClick={() => setSidebarOpen(false)}
                      className="block transform transition-all duration-200 hover:scale-105"
                    >
                      <SesaIcon className="text-black w-full h-full" />
                    </Link>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">v0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
