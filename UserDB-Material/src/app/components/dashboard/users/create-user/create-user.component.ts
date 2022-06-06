import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  genders: string[] = ['Male', 'Female'];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    // console.log(this.form.value);

    const { username, firstName, secondName, gender } = this.form.value;
    this._userService.addUser({ username, firstName, secondName, gender } as IUser);
    this.router.navigate(['/dashboard/users']);

    this.snackBar.open(`User ${username} has been added!`, '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
