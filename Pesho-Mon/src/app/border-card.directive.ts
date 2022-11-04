import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
    @Input('pokemonBorderCard') borderColor: string;

    // TODO: Implement RendererFactory2 ?
    // nativeElement creates tight coupling between your application 
    // and rendering layers which will make it impossible to separate 
    // the two and deploy your application into a web worker. 
    constructor(private elementRef: ElementRef) {
        this.setHeight(180);
        this.setBorder('#f5f5f5');
    }

    // TODO: Add angular animation hover effect
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || '#009688');
        this.setTransition('1000ms')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
        this.setTransition('1000ms')
    }

    private setTransition(time: string) {
        this.elementRef.nativeElement.style.transition = `time`;
    }

    private setHeight(height: number) {
        this.elementRef.nativeElement.style.height = `${height}px`;
    }

    private setBorder(color: string) {
        this.elementRef.nativeElement.style.border = `solid 4px ${color}`;
    }
}
