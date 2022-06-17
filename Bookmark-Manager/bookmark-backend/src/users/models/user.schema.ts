import { Schema } from "@nestjs/mongoose";

// versionKey instructs MongoDB not to create version keys
@Schema({ versionKey: false })
export class UserDocument {

}