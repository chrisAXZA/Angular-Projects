import { Injectable } from "@angular/core";

// allows to authenticate the given user from throughou the app
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // checks if current user is authenticated, since jwt is not 
    // stored in localStorage (httpOnly Cookie) jwt can not accessed in order to verify
    // its validity, thus server must be contacted in order to find out whether
    // jwt has been set and whether the user is authenticated
    isAuthenticated() {

    }
}