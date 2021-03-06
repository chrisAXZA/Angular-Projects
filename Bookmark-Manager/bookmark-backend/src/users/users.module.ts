import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './models/user.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [
    UsersResolver,
    UsersService,
    UsersRepository,
  ],
  exports: [UsersService],
})
export class UsersModule { }
