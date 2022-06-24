import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { Bookmark, BookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark: Bookmark;

  constructor(private readonly route: ActivatedRoute, private readonly bookmarkGql: BookmarkGQL) { }

  // will listen to the changes in the route parameter
  ngOnInit(): void {
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

}
