import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AbstractModel{
    // MongoID field
    @Field()
    readonly _id: string;
}