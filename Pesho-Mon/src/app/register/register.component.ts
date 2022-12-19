import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import Trainer from '../trainer';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [
    ]
})
export class RegisterComponent implements OnInit {
    username: string;
    password: string;
    email: string;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    cancelChanges(event: Event) {
        event.preventDefault();
        this.router.navigate(['/pokemons']);
    }

    onSubmit() {
        const storage = localStorage.getItem('trainers');
        console.log(storage);
        console.log(this.password, this.username, this.email);

        const trainer: Trainer = {
            username: this.username,
            password: this.password,
            email: this.email,
        };

        if (storage) {
            const trainers: Trainer[] = JSON.parse(storage);
            trainers.push(trainer);
            localStorage.setItem('trainers', JSON.stringify(trainers));
        } else {
            const trainers: Trainer[] = [];
            trainers.push(trainer);
            localStorage.setItem('trainers', JSON.stringify(trainers));
        }

        this.authService.login(this.username, this.password)
            .subscribe((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                    this.router.navigate(['/pokemons']);
                } else {
                    this.username = '';
                    this.password = '';
                    this.email = '';
                    this.router.navigate(['/register']);
                }
            });

        // if (this.isAddForm) {
        //     const peshomon = this.peshomonService.findPeshomonByName(this.peshomon.name);

        //     if (peshomon) {
        //         return alert(`Peshomon with given name "${this.peshomon.name}" already exists !`);
        //     }

        //     // back-end will create new id value and pass on to this.router
        //     this.peshomonService.addPeshomon(this.peshomon)
        //         .subscribe((peshomon: Pokemon) => this.router.navigate(['/pokemon', peshomon.id]));
        // } else {
        //     this.peshomonService.updatePeshomon(this.peshomon)
        //         .subscribe(() => this.router.navigate(['/pokemon', this.peshomon.id]));
        // }
    }
}
