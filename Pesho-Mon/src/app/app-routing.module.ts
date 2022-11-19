import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { PokemonListComponent } from './peshomon/pokemon-list/pokemon-list.component';
// import { PokemonDetailComponent } from './peshomon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
    // { path: 'pokemons', component: PokemonListComponent },
    // { path: 'pokemon/:id', component: PokemonDetailComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full', },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
