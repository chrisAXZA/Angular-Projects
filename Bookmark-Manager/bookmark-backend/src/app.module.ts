import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // graphql schema file will be automatically generated, code-first approach + file in memory
    // driver: constitutes serverAdapter in this case Apollo
    GraphQLModule.forRoot<ApolloDriverConfig>({ autoSchemaFile: true, driver: ApolloDriver }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
