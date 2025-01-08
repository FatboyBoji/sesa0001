import Link from 'next/link';
import { ServiceItemType } from '@/types/services';

interface ServiceCardProps {
  item: ServiceItemType;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <Link href={item.link} className="group">
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
  );
} 