import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
    // pokemonList: Pokemon[] = POKEMONS;
    // peshomonList: Pokemon[];
    peshomon: Pokemon | undefined;
    noPeshomon: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private peshomonService: PeshomonService,
    ) { }

    ngOnInit(): void {
        // snapshot takes current url data, paramMap represents a table containing all of its
        // parameters contained in paramMap
        // this.peshomonList = this.peshomonService.getPeshomonList();
        // const currentPeshomon: Pokemon | undefined = this.peshomonList.find((p) => p.id === peshomonId);
        // let currentPeshomon: Pokemon | undefined;
        // if (!currentPeshomon) {
        //     alert(`Peshomon with id "${peshomonId}" does not exist!`);
        // }

        const peshomonId: number = Number(this.route.snapshot.paramMap.get('id'));
        this.peshomonService.getPeshomonById(peshomonId)
            .subscribe((peshomon) => {
                this.peshomon = peshomon;

                if (this.peshomon === undefined) {
                    this.noPeshomon = true;
                }
            });
    }

    editPeshomon(peshomon: Pokemon) {
        this.router.navigate([`/edit/pokemon`, peshomon.id]);
    }

    returnToPeshomonList() {
        this.router.navigate(['/pokemons']);
    }
}
