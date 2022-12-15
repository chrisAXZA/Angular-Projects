import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor() {
        this.login('', '');
    }

    login(username: string, password: string): Observable<boolean> {
        // if (!username || !password) {
        //     return of(false);
        // }

        const storage = localStorage.getItem('user');

        if (storage && storage.length > 0) {
            const user = JSON.parse(storage);
            username = user.username;
            password = user.password;
        } else {
            const currentUser = {
                username,
                password,
            };

            localStorage.setItem('user', JSON.stringify(currentUser));
        }

        const isLoggedIn = (username === 'pesho' && password === 'pesho123');
        // const isLoggedIn = true;

        // delay will simulate time-lapse for given request
        return of(isLoggedIn)
            .pipe(
                delay(1000),
                tap((isLoggedIn) => this.isLoggedIn = isLoggedIn),
            );
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('user');
    }
}
