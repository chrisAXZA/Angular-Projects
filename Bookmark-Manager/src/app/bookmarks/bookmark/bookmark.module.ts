import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BookmarkComponent } from './bookmark.component';
import { AddLinkModule } from './add-link/add-link.module';

@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // AddLinkModule,
  ]
})
export class BookmarkModule { }
