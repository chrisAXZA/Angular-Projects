import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';

import { User } from './models/user.model';
import { UserDocument } from './models/user.schema';
import { UsersRepository } from './users.repository';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository: UsersRepository) { }

    async createUser(createUserData: CreateUserInput) {
        await this.validateCreateUserData(createUserData);

        // when creating new user entity, user password needs to be stored in hashed format
        const userDocument = await this.usersRepository.create({
            ...createUserData,
            password: await bcrypt.hash(createUserData.password, 10),
        });

        return this.toModel(userDocument);
    }

    async getUser(getUserArgs: GetUserArgs) {
        const userDocument = await this.usersRepository.findOne(getUserArgs);

        return this.toModel(userDocument);
    }

    async validateUser(email: string, password: string): Promise<User> {
        const userDocument = await this.usersRepository.findOne({ email });
        const passwordIsValid = await bcrypt.compare(password, userDocument.password);

        if (!passwordIsValid) {
            throw new UnauthorizedException('Credentials are not valid!');
        }

        // returns the user without the password !!!
        return this.toModel(userDocument);
    }

    private async validateCreateUserData(createUserData: CreateUserInput) {
        try {
            await this.usersRepository.findOne({ email: createUserData.email })
            throw new UnprocessableEntityException('Email is already being used!');
        } catch (error) { }
    }

    private toModel(userDocument: UserDocument): User {
        return {
            _id: userDocument._id.toHexString(),
            email: userDocument.email,
            // password is not passed on by the service layer as a security measure
        };
    }
}
