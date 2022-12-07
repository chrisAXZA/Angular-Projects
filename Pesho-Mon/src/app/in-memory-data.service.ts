import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import POKEMONS from './peshomon/pokemonList';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() { }

    // default createDb function
    // createDb(reqInfo: RequestInfo): {} | Observable<{}> | Promise<{}> { }

    // will seed peshomon data for simulated REST-API
    createDb() {
        // const pokemons = POKEMONS;
        
        let pokemons = POKEMONS;
        const storage = localStorage.getItem('peshomons');

        if (storage) {
            pokemons = JSON.parse(storage);
        } else {
            localStorage.setItem('peshomons', JSON.stringify(pokemons));
        }

        return { pokemons };
    }
}
