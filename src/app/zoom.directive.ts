import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]',
  standalone: true
})
export class ZoomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private setFontSize(size: string) {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', size);
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.03 s');
  }

  @HostListener('mouseeneter') onMouseEnter() {
    this.setFontSize('24 px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontSize('inherit');
  }
}
