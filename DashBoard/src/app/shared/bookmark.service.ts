import { Injectable } from '@angular/core';

import { Bookmark } from './bookmark.model';

@Injectable({
    providedIn: 'root'
})
export class BookmarkService {

    // bookmarks!: Bookmark[];
    bookmarks: Bookmark[] = [
        new Bookmark('Wikipedia', 'https://wikipedia.org'),
        new Bookmark('DuckDuckGo', 'https://duckduckgo.com'),
    ];

    constructor() { }

    getBookmarks() {
        return this.bookmarks;
    }

    getBookmark(id: string) {
        return this.bookmarks.find((book) => book.id === id);
    }

    addBookmark(bookmark: Bookmark) {
        this.bookmarks.push(bookmark);
    }

    updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
        const currentBookmark = this.getBookmark(id);

        if (currentBookmark) {
            Object.assign(currentBookmark, updatedFields);
        }
    }

    deleteBookmark(id: string) {
        const index = this.bookmarks.findIndex((book) => book.id === id);

        if (index !== -1) {
            this.bookmarks.splice(index, 1);
        }
    }
}
