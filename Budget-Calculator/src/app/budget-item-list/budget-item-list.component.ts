import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BudgetItem } from 'src/shared/modules/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
    selector: 'app-budget-item-list',
    templateUrl: './budget-item-list.component.html',
    styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

    @Input() budgetItems!: BudgetItem[];
    // parent component (mainPage) needs to know which BudgetItem needs to be deleted
    @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }

    // event is required so that parent component (mainPage) can listen to the given event
    // and remove the required item
    onDeleteButtonClicked(item: BudgetItem) {
        // this.budgetItems = this.budgetItems.filter((i) =>
        //     i.description !== item.description && i.amount !== item.amount);
        this.delete.emit(item);
    }

    onCardClicked(item: BudgetItem) {
        // visualize the edit modal
        const diaologRef = this.dialog.open(EditItemModalComponent, {
            width: '580px',
            data: item, // data receives the actual item that was clicked
        });

        // subscribe to the event when the dialog is closed
        diaologRef.afterClosed()
            .subscribe((result) => { // result is emitted by the closed dialog, updatedItem from edit-item-modal component
                // checks if result has a value
                if (result){
                    // result is the actual updated item
                    // replace the actual item with the updated submitted item from the form
                    const index  = this.budgetItems.indexOf(item);
                    this.budgetItems[index] = result;
                }
            });
    }
}
