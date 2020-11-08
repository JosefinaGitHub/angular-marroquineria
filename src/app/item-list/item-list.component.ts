import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  item = {
    name : 'cartera clasica',
    type : 'cartera',
    price : 8000,
    stock : 5,
    img : 'assets/img/cartera.jpg',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
