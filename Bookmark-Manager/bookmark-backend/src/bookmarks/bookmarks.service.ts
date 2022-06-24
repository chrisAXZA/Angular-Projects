import { Injectable } from '@nestjs/common';

import { BookmarkDocument } from './models/bookmark.schema';
import { BookmarksRepository } from './bookmarks.repository';
import { GetBookmarkArgs } from './dto/args/get-bookmark-args.dto';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { UpdateBookmarkInput } from './dto/update-bookmark-input.dto';

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
        const bookmarkDocuments = await this.bookmarksRepository.find({ userId });

        return bookmarkDocuments.map((bookmark) => this.toModel(bookmark));
    }

    async getBookmark(getBookmarkArgs: GetBookmarkArgs, userId: string) {
        const bookmarkDocument = await this.bookmarksRepository.findOne({
            ...getBookmarkArgs,
            userId,
        });

        return this.toModel(bookmarkDocument);
    }

    async updateBookmark(updateBookmarkData: UpdateBookmarkInput, userId: string) {
        
    }

    // will return same object with new _id
    private toModel(bookmarkDocument: BookmarkDocument) {
        return {
            _id: bookmarkDocument._id.toHexString(),
            ...bookmarkDocument,
        };
    }
}
