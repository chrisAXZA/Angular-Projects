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
        const pokemons = POKEMONS;
        return { pokemons };
    }
}
