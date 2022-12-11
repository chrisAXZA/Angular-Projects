import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    // canActivate will check for boolean true/false
    // true will allow access to all users for given page
    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     return true;
    // }

    canActivate() {
        console.log('Auth guard has been triggered!');

        return true;
    }
}
