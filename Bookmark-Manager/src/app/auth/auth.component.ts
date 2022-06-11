import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Output() onSubmitEvent = new EventEmitter<any>();
  @Input() submitLabel: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value!';
    }

    return this.email.hasError('email')
      ? 'Not a valid email!'
      : '';
  }

  getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'You must enter a value!';
    }

    return '';
  }

  onSubmit(): void {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    });
  }

}
