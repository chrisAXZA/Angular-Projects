import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Pokemon from '../pokemon';

@Component({
    selector: 'app-add-peshomon',
    templateUrl: './add-peshomon.component.html',
    styleUrls: ['./add-peshomon.component.scss'],
})
export class AddPeshomonComponent implements OnInit {
    peshomon: Pokemon;
    
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.peshomon = new Pokemon();
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
