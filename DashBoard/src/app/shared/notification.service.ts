import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    // Subject
    private notification$: Subject<string> = new Subject();

    get notifications() {
        // since notifications$ is private outside code can access it
        // as an Observable but can not use its Subject-functionality
        // (ie call next()) and only subscribe to its values
        return this.notification$.asObservable();
    }

    constructor() { }

    show(text: string) {
        // whenever show method is being executed, the notification text will
        // be sent to all of its subscribers
        this.notification$.next(text);
    }
}
