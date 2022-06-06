import { Injectable } from '@angular/core';

import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: IUser[] = [
    { username: 'pesho', firstName: 'Pesho', secondName: 'Peshov', gender: 'Male' },
    { username: 'kotze', firstName: 'Kotze', secondName: 'Petrov', gender: 'Male' },
    { username: 'maia', firstName: 'Maria', secondName: 'Ivana', gender: 'Female' },
    { username: 'kesho', firstName: 'Fiodr', secondName: 'Antonov', gender: 'Male' },
    { username: 'ana', firstName: 'Ana', secondName: 'Svetlana', gender: 'Female' },
    { username: 'peter', firstName: 'Peter', secondName: 'Aleksov', gender: 'Male' },
  ];

  constructor() { }

  getUsers(): IUser[] {
    return this.userList.slice();
  }

  getUser(index: number): IUser {
    return this.userList[index];
  }

  addUser(user: IUser): void {
    this.userList.push(user);
  }

  deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }
}
