import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    animations: [
        trigger('notificationAnim', [
            transition(':enter', [ // when entering the UI
                style({
                    opacity: 0,
                    transform: 'translateY(15px)',
                }),
                // animate('300ms ease-out'),
                animate(300),
            ]),
            transition(':leave', [
                animate(300, style({
                    opacity: 0,
                    transform: 'translateY(15px)',
                    // transform: 'scale(0.85)' -> shrink effect
                })),
            ]),
        ]),
    ],
})
export class NotificationComponent implements OnInit {

    notification!: string | null;

    timeout: any;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.notificationService.notifications.subscribe((notification: string) => {
            this.notification = notification;

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.notification = null;
            }, 2000);
        });
    }

}
