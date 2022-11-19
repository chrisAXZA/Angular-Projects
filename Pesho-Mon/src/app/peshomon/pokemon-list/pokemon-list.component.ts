import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Pokemon from '../pokemon';
import POKEMONS from '../pokemonList';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
    pokemonList: Pokemon[] = POKEMONS;
    pokemonSelected: Pokemon | undefined;

    constructor(private router: Router) { }

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
