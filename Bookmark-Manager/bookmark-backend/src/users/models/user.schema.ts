import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { AbstractDocument } from "src/database/abstract.schema";

// versionKey instructs MongoDB not to create version keys
@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);