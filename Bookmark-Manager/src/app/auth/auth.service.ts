import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";


// allows to authenticate the given user from throughou the app
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly httpClient: HttpClient) { }

    // checks if current user is authenticated, since jwt is not 
    // stored in localStorage (httpOnly Cookie) jwt can not accessed in order to verify
    // its validity, thus server must be contacted in order to find out whether
    // jwt has been set and whether the user is authenticated
    isAuthenticated() {
        return this.httpClient.get<boolean>('api/auth')
            .pipe(
                // when user is not authenticated error is thrown from route and
                // return Observable of false
                catchError(() => of(false)),
            );
    }
}