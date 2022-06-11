import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/input/create-user-input.dto';

import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    @Mutation(() => User)
    async createUser(@Args('createUserData') createUserData: CreateUserInput){
        return this.userService.createUser();
    }
}
