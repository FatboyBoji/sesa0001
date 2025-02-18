export type NavItem = {
  href: string;
  label: string;
  type: 'link' | 'dropdown';
  order: number;
  dropdownItems?: {
    name: string;
    id: string;
  }[];
}

export const navigationConfig: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    type: 'link',
    order: 1
  },
  {
    href: '/about',
    label: 'About',
    type: 'link',
    order: 2
  },
  {
    href: '/services',
    label: 'DevLab',
    type: 'dropdown',
    order: 3,
    dropdownItems: [
        { name: "ID Generator", id: "id-generator" },
        { name: "Javadoc Repository", id: "javadoc-repository" },
        { name: "Test Service 2", id: "test-service-2" },
        { name: "Nitora", id: "nitora" },
    ]
  },
  {
    href: '/contact',
    label: 'Contact',
    type: 'link',
    order: 4
  },
  // {
  //   href: '/valentine',
  //   label: 'Valentine',
  //   type: 'link',
  //   order: 5
  // }
]; 