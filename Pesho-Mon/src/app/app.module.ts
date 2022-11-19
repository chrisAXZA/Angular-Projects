import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PeshomonModule } from './peshomon/peshomon.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { BorderCardDirective } from './peshomon/border-card.directive';
// import { PokemonTypeColorPipe } from './peshomon/pokemon-type-color.pipe';
// import { PokemonListComponent } from './peshomon/pokemon-list/pokemon-list.component';
// import { PokemonDetailComponent } from './peshomon/pokemon-detail/pokemon-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        // BorderCardDirective,
        // PokemonTypeColorPipe,
        // PokemonListComponent,
        // PokemonDetailComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        PeshomonModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
