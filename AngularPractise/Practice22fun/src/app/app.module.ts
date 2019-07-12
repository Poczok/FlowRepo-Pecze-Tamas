import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { ListComponent } from './list/list.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ContactComponent,
    HomeComponent,
    DataComponent,
    ListComponent,
    DisplayCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
