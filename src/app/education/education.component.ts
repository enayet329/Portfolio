import { Component } from '@angular/core';

interface Certification { icon: string; title: string; }
interface Achievement   { icon: string; title: string; }

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  readonly certifications: Certification[] = [
    { icon: '🏅', title: 'Microservices Architecture — Enterprise Distributed System Design' },
    { icon: '🏅', title: 'OpenAI API Integration' },
    { icon: '🏅', title: 'Microsoft Semantic Kernel' },
  ];

  readonly achievements: Achievement[] = [
    { icon: '🏆', title: 'Solved 600+ algorithmic problems across Codeforces, LeetCode, and GeeksforGeeks' },
    { icon: '🚀', title: 'Contributing to a live enterprise OTA platform serving real users' },
    { icon: '⚡', title: 'Delivered measurable performance improvements (3× throughput, 70% faster reports)' },
  ];
}
