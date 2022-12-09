import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';

@Component({
    selector: 'app-peshomon-form',
    templateUrl: './peshomon-form.component.html',
    styleUrls: ['./peshomon-form.component.scss'],
})
export class PeshomonFormComponent implements OnInit {
    @Input() peshomon: Pokemon;
    peshomonTypes: string[];
    isAddForm: boolean = false;
    // showTypesError: boolean = false;

    constructor(
        private router: Router,
        private peshomonService: PeshomonService,
    ) { }

    ngOnInit(): void {
        this.peshomonTypes = this.peshomonService.getPeshomonTypeList();
        this.isAddForm = this.router.url.includes('add');
    }

    cancelChanges(event: Event) {
        event.preventDefault();
        this.router.navigate(['/pokemon', this.peshomon.id]);
    }

    onSubmit() {
        // console.log(`Peshomon data of ${this.peshomon.name} has been updated!`);
        // this.router.navigate(['/pokemon', this.peshomon.id]);
        if (this.isAddForm) {
            // const peshomon = this.peshomonService.searchPeshomonList(this.peshomon.name)
            //     .subscribe();
            const peshomon = this.peshomonService.findPeshomonByName(this.peshomon.name);

            if (peshomon) {
                return alert(`Peshomon with given name "${this.peshomon.name}" already exists !`);
            }

            // back-end will create new id value and pass on to this.router
            this.peshomonService.addPeshomon(this.peshomon)
                .subscribe((peshomon: Pokemon) => this.router.navigate(['/pokemon', peshomon.id]));
        } else {
            this.peshomonService.updatePeshomon(this.peshomon)
                .subscribe(() => this.router.navigate(['/pokemon', this.peshomon.id]));
        }
    }

    hasType(type: string): boolean {
        return this.peshomon.types.includes(type);
    }

    // between 1-3 types per peshomon allowed
    isTypeAmountValid(type: string): boolean {
        // prevents removing only peshomon type
        if (this.peshomon.types.length === 1 && this.hasType(type)) {
            return false;
        }

        // prevents adding more than 3 peshomon types
        if (this.peshomon.types.length === 3 && !this.hasType(type)) {
            return false;
        }

        return true;
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
