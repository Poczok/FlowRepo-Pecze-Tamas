import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
