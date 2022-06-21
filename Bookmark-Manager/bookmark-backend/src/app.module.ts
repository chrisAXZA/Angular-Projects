import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import * as Joi from 'joi';
// import Joi = require("joi");

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // declares ConfigModule as global so no need to 
      // redeclare in each module where being used
      
      // validationSchema: Joi.object({
      //   PORT: Joi.number().required,
      //   MONGODB_URI: Joi.string().required,
      //   JWT_EXPIRATION: Joi.string().required,
      //   JWT_SECRET: Joi.string().required,
      //   // when app starts up and no PORT or MONGODB_URI is
      //   // provided, Joi will inform the user with notification
      // }),
    }),
    // graphql schema file will be automatically generated, code-first approach + file in memory
    // driver: constitutes serverAdapter in this case Apollo
    GraphQLModule.forRoot<ApolloDriverConfig>({ autoSchemaFile: true, driver: ApolloDriver }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
