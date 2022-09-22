import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-edit-bookmark',
    templateUrl: './edit-bookmark.component.html',
    styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

    bookmark!: Bookmark;

    constructor(
        private bookmarkService: BookmarkService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            const bookmarkId = paramMap.get('id');
            this.bookmark = this.bookmarkService.getBookmark(bookmarkId!);
        });
    }

    onFormSubmit(form: NgForm) {
        const { name, url } = form.value;
        
        this.notificationService.show(`Bookmark ${this.bookmark.name} has been updated!`, 2000);

        this.bookmarkService.updateBookmark(this.bookmark.id, {
            name,
            url: new URL(url),
        });
    }

    delete() {
        this.bookmarkService.deleteBookmark(this.bookmark.id);
        this.notificationService.show(`${this.bookmark.name} has been deleted!`);
        this.router.navigate(['../'], { relativeTo: this.route }); // works with relative routes
        // this.router.navigateByUrl('/bookmarks/manage');
    }
}
