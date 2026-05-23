import { Tag } from './Tag';

export type ProjectStatus = 'live' | 'production' | 'completed';

export interface Project {
  id: number;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  status?: ProjectStatus;
  statusLabel?: string;
  duration: string;
  projectLink?: string;
  liveLink?: string;
  pictures: string[];
  tags: Tag[];
}
