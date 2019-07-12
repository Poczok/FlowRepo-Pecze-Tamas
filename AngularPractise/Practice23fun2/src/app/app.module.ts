import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KrumplisComponent } from './krumplis/krumplis.component';
import { HomeComponent } from './home/home.component';
import { PapagajComponent } from './papagaj/papagaj.component';
import { KrumpliertekekComponent } from './krumplis/krumpliertekek/krumpliertekek.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KrumplisComponent,
    HomeComponent,
    PapagajComponent,
    KrumpliertekekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
