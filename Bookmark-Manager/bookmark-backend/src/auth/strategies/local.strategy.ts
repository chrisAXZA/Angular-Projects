import { Strategy } from "passport-local";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import { UsersService } from "src/users/users.service";

// Auth-strategies build from passportJS
// local strategy for password and email
// strategy for jwt
@Injectable()
// code will take up email + password from the client
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        // specfiy usernameField, as default value will take username
        // for any incoming request, thus will use email as username
        super({ usernameField: 'email' });
    }

    // validate method will get called automatically by the password strategy
    // to ensure that credentials are correct, sending data to userService that can
    // verify validity of data
    // Return value of validation will get added to the request object as the 
    // user property
    async validate(email: string, password: string) {
        return this.userService.validateUser(email, password);
    }
}