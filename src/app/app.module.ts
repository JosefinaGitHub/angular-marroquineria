import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { MarroquineriaAboutComponent } from './marroquineria-about/marroquineria-about.component';
import { MarroquineriaItemsComponent } from './marroquineria-items/marroquineria-items.component';
import { MarroquineriaCartComponent } from './marroquineria-cart/marroquineria-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { MarroquineriaContactComponent } from './marroquineria-contact/marroquineria-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MarroquineriaAboutComponent,
    MarroquineriaItemsComponent,
    MarroquineriaCartComponent,
    InputIntegerComponent,
    MarroquineriaContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
