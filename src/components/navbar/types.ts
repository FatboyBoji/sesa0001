export interface NavbarProps {
    className?: string;
  }
  
  export interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export interface ServiceItem {
    name: string;
    id: string;
    href?: string;
  }
  
  export interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
  }
  
  export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface ServicesDropdownProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    services: ServiceItem[];
    isActive: boolean;
    href: string;
    label: string;
  }
  
  export interface MobileServicesDropdownProps {
    isOpen: boolean;
    onToggle: () => void;
    services: ServiceItem[];
    isActive: boolean;
    onServiceClick: () => void;
    href: string;
    label: string;
  }