import { Request } from "express";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";

import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService, private readonly usersService: UsersService) {
        // jwtFromRequest: provides custom path to jwt depending on the 
        // request object
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                // function which has access to the request object
                (request: Request) => request?.cookies?.Authentication, // nullable operator to return undefined if requestCookie does not exist
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    // ensure that token payload (which contains userId) corresponds to a valid user
    
};