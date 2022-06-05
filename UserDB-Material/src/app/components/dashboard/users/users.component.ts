import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IUser } from 'src/app/interfaces/user';

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

  userList: IUser[] = [
    { username: 'pesho', firstName: 'Pesho', secondName: 'Peshov', gender: 'Male' },
    { username: 'kotze', firstName: 'Kotze', secondName: 'Petrov', gender: 'Male' },
    { username: 'maia', firstName: 'Maria', secondName: 'Ivana', gender: 'Female' },
    { username: 'kesho', firstName: 'Fiodr', secondName: 'Antonov', gender: 'Male' },
    { username: 'ana', firstName: 'Ana', secondName: 'Svetlana', gender: 'Female' },
    { username: 'peter', firstName: 'Peter', secondName: 'Aleksov', gender: 'Male' },
  ];

  displayedColumns: string[] = ['username', 'firstName', 'secondName', 'gender', 'actions'];
  // dataSource = userList;
  dataSource = new MatTableDataSource(this.userList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
