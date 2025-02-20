import { motion } from 'framer-motion';
import Link from 'next/link';
import { ServiceItem, ServicesDropdownProps } from '../types';
import { navigationConfig } from '../config';

export default function ServicesDropdown({ 
  isOpen, 
  onOpenChange, 
  services, 
  isActive,
  href,
  label 
}: ServicesDropdownProps) {
  const getServiceLink = (service: ServiceItem) => {
    // Use the service's href if it exists, otherwise fallback to services page anchor
    return service.href || `/services#${service.id}`;
  };

  return (
    <li 
      className="group relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <Link
        href={href}
        className={`
          px-4 py-2 rounded-full
          text-base font-medium
          transition-all duration-300
          flex items-center gap-2
          ${isActive ? 
            'bg-black text-white shadow-md transform scale-105' : 
            'text-gray-600 hover:bg-gray-100 hover:text-black'
          }
        `}
      >
        {label}
        <svg 
          className="w-4 h-4 transition-transform group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div className={`
        absolute left-0 top-[calc(100%+0.5rem)]
        w-64 
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
        rounded-lg shadow-lg
        border border-gray-100
        z-[102]
        ${isActive ? 
          'bg-gray-900 border-gray-800' : 
          'bg-white'
        }
      `}>
        <div className="py-2">
          {services.map((service, index) => (
            <Link
              key={index}
              href={getServiceLink(service)}
              className={`
                block px-4 py-2.5
                text-sm
                transition-colors
                ${isActive ?
                  'text-gray-300 hover:bg-gray-800 hover:text-white' :
                  'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                }
              `}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}