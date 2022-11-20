import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import PeshomonService from './peshomon.service';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PeshomonFormComponent } from './peshomon-form/peshomon-form.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const peshomonRoutes: Routes = [
    { path: 'pokemons', component: PokemonListComponent, },
    { path: 'pokemon/:id', component: PokemonDetailComponent, },
];

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PeshomonFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(peshomonRoutes),
    ],
    providers: [
        PeshomonService,
    ],
})
export class PeshomonModule { }
