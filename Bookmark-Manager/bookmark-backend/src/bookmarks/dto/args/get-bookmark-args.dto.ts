import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@ArgsType()
export class GetBookmarkArgs { // query will employ bookmark _id to retrieve relevant information
    @Field()
    @IsNotEmpty()
    @IsString()
    _id: string;
}