import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

    constructor(private elementRef: ElementRef) {
        this.setHeight(180);
        this.setBorder('#f5f5f5');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('#009688');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }

    private setHeight(height: number) {
        this.elementRef.nativeElement.style.height = `${height}px`;
    }

    private setBorder(color: string) {
        this.elementRef.nativeElement.style.border = `solid 4px ${color}`;
    }
}
