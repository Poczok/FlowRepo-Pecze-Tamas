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
import { DataService } from './'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ContactComponent,
    HomeComponent,
    DataComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
