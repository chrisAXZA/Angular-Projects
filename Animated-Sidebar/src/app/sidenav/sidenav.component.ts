import { Component, OnInit } from '@angular/core';

import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  collapsed = true;
  navData = navbarData;

  constructor() { }

  ngOnInit(): void {
  }

}
