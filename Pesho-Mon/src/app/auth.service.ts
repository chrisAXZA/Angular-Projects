import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor() { }

    login(username: string, password: string): Observable<boolean> {
        const isLoggedIn = (username === 'pesho' && password === 'pesho123');

        // delay will simulate time-lapse for given request
        return of(isLoggedIn)
            .pipe(
                delay(1000),
                tap((isLoggedIn) => this.isLoggedIn = isLoggedIn),
            );
    }

    logout() {
        this.isLoggedIn = false;
    }
}
