import { Service } from '@/types/services';
import { TestServiceProps } from './types';
import ServiceCard from '../ServiceCard';

export const TestService: Service = {
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
};

export default function TestSection({ service }: TestServiceProps) {
  return (
    <section id="test-service" className="mb-16 scroll-mt-32">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600">
          {service.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {service.items.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
