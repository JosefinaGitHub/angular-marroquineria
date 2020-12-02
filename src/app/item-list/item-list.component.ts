import { ItemCartService } from './../item-cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  items: Item [] = [
    {
      name : 'Cartera clásica',
      type : 'Cartera',
      price : 7500,
      stock : 5,
      img : 'assets/img/cartera.jpg',
      sale: false,
      quantity: 0,
    },
    {
      name : 'Billetera dos colores',
      type : 'Billeteras',
      price : 2600,
      stock : 10,
      img : 'assets/img/billetera.jpg',
      sale: false,
      quantity: 0,
    },
    {
      name : 'Cinto de cuero negro',
      type : 'Cintos',
      price : 1400,
      stock : 0,
      img : 'assets/img/cinto.jpg',
      sale: true,
      quantity: 0,
    },
    {
      name : 'Bandolera juvenil',
      type : 'Bandoleras',
      price : 4500,
      stock : 8,
      img : 'assets/img/bandolera.jpg',
      sale: false,
      quantity: 0,
    }
  ];

  constructor(private cart: ItemCartService) {
  }

  ngOnInit(): void {
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(item): void {
    this.cart.addToCart(item);
    item.stock -= item.quantity;
    item.quantity = 0;
  }



}
