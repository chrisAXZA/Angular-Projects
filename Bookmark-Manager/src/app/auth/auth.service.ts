import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { catchError, of, Subject, tap } from "rxjs";


// allows to authenticate the given user from throughou the app
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly authenticated = new Subject<boolean>();
    // asObservable exposes observable to the outside world, but does
    // not allow events to be emitted from outside on this observable
    // Only private authenticated can emit events inside of Authservice only
    authenticated$ = this.authenticated.asObservable();

    constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

    // checks if current user is authenticated, since jwt is not 
    // stored in localStorage (httpOnly Cookie) jwt can not accessed in order to verify
    // its validity, thus server must be contacted in order to find out whether
    // jwt has been set and whether the user is authenticated
    isAuthenticated() {
        return this.httpClient.get<boolean>('api/auth')
            .pipe(
                // tap will only trigger if no error is thrown !
                tap(() => {
                    this.authenticated.next(true);
                }),
                // when user is not authenticated error is thrown from route and
                // return Observable of false
                catchError(() => of(false)),
            );
    }

    logout() {
        // post with empty body
        this.httpClient.post('api/auth/logout', {}).subscribe(() => {
            this.authenticated.next(false);
            this.router.navigate(['/login']);
        });
    }
}