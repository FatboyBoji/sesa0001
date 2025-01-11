import { IdGeneratorServiceProps } from './types';
import IdGeneratorCard from './IdGeneratorCard';
import type { IdGeneratorItem } from './IdGeneratorCard';

const idGeneratorConfig = {
  title: "ID Generator Services",
  description: "Generate unique identifiers for your applications",
  items: [
    {
      title: "Simple ID Generator",
      status: "stable",
      link: "/api/idGenerator?type=simple",
      type: 'service' as const,
      description: "Generate standard unique identifiers",
      apiEndpoint: true,
      previewFormat: "0053XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
    },
    {
      title: "Complex ID Generator",
      status: "stable",
      link: "/api/idGenerator?type=complex",
      type: 'service' as const,
      description: "Generate complex compound identifiers",
      apiEndpoint: true,
      previewFormat: "0053XXXX-XXXX-XXXX-...-XXXX-XXXXXXXXXXXX"
    }
  ]
};

const IdGeneratorSection = ({ service }: IdGeneratorServiceProps) => {
  return (
    <section id="id-generator" className="mb-16 scroll-mt-32">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600">
          {service.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {service.items.map((item: IdGeneratorItem, index: number) => (
          <IdGeneratorCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export { idGeneratorConfig as IdGeneratorService };
export default IdGeneratorSection; 