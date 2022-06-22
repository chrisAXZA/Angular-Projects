import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-bookmark',
    templateUrl: './create-bookmark.component.html',
    styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

    bookmarkName = new FormControl('', [Validators.required]);

    constructor() { }

    ngOnInit(): void {
    }

    getBookmarkNameError() {
        if (this.bookmarkName.hasError('required')) {
            return 'You must enter a value!';
        }

        return '';
    }

    createBookmark() {

    }
}
