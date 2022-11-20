import { Injectable } from '@angular/core';

import Pokemon from './pokemon';
import POKEMONS from './pokemonList';

@Injectable()
export default class PeshomonService {

    getPeshomonById(peshomonId: number): Pokemon | undefined {

        return POKEMONS.find((pok) => pok.id === peshomonId);
    }

    getPeshomonList(): Pokemon[] {

        return POKEMONS;
    }

    getPeshomonTypeList(): string[] {
        return [
            'Combat',
            'Electric',
            'Fairy',
            'Fire',
            'Flying',
            'Insect',
            'Normal',
            'Plant',
            'Poison',
            'Psy',
            'Water',
        ];
    }
}
