import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login/login.service';
import { CreateUserGQL, CreateUserInput } from '../../../generated-types';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private readonly createUserGql: CreateUserGQL,
    private readonly loginService: LoginService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  // signUp({ email, password }: any): void {
  // Modify signUp so that it creates new auth jwt
  // after has successfully signed in
  signUp(createUserData: CreateUserInput) {
    // console.log(email, password);

    // mutate requires subscribe for call to be made
    this.createUserGql
      // .mutate({ createUserData: { email, password } })
      .mutate({ createUserData })
      .pipe(
        // combineMap will combine two observables => 
        // first create the user then execute the next observable
        concatMap(() => {
          // loginService will ensure that user will have valid jwt
          // when directed to homePage route
          return this.loginService.login(createUserData);
        }),
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
