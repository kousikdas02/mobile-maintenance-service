import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, Renderer2, SecurityContext, afterNextRender, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[dropdown]',
  standalone: true
})
export class DropdownDirective {

  @Input() dropdown!: HTMLElement;
  @Input() isOpen: boolean = false;
  private element = inject(ElementRef);
  private sanitizer = inject(DomSanitizer);
  private renderer = inject(Renderer2)
  arrowDown!: SafeHtml;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {
    afterNextRender(() => {
      const _arrowDown = `<svg class="__toggle__icon" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M7.00003 7.6364C6.83728 7.6364 6.67438 7.57419 6.55013 7.44994L0.186494 1.08631C-0.0621647 0.837653 -0.0621647 0.434994 0.186494 0.186494C0.435153 -0.0620056 0.837812 -0.0621647 1.08631 0.186494L7.00003 6.10022L12.9138 0.186494C13.1624 -0.0621647 13.5651 -0.0621647 13.8136 0.186494C14.0621 0.435153 14.0622 0.837812 13.8136 1.08631L7.44994 7.44994C7.32569 7.57419 7.16278 7.6364 7.00003 7.6364Z" fill="black"/></svg>`
      this.arrowDown = this.sanitizer.bypassSecurityTrustHtml(_arrowDown);
      this.__setElementIcon(this.arrowDown);
      this.__bindElement();
      this.__init();
    });
  }



  private __onOpenOrClose(e: Event): void {
    if (!this.element || !this.dropdown) return;
    this.isOpen = !this.isOpen
    const _element: HTMLElement = this.element.nativeElement;
    const iconContainer: HTMLElement = _element.querySelector('.__toggle__icon') as HTMLElement;
    if (!iconContainer) return;
    this.isOpen ? iconContainer.style.transform = 'rotate(180deg)' : iconContainer.style.transform = 'rotate(0deg)';
    this.isOpen ? (this.dropdown.classList.add('open'), _element.classList.add('active'), _element.style.pointerEvents = 'all', this.dropdown.style.display = 'block') : (this.dropdown.classList.remove('open'), _element.classList.remove('active'), _element.style.pointerEvents = 'all', this.dropdown.style.display = 'none');
  }

  private __bindElement(): void {
    if (!this.element) return (() => { setTimeout(() => { this.__bindElement() }, 100); })();
    const _element: HTMLElement = this.element.nativeElement;
    _element.style.position = 'relative';
    _element.removeAttribute('src');
    _element.addEventListener('click', ((e) => { this.__onOpenOrClose(e) }))
  }


  private __setElementIcon(arrowDown: SafeHtml): void {
    if (!arrowDown) return
    if (!this.element) return (() => { setTimeout(() => { this.__setElementIcon(arrowDown) }, 100); })();
    const _element: HTMLElement = this.element.nativeElement;
    if (!_element) return;
    const iconContainer: HTMLElement = this.renderer.createElement('div');
    iconContainer.classList.add('__toggle__icon');
    iconContainer.style.position = 'absolute';
    iconContainer.style.right = '15px';
    iconContainer.style.top = '0px';
    iconContainer.style.bottom = '0px';
    iconContainer.style.display = 'flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.transition = 'ease-out .2s';
    const _iconContainer = iconContainer.cloneNode();
    const isExist = _element.querySelector('.__toggle__icon');
    if (!isExist) {
      this.renderer.setProperty(iconContainer, 'innerHTML', arrowDown);
      const svg = iconContainer.querySelector('svg');
      svg && _iconContainer.appendChild(svg)
      this.renderer.appendChild(_element, _iconContainer)
    };
  }


  private __init(): void {
    if (!this.dropdown) return (() => { setTimeout(() => { this.__init() }, 100); })()
    if (this.dropdown instanceof HTMLElement) {
      const _element: HTMLElement = this.element.nativeElement;
      // console.log(this.dropdown);
      this.isOpen ? (this.dropdown.classList.add('open'), _element.classList.add('active'), _element.style.pointerEvents = 'all', this.dropdown.style.display = 'block') : (this.dropdown.classList.remove('open'), _element.classList.remove('active'), _element.style.pointerEvents = 'all', this.dropdown.style.display = 'none');
    }
  }

}
