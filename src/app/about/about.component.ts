import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readonly stats: Stat[] = [
    { icon: '🚀', value: '600+',  label: 'Algorithmic Problems Solved' },
    { icon: '🏢', value: 'OTA',   label: 'Enterprise Platform Contributor' },
    { icon: '⚡', value: '3×',    label: 'Performance Improvement Delivered' },
    { icon: '👥', value: '500+',  label: 'Employees Supported via Built Systems' },
  ];
}
