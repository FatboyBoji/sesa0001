export type NavItem = {
  href: string;
  label: string;
  type: 'link' | 'dropdown';
  order: number;
  dropdownItems?: {
    name: string;
    id: string;
    href?: string;
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
    href: '/solutions',
    label: 'Solutions',
    type: 'dropdown',
    order: 2,
    dropdownItems: [
      { name: "Products", id: "products", href: "/solutions/products" },
      { name: "Business Services", id: "business", href: "/solutions/business" },
      { name: "Investment Options", id: "investing", href: "/solutions/investing" }
    ]
  },
  {
    href: '/news_updates',
    label: 'Resources',
    type: 'dropdown',
    order: 3,
    dropdownItems: [
      { name: "News & Updates", id: "news", href: "/news_updates" },
      { name: "Company History", id: "history", href: "/resources/history" },
      { name: "Forum", id: "forum", href: "/forum" }
    ]
  },
  {
    href: '/services',
    label: 'DevLab',
    type: 'dropdown',
    order: 4,
    dropdownItems: [
      { name: "ID Generator", id: "id-generator" },
      { name: "Javadoc Repository", id: "javadoc-repository" },
      { name: "Valentine", id: "valentine", href: "/valentine" },
      { name: "Public Key", id: "public-key", href: "/sesa_public_key" },
      { name: "Nitora", id: "nitora" }
    ]
  },
  {
    href: '/contact',
    label: 'Contact',
    type: 'link',
    order: 5
  }
]; 