import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { Note } from './note.model';

@Injectable({
    providedIn: 'root'
})
export class NoteService implements OnDestroy {

    // notes!: Note[];
    // notes: Note[] = [
    //     new Note('Test Note1', 'Some random note content1'),
    //     new Note('Test Note2', 'Some random note content2'),
    // ];
    notes: Note[] = [];
    storageListenerSub!: Subscription;

    constructor() {
        this.loadState();

        // fromEvent listens to the StorageEvent on the current window, returns an Observable
        this.storageListenerSub = fromEvent<StorageEvent>(window, 'storage')
            .subscribe((event: StorageEvent) => {
                console.log(`Storage event in Notes fired! >>>`);
                // console.log(event);

                if (event.key === 'notes') {
                    this.loadState();
                }
            });

        // fromEvent(document, 'click').subscribe((x: MouseEvent) => console.log(`x: ${x.x}, y: ${x.y}`));
        // fromEvent(document, 'paste').subscribe((x: ClipboardEvent) => console.log(`Paste: ${x.clipboardData.getData('text')}`));
    }

    ngOnDestroy() {
        if (this.storageListenerSub) {
            this.storageListenerSub.unsubscribe();
        }
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
            // this.notes = notesInStorage || [];

            // if (!notesInStorage) {
            //     return;
            // }

            // clears the notes array while keeping the same reference
            this.notes.length = 0;
            this.notes.push(...notesInStorage);
        } catch (error) {
            console.log(`Error occurred when retrieving notes data from localStorage! >>> ${error}`);
        }
    }
}
