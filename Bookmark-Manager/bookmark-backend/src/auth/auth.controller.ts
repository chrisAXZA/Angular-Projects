import { response, Response } from 'express';
import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import JwtAuthGuard from './guards/jwt-auth.guard';
import { User } from 'src/users/models/user.model';
import { CurrentUser } from './current-user.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

// app will use HttpOnly cookies as authentication mechanism
// jwt will be set inside a HttpOnly cookie instead of storing in localStorage
// This is the most secure way to store jwt
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard) // triggers guard whenever this route is run => localAuthGuard will run LocalStrategy
    @Post('login')
    // gets current User of ongoing request, allows access to userObject from ongoing request
    // Also requires response object in order to set cookie on the current response
    async login(
        @CurrentUser() user: User,
        @Res({ passthrough: true }) response: Response) { // sends to the normal NestJS response processing
        await this.authService.login(user, response);

        response.send(user);
    }

    // route that controls whether user is authenticated
    // JwtAuthGuard will either return true or throw error, with regards
    // whether given user is authenticated
    @UseGuards(JwtAuthGuard)
    @Get()
    isAuthenticated() {
        return true;
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Res({ passthrough: true }) response: Response) {
        // access to response is required in order to gain access to cookies
        this.authService.logout(response);
        // provide empty json object to signal that logout has been successfull
        response.json({});
    }

}
