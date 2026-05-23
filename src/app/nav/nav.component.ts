import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../_services/theme.service';
import { ScrollService } from '../_services/scroll.service';

interface NavLink { id: string; label: string; }

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly links: NavLink[] = [
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'education',  label: 'Education' },
    { id: 'contact',    label: 'Contact' },
  ];

  activeId = 'hero';
  scrolled = false;
  menuOpen = false;
  private observer?: IntersectionObserver;

  constructor(
    readonly themeService: ThemeService,
    private readonly scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.themeService.init();
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ids = ['hero', ...this.links.map(l => l.id)];
    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId = entry.target.id;
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = (window.scrollY ?? 0) > 16;
  }

  onLinkClick(event: Event, id: string): void {
    event.preventDefault();
    this.menuOpen = false;
    this.scrollService.scrollToId(id);
  }

  onBrandClick(event: Event): void {
    event.preventDefault();
    this.menuOpen = false;
    this.scrollService.scrollToTop();
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
