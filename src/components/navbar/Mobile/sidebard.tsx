import { motion } from 'framer-motion';
import { SidebarProps } from '../types';
import Logo from '../logo';
import { navigationConfig } from '../config';
import Link from 'next/link';
import ServicesDropdown from './services_dropdown';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isServicesOpen, setServicesOpen] = useState(pathname.startsWith('/services'));

  const isLinkActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // Sort items by order
  const sortedNavItems = [...navigationConfig].sort((a, b) => a.order - b.order);

  return (
    <div 
      className={`
        fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden
        transition-opacity duration-300 overflow-x-hidden
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`
        fixed top-0 left-0 h-full w-72
        bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        {/* Header with Back Arrow */}
        <div className="sticky top-0 bg-white px-6 py-3 flex items-center">
          <button
            onClick={onClose}
            className="
              p-2 -ml-2
              text-gray-600 hover:text-gray-900
              transition-colors duration-200
              group
            "
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 transform transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <div className="flex-grow overflow-y-auto px-6 pt-2">
            <ul className="space-y-4">
              {sortedNavItems.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <li key={item.href}>
                      <ServicesDropdown
                        isOpen={isServicesOpen}
                        onToggle={() => setServicesOpen(!isServicesOpen)}
                        services={item.dropdownItems || []}
                        isActive={isLinkActive(item.href)}
                        onServiceClick={onClose}
                      />
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
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
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Logo Section - Fixed at Bottom */}
          <div className="mt-auto border-t border-gray-100">
            <div className="p-6 bg-gradient-to-t from-gray-50/80 to-white/40">
              <div className="flex items-center justify-between">
                <div className="w-24">
                  <Logo onClick={onClose} />
                </div>
                <span className="text-xs text-gray-500 font-medium">v0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}