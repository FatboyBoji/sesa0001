export type ServiceId = 'ID Generator Services' | 'Javadoc Repository' | 'Test Service 2' | 'Nitora';

export const SERVICES_SIDENAV_CONFIG = {
  titles: {
    mainOverview: "Übersicht",
    resourceOverview: "Übersicht",
    helpSection: "Need Help?"
  },
  messages: {
    serviceSelection: "Select a service to view its details and available features.",
  },
  buttons: {
    contactSupport: "Contact Support",
    openMenu: "Open Services Menu",
    closeMenu: "Close Services Menu",
    collapseNav: "Collapse Navigation",
    expandNav: "Expand Navigation"
  },
  idMappings: {
    'ID Generator Services': 'id-generator',
    'Javadoc Repository': 'javadoc-repository',
    'Test Service 2': 'test-service-2',
    'Nitora': 'nitora'
  } as Record<ServiceId, string>
} as const; 