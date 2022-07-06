import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItem } from 'src/shared/modules/budget-item.model';

@Component({
    selector: 'app-budget-item-card',
    templateUrl: './budget-item-card.component.html',
    styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

    // @Input() isIncome: boolean = true;
    @Input() item!: BudgetItem;
    // any or void since no data is emitted, parent component already knows what item to delete since
    // parent component is passing the item to the child component and also binds to the click event
    @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onXButtonClick() {
        // will emit delete event
        this.xButtonClick.emit();
    }

    onCardClick() {
        this.cardClick.emit();
    }
}
