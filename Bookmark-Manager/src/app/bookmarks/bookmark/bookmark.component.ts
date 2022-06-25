import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

// Angular material
import { MatDialog } from '@angular/material/dialog';

import { Bookmark, BookmarkGQL } from 'src/generated-types';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark: Bookmark;

  constructor(
    private readonly route: ActivatedRoute, // activatedRoute injects the current route into the component
    private readonly bookmarkGql: BookmarkGQL,
    private readonly dialog: MatDialog) { }

  // will listen to the changes in the route parameter
  ngOnInit(): void {
    // will listen to the changes in the route parameter which is also containing the id of the current bookmark
    this.route.params
      .pipe(
        // will switch to a new set of code each time the observable in the given pipe changes
        switchMap((params) => {
          return this.bookmarkGql.watch({ _id: params['id'] }).valueChanges;
        }),
      )
      .subscribe((result) => {
        this.bookmark = result.data.bookmark;
      });
  }

  onAdd() {
    // AddLinkComponent is used as a host for the dialog form
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark },
    });
  }
}
