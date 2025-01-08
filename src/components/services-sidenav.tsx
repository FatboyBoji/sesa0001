"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Service } from '@/types/services';

interface ServicesSideNavProps {
  services: Service[];
}

export default function ServicesSideNav({ services }: ServicesSideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getServiceId = (service: Service) => {
    const idMap: { [key: string]: string } = {
      'Javadoc Repository': 'javadoc-repository',
      'Test Service 2': 'test-service-2',
      'Nitora': 'nitora'
    };
    return idMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-');
  };

  const renderServicesList = () => (
    <ul className="space-y-3">
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

  return (
    <>
      {/* Menu Button for medium screens */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 left-4 z-50 lg:hidden md:block hidden p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-white/90 transition-all"
        aria-label="Open Services Menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay Navigation for medium screens */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden md:block hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute left-0 top-0 h-full w-72 bg-white/95 shadow-lg">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Close Services Menu"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col h-[calc(100%-4rem)] justify-between pb-16">
              <div className="flex-grow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Services Overview
                </h2>
                {renderServicesList()}
              </div>

              <div className="px-6 pb-6">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Select a service to view its details and available features.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium group"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Support
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
            </div>
          </div>
        </div>
      )}

      {/* Permanent Sidebar for large screens */}
      <nav className="hidden lg:block fixed left-0 top-24 w-72 h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="h-full mx-4 bg-white/40 backdrop-blur-sm rounded-t-2xl shadow-[0_0_15px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col h-full justify-between pb-16">
            <div className="flex-grow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Services Overview
              </h2>
              {renderServicesList()}
            </div>

            <div className="px-6 pb-6">
              <div className="bg-gradient-to-br from-white/70 to-white/50 rounded-xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Select a service to view its details and available features.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium group"
                >
                  Contact Support
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
          </div>
        </div>
      </nav>
    </>
  );
} 