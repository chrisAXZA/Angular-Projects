import { Response } from 'express';
import { Controller, Post, Res, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
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

}
