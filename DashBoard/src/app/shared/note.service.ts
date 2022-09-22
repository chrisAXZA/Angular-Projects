import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    // notes!: Note[];
    // notes: Note[] = [
    //     new Note('Test Note1', 'Some random note content1'),
    //     new Note('Test Note2', 'Some random note content2'),
    // ];
    notes: Note[] = [];

    constructor() {
        this.loadState();
    }

    getNotes() {
        return this.notes;
    }

    getNote(id: string): Note {
        return this.notes.find((n) => n.id === id)!;
    }

    addNote(note: Note) {
        this.notes.push(note);
        this.saveState();
    }

    updateNote(id: string, updatedFields: Partial<Note>) {
        const note = this.getNote(id);
        Object.assign(note, updatedFields);
        this.saveState();
    }

    deleteNote(id: string) {
        const noteIndex = this.notes.findIndex((n) => n.id === id);

        if (noteIndex === -1) {
            return;
        }

        this.notes.splice(noteIndex, 1);
        this.saveState();
    }

    // saveState will save notes array as JSON in localStorage
    saveState() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    // data in localStorage will be parsed into an Object
    loadState() {
        try {
            const notesInStorage = JSON.parse(localStorage.getItem('notes')!);
            this.notes = notesInStorage || [];
        } catch (error) {
            console.log(`Error occurred when retrieving data from localStorage! >>> ${error}`);
        }
    }
}
