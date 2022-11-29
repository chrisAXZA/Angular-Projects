import { Component, OnInit } from '@angular/core';

import Pokemon from '../pokemon';

@Component({
    selector: 'app-add-peshomon',
    templateUrl: './add-peshomon.component.html',
    styles: [
    ]
})
export class AddPeshomonComponent implements OnInit {
    peshomon: Pokemon;
    
    constructor() { }

    ngOnInit(): void {
        this.peshomon = new Pokemon();
    }

}
