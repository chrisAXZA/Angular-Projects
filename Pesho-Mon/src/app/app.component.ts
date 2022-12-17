import { AfterViewInit, Component, OnInit, } from '@angular/core';
import * as M from 'materialize-css';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private router: Router, public authService: AuthService,) { }

    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn;
    }

    // ngAfterViewInit() {
    //     var elems = document.querySelectorAll('.sidenav');
    //     M.Sidenav.init(elems, {});

    //     const elemDropdown = document.querySelectorAll('.dropdown-trigger');
    //     M.Dropdown.init(elemDropdown, {
    //         coverTrigger: false,
    //     });
    // }

    logout() {
        this.authService.logout();
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
