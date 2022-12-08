import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import Pokemon from '../pokemon';

@Component({
    selector: 'app-search-peshomon',
    templateUrl: './search-peshomon.component.html',
    styles: [
    ]
})
export class SearchPeshomonComponent implements OnInit {
    // Subject, allows to store successive searchInputs provided by the user
    // Subject allows to subscribe to a data stream as well as for its modification
    searchInputs = new Subject<string>();
    // Will hold the resulting data as a result of the inputStream, a PeshomonList
    // Observable allows only to subscribe to a given data stream
    peshomonList$: Observable<Pokemon[]>;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    search(input: string) {
        // each time the user is entering a a new input, will be passed unto the searchInput
        // similar to push in array
        this.searchInputs.next(input);
    }

    goToPeshomonDetail(peshomon: Pokemon) {
        const routerLink = ['/pokemon', peshomon.id];
        this.router.navigate(routerLink);
    }
}
