import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[hightlight]"
})
export class HightlightDirective {
  elem: ElementRef;
  @HostListener("mouseenter") onMouseEnter() {
    //              lightgrey
    this.highlight("lightblue");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
  constructor(el: ElementRef) {
    this.elem = el;
  }
}
