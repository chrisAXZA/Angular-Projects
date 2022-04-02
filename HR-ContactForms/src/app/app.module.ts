import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
