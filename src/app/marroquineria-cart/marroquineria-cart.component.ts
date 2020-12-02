import { ItemCartService } from './../item-cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item-list/item';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-marroquineria-cart',
  templateUrl: './marroquineria-cart.component.html',
  styleUrls: ['./marroquineria-cart.component.scss']
})
export class MarroquineriaCartComponent implements OnInit {

  cartList$: Observable<Item[]>;

  constructor(private cart: ItemCartService) {

    //* Pone observable para que sepamos a qué se refiere, sería la varíable que vamos a mirar
   // cart.cartList.subscribe( observable  => this.cartList = observable);
   // se reemplaza por un pipe en el html
    this.cartList$ = cart.cartList.asObservable();
  }


  ngOnInit(): void {
  }

}
