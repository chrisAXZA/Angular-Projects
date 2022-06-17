import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository: UsersRepository) { }

    async createUser(createUserData: CreateUserInput) {
        await this.validateCreateUserData(createUserData);

        // password needs to be stored in hashed format

    }

    async getUser(getUserArgs: GetUserArgs) {

    }

    private async validateCreateUserData(createUserData: CreateUserInput) {
        try {
            await this.usersRepository.findOne({ email: createUserData.email })
            throw new UnprocessableEntityException('Email is already being used!');
        } catch (error) { }
    }
}
