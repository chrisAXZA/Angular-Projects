import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.form.value);
    const username = this.form.value.username;
    const password = this.form.value.password;

    if (username == 'pesho' && password == 'admin123') {
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }

  error(): void {
    this.snackBar.open('Username or password are invalid!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  fakeLoading(): void {
    this.loading = true;
    setTimeout(() => {
      // this.loading = false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
