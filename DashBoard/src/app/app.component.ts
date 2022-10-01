import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routeAnim', [
            // transition('1 -> 2', [
            // transition('* => *', [
            transition(':increment', [
                // styles for the host component can be set here
                // ie instead of inline style="position: relative"
                style({
                    position: 'relative',
                    overflow: 'hidden',
                }),
                // set position to absolute for both entering and leaving components
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        // top + left 0 must be relative to the content-section and
                        // not the actual browser window
                        top: 0,
                        left: 0,
                        // component width must be set to 100% in order to span the whole window width
                        // and not just the width of its content (content cards)
                        width: '100%',
                        height: '100%',
                        // display: 'block',
                    }),
                ], { optional: true }),
                // set opacity of entering component to zero, so that it remains invisible 
                // query(':enter', [
                //     style({
                //         opacity: 0,
                //         // height: '100%',
                //     }),
                // ], { optional: true }),
                group([
                    // first animate leaving component
                    query(':leave', [
                        // no starting styles to animate, only to a given style is required 
                        // an opacity style is already set
                        style({
                            // display: 'block',
                            // height: '100%',
                        }),
                        // ease-in (start off slow and then accelerate towards the end)
                        animate('350ms ease-in', style({
                            opacity: 0,
                            transform: 'translateX(-80px)',
                        })),
                    ], { optional: true }),
                    query(':enter', [
                        style({
                            // sets starting position of entering component
                            transform: 'translateX(80px)',

                            opacity: 0,
                            // display needs to be set to block, as default inline will not be rendered correctly
                            // display: 'block',
                            // height needs to be set to 100% to avoid overflow
                            // height: '100%',
                        }),
                        // end-state has alreadt opacity styling, so no explicit style has to be set
                        // in animate function
                        animate('500ms 120ms ease-out', style({
                            opacity: 1,
                            // moves into position
                            transform: 'translateX(0)',
                        })),
                    ], { optional: true }),
                ]),
            ]),
            transition(':decrement', [
                style({
                    position: 'relative',
                    overflow: 'hidden',
                }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }),
                ], { optional: true }),
                group([
                    query(':leave', [
                        style({
                            // display: 'block',
                            // height: '100%',
                        }),
                        // ease-in (start off slow and then accelerate towards the end)
                        animate('350ms ease-in', style({
                            opacity: 0,
                            transform: 'translateX(80px)',
                        })),
                    ], { optional: true }),
                    query(':enter', [
                        style({
                            // sets starting position of entering component
                            transform: 'translateX(-80px)',
                            opacity: 0,
                        }),
                        // style for entering animation
                        animate('500ms 120ms ease-out', style({
                            opacity: 1,
                            // moves into position
                            transform: 'translateX(0)',
                        })),
                    ], { optional: true }),
                ]),
            ]),
            // transition from secondary to any state
            transition('secondary => *', [
                style({
                    position: 'relative',
                    // overflow: 'hidden',
                }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }),
                ], { optional: true }),
                group([
                    query(':leave', [
                        style({
                            // display: 'block',
                            // height: '100%',
                        }),
                        // ease-in (start off slow and then accelerate towards the end)
                        animate('350ms ease-in', style({
                            opacity: 0,
                            transform: 'scale(0.8)', // leaving element animation
                            // transform: 'translateX(80px)',
                        })),
                    ], { optional: true }),
                    query(':enter', [
                        style({
                            // sets starting position of entering component
                            transform: 'scale(1.2)', // entering element animation
                            opacity: 0,
                        }),
                        // style for entering animation
                        animate('500ms 120ms ease-out', style({
                            opacity: 1,
                            // moves into position
                            transform: 'scale(1)',
                        })),
                    ], { optional: true }),
                ]),
            ]),
            transition('* => secondary', [
                style({
                    position: 'relative',
                    // overflow: 'hidden',
                }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }),
                ], { optional: true }),
                group([
                    query(':leave', [
                        style({
                            // display: 'block',
                            // height: '100%',
                        }),
                        // ease-in (start off slow and then accelerate towards the end)
                        animate('350ms ease-in', style({
                            opacity: 0,
                            transform: 'scale(1.25)', // grows larger when fades out
                            // transform: 'translateX(80px)',
                        })),
                    ], { optional: true }),
                    query(':enter', [
                        style({
                            // entering component will be fading and entering at the same time
                            transform: 'scale(0.8)', 
                            opacity: 0,
                        }),
                        // style for entering animation
                        animate('500ms 120ms ease-out', style({
                            opacity: 1,
                            // moves into position
                            transform: 'scale(1)',
                        })),
                    ], { optional: true }),
                ]),
            ]),
            // * => * indicates transition from start-state to end-state
            // transition('* => *', [
            //     query(':enter', [
            //         style({
            //             background: 'wheat',
            //             display: 'block',
            //             // 100% height so that component does not take up more space 
            //             // than its parent element, however during transition Angular
            //             // will try to set height to auto, which is why specific styling
            //             // needs to be set in animate function
            //             height: '100%',
            //         }),
            //         animate(700, style({
            //             // background: 'transparent',
            //             // * indicates that Angular needs to animate to the styles of the end-state
            //             // which in this case is transparent or rgba with 0 alpha
            //             // * takes up the styles of the end-state (and Angular won't try to transition
            //             // the height property anymore)
            //             background: '*', 
            //             // height: '*',
            //             // height: 'auto', // will transition heigh property
            //         })),
            //     ], { optional: true }),
            //     style({
            //         background: 'red',
            //     }),
            //     // animate(700, style({
            //     //     background: 'violet',
            //     // })),
            //     animate(700),
            // ]),
        ]),
        trigger('backgroundAnim', [
            transition(':leave', [
                animate(1500, style({
                    opacity: 0, // will fade out current image
                })),
            ]),
        ]),
        trigger('btnFadeAnim', [
            transition(':enter', [
                style({
                    opacity: 0,
                }),
                animate(750,
                    style({
                        opacity: 1,
                    })
                ),
            ]),
            transition(':leave', [
                animate(750,
                    style({
                        opacity: 0,
                    }),
                )
            ]),
        ]),
    ],
})
export class AppComponent {
    title = 'DashBoard';
    loadingBackgroundImg!: boolean;
    // fade effect for background images
    backgrounds: string[] = ['https://images.unsplash.com/photo-1664369058082-ee8e36028106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'];
    // background: string = 'https://images.unsplash.com/photo-1664369058082-ee8e36028106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';
    // background: string = 'https://images.unsplash.com/photo-1664425216679-dff9fb34913b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
    // 'https://source.unsplash.com/random'

    prepareRoute(outlet: RouterOutlet) {
        if (outlet.isActivated) {
            const tab = outlet.activatedRouteData['tab'];

            if (!tab) {
                return 'secondary';
            }

            return tab;

            // return outlet.activatedRouteData['tab']; // see appp-routing.module -> data: {tab: 1}
            // return outlet.activatedRoute.snapshot.url;
        }

        // return null;
    }

    async changeBackgroundImg() {
        this.loadingBackgroundImg = true;

        // const result = await fetch('https://source.unsplash.com/random', {
        // add size parameters for each image
        const result = await fetch('https://source.unsplash.com/random/1920x1080', {
            method: 'HEAD', // get request will download the actual image, however only url of given image is required
        });

        const sameImg = this.backgrounds.includes(result.url);

        // if (this.background === result.url) {
        if (sameImg) {
            // same image is already rendered in app
            this.changeBackgroundImg();
        }

        // this.background = result.url;
        this.backgrounds.push(result.url);
    }

    onBackgroundImgLoad(imgEvent: Event) {
        // backgroung img has been loaded, remove the old img from the backgrounds array
        const imgElement = imgEvent.target as HTMLImageElement;
        const src = imgElement.src;

        // console.log(imgElement);
        // console.log('Image src of the new img >>>');
        // console.log(src);

        // removes all elements except for the latest image src
        this.backgrounds = this.backgrounds.filter((img) => img === src);
        // this.backgrounds = [src]; // alternative

        this.loadingBackgroundImg = false;
    }
}
