import { ArgsType, Field } from "@nestjs/graphql";
import { IsUrl } from "class-validator";

@ArgsType()
export class GetLinksArgs {
    @Field(() => [String])
    @IsUrl(undefined, { each: true }) // validation occurs for each member of string []
    urls: string[];
}