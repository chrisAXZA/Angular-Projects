import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    notification!: string | null;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.notificationService.notifications.subscribe((notification: string) => {
            this.notification = notification;

            setTimeout(() => {
                this.notification = null;
            }, 2500);
        });
    }

}
