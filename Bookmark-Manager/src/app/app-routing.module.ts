import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';

const routes: Routes = [
  { path: 'bookmarks/:id', component: BookmarkComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignUpComponent, },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard], },
  { path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
