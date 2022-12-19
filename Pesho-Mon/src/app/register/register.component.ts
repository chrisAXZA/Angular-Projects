import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    cancelChanges(event: Event) {
        event.preventDefault();
        this.router.navigate(['/pokemons']);
    }

    onSubmit() {
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
