import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { CreateUserInput } from 'src/generated-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly loginService: LoginService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  // login({ email, password }: any): void {
  login(createUserData: CreateUserInput) {
    // console.log(email, password);
    
    // returns Observable
    this.loginService.login(createUserData).subscribe();
  }
}
