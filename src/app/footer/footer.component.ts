import { Component } from '@angular/core';
import { ScrollService } from '../_services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly links = ['about', 'skills', 'experience', 'projects', 'contact'];

  constructor(private readonly scrollService: ScrollService) {}

  goTo(event: Event, id: string): void {
    event.preventDefault();
    this.scrollService.scrollToId(id);
  }

  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
