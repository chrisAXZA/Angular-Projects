import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { InitialComponent } from './initial/initial.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InitialComponent, pathMatch: 'full', },
      { path: 'users', component: UsersComponent, },
      { path: 'reports', component: ReportsComponent, },
      { path: 'add-user', component: CreateUserComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
