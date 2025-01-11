"use client";

import { usePathname } from 'next/navigation';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';
import { NavbarProps } from './types';

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  
  return (
    <>
      <DesktopNavbar className={className} />
      <MobileNavbar className={className} />
    </>
  );
}
