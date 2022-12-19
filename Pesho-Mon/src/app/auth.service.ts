import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

import Trainer from './trainer';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor(private router: Router) {
        this.login('', '');
    }

    login(username: string, password: string): Observable<boolean> {
        if (!username && !password) {
            const storage = localStorage.getItem('isLoggedIn');

            if (!storage) {
                return of(false);
            } else {
                return of(true);
            }
        }

        const trainer = this.findTrainerByUsername(username);

        if (trainer) {
            const isLoggedIn = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

            return of(true)
                .pipe(
                    delay(1000),
                    tap((isLoggedIn) => this.isLoggedIn = isLoggedIn),
                );
        }

        return of(false)
            .pipe(
                delay(1000),
                tap((isLoggedIn) => this.isLoggedIn = isLoggedIn),
            );
    }

    login3(username: string, password: string): Observable<boolean> {
        const storage = localStorage.getItem('user');

        if (storage && storage.length > 0) {
            const user = JSON.parse(storage);
            username = user.username;
            password = user.password;
        } else {
            if (!username || !password) {
                return of(false);
            }

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
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/pokemons']);
    }

    register(username: string, password: string, email: string) {
        const storage = localStorage.getItem('trainers');

        const trainer: Trainer = {
            username,
            password,
            email,
        };

        if (storage) {
            const trainers: Trainer[] = JSON.parse(storage);
            trainers.push(trainer);
            localStorage.setItem('trainers', JSON.stringify(trainers));
        } else {
            const trainers: Trainer[] = [];
            trainers.push(trainer);
            localStorage.setItem('trainers', JSON.stringify(trainers));
        }
    }

    findTrainerByUsername(username: string): Trainer | undefined {
        const storage = localStorage.getItem('trainers')!;
        const trainers: Trainer[] | null = JSON.parse(storage);

        if (!trainers) {
            return undefined;
        }

        return trainers.find((t: Trainer) => t.username === username);
    }
}
