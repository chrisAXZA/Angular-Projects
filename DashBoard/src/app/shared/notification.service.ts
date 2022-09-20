import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    // Subject
    notification$: Subject<String> = new Subject();

    constructor() { }

    show() {

    }
}
