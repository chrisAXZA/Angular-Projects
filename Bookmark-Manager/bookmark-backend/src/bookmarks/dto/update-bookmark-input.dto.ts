import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsString, IsUrl } from "class-validator";

@InputType()
export class UpdateBookmarkInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    _id: string // id of the bookmark that is being updated

    @Field(() => [String]) // array of strings needs to be specified explicitely
    @IsArray()
    @IsUrl(undefined, { each: true }) // validates that array contains URLs
    links: string[]; // array of links that are going to be updated
}