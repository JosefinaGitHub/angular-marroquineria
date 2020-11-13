import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../item-list/item';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
 /* @Input() item: Item; /* le pongo al input el tipo como parametro*/

  ngOnInit(): void {
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit( 'Se alcanzó el max');
    }
  }

  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
