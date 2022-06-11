import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Injectable()
export class UsersService {
    async createUser(createUserData: CreateUserInput){
        
    }
}
