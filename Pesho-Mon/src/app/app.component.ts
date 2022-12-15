import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(private router: Router, public authService: AuthService) { }

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
