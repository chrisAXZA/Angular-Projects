import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/interfaces/user';

const userList: IUser[] = [
  {username: 'pesho', firstName: 'Pesho', secondName: 'Peshov', gender: 'Male'},
  {username: 'kotze', firstName: 'Kotze', secondName: 'Petrov', gender: 'Male'},
  {username: 'maia', firstName: 'Maria', secondName: 'Ivana', gender: 'Female'},
  {username: 'kesho', firstName: 'Fiodr', secondName: 'Antonov', gender: 'Male'},
  {username: 'ana', firstName: 'Ana', secondName: 'Svetlana', gender: 'Female'},
  {username: 'peter', firstName: 'Peter', secondName: 'Aleksov', gender: 'Male'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['username', 'firstName', 'secondName', 'gender'];
  dataSource = userList;

  constructor() { }

  ngOnInit(): void {
  }

}
