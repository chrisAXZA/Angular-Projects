import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { tap } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
// special angular function, which validates whether given user can access given route
// Will be implemented abstractly so that can be used in various components
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService, private readonly router: Router) { }

    canActivate() {
        return this.authService.isAuthenticated()
            .pipe(
                // authenticated is either true/false
                tap((authenticated) => {
                    if (!authenticated) {
                        this.router.navigate(['/login']);
                    }
                }),
            );
    }
}