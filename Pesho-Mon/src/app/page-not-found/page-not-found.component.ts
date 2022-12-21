import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styles: [
    ],
    animations: [
        trigger('imgAnim', [
            transition(':enter', [
                style({
                    opacity: 0,
                }),
                animate('1s ease-in', style({
                    opacity: 1,
                })),
            ]),
        ]),
    ],
})
export class PageNotFoundComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {

    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
