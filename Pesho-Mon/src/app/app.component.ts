import { AfterViewInit, Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { AuthService } from './auth.service';
import { SharedBackgroundService } from './shared-background.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('backgroundAnim', [
            transition(':leave', [
                animate(1500, style({
                    opacity: 0, // will fade out current image
                })),
            ]),
        ]),
    ],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    backgrounds: string[] = [
        '/assets/pesho1.png',
        '/assets/pesho2.png',
        '/assets/pesho3.png',
        '/assets/pesho4.png',
    ];
    backgroundImg: string = '/assets/pesho1.png';
    index: number = 1;
    isLoggedIn: boolean;
    changeBackground: Subscription;

    constructor(
        private router: Router,
        public authService: AuthService,
        private sharedBackgroundService: SharedBackgroundService,
    ) { }

    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn;
        this.changeBackground = this.sharedBackgroundService.changeBackgroundClicked()
            .subscribe(() => {
                console.log('background btn clicked');
                this.backgroundImg = this.backgrounds[this.index];

                this.index++;
                if (this.index === this.backgrounds.length) {
                    this.index = 0;
                }
            });

        // const storage = localStorage.getItem('isLoggedIn');

        // if (storage) {
        //     this.isLoggedIn = true;
        // } else {
        //     this.isLoggedIn = false;
        // }
    }

    ngAfterViewInit() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {
            edge: 'right',
            draggable: true,
            inDuration: 500,
            outDuration: 500,
        });

        const elemDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemDropdown, {
            coverTrigger: false,
        });
    }

    ngOnDestroy() {
        this.changeBackground.unsubscribe();
    }

    logout() {
        this.authService.logout();
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
