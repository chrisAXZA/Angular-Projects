import { Component, OnInit } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    budgetItems: BudgetItem[] = new Array<BudgetItem>(); // array needs to be intialized
    totalBudget: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    addItem(newItem: BudgetItem) {
        this.budgetItems.push(newItem);
        // console.log(newItem.id);

        this.totalBudget += newItem.amount!;
    }

    deleteItem(item: BudgetItem) {
        // this.budgetItems = this.budgetItems.filter((i) => i.id !== item.id);
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);

        this.totalBudget -= item.amount!;
    }

    updateItem(updateEvent: UpdateEvent) {
        const index = this.budgetItems.indexOf(updateEvent.old);
        this.budgetItems[index] = updateEvent.new;
        const oldAmount = updateEvent.old.amount!;
        const newAmount = updateEvent.new.amount!;

        this.totalBudget -= oldAmount;
        this.totalBudget += newAmount;
    }
}
