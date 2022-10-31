import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1> Welcome to {{pokemonList[0]}}! </h1>`,
})
export class AppComponent implements OnInit {
    pokemonList = ['Bulbar', 'Salamander', 'Sheller'];

    ngOnInit() {
        console.table(this.pokemonList);
        this.selectPokemon(this.pokemonList[0]);
    }

    selectPokemon(pokemonName: string) {
        console.log(`Pokemon with the name "${pokemonName}" has been clicked!`);

    }
}
