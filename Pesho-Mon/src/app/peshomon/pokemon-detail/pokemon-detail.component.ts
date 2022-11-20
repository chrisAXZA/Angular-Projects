import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
    // pokemonList: Pokemon[] = POKEMONS;
    // peshomonList: Pokemon[];
    peshomon: Pokemon;

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
        const peshomonId: number = Number(this.route.snapshot.paramMap.get('id'));
        const currentPeshomon: Pokemon | undefined = this.peshomonService.getPeshomonById(peshomonId);

        if (!currentPeshomon) {
            alert(`Peshomon with id "${peshomonId}" does not exist!`);
        }

        this.peshomon = currentPeshomon!;
    }

    returnToPehsomonList() {
        this.router.navigate(['/pokemons']);
    }
}
