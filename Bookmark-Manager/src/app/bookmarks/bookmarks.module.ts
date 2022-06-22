import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';

@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarkModule,
  ],
  exports: [
    BookmarksComponent,
  ]
})
export class BookmarksModule { }
