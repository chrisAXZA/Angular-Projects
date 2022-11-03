import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

    constructor(private elementRef: ElementRef) { 
        this.setHeight(180);
        this.setBorder('#f5f5f5');
    }

    setHeight(height: number) {
        this.elementRef.nativeElement.style.height = `${height}px`;
    }

    setBorder(color: string) {
        this.elementRef.nativeElement.style.border = `solid 4px ${color}`;
    }
}
