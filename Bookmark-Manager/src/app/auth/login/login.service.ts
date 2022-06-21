import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CreateUserInput, User } from "src/generated-types";

@Injectable({
    // root, so that service can be used throughout the whole app
    providedIn: 'root',
})
export class LoginService {
    // httpClient used to send request to backend
    constructor(private readonly httpClient: HttpClient) { }

    // loginReques takes in email + password
    login(loginRequest: CreateUserInput) {
        // at runtime will be converted to actual api route
        // returns User
        return this.httpClient.post<User>('api/auth/login', loginRequest);
    }
}