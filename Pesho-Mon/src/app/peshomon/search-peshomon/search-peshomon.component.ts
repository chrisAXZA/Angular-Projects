import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';

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

    constructor(private router: Router, private peshomonService: PeshomonService) { }

    ngOnInit(): void {
        this.peshomonList$ = this.searchInputs
            .pipe(
                // debounceTime will hold back requests to server for the given amount of time
                debounceTime(300),
                // distinctUntilChanged will filter out successive identical search inputs,
                // will wait until there is a change in the last given value and no repetition
                distinctUntilChanged(),
                // will execute the final requests to the server, map will transform search input
                // into Observable peshomon object
                switchMap((input) => this.peshomonService.searchPeshomonList(input))
                // map((input) => this.peshomonService.searchPeshomonList(input))
                // concatMap, switchMap, mergeMap can transform from Observable to peshomon object
                // switchMap will annulate prior request and only work with the current one
            );
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
