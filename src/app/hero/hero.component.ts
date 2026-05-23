import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollService } from '../_services/scroll.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  mouseX = 0;
  mouseY = 0;

  private readonly fullText = "hi, I'm Enayet";
  private timer?: ReturnType<typeof setTimeout>;

  constructor(readonly scrollService: ScrollService) {}

  ngOnInit(): void {
    this.typeNext(0);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  goTo(event: Event, id: string): void {
    event.preventDefault();
    this.scrollService.scrollToId(id);
  }

  downloadResume(event: Event): void {
    event.preventDefault();
    this.scrollService.downloadResume();
  }

  onMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  private typeNext(i: number): void {
    if (i > this.fullText.length) return;
    this.typedText = this.fullText.slice(0, i);
    this.timer = setTimeout(() => this.typeNext(i + 1), 80);
  }
}
