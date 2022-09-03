import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
    selector: 'app-add-bookmark',
    templateUrl: './add-bookmark.component.html',
    styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onFormSubmit(form: Form) {
        console.log(form);
    }
}
