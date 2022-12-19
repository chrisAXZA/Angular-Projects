import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent implements OnInit {
    isLoading: boolean = true;
    message: string = 'You are currently not logged in to the most awesome Peshomon App!';
    username: string;
    password: string;

    constructor(private router: Router, public authService: AuthService) { }

    ngOnInit(): void {
        this.isLoading = true;

        this.authService.login2(this.username, this.password)
            .subscribe((isLoggedIn: boolean) => {
                // this.setMessage();
                this.message = this.authService.isLoggedIn
                    ? 'You are connected to the most awesome Peshomon App!'
                    : 'You are currently not logged in to the most awesome Peshomon App!';

                if (!isLoggedIn) {
                    this.username = '';
                    this.password = '';
                    this.router.navigate(['/login']);
                }

                this.isLoading = false;
            });
    }

    login() {
        this.message = 'Login request is currently being handled!';

        this.authService.login2(this.username, this.password)
            .subscribe((isLoggedIn: boolean) => {
                this.setMessage();

                if (isLoggedIn) {
                    this.router.navigate(['/pokemons']);
                } else {
                    this.username = '';
                    this.password = '';
                    this.router.navigate(['/login']);
                }
            });
    }

    logout() {
        this.authService.logout();
        this.message = 'You have been disconnected from the most awesome Peshomon App!';
    }

    // updates message depending on whether the user is logged in or not
    setMessage() {
        if (this.authService.isLoggedIn) {
            this.message = 'You are connected to the most awesome Peshomon App!';
        } else {
            this.message = 'Username or password are invalid -> No most awesome Peshomon App!';
        }
    }
}
