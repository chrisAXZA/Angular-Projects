import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { User } from 'src/users/models/user.model';

// tokenPayload can take up any information about the user, even
// the user object itself (which will allow to avoid to use database call directly)
export interface TokenPayload {
    userId: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) { }

    async login(user: User, response: Response) {
        // payload will be used to sign the webToken with
        const tokenPayload: TokenPayload = {
            userId: user._id,
        };

        // expiration date for jwt
        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
        );

        const token = this.jwtService.sign(tokenPayload);

        // set the token as a cookie for the user, in order to use it in later
        // requests in order to remain authenticated in the system
        response.cookie('Authentication', token, {
            httpOnly: true,
            expires,
        });
    }

    logout(response: Response) {
        // overrides the original authentication cookie
        response.cookie('Authentication', '', {
            httpOnly: true,
            expires: new Date(), // expires immediately
        });
    }
}
