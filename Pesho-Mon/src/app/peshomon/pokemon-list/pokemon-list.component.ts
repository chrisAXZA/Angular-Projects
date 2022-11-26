import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Pokemon from '../pokemon';
import PeshomonService from '../peshomon.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
    // peshomonList: Pokemon[];
    // peshomonSelected: Pokemon | undefined;
    peshomonList: Pokemon[];

    constructor(private router: Router, private peshomonService: PeshomonService) { }

    ngOnInit() {
        // this.peshomonList = this.peshomonService.getPeshomonList();

        this.peshomonService.getPeshomonList()
            .subscribe((peshomonList) => {
                this.peshomonList = peshomonList;
            });
    }

    selectPokemonDetail(pokemon: Pokemon) {
        this.router.navigate(['/pokemon', pokemon.id]);
    }

    // selectPokemon(pokemonId: string) {
    //     // const index: number = Number((event.target as HTMLInputElement).value);
    //     const index = Number(pokemonId);
    //     // const pokemon : Pokemon = this.pokemonList[index];
    //     const pokemon: Pokemon | undefined = this.pokemonList
    //         .find((pok) => pok.id === index);

    //     if (pokemon) {
    //         console.log(`Pokemon with the name "${pokemon.name}" has been clicked!`);
    //         this.pokemonSelected = pokemon;
    //     } else {
    //         console.log(`Pokemon with the id "${index}" does not exist!`);
    //         this.pokemonSelected = undefined;
    //     }
    // }
}
