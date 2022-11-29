import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';

@Component({
    selector: 'app-edit-peshomon',
    templateUrl: './edit-peshomon.component.html',
    styleUrls: [
    ],
})
export class EditPeshomonComponent implements OnInit {
    peshomon: Pokemon | undefined;
    noPeshomon: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private peshomonService: PeshomonService) { }

    ngOnInit(): void {
        const peshomonId: number = Number(this.route.snapshot.paramMap.get('id'));
        // const currentPeshomon: Pokemon | undefined = this.peshomonService.getPeshomonById(peshomonId);
        // let currentPeshomon: Pokemon | undefined;
        // if (!currentPeshomon) {
        //     alert(`Peshomon with id "${peshomonId}" does not exist!`);
        // }

        this.peshomonService.getPeshomonById(peshomonId)
            .subscribe((peshomon) => {
                this.peshomon = peshomon;

                if (this.peshomon === undefined) {
                    this.noPeshomon = true;
                }
            });
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }

}
