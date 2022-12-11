import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {

    }

    // canActivate will check for boolean true/false
    // true will allow access to all users for given page
    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     return true;
    // }

    canActivate(): boolean {
        if (this.authService.isLoggedIn === true) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
