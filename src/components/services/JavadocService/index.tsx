import { Service } from '@/types/services';
import { javadocVersions } from './constants';
import ServiceCard from '../ServiceCard';

export const JavadocService: Service = {
  title: "Javadoc Repository",
  description: "Access comprehensive Java API documentation across multiple versions",
  items: javadocVersions.map(version => ({
    ...version,
    link: `http://178.254.12.86:4080/exported/data/jdk${version.version}/doc/index.html`,
    type: 'javadoc' as const
  }))
};

interface JavadocSectionProps {
  service: Service;
}

export default function JavadocSection({ service }: JavadocSectionProps) {
  return (
    <section id="javadoc-repository" className="mb-16 scroll-mt-32">
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