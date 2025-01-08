// a shared types directory

// this part are types used in the services-page
export interface JavadocItem {
  version: string;
  status: string;
  link: string;
  type: 'javadoc';
}

export interface ServiceItem {
  title: string;
  status: string;
  link: string;
  type: 'service';
  inDevelopment?: boolean;
}

export type ServiceItemType = JavadocItem | ServiceItem;

export interface Service {
  title: string;
  description: string;
  items: ServiceItemType[];
} 

// here more types can be added
