import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { Bookmark } from './bookmark.model';

@Injectable({
    providedIn: 'root'
})
export class BookmarkService implements OnDestroy {

    // bookmarks: Bookmark[] = [
    //     new Bookmark('Wikipedia', 'https://wikipedia.org'),
    //     new Bookmark('DuckDuckGo', 'https://duckduckgo.com'),
    //     new Bookmark('Mozilla', 'https://developer.mozilla.org'),
    // ];
    bookmarks: Bookmark[] = [];
    storageListenerSub!: Subscription;

    constructor() {
        this.loadState();

        this.storageListenerSub = fromEvent<StorageEvent>(window, 'storage')
            .subscribe((event: StorageEvent) => {
                console.log('Storage event in Bookmarks fired! >>>');

                if (event.key === 'bookmarks') {
                    this.loadState();
                }
            });
    }

    ngOnDestroy() {
        if (this.storageListenerSub) {
            this.storageListenerSub.unsubscribe();
        }
    }

    getBookmarks() {
        return this.bookmarks;
    }

    getBookmark(id: string): Bookmark {
        return this.bookmarks.find((book) => book.id === id)!;
    }

    addBookmark(bookmark: Bookmark) {
        this.bookmarks.push(bookmark);
        this.saveState();
    }

    updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
        const currentBookmark = this.getBookmark(id);

        if (currentBookmark) {
            Object.assign(currentBookmark, updatedFields);
            this.saveState();
        }
    }

    deleteBookmark(id: string) {
        const index = this.bookmarks.findIndex((book) => book.id === id);

        if (index !== -1) {
            this.bookmarks.splice(index, 1);
            this.saveState();
        }
    }

    saveState() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    }

    loadState() {
        try {
            const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks')!);

            this.bookmarks.length = 0;
            this.bookmarks.push(...bookmarksInStorage);
        } catch (error) {
            console.log(`Error occurred when retrieving bookmarks data from localStorage! >>> ${error}`);
        }
    }
}
