import { Service } from '@/types/services';
import { NitoraServiceProps } from './types';
import ServiceCard from '../ServiceCard';

export const NitoraService: Service = {
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
};

export default function NitoraSection({ service }: NitoraServiceProps) {
  return (
    <section id="nitora-service" className="mb-16 scroll-mt-32">
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
