import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import PeshomonService from './peshomon.service';
import { LoaderComponent } from './loader/loader.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { AddPeshomonComponent } from './add-peshomon/add-peshomon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { EditPeshomonComponent } from './edit-peshomon/edit-peshomon.component';
import { PeshomonFormComponent } from './peshomon-form/peshomon-form.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SearchPeshomonComponent } from './search-peshomon/search-peshomon.component';

const peshomonRoutes: Routes = [
    { path: 'add/pokemon', component: AddPeshomonComponent, canActivate: [AuthGuard], },
    { path: 'edit/pokemon/:id', component: EditPeshomonComponent, canActivate: [AuthGuard], },
    { path: 'pokemons', component: PokemonListComponent, },
    { path: 'pokemon/:id', component: PokemonDetailComponent, canActivate: [AuthGuard], },
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
