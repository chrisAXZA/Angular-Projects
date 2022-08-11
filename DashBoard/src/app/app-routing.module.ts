import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  // data will set the tabNumber of each Dashboard item
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
