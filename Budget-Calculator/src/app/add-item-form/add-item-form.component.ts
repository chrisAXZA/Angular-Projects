import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
    selector: 'app-add-item-form',
    templateUrl: './add-item-form.component.html',
    styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

    // item needs to be set with default value
    // @Input() item: BudgetItem = new BudgetItem('', 0);
    @Input() item!: BudgetItem;
    @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    isNewItem!: boolean;

    constructor() { }

    ngOnInit(): void {
        // check if already existing item value was passed unto the component
        // if (this.item.amount === 0 && this.item.description === '') {
        if (this.item) {
            this.isNewItem = false;
        } else {
            this.isNewItem = true;
            this.item = new BudgetItem('', null);
        }
    }

    onSubmit(form: NgForm) {
        // console.log(`Value: ${form.value} >>> Valid: ${form.valid}`);
        // console.log(form.value, form.valid);
        this.formSubmit.emit(form.value);
        form.reset();
    }

}
