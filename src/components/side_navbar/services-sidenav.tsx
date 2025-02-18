"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Service } from '@/types/services';
import { SERVICES_SIDENAV_CONFIG as CONFIG, ServiceId } from './config';

interface ServicesSideNavProps {
  services: Service[];
}

export default function ServicesSideNav({ services }: ServicesSideNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Update document style when collapse state changes
  useEffect(() => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      document.documentElement.style.setProperty('--sidebar-width', isCollapsed ? '-288px' : '0px');
    }
    return () => {
      document.documentElement.style.setProperty('--sidebar-width', '-288px');
    };
  }, [isCollapsed]);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const getServiceId = (service: Service) => {
    return CONFIG.idMappings[service.title as ServiceId] || service.title.toLowerCase().replace(/\s+/g, '-');
  };

  const renderServicesList = () => (
    <ul className={`space-y-3 transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
      {services.map((service, index) => (
        <li key={index}>
          <a
            href={`#${getServiceId(service)}`}
            className="group flex items-center py-3 px-4 rounded-xl text-gray-700 hover:bg-white/70 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors mr-3" />
            <span className="font-medium text-sm">
              {service.title}
            </span>
            {/* <span className="ml-auto text-xs text-gray-400">
              {service.items.length} {service.items.length === 1 ? 'item' : 'items'}
            </span> */}
            <svg 
              className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );

  const HelpSection = () => (
    <div className={`px-6 pb-6 transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">{CONFIG.titles.helpSection}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {CONFIG.messages.serviceSelection}
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium group"
          onClick={() => setIsOpen(false)}
        >
          {CONFIG.buttons.contactSupport}
          <svg 
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );

  const Sidebar = ({ isOverlay = false }) => (
    <nav 
      className={`${isOverlay ? 'w-72' : `transition-all duration-500 ease-in-out ${isCollapsed ? 'w-0' : 'w-72'}`} h-[calc(100vh-6rem)]`}
    >
      <div className={`relative h-full mx-4 bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-[0_0_15px_rgba(0,0,0,0.05)] 
        transition-all duration-500 ease-in-out transform
        ${isCollapsed && !isOverlay ? 'opacity-0 -translate-x-full scale-95' : 'opacity-100 translate-x-0 scale-100'}`}
      >
        <div className="flex flex-col h-full justify-between pb-16">
          <div className="flex-grow p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-xl font-semibold text-gray-800 transition-all duration-300 ease-in-out
                ${isCollapsed ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                {CONFIG.titles.resourceOverview}
              </h2>
              <button
                onClick={() => isOverlay ? setIsOpen(false) : setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-white/70 rounded-lg transition-all duration-200 ease-in-out group"
                aria-label={isOverlay ? CONFIG.buttons.closeMenu : (isCollapsed ? CONFIG.buttons.expandNav : CONFIG.buttons.collapseNav)}
              >
                <svg
                  className="w-5 h-5 text-gray-700 transition-transform duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOverlay ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  )}
                </svg>
              </button>
            </div>
            <div className={`transition-all duration-500 ease-in-out transform
              ${isCollapsed ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {renderServicesList()}
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out transform
            ${isCollapsed ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <HelpSection />
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Menu Button for medium screens */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 left-4 z-50 lg:hidden md:flex hidden items-center justify-center w-10 h-10 
          bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:bg-white 
          transition-all duration-300 ease-in-out group"
        aria-label={CONFIG.buttons.openMenu}
      >
        <svg
          className="w-5 h-5 text-[#042a2b] group-hover:scale-110 transition-transform duration-200 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Overlay Navigation for medium screens */}
      {(isOpen || isAnimating) && (
        <div className={`fixed inset-0 z-50 lg:hidden md:block hidden 
          transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm 
              transition-all duration-500 ease-in-out ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute left-0 top-24 h-[calc(100vh-6rem)] 
            transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-x-0 scale-100' : '-translate-x-full scale-95'
          }`}>
            <Sidebar isOverlay={true} />
          </div>
        </div>
      )}

      {/* Permanent Sidebar for large screens */}
      <div className="hidden lg:block fixed left-0 top-24">
        <Sidebar isOverlay={false} />
      </div>

      {/* Expand button when collapsed */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="hidden lg:flex fixed left-4 top-24 items-center justify-center w-10 h-10 
            bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:bg-white 
            transition-all duration-300 ease-in-out group z-50"
          aria-label={CONFIG.buttons.expandNav}
        >
          <svg
            className="w-5 h-5 text-[#042a2b] group-hover:scale-110 transition-transform duration-200 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  );
} 