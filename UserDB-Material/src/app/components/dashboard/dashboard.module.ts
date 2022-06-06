import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InitialComponent } from './initial/initial.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './users/create-user/create-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InitialComponent,
    NavbarComponent,
    UsersComponent,
    ReportsComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
