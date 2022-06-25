import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// Angular Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Bookmark, BookmarkDocument, UpdateBookmarkGQL } from 'src/generated-types';

@Component({
    selector: 'app-add-link',
    templateUrl: './add-link.component.html',
    styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

    link = new FormControl('', [Validators.required]);

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private readonly data: { bookmark: Bookmark }, // gives access to the bookmark data that is being updated
        private readonly dialogRef: MatDialogRef<AddLinkComponent>, // allows to manipulate the material dialog (after the bookmark has been correctly updated)
        private readonly updateBookmarkGql: UpdateBookmarkGQL) { }

    ngOnInit(): void {
    }

    // will add a new link to the backend
    addLink() {
        this.updateBookmarkGql
            .mutate({
                updateBookmarkData: {
                    _id: this.data.bookmark._id,
                    links: [...this.data.bookmark.links, this.link.value],
                },
            }, {
                refetchQueries: [{
                    query: BookmarkDocument,
                    variables: { _id: this.data.bookmark._id }, // variables provides required variables for the given document, in this case _id
                }],
            })
            .subscribe(() => {
                this.dialogRef.close();
            });
    }

    getLinkError() {
        if (this.link.hasError('required')) {
            return 'You must enter a value!';
        }

        return '';
    }
}
