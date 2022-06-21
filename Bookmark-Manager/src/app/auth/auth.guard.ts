import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
// special angular function, which validates whether given user can access given route
// Will be implemented abstractly so that can be used in various components
export class AuthGuard implements CanActivate{ 

}