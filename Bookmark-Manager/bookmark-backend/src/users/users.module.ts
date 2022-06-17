import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersModule { }
