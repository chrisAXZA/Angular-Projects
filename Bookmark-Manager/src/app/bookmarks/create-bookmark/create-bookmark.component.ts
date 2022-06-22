import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { CreateBookmarkGQL } from '../../../generated-types';

@Component({
    selector: 'app-create-bookmark',
    templateUrl: './create-bookmark.component.html',
    styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

    bookmarkName = new FormControl('', [Validators.required]);

    constructor(private readonly createBookmarkGql: CreateBookmarkGQL, private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>) { }

    ngOnInit(): void {
    }

    getBookmarkNameError() {
        if (this.bookmarkName.hasError('required')) {
            return 'You must enter a value!';
        }

        return '';
    }

    // executes the createBookmark mutation
    createBookmark() {
        this.createBookmarkGql
            .mutate({
                createBookmarkData: { name: this.bookmarkName.value },
            })
            .subscribe(() => { // subscribe will close the opened dialog
                this.dialogRef.close();
            });
    }
}
