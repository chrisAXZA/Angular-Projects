import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routeAnim', [
            transition('* => *', [
                // first animate leaving component
                query(':leave', [
                    // no starting styles to animate, only to a given style is required 
                    // an opacity style is already set
                    style({
                        display: 'block',
                    }),
                    animate(700, style({
                        opacity: 0,
                    })),
                ], { optional: true }),
                query(':enter', [
                    style({
                        opacity: 0,
                        // display needs to be set to block, as default inline will not be rendered correctly
                        display: 'block',
                        // height needs to be set to 100% to avoid overflow
                        height: '100%',
                    }),
                    // end-state has alreadt opacity styling, so no explicit style has to be set
                    // in animate function
                    animate(700, style({
                        opacity: 1,
                    })),
                ], { optional: true }),
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
    ],
})
export class AppComponent {
    title = 'DashBoard';

    prepareRoute(outlet: RouterOutlet) {
        if (outlet.isActivated) {
            return outlet.activatedRoute.snapshot.url;
        }

        return null;
    }
}
