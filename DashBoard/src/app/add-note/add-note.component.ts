import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-add-note',
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

    showValidationErrors!: boolean;

    constructor(
        private noteService: NoteService,
        private notificationService: NotificationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onFormSubmit(form: NgForm) {
        // console.log(form);
        if (form.invalid) {
            return this.showValidationErrors = true;
            // return alert('Title field is invalid!');
        }

        const note = new Note(form.value.title, form.value.content);
        this.noteService.addNote(note);
        this.notificationService.show('A new Note has been added!');
        this.router.navigateByUrl("/notes");

        return null;
        // alert("Form has been added!");
    }
}
