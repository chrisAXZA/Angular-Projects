import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    budgetItems: BudgetItem[] = new Array<BudgetItem>(); // array needs to be intialized

    constructor() { }

    ngOnInit(): void {
    }

    addItem(newItem: BudgetItem) {
        this.budgetItems.push(newItem);
    }
}
