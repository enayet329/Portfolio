import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 0,
      name: 'Travilo',
      tagline: 'OTA Flight Booking Platform',
      duration: 'Nov 2024 – Present',
      status: 'live',
      statusLabel: 'Live (UAT)',
      summary:
        'Enterprise-grade Online Travel Agency platform supporting real-time flight aggregation, booking, and ticketing.',
      description:
        'Travilo is a production OTA platform that aggregates flight inventory from multiple Global Distribution System (GDS) suppliers in real time. The system handles dynamic pricing, commission/markup engines, PNR generation, secure ticketing, and high-concurrency search across distributed services.',
      highlights: [
        'Aggregated multi-supplier flight results from Sabre, Travelport, Amadeus, and Zenith',
        'Implemented dynamic pricing, commission, and markup management engine',
        'Designed secure booking and transaction workflows including PNR + ticket issuing',
        'Improved response performance through optimized data processing strategies',
        'Optimized search result processing using gRPC streaming',
      ],
      projectLink: '',
      liveLink: 'https://travilo.io/#features',
      pictures: [
        'assets/project/travilo/1.png',
        'assets/project/travilo/2.png',
        'assets/project/travilo/3.png',
      ],
      tags: [
        Tag.ASPNET, Tag.Microservices, Tag.MSSQL, Tag.Dapper,
        Tag.REST, Tag.gRPC, Tag.Sabre, Tag.Travelport, Tag.Amadeus, Tag.Zenith,
      ],
    },
    {
      id: 1,
      name: 'Enterprise Microservices E-Commerce',
      tagline: 'Distributed E-Commerce System',
      duration: 'Jan 2024 – Mar 2024',
      status: 'completed',
      statusLabel: 'Completed',
      summary:
        'Distributed microservices system for modern e-commerce operations with async messaging.',
      description:
        'A reference-grade microservices architecture covering catalog, basket, ordering, and payment domains. Services communicate asynchronously via RabbitMQ, isolated by domain boundaries, deployed in Docker, and exposed via REST + gRPC.',
      highlights: [
        'Designed distributed microservices for catalog, cart, and order management',
        'Implemented asynchronous communication using RabbitMQ',
        'Achieved 3× performance improvement through service isolation and optimization',
        'Containerized full stack with Docker for reproducible deployments',
      ],
      projectLink: 'https://github.com/enayet329/AspnetMicroservices',
      liveLink: '',
      pictures: [
        'assets/project/asp.net/1.png',
        'assets/project/asp.net/2.png',
        'assets/project/asp.net/3.jpg',
      ],
      tags: [
        Tag.ASPNET, Tag.NETWebAPI, Tag.EntityFramework, Tag.Microservices,
        Tag.Docker, Tag.gRPC, Tag.RabbitMQ, Tag.MSSQL, Tag.MongoDB,
      ],
    },
    {
      id: 2,
      name: 'TrackForce',
      tagline: 'Employee Analytics System',
      duration: 'Sept 2024 – Present',
      status: 'production',
      statusLabel: 'Live (Production)',
      summary:
        'Real-time workforce analytics platform for enterprise productivity tracking.',
      description:
        'TrackForce is a workforce activity analytics backend used internally to monitor sessions, productivity, and reporting across 500+ employees. Built on ASP.NET Core with TimeScaleDB for high-volume time-series data and Dapper for performance-tuned queries.',
      highlights: [
        'Built workforce analytics system supporting 500+ employees',
        'Designed session logging and analytics modules with Dapper-tuned queries',
        'Implemented high-performance time-series processing on TimeScaleDB',
        'Optimized query performance achieving ~70% faster reporting',
      ],
      projectLink: '',
      liveLink: 'https://trackforce.io/',
      pictures: [
        'assets/project/trackforce/1.png',
        'assets/project/trackforce/2.png',
        'assets/project/trackforce/3.png',
      ],
      tags: [Tag.ASPNET, Tag.TimeScaleDB, Tag.Dapper, Tag.REST, Tag.CleanArchitecture],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  /** Returns the first project marked as `live` or `production`, falling back to id 0. */
  getFeatured(): Project {
    return this.projects.find(p => p.status === 'live')
        ?? this.projects.find(p => p.status === 'production')
        ?? this.projects[0];
  }
}
