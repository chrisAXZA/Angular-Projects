import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    // notes!: Note[];
    notes: Note[] = [
        new Note('Test Note1', 'Some random note content1'),
        new Note('Test Note2', 'Some random note content2'),
    ];

    constructor() { }

    getNotes() {
        return this.notes;
    }

    getNote(id: string) : Note {
        return this.notes.find((n) => n.id === id)!;
    }

    addNote(note: Note) {
        this.notes.push(note);
    }

    updateNote(id: string, updatedFields: Partial<Note>) {
        const note = this.getNote(id);
        Object.assign(note, updatedFields);
    }

    deleteNote(id: string) {
        const noteIndex = this.notes.findIndex((n) => n.id === id);

        if (noteIndex === -1) {
            return;
        }

        this.notes.splice(noteIndex, 1);
    }
}
