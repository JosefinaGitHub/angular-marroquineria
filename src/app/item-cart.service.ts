import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item-list/item';

/**
 *  Administra la lógica del carrito de compras
 *
**/

@Injectable({
  providedIn: 'root'
})

export class ItemCartService {
  private _cartList: Item [] = [];
  cartList: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(item: Item) {
    let art: Item = this._cartList.find((value1) => value1.name == item.name);
    if (item.stock > 0 ){
      if (!art) {
        this._cartList.push({... item});
      }
      else {
        item.quantity += item.quantity;
      }
    }
    this.cartList.next(this._cartList);  //equivalente al emitt de eventos
  }


}
