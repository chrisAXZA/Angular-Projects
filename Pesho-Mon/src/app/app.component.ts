import { AfterViewInit, Component, OnInit, } from '@angular/core';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    animations:[
        trigger('backgroundAnim', [
            transition(':leave', [
                animate(1500, style({
                    opacity: 0, // will fade out current image
                })),
            ]),
        ]),
    ],
})
export class AppComponent implements OnInit, AfterViewInit {
    isLoggedIn: boolean;

    constructor(private router: Router, public authService: AuthService,) { }

    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn;
        // const storage = localStorage.getItem('isLoggedIn');

        // if (storage) {
        //     this.isLoggedIn = true;
        // } else {
        //     this.isLoggedIn = false;
        // }

        // console.log(this.isLoggedIn);
    }

    ngAfterViewInit() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {
            edge: 'right',
            draggable: true,
            inDuration: 500,
            outDuration: 500,
        });

        const elemDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemDropdown, {
            coverTrigger: false,
        });
    }

    logout() {
        this.authService.logout();
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
