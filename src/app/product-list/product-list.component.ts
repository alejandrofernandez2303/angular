import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = 
  [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'super desayuno',
      image: 'assets/images/desayuno.jpg'
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 250,
      text: 'super desayuno',
      image: 'assets/images/desayuno1.jpg'
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 300,
      text: 'super desayuno',
      image: 'assets/images/desayuno2.jpg'
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 350,
      text: 'super desayuno',
      image: 'assets/images/desayuno3.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
