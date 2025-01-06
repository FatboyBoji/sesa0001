import Navbar from '../../components/navbar';
import SesaBG from '../../components/sesa_background';
import Link from 'next/link';
import ServicesSideNav from '../../components/services-sidenav';
import Footer from '@/components/Footer';

interface JavadocItem {
  version: string;
  status: string;
  link: string;
  type: 'javadoc';
}

interface ServiceItem {
  title: string;
  status: string;
  link: string;
  type: 'service';
  inDevelopment?: boolean;
}

type ServiceItemType = JavadocItem | ServiceItem;

interface Service {
  title: string;
  description: string;
  items: ServiceItemType[];
}

// Define the version data
const javadocVersions = [
  { version: '22.0.1', status: 'latest' },
  { version: '21.0.3', status: 'stable' },
  { version: '20.0.2', status: 'stable' },
  { version: '17.0.11', status: 'lts' },
  { version: '17.0.8', status: 'lts' },
  { version: '11.0.1', status: 'legacy' },
  { version: '10.0.1', status: 'legacy' },
  { version: '9.0.4', status: 'legacy' },
  { version: '1.8.192', status: 'legacy' },
  { version: '1.8.05', status: 'legacy' },
  { version: '1.7.02', status: 'legacy' },
  { version: '1.6.0', status: 'legacy' },
  { version: '1.5.0', status: 'legacy' },
  { version: '1.4.2', status: 'legacy' },
];

const services: Service[] = [
  {
    title: "Javadoc Repository",
    description: "Access comprehensive Java API documentation across multiple versions",
    items: javadocVersions.map(version => ({
      ...version,
      // took link structure from the old website
      link: `http://178.254.12.86:4080/exported/data/jdk${version.version}/doc/index.html`,
      type: 'javadoc' as const
    }))
  },
  {
    title: "Test Service 2",
    description: "Description for test service 2",
    items: [
      { 
        title: "Feature 1", 
        status: "alpha", 
        link: "/error_pages/404_not_found",
        type: 'service' as const,
        inDevelopment: true 
      },
      { 
        title: "Feature 2", 
        status: "beta", 
        link: "/error_pages/404_not_found",
        type: 'service' as const,
        inDevelopment: true 
      },
    ]
  },
  {
    // haha easteregg, will be soon released :)
    title: "Nitora",
    description: "first chat service provided by SESA",
    items: [
      { 
        title: "ChatApp1", 
        status: "stabel", 
        link: "/not-implemented-yet",
        type: 'service' as const,
        inDevelopment: true 
      },
      { 
        title: "ChatApp2", 
        status: "beta", 
        link: "/not-implemented-yet",
        type: 'service' as const,
        inDevelopment: true 
      },
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SesaBG />

      <Navbar />

      <div className="flex-grow flex">
        <ServicesSideNav services={services} />

        {/*--------------------------------------------- Main body ---------------------------------------------*/}
        <main className="flex-grow lg:ml-72 px-6 py-16 relative z-10">
          {services.map((service, index) => (
            <section 
              key={index} 
              id={service.title.toLowerCase().replace(/\s+/g, '-')} 
              className="mb-16 scroll-mt-32"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {service.items.map((item, itemIndex) => (
                  <Link 
                    href={item.link} 
                    key={itemIndex}
                    className="group"
                  >
                    <div className="service-card">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.type === 'javadoc' 
                            ? `Version ${item.version}`
                            : item.title}
                        </h3>
                        {item.status && (
                          <span className={`service-badge ${
                            item.status === 'latest' ? 'bg-green-100 text-green-800' :
                            item.status === 'lts' ? 'bg-blue-100 text-blue-800' :
                            item.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        )}
                      </div>
                      {/*here is the describtion of the javadoc card hardcoded for each one */}
                      <p className="text-gray-600 text-sm">
                        {item.type === 'javadoc' ? 'View complete documentation' : 'Learn more'}
                      </p>
                      <div className="mt-4 text-blue-600 group-hover:text-blue-800 text-sm font-medium flex items-center">
                        Access {item.type === 'javadoc' ? 'Documentation' : 'Service'}
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/*--------------------------------------------- footer ---------------------------------------------*/}
      <Footer />
    </div>
  );
}
