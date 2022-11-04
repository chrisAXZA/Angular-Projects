import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
    // @Input() pokemonBorderCard: string; // without alias
    @Input('pokemonBorderCard') borderColor: string; // with alias
    private initialColor :string = '#f5f5f5';
    private defaultColor :string = '#009688';
    private defaultHeight :number = 180;

    // TODO: Implement RendererFactory2 ?
    // nativeElement creates tight coupling between your application 
    // and rendering layers which will make it impossible to separate 
    // the two and deploy your application into a web worker. 
    constructor(private elementRef: ElementRef) {
        this.setHeight(this.defaultHeight);
        this.setBorder(this.initialColor);
    }

    // TODO: Add angular animation hover effect
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
        this.setTransition('1000ms');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
        this.setTransition('1000ms');
    }

    private setTransition(time: string) {
        this.elementRef.nativeElement.style.transition = `${time}`;
    }

    private setHeight(height: number) {
        this.elementRef.nativeElement.style.height = `${height}px`;
    }

    private setBorder(color: string) {
        let border = `solid 4px ${color}`
        this.elementRef.nativeElement.style.border = border;
    }
}
