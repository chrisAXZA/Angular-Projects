import { Controller, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './guards/local-auth.guard';

// app will use HttpOnly cookies as authentication mechanism
// jwt will be set inside a HttpOnly cookie instead of storing in localStorage
// This is the most secure way to store jwt
@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard) // triggers guard whenever this route is run => localAuthGuard will run LocalStrategy
    @Post('login')
    // gets current User of ongoing request, allows access to userObject from ongoing request
    async login(

    )
}
