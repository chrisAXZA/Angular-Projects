import { Component, Input, OnInit } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
    selector: 'app-budget-item-card',
    templateUrl: './budget-item-card.component.html',
    styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

    // @Input() isIncome: boolean = true;
    @Input() item!: BudgetItem;

    constructor() { }

    ngOnInit(): void {
    }

}
