import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import PeshomonService from './peshomon.service';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { AddPeshomonComponent } from './add-peshomon/add-peshomon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { EditPeshomonComponent } from './edit-peshomon/edit-peshomon.component';
import { PeshomonFormComponent } from './peshomon-form/peshomon-form.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SearchPeshomonComponent } from './search-peshomon/search-peshomon.component';
import { LoaderComponent } from './loader/loader.component';

const peshomonRoutes: Routes = [
    { path: 'add/pokemon', component: AddPeshomonComponent, },
    { path: 'edit/pokemon/:id', component: EditPeshomonComponent, },
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
        EditPeshomonComponent,
        AddPeshomonComponent,
        SearchPeshomonComponent,
        LoaderComponent,
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
