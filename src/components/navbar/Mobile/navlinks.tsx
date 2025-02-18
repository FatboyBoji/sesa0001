import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigationConfig } from '../config';
import MobileServicesDropdown from './services_dropdown';

interface MobileNavLinksProps {
  onLinkClick?: () => void;
}

export default function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
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
    <ul className="space-y-4">
      {sortedNavItems.map((item) => {
        if (item.type === 'dropdown') {
          return (
            <li key={item.href}>
              <MobileServicesDropdown
                isOpen={openDropdowns[item.href] || false}
                onToggle={() => handleDropdownToggle(item.href)}
                services={item.dropdownItems || []}
                isActive={isLinkActive(item.href)}
                onServiceClick={onLinkClick || (() => {})}
                href={item.href}
                label={item.label}
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
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}