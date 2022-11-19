import { Injectable } from '@angular/core';

import Pokemon from './pokemon';
import POKEMONS from './pokemonList';

@Injectable({
    providedIn: 'root'
})
export class PeshomonService {

    getPeshomonList(): Pokemon[] {

        return POKEMONS;
    }
}
