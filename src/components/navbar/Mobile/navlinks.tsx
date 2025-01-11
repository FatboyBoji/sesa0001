import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from '../types';
import { NAV_ITEMS } from '../constants';

interface MobileNavLinksProps {
  onLinkClick?: () => void;
}

export default function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
  const pathname = usePathname();
  
  const isLinkActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <ul className="space-y-4">
      {NAV_ITEMS.map((item) => (
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
      ))}
    </ul>
  );
}