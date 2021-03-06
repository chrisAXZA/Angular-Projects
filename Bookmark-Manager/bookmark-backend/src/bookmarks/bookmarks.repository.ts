import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, Logger } from "@nestjs/common";

import { Bookmark } from "./models/bookmark.model";
import { BookmarkDocument } from "./models/bookmark.schema";
import { AbstractRepository } from "src/database/abstract.repository";

@Injectable()
export class BookmarksRepository extends AbstractRepository<BookmarkDocument>{
    protected readonly logger = new Logger(BookmarksRepository.name);

    constructor(@InjectModel(Bookmark.name) bookmarkModel: Model<BookmarkDocument>) {
        super(bookmarkModel);
    }
}