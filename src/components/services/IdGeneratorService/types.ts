import { Service } from '@/types/services';

export interface IdGeneratorService {
  title: string;
  description: string;
  items: Array<{
    title: string;
    status: string;
    link: string;
    type: 'service';
    description: string;
    apiEndpoint: boolean;
    previewFormat: string;
  }>;
}

export interface IdGeneratorServiceProps {
  service: IdGeneratorService;
} 