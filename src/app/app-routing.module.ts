import { MarroquineriaItemsComponent } from './marroquineria-items/marroquineria-items.component';
import { MarroquineriaAboutComponent } from './marroquineria-about/marroquineria-about.component';
import {MarroquineriaContactComponent} from './marroquineria-contact/marroquineria-contact.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: MarroquineriaItemsComponent
  },
  {
    path: 'marroquineria-about',
    component: MarroquineriaAboutComponent
  },
  {
    path: 'marroquineria-contact',
    component: MarroquineriaContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
