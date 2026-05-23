import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  /**
   * Smoothly scrolls to the element with the given ID, compensating for
   * the fixed/sticky nav so the section's top edge lands just below it.
   */
  scrollToId(id: string): void {
    if (typeof document === 'undefined') return;

    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector('.nav-shell') as HTMLElement | null;
    const navHeight = nav?.offsetHeight ?? 64;
    const buffer = 8;

    const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight - buffer;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }

  /**
   * Convenience for hero -> top scrolling.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Opens the resume PDF in a new tab. Swap the URL for a hosted PDF
   * (or `assets/resume/...`) once the real file is in place.
   */
  downloadResume(): void {
    const url = 'https://drive.google.com/file/d/1t13H8ncsBeFSxEgwlHY4YozhgHJqV-F9/view?usp=sharing';
    window.open(url, '_blank', 'noopener');
  }
}
