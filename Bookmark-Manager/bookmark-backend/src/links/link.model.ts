import { Field, ObjectType } from "@nestjs/graphql";

// link-preview-js provides metadata on given link
@ObjectType()
export class Link {
    @Field()
    readonly title: string; // title of webpage

    @Field()
    readonly siteName: string; // name of webpage

    @Field()
    readonly url: string; // ulr of webpage

    @Field(() => [String])
    readonly images: string[]; // array of images
}