import { IsUrl } from "class-validator";
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetLinksArgs {
    @Field(() => [String])
    @IsUrl(undefined, { each: true }) // validation occurs for each member of string []
    urls: string[];
}