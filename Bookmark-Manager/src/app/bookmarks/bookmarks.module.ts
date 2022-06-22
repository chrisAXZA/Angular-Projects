import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';

@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    BookmarksComponent,
  ]
})
export class BookmarksModule { }
