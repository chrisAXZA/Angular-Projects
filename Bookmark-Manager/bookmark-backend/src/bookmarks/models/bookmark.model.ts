import { Field, ObjectType } from "@nestjs/graphql";

import { AbstractModel } from "src/common/abstract.model";

@ObjectType()
export class Bookmark extends AbstractModel {
    @Field()
    readonly name: string;

    // userId which created this bookmark (owner)
    @Field()
    readonly userId: string;

    // string array of the actual bookmarks, sort of folders
    // that can keep any number of sites
    @Field(() => [String])
    readonly links: string[]; // array of urls for each of these links
}