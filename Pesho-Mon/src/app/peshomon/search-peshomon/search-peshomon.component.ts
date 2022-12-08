import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Pokemon from '../pokemon';

@Component({
    selector: 'app-search-peshomon',
    templateUrl: './search-peshomon.component.html',
    styles: [
    ]
})
export class SearchPeshomonComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    search(input: string) {

    }

    goToPeshomonDetail(peshomon: Pokemon) {
        const routerLink = ['/pokemon', peshomon.id];
        this.router.navigate(routerLink);
    }
}
