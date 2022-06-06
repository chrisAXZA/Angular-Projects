import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IUser } from 'src/app/interfaces/user';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';

// const userList: IUser[] = [
//   { username: 'pesho', firstName: 'Pesho', secondName: 'Peshov', gender: 'Male' },
//   { username: 'kotze', firstName: 'Kotze', secondName: 'Petrov', gender: 'Male' },
//   { username: 'maia', firstName: 'Maria', secondName: 'Ivana', gender: 'Female' },
//   { username: 'kesho', firstName: 'Fiodr', secondName: 'Antonov', gender: 'Male' },
//   { username: 'ana', firstName: 'Ana', secondName: 'Svetlana', gender: 'Female' },
//   { username: 'peter', firstName: 'Peter', secondName: 'Aleksov', gender: 'Male' },
// ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: IUser[] = [];
  displayedColumns: string[] = ['username', 'firstName', 'secondName', 'gender', 'actions'];
  // dataSource = userList;
  // dataSource = new MatTableDataSource(this.userList);
  dataSource!: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers(): void {
    this.userList = this._userService.getUsers();
    this.dataSource = new MatTableDataSource(this.userList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number): void {
    // console.log(index);

    this._userService.deleteUser(index);
    this.loadUsers();
  }
}
