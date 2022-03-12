import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// import routing-Functionality into app-module directly
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';  

// ng g c home
// const routes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path: '', redirectTo: '/home', pathMatch: 'full'} // defailt route to HomeComponent when no route path is provided
// ];
// 

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
