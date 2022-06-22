import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    constructor(private readonly dialog: MatDialog) { }

    ngOnInit(): void {
    }

    onFabClick() {
        this.dialog.open(CreateBookmarkComponent);
    }
}
