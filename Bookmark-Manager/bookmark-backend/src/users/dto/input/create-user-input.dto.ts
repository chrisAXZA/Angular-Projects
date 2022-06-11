import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    @Field()
    @IsEmail()
    readonly email: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}