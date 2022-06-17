import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, Logger } from "@nestjs/common";

import { User } from "./models/user.model";
import { UserDocument } from "./models/user.schema";
import { AbstractRepository } from "src/database/abstract.repository";

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument>{
    // functions allow to create or find user in DB
    protected readonly logger = new Logger(UsersRepository.name);

    constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
        super(userModel);
    }

}