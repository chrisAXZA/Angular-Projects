import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  genders: string[] = ['Male', 'Female'];

  constructor() { }

  ngOnInit(): void {
  }

}
