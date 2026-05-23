import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly entries: Experience[] = [
    {
      id: 0,
      role: 'Jr. Software Engineer',
      company: 'Akij iBos',
      location: 'Dhaka, Bangladesh',
      duration: 'Nov 2024 – Present',
      current: true,
      bullets: [
        'Contributing to migration of enterprise OTA platform from PHP to ASP.NET Core, improving scalability and maintainability',
        'Integrated Sabre, Travelport, Amadeus, and Zenith GDS APIs for real-time flight search and booking',
        'Designed and implemented dynamic commission, markup, and discount pricing engine',
        'Developed core booking workflows: price validation, PNR generation, and ticket issuing',
        'Optimized supplier API calls for high-concurrency environments',
        'Participated in architecture discussions and code reviews to keep the system modular',
      ],
      tech: ['ASP.NET Core', 'Microservices', 'MSSQL', 'Dapper', 'gRPC', 'REST'],
    },
    {
      id: 1,
      role: 'Software Engineering Intern',
      company: 'Akij iBos',
      location: 'Dhaka, Bangladesh',
      duration: 'Sept 2024 – Oct 2024',
      current: false,
      bullets: [
        'Developed TrackForce backend using ASP.NET Core and TimeScaleDB for employee activity monitoring',
        'Designed session logging and analytics modules with performance-optimized Dapper queries',
        'Implemented high-performance time-series data processing and reporting system',
      ],
      tech: ['ASP.NET Core', 'TimeScaleDB', 'Dapper'],
    },
    {
      id: 2,
      role: 'Software Engineering Intern',
      company: 'Itransition',
      location: 'Dhaka, Bangladesh',
      duration: 'July 2024 – Sept 2024',
      current: false,
      bullets: [
        'Contributed to development, testing, and deployment of enterprise-level applications',
        'Gained practical exposure to Agile methodologies and clean architecture practices',
      ],
      tech: ['ASP.NET Core', 'Agile', 'Clean Architecture'],
    },
  ];

  getAll(): Experience[] {
    return this.entries;
  }
}
