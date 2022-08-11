import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
