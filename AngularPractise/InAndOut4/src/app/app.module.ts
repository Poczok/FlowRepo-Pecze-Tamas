import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KidComponent } from './kid/kid.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    KidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
