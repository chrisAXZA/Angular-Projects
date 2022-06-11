import { Field, ObjectType } from "@nestjs/graphql";

import { AbstractModel } from "src/common/abstract.model";

@ObjectType()
export class User extends AbstractModel {
    @Field()
    readonly email: string;

    // password will not be exposed to graphql server
    // so that no queries can be passed unto password
}