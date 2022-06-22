import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { Observable } from 'rxjs';

import { Bookmark, BookmarksGQL } from 'src/generated-types';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    bookmarks$: Observable<Bookmark[]>;

    constructor(
        private readonly dialog: MatDialog,
        private readonly bookmarkGql: BookmarksGQL,
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        // watches changes, wether from direct call or cache
        this.bookmarks$ = this.bookmarkGql.watch().valueChanges
            .pipe(
                map((result) => result.data.bookmarks),
            );
    }

    onFabClick() {
        this.dialog.open(CreateBookmarkComponent);
    }

    onBookmarkClick(bookmarkId: string) {
        this.router.navigate([`/bookmarks`, bookmarkId]);
    }
}
