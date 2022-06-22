import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    // @Mutation allows to create a user
    @Mutation(() => User)
    async createUser(@Args('createUserData') createUserData: CreateUserInput){
        return this.userService.createUser(createUserData);
    }

    // getUser controller route is now protected by GqlAuthGuard which will require
    // a valid jwt cookie in order to be executed
    @UseGuards(GqlAuthGuard)
    // @Query returns user, name: 'user' enforces query to be called
    // user instead of default getUser
    @Query(() => User, {name: 'user'})
    async getUser(@Args() getUserArgs: GetUserArgs){
        return this.userService.getUser(getUserArgs);
    }
}
