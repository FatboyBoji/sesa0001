import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig } from '../config';
import ServicesDropdown from './services_dropdown';
import { useState } from 'react';

export default function DesktopNavLinks() {
  const pathname = usePathname();
  const [isServicesOpen, setServicesOpen] = useState(pathname.startsWith('/services'));
  
  const isLinkActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // Sort items by order
  const sortedNavItems = [...navigationConfig].sort((a, b) => a.order - b.order);

  return (
    <ul className="hidden md:flex items-center gap-8 relative z-[101]">
      {sortedNavItems.map((item) => {
        if (item.type === 'dropdown') {
          return (
            <ServicesDropdown
              key={item.href}
              isOpen={isServicesOpen}
              onOpenChange={setServicesOpen}
              services={item.dropdownItems || []}
              isActive={isLinkActive(item.href)}
            />
          );
        }

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                px-4 py-2 rounded-full
                text-base font-medium
                transition-all duration-300
                ${isLinkActive(item.href) ? 
                  'bg-black text-white shadow-md transform scale-105' : 
                  'text-gray-600 hover:bg-gray-100 hover:text-black'
                }
              `}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}