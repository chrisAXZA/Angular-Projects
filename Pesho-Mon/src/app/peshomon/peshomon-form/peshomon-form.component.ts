import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private peshomonService: PeshomonService, private router: Router) { }

    ngOnInit(): void {
        this.peshomonTypes = this.peshomonService.getPeshomonTypeList();
    }

    onSubmit() {
        console.log(`Peshomon data of ${this.peshomon.name} has been updated!`);

        this.router.navigate(['/pokemon', this.peshomon.id]);
    }

    hasType(type: string): boolean {
        return this.peshomon.types.includes(type);
    }

    isTypeValid(type: string) {
        return this.peshomonTypes.includes(type);
    }

    selectType($event: Event, type: string) {
        const isChecked: boolean = ($event.target as HTMLInputElement).checked;

        if (isChecked) {
            this.peshomon.types.push(type);
        } else {
            this.peshomon.types = this.peshomon.types.filter((typ) => typ !== type);
        }
    }
}
