import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class LoginModule { }
