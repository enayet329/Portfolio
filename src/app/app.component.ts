import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showBackToTop = false;

  constructor(title: Title) {
    title.setTitle('MD Enayet Hossain — .NET Backend Developer');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop = (window.scrollY ?? 0) > 600;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
