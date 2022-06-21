import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CreateUserGQL } from '../../../generated-types';
// import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private readonly createUserGql: CreateUserGQL, private readonly router: Router) { }

  ngOnInit(): void {
  }

  signUp({ email, password }: any): void {
    // console.log(email, password);

    // mutate requires subscribe for call to be made
    this.createUserGql
      .mutate({ createUserData: { email, password } })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
