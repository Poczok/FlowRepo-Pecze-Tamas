import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KrumplisComponent } from './krumplis/krumplis.component';
import { HomeComponent } from './home/home.component';
import { PapagajComponent } from './papagaj/papagaj.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'krumpli' , component: KrumplisComponent},
  {path: 'papagaj', component: PapagajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
