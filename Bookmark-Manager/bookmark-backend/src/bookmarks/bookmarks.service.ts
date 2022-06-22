import { Injectable } from '@nestjs/common';

import { BookmarksRepository } from './bookmarks.repository';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { BookmarkDocument } from './models/bookmark.schema';

@Injectable()
export class BookmarksService {

    constructor(private readonly bookmarksRepository: BookmarksRepository) { }

    async createBookmark(createBookmarkData: CreateBookmarkInput, userId: string) {
        const bookmarkDocument = await this.bookmarksRepository.create({
            ...createBookmarkData,
            links: [],
            userId,
        });

        return this.toModel(bookmarkDocument);
    }

    async getBookmarks(userId: string) {

    }

    // will return same object with new _id
    private toModel(bookmarkDocument: BookmarkDocument) {
        return {
            _id: bookmarkDocument._id.toHexString(),
            ...bookmarkDocument,
        };
    }
}
