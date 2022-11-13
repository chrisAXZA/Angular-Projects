import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from '../pokemon';
import { POKEMONS } from '../pokemonList';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
    pokemonList: Pokemon[] = POKEMONS;
    pokemon: Pokemon;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // snapshot takes current url data, paramMap represents a table containing all of its
        // parameters contained in paramMap
        const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'));
        const currentPokemon: Pokemon | undefined = this.pokemonList.find((p) => p.id === pokemonId);

        if (!currentPokemon) {
            alert(`Peshomon with id "${pokemonId}" does not exist!`);
        }

        this.pokemon = currentPokemon!;
    }

    return() {

    }

}
