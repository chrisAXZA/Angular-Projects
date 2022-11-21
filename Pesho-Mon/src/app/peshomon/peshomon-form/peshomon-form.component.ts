import { Component, Input, OnInit } from '@angular/core';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';

@Component({
    selector: 'app-peshomon-form',
    templateUrl: './peshomon-form.component.html',
    styles: [
    ]
})
export class PeshomonFormComponent implements OnInit {
    @Input() peshomon: Pokemon;
    peshomonTypes: string[];

    constructor(private peshomonService: PeshomonService) { }

    ngOnInit(): void {
        this.peshomonTypes = this.peshomonService.getPeshomonTypeList();
    }

    onSubmit() {

    }

    hasType(type: string): boolean {
        return this.peshomon.types.includes(type);
    }

    isTypeValid(type: string) {
        return this.peshomonTypes.includes(type);
    }

    selectType() {

    }
}
