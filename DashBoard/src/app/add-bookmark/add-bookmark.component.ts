import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-add-bookmark',
    templateUrl: './add-bookmark.component.html',
    styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

    constructor(
        private bookmarkService: BookmarkService,
        private notificationService: NotificationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onFormSubmit(form: NgForm) {
        const { name, url } = form.value;
        const newBookmark = new Bookmark(name, url);
        this.bookmarkService.addBookmark(newBookmark);

        this.router.navigateByUrl('/bookmarks');
        this.notificationService.show('A new Bookmark has been added!');
    }
}
