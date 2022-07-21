import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'todos', component: TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
