import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('dark');

  init(): void {
    const stored = (typeof localStorage !== 'undefined'
      ? (localStorage.getItem(STORAGE_KEY) as Theme | null)
      : null);

    if (stored === 'dark' || stored === 'light') {
      this.apply(stored);
      return;
    }

    const prefersLight = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-color-scheme: light)').matches;
    this.apply(prefersLight ? 'light' : 'dark');
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }
}
