import { Component, OnInit } from '@angular/core';

import Pokemon from '../pokemon';

@Component({
    selector: 'app-peshomon-form',
    templateUrl: './peshomon-form.component.html',
    styles: [
    ]
})
export class PeshomonFormComponent implements OnInit {
    peshomon: Pokemon;

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {

    }

    hasType() {

    }

    isTypeValid() {

    }

    selectType() {

    }
}
