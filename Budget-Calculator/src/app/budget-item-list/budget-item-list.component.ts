import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
    selector: 'app-budget-item-list',
    templateUrl: './budget-item-list.component.html',
    styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

    @Input() budgetItems!: BudgetItem[];
    // parent component (mainPage) needs to know which BudgetItem needs to be deleted
    @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    constructor() { }

    ngOnInit(): void {
    }

    // event is required so that parent component (mainPage) can listen to the given event
    // and remove the required item
    onDeleteButtonClicked(item: BudgetItem) {
        // this.budgetItems = this.budgetItems.filter((i) =>
        //     i.description !== item.description && i.amount !== item.amount);
        this.delete.emit(item);
    }
}
