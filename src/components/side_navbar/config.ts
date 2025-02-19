export type ServiceId = 'ID Generator' | 'Javadoc Repository' | 'Valentine' | 'Public Key' | 'Nitora';

export const SERVICES_SIDENAV_CONFIG = {
  titles: {
    resourceOverview: 'DevLab Overview',
    helpSection: 'Need Help?'
  },
  messages: {
    serviceSelection: 'Not sure which service to use? Contact our support team for guidance.',
  },
  buttons: {
    openMenu: 'Open Services Menu',
    closeMenu: 'Close Services Menu',
    expandNav: 'Expand Navigation',
    collapseNav: 'Collapse Navigation',
    contactSupport: 'Contact Support'
  },
  idMappings: {
    'ID Generator': 'id-generator',
    'Javadoc Repository': 'javadoc-repository',
    'Valentine': 'valentine',
    'Public Key': 'public-key',
    'Nitora': 'nitora'
  } as Record<ServiceId, string>
} as const; 