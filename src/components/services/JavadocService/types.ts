import { JavadocItem, Service } from '@/types/services';

export interface JavadocVersion {
  version: string;
  status: string;
}

export interface JavadocServiceProps {
  service: Service;
}
