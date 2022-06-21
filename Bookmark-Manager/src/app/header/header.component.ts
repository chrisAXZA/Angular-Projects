import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // header component should be able to listen to the changes in
  // the authState coming from the authService
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly authService: AuthService) {
    this.isLoggedIn$ = authService.authenticated$;
  }

  ngOnInit(): void {
  }

  // logout will be handled on server-side, in order to clear
  // out the jwt (authentication cookie)
  // Besides, jwt is httpOnly so only server can modify/erase
  onLogout() {

  }

}
