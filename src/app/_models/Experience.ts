export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  bullets: string[];
  tech?: string[];
}
