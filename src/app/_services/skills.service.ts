import { Injectable } from '@angular/core';
import { SkillCategory } from '../_models/SkillCategory';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly categories: SkillCategory[] = [
    {
      id: 'languages',
      icon: '🧠',
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 'Advanced' },
        { name: 'C++' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
      ],
    },
    {
      id: 'backend',
      icon: '⚙️',
      title: 'Backend Development',
      skills: [
        { name: 'ASP.NET Core' },
        { name: 'Web API' },
        { name: 'Entity Framework Core' },
        { name: 'Dapper' },
        { name: 'AutoMapper' },
        { name: 'Dependency Injection' },
        { name: 'Middleware' },
      ],
    },
    {
      id: 'architecture',
      icon: '🏗️',
      title: 'Architecture & Design',
      skills: [
        { name: 'Microservices' },
        { name: 'Clean Architecture' },
        { name: 'Domain-Driven Design' },
        { name: 'SOLID' },
        { name: 'Plugin-Based Systems' },
      ],
    },
    {
      id: 'api',
      icon: '🔌',
      title: 'API & Integration',
      skills: [
        { name: 'RESTful APIs' },
        { name: 'gRPC' },
        { name: 'JWT Authentication' },
        { name: 'Third-party API Integration' },
      ],
    },
    {
      id: 'gds',
      icon: '✈️',
      title: 'GDS Systems',
      skills: [
        { name: 'Sabre' },
        { name: 'Travelport' },
        { name: 'Amadeus' },
        { name: 'Zenith' },
      ],
    },
    {
      id: 'databases',
      icon: '🗄️',
      title: 'Databases',
      skills: [
        { name: 'MSSQL Server' },
        { name: 'MongoDB' },
        { name: 'TimeScaleDB' },
      ],
    },
    {
      id: 'messaging',
      icon: '📨',
      title: 'Messaging & Streaming',
      skills: [
        { name: 'RabbitMQ' },
        { name: 'Kafka' },
      ],
    },
    {
      id: 'frontend',
      icon: '🎨',
      title: 'Frontend',
      skills: [
        { name: 'Angular' },
        { name: 'Bootstrap' },
        { name: 'HTML5' },
        { name: 'CSS3' },
      ],
    },
    {
      id: 'devops',
      icon: '🛠️',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker' },
        { name: 'IIS' },
        { name: 'Git / GitHub' },
        { name: 'Swagger' },
        { name: 'Postman' },
      ],
    },
  ];

  getAll(): SkillCategory[] {
    return this.categories;
  }
}
