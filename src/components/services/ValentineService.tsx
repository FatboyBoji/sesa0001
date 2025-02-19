import { Service } from '@/types/services';
import Link from 'next/link';

export const ValentineService: Service = {
  title: "Valentine",
  description: "Create unique and personalized Valentine's messages for your loved ones.",
  items: []
};

export default function ValentineSection({ service }: { service: Service }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{service.title}</h2>
          <p className="mt-2 text-lg text-gray-600">{service.description}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Create Your Valentine's Message</h3>
          <p className="text-gray-600">
            Express your feelings with our Valentine's message creator. Create beautiful, personalized messages
            that will make your loved ones smile.
          </p>
          <Link
            href="/valentine"
            className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg
                     hover:bg-pink-700 transition-colors duration-300 
                     shadow-lg hover:shadow-xl font-medium"
          >
            Create Valentine's Message
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 